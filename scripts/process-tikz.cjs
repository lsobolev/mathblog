// scripts/process-tikz.js
// Usage: BUILD_DIR=public node scripts/process-tikz.js
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');
const os = require('os');

const BUILD_DIR = process.env.BUILD_DIR || 'public';
const OUT_DIR = path.join(BUILD_DIR, 'static', 'figures');
const WRAPPER_PATH = path.join(process.cwd(), 'tikz-wrapper.tex');

if (!fs.existsSync(WRAPPER_PATH)) {
  console.error('Missing tikz-wrapper.tex in repo root. Create it before running this script.');
  process.exit(2);
}
const WRAPPER = fs.readFileSync(WRAPPER_PATH, 'utf8');

if (!fs.existsSync(BUILD_DIR)) {
  console.error(`Build directory "${BUILD_DIR}" not found. Run your quartz build first.`);
  process.exit(2);
}
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function hash(s) {
  return crypto.createHash('sha1').update(s).digest('hex').slice(0, 12);
}

function run(cmd, opts = {}) {
  try {
    execSync(cmd, { stdio: 'inherit', ...opts });
  } catch (err) {
    throw new Error(`Command failed: ${cmd}\n${err.message}`);
  }
}

function renderTikzToSvg(tikzCode, svgPath) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'tikz-'));
  const texPath = path.join(tmpDir, 'figure.tex');
  const pdfPath = path.join(tmpDir, 'figure.pdf');

  const texContent = WRAPPER.replace('% TIKZ_CONTENT_PLACEHOLDER', tikzCode);
  fs.writeFileSync(texPath, texContent, 'utf8');

  try {
    // Use pdflatex by default. Set env USE_XELATEX=1 to use xelatex instead.
    if (process.env.USE_XELATEX === '1') {
      run(`xelatex -interaction=nonstopmode -halt-on-error -output-directory ${tmpDir} ${texPath}`);
    } else {
      run(`pdflatex -interaction=nonstopmode -halt-on-error -output-directory ${tmpDir} ${texPath}`);
    }
    // Convert PDF to SVG using dvisvgm
    // --no-fonts converts text to paths which avoids missing font issues
    run(`dvisvgm --no-fonts --pdf ${pdfPath} -o ${svgPath}`);
  } finally {
    // cleanup temporary directory
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch (e) {}
  }
}

function processHtmlFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  const tikzRegex = /```tikz\s*\n([\s\S]*?)\n```/g;
  let match;
  let changed = false;
  const replacements = [];

  while ((match = tikzRegex.exec(html)) !== null) {
    const tikzCode = match[1].trim();
    const id = hash(tikzCode);
    const svgName = `tikz-${id}.svg`;
    const svgPath = path.join(OUT_DIR, svgName);

    if (!fs.existsSync(svgPath)) {
      console.log(`Rendering ${svgName}`);
      try {
        renderTikzToSvg(tikzCode, svgPath);
      } catch (err) {
        console.error(`Failed to render tikz block in ${filePath}: ${err.message}`);
        // Replace with a visible fallback pre block and continue
        const fallback = `<pre class="tikz-fallback">TikZ render failed. Code:\n${escapeHtml(tikzCode)}</pre>`;
        replacements.push({ start: match.index, end: match.index + match[0].length, html: fallback });
        changed = true;
        continue;
      }
    } else {
      console.log(`Using cached ${svgName}`);
    }

    const imgTag = `<div class="quartz-tikz-container"><img src="/static/figures/${svgName}" alt="TikZ figure"></div>`;
    replacements.push({ start: match.index, end: match.index + match[0].length, html: imgTag });
    changed = true;
  }

  if (!changed) return;

  // apply replacements from end to start to preserve indices
  replacements.sort((a, b) => b.start - a.start);
  for (const r of replacements) {
    html = html.slice(0, r.start) + r.html + html.slice(r.end);
  }
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated ${filePath}`);
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkDir(p);
    else if (e.isFile() && p.endsWith('.html')) processHtmlFile(p);
  }
}

walkDir(BUILD_DIR);
console.log('TikZ processing complete.');

