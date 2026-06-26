I've been thinking about localisation alot nowadays. And throughout all this, I've had three fairly distinct thoughts about it that I'd like to share. By the very nature of how this topic is usually taught, I've always thought about localisation as just a generalisation of the field of fractions that I had learnt in my first algebra class in my undergrad. This is an absolute amazing perspective to have -- don't get me wrong! But I had come across a new perspective. It was like a fresh new light; which as one would expect, made me excited.

Before we get involved in my new perspective, I'd like to quickly recap how localisation is typically taught. The setup is that we have a ring $A$, and some subset $S \subseteq A$. The idea is that we want to divide; that is, we want to introduce fractions in $A$. Here $S$ acts as the set of allowable denominators in our fractions. To ensure that we can add fractions in the usual way (to make the localised ring $S^{-1}A$, a ring), we better make sure that $S$ is closed under multiplication. That is, if $a, b \in S$ then $ab \in S$. As a nice bonus, we often also make sure that $1 \in S$; this to ensure that we can have elements $a \in A$ 'living inside' our localised ring. We should be careful however. The map $A \to S^{-1}A$ taking $a$ to $a/1$ is not always injective (for instance, if $A$ has zero divisors); so it's not necessarily going to be true that $A$ 'lives inside' $S^{-1}A$ in the literal sense we're used to.

Localisation viewed in this way generalises the field of fractions construction typically taught in early algebra classes. So we are naturally lead to think that localisation is a generalised way to introduce *units* in $A$. This is how I've been thinking about this for a really long time. The thing is, by forcing certain elements to be units, we're really killing off prime ideals these elements were apart of. Since afterall, prime ideals need to be proper, and so they can't contain units. So really, localisation *has control over the prime ideals* in our ring. This is the new perspective I'm hoping to master! It's this perspective that I believe will give us control over *spaces* that we encounter in algebraic geometry. Namely, the affine schemes $\text{Spec}(A)$.

I learnt alot of my algebraic geometry from Hartshorne, and various readings I've had on the internet; trying to write up my honours thesis. So I unfortunately didn't have the luxury to learn insights that I later found in for instance Vakil's rising sea book. But the idea that I slowly came to gather is that the ring $A$ in $\text{Spec}(A)$ act as our 'ring of functions' in our space; or sometimes we call it *the coordinate ring*. It's a weird mind shift; since if $A = \mathbb{Z}$, we normally think of these as numbers, but we should try to force our mind to instead think of these as *functions*. By how functions work, we need inputs. These inputs are elements of $\text{Spec}(A)$; these are our points. How we *evaluate* a point $\mathfrak{p} \in \text{Spec}(A)$ in our function $f \in A$ is that we send $f$ through the composite map 
$$
A \twoheadrightarrow A/\mathfrak{p} \hookrightarrow \text{Frac}(A/\mathfrak{p}).
$$
The point I'm trying to make, is that localisation allows us to control what points we can 'plug into our function'. This seems analogous to the act of restricting the domain of usual functions. I'd like to explore this some more in the future, since it's a new light for me, but for now I want to continue on. Perhaps this intuition is something that will be improved as I learn and do more algebraic geometry.

