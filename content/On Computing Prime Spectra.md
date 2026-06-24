Perhaps like many, when I was learning calculus in highschool, I always found the game of computing integrals interesting. It felt like a puzzle of some sort. Like you need to find a nice trick, or have a creative approach -- even when the problem at hand is 'simple looking'. Fast forward a year or two, I learnt about prime ideals in algebra class. This computational spirit seemed to continue on, and I noticed myself asking how I can go about computing prime ideals in a given ring?

It didn't take long at all to realise that this is *hard*. Even for simple looking rings it can be a challenge. Of course, there are some outliers. For instance, if $B = 0$ is the zero ring, then $\Spec B = \varnothing$ simply because there are no proper ideals -- so there isn't anything to look for! Or if $k$ is a field, then (even could be by definition!) $\Spec k = \{(0)\}$ is a singleton. Things get a little trickier if we look at rings with slightly more ideals. For instance, we could consider something like the integers $\mathbb{Z}$. By the division algorithm, one often deduces that $\mathbb{Z}$ is a PID, and moreover the prime ideals are seen to be of the form $(p)$ where $p$ is a prime number. So, $$\Spec \mathbb{Z} = \{(0), (2), (3), (5, (7), (11), (13), ...)\}.$$Perhaps by generalising our argument for $\mathbb{Z}$, we can even get any PID $R$. In a similar spirit, for a PID $R$, we have $$\Spec R = \{(0)\} \cup \{(p): p \text{ irreducible}\}.$$This gives us many many more examples. For instance, an important one is $\Spec k[x]$ for a field $k$. But things get quickly out of hand when I get out of the comfort zone of what (at least for me) we're used to from algebra class. For instance, what about $\Spec \mathbb{Z}[x]$, or more generally, $\Spec R[x]$ for a PID $R$? It doesn't look much more complicated than the innocent looking example $\Spec k[x]$, but it's not so obvious. Simply because $R[x]$ may not be a PID, and so the ideals are more complicated.

I did ultimately quickly give up with this ambition in my algebra class; though I was successful in looking at things like $\Spec \mathbb{C}[x,y]$, and quotients thereof using the correspondence theorem (this gave alot of excitement in of itself since it made the correspondence theorem click for me). Though, learning algebraic geometry gave me more tools and as of recently, I realised that they can be used to make more progress on an old ambition of mine.

One important milestone one reaches in learning algebraic geometry is that $\Spec$ is functorial. More specifically, I mean that if we have a ring homomorphism $f: A \to B$, then we get an induced map on the spectra $$f^*: \Spec B \to \Spec A, \qquad \mathfrak{p} \longmapsto f^{-1}(\mathfrak{p})$$(be careful here; $\Spec$ is *contravariant!*). This already can get us quite far; it suggests a powerful approach to get a handle on rings we don't know how to work with, by leveraging on ones we do know how to work with. **Explore this more**.

Just last semester of university, I was apart of a reading group on commutative algebra. And it was at the time of presenting on localisation that I had a realisation. Namely, whenever we have a ring homomorphism $f: A \to B$ and a multiplicatively closed subset $S \subseteq A$, we get a commutative diagram 
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd} {f(S)^{-1}B} && B \\ \\ {S^{-1}A} && A \arrow["{\phi_B}"', from=1-3, to=1-1] \arrow["{S^{-1}f}", from=3-1, to=1-1] \arrow["f"', from=3-3, to=1-3] \arrow["{\phi_A}", from=3-3, to=3-1] \end{tikzcd}
\end{document}
```
Since $\Spec$ is functorial, we can convert this entire diagram to another commutative diagram, 
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd} {\Spec f(S)^{-1}B} && {\Spec B} \\ \\ {\Spec S^{-1}A} && {\Spec A} \arrow[from=1-1, to=1-3] \arrow[from=1-1, to=3-1] \arrow[from=1-3, to=3-3] \arrow[from=3-1, to=3-3] \end{tikzcd}
\end{document}
```
The key observation here is that this is a pullback diagram of sets. So specifically, $$\Spec f(S)^{-1}B = (f^*)^{-1}(\Spec S^{-1}A).$$So... How does this help? Well, let's return to our example earlier. Suppose that $R$ is a PID, and for simplicity, lets say that $K$ is its field of fractions. Then localising $R_{(0)} \cong K$ and $(R[x])_{(0)} \cong K[x]$ and so we have a commutative diagram, 




