This is a conversation I had in discord:

Lucas: Localisation is just so... Confusing. If $M$ is an $A$-module (and $S \subseteq A$ is a multiplicative subset), then I understand that $S^{-1}M$ is naturally viewed as an $S^{-1}A$-module. But what about the canonical map $M \to S^{-1}M$?? Naturally it seems like I should view it as an $A$-module homomorphism... But but.. $S^{-1}M$ is naturally viewed as an $S^{-1}A$-module??!

Things just get even more annoying when you only look at localisation in the ring setting. Since then S needs to change when doing various things. But for modules, it doesn't because the ring never changes, just the module. Did anyone else get the same feeling?? It makes universal properties feel very... Well.. What? Things don't lie in the same category...! Anyway... Needed to say this.

I really dislike this care for detail. For rings, you need to be careful about S. For modules you don't, but the 'fee' so to speak is that you need to be careful what ring the module is *over*

Ryan: Yes!!! I felt this very much. I want to do more exercises. Because I feel awkward about some of this localisation stuff. Modules feels so… flexible. Rings feel super rigid. It’s kind of one of my motivations for studying modules. They like make rings less rigid kinda.

Lucas: They're certainly better categorically.. We can talk about exact sequences afterall; actually this is what makes me so uncomfortable about this. I know that localisation is _exact_ for modules, so it preserves finite limits and colimits. But I can't say that for rings. I know that localisation is left adjoint to restriction. So it actually preserves _all_ colimits. But! I spent time to write out the universal properties. This just feels *AWFUL*.

BPaul: i wonder if there's some sort of universal property of the localisation functor itself, from A-mod to S^-1A-mod, in like the category of additive functors or something.

Lucas: 1st one: For any $A$-module homomorphism $\alpha: M \to N$ such that elements of $S$ are invertible in $N$, there is a unique $A$-module homomorphism $S^{-1}M \to N$ such that 
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd} M && N \ \ {S^{-1}M} \arrow["\alpha", from=1-1, to=1-3] \arrow["\iota"', from=1-1, to=3-1] \arrow["{\exist !}"', dashed, from=3-1, to=1-3] \end{tikzcd}
\end{document}
```
2nd one: For any $S^{-1}A$-module $N$, and $A$-module homomorphism $\alpha: M \to N$, there is a unique $S^{-1}A$-module homomorphism $S^{-1}M \to N$ such that 
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd} M && N \ \ {S^{-1}M} \arrow["\alpha", from=1-1, to=1-3] \arrow["\iota"', from=1-1, to=3-1] \arrow["{\exist!}"', dashed, from=3-1, to=1-3] \end{tikzcd}
\end{document}
```
Oh oops. I forgot an invertibility condition on N (I think).. Close enough. WAIT. Holy cow. I don't need an invertibility condition since $N$ is an $S^{-1}A$-module! They're invertible _by definition_ HAHAH. Sick... You know something else that is unsettling to me? Is that the universal property doesn't take into account how the map is defined. It entirely depends on the _codomain_













#Blog 