The second distinct thought I had recently comes from a recent encounter (over pizza!) with my supervisor Masoud Kamgarpour. I was asked (paraphrased of course..!), 'what does localisation mean geometrically?'. Not phrased toward an algebraic geometry student, or really any algebra student, but pitched to a differential topology student say (lets suppose that this ideal student in mind doesn't know any commutative algebra). Well... I thought, for schemes, localisation is really just the act of 'zooming in'. 

I'd like to explain why I thought this. For simplicity, lets consider an affine scheme $\text{Spec}(A)$. In this setting, a point is just a prime ideal $\mathfrak{p} \in \text{Spec}(A)$. Since distinguished opens form a basis for the Zariski topology, we can find some $f \in A$ such that $\mathfrak{p} \in \mathsf{D}_A(f) \subseteq \text{Spec}(A)$. But! What is $\mathsf{D}_A(f)$? Well traditionally, 
$$
\mathsf{D}_A(f) := \{\mathfrak{p} \in \text{Spec}(A) : f \notin \mathfrak{p}\}.
$$
One typically shows in the form of an exercise that $\mathsf{D}_A(f) \cong \text{Spec}(A_f)$; normally to show that these distinguished opens are really affines. But the point I'm trying to make here is that we've localised our coordinate ring $A$, and geometrically this seems to correspond to zooming in at $\mathfrak{p}$ to a 'smaller piece' of $\text{Spec}(A)$. Of course, we can do this more generally with any scheme $X$ since it's ultimately covered by these things. 

Although this is satisfying to me, it doesn't really answer our original question. Since this is still very much algebraic. Fortunately, differential topology is very close in spirit to what we do in algebraic geometry -- things are done locally. Typically, the setting is that we want to do calculus on a manifold. We would do this by zooming into a neighbourhood of a point for which we can identify this neighbourhood with an open subset of $\mathbb{R}^n$. We can then do calculus before patching everything back together. But doing things locally shouldn't depend on what neighbourhood we pick; we should, in principle, be able to look 'even closer' than a given choice. 

To stay grounded, in algebra, we can formalise this by taking a direct limit over all such neighbourhoods. But what are we taking a direct limit of? Localisation typically takes place in a ring -- so we should really be searching for a ring. A natural place to look is the ring of smooth functions on the manifold, 
$$
\mathcal{C}^\infty(M) := \{f: M \to \mathbb{R} : f\text{ is smooth}\}
$$
where the ring operations are done pointwise. In fact, given any open set $U \subseteq M$, we have a similar construction $\mathcal{C}^\infty(U)$ of smooth functions on $U$. The point is, given a point $p \in M$, we can now form our desired direct limit to get the ring of *germs* of smooth functions at $p$, 
$$
\mathcal{C}_p^\infty := \varinjlim \,\mathcal{C}^\infty(U).
$$
Maybe to be more fitting to our original assumptions of our target student, we can describe our germs as simply pairs modulo an equivalence relation, 
$$
\mathcal{C}^\infty_p = \{(U, f) : U \subseteq M \text{ is an open neighbourhood of }p \text{ and }f \in \mathcal{C}^\infty(U)\}/{\sim}
$$where two pairs are equivalent $(U,f) \sim (V, g)$ if there is an open neighbourhood $W \subseteq U \cap V$ of $p$ such that $f|_W = g|_W$. This seems closer to our idea of zooming in at a point. But, I claim, this is more than just a mere analogy to localisation. Why? Well consider the set of functions for which vanish at $p$, 
$$
\mathfrak{m}_p := \{f \in \mathcal{C}^\infty(M) : f(p) = 0\}.
$$
It turns out, that $\mathfrak{m}_p$ is well suited enough to be called a *maximal ideal* of $\mathcal{C}^\infty(M)$. But not only that, if we now fast track a few years, and this differential topology student had learnt what localisation is formally, then we can say that 
$$
\mathcal{C}^\infty(M)_{\mathfrak{m}_p} \cong \mathcal{C}^\infty_p
$$
are isomorphic! So really, this is *exactly* a kind of localisation. 

The third distinct thought I had is really a question. How can I determine whether two localisations of a given ring are the same? If I have a ring $A$, and two multiplicatively closed subsets $S$ and $T$, what makes their localisations $S^{-1}A$ and $T^{-1}A$ isomorphic? Perhaps weirdly, this question came about from topology. If we have a (path connected) topological space $X$ then for each point $x \in X$, the inclusion functor 
$$
\pi_1(X, x) \longrightarrow \Pi_1(X)
$$
is in fact an equivalence of categories (here $\Pi_1(X)$ is the *fundamental groupoid* of $X$). Since the space is path connected, there is a path between every point. But every path in $\Pi_1(X)$ is viewed up to homotopy (and so is invertible; it's a groupoid afterall)! So all these extra points are sorta redundant; they're just clouding up the true essence here. Namely the fundamental group $\pi_1(X, x)$. In other words, the fundamental group feels like a cleaner way to describe the category (formally, this is said by saying that $\pi_1(X,x)$ is the *skeleton* of $\Pi_1(X)$).

I wanted something similar for localisation. Some choices of $S$ give rise to clutter (like the cloudy feeling I had in topology). For instance, if we take $A = \mathbb{Z}$ and $S = \{1, 2, 4, 8, ...\}$. Then the localisation $\mathbb{Z}_2$ can also be described by the more cluttered choice $T = \{\pm 1, \pm 2, \pm 4, \pm 8, ...\}$; both multiplicatively closed subsets give the same localisation. But oddly enough, in this setting, I think the clutter is better. What I've actually done to get from $S$ to $T$, is I simply added in all the elements that actually become units when I invert everything in $S$. Notice that by the mere want of inverting $2 \in \mathbb{Z}$, I accidentally also inverted $4, 8, -4, -8$ and so on. The reason I think it's better to add these to the set $S$ is because of the following realisation:

For a multiplicatively closed subset $S \subseteq A$, let's write $\widehat{S}$ for the 'completed' set of adding in all the elements which become units in the corresponding localisation $S^{-1}A$. Then we certainly have $S^{-1}A \cong \widehat{S}^{-1}A$; the localisation doesn't change. But! The key realisation, is that if we have another multiplicatively closed subset $T \subseteq A$ with its completed set $\widehat{T}$, then 
$$
\widehat{S}^{-1}A \cong \widehat{T}^{-1}A
$$
as $A$-algebras if and only if $\widehat{S} = \widehat{T}$. In other words, the cluttered choice $\widehat{(\bullet)}$ is like our 'cleaner' choice (our skeleton!) of multiplicative subset.



#Blog