---
title: TikZ Integration Test
description: Verifying the dynamic vector graphics rendering engine.
tags:
  - math
  - test
---

If the integration is working correctly, the code block below will instantly compile into a sharp, responsive SVG vector diagram instead of showing raw code text.

```tikz
\begin{tikzpicture}[node distance=2cm, auto]
  \node (A) {$A$};
  \node (B) [right of=A] {$B$};
  \node (C) [below of=A] {$C$};
  \node (D) [below of=B] {$D$};
  
  \draw[->] (A) to node {$f$} (B);
  \draw[->] (A) to node [swap] {$g$} (C);
  \draw[->] (B) to node {$h$} (D);
  \draw[->] (C) to node [swap] {$k$} (D);
\end{tikzpicture}
