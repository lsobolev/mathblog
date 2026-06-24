---
title: TikZ Integration Test
description: Verifying the dynamic vector graphics rendering engine.
tags:
  - math
  - test
---

If the integration is working correctly, the code block below will instantly compile into a sharp, responsive SVG vector diagram instead of showing raw code text.

 ```tikz
  \usepackage{tikz-cd} 
  \begin{document} 
  \begin{tikzcd} G &&& {G_{ab}} \\ \\ &&& A \arrow["\eta", from=1-1, to=1-4] \arrow["{\forall \phi}"', from=1-1, to=3-4] \arrow["{\exists ! \overline{\phi}}", from=1-4, to=3-4] \end{tikzcd}
  \end{document} 
  ```


