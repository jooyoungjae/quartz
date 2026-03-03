---
title: LA-0106 부분공간의 합집합 (Union of Subspaces)
aliases:
  - LA-0106
  - 부분공간의 합집합
  - Union of Subspaces
tags:
  - 선형대수학
date: 2026-03-03 19:20
updated: 2026-03-03 21:26
draft: false
---

# LA-0106 부분공간의 합집합 (Union of Subspaces)

## 정리 (Theorem)

> [!NOTE] LA-0106 부분공간의 합집합 (Union of Subspaces)
> **벡터공간 $\mathbb{V}$의 부분공간 $\mathbb{W}_{1}$과 $\mathbb{W}_{2}$에 대하여 $\mathbb{W}_{1}\cup \mathbb{W}_{2}$가 $\mathbb{V}$의 부분공간이 되기 위한 필요충분 조건은 $\mathbb{W}_{1}\subseteq \mathbb{W}_{2}$ 또는 $\mathbb{W}_{2}\subseteq \mathbb{W}_{1}$이다.**
> 

## 증명 (Proof)

> [!abstract] Proof
>
> **역방향 전개($\leftarrow$)**
> 1. $\mathbb{W}_{1}$와 $\mathbb{W}_{2}$ 중 어느 하나가 다른 하나를 포함한다고 가정하자
> 2. 이 둘의 합집합이 곧 $\mathbb{W}_{1}$또는 $\mathbb{W}_{2}$이므로 $\mathbb{V}$의 부분공간이다.
> 
> **순방향 전개($\to$)**
> 1. $\mathbb{W}_{1}\cup \mathbb{W}_{2}$가 $\mathbb{V}$의 부분공간이라고 가정하자.
> 2. 귀류법 전개를 위하여 결론의 부정을 구해보자. 
> $$
> \begin{align*}
> \neg[\mathbb{W}_{1}\subseteq \mathbb{W}_{2}\ &\lor \ \mathbb{W}_{2}\subseteq \mathbb{W}_{1}] \\
> \iff\neg\big[[(\forall x)\  x \in \mathbb{W}_{1}\to x \in \mathbb{W}_{2}]\ &\lor\ [(\forall y)\ y \in \mathbb{W}_{2} \to y \in \mathbb{W}_{1}]\big] \\
> \iff [(\exists x)\  x \in \mathbb{W}_{1}\ \land\ x \notin \mathbb{W}_{2}]\ &\land \ [(\exists y)\  y \in \mathbb{W}_{2}\ \land\ y \notin \mathbb{W}_{1}]
> \end{align*}
> $$
>
> 3. 구하고자 하는 명제의 부정인 이것을 가정하자.
> 4. 두 부분공간 중 각각 한 곳에만 속하는 벡터(각각 $x, y$)가 존재한다. 
> 5. 물론 $x$와$y$ 모두 $\mathbb{W}_{1}\cup\mathbb{W}_{2}$에 속한다.
> 6. 따라서 $x+y$가 $\mathbb{W}_{1}\cup \mathbb{W}_{2}$에 속한다. 즉, $\mathbb{W}_{1}$또는 $\mathbb{W}_{2}$에 속한다.
> 7. 만약 $\mathbb{W}_{1}$에 속한다면 $(x+y)-x=y\in \mathbb{W}_{1}$ 이므로 $y \notin \mathbb{W}_{1}$임에 모순이고
> 8. $\mathbb{W}_{2}$에 속한다면 $(x+y)-y=x \in \mathbb{W}_{2}$ 이므로 $x \notin \mathbb{W}_{2}$임에 모순이다.
> 9. 따라서 따라서 귀류법 전개를 위하여 부정했던 결론 $[\mathbb{W}_{1}\subseteq \mathbb{W}_{2}\ \lor \ \mathbb{W}_{2}\subseteq \mathbb{W}_{1}]$이 참이다.
>
>   
> **결론($\therefore$)**
> - $\mathbb{W}_{1}\cup \mathbb{W}_{2}$가 $\mathbb{V}$의 부분공간이 되기 위한 필요충분 조건은 $\mathbb{W}_{1}\subseteq \mathbb{W}_{2}$ 또는 $\mathbb{W}_{2}\subseteq \mathbb{W}_{1}$이다.


---

## 코멘트

- 기하학적으로 생각해보면 이 정리가 왜 당연한지 확 와닿는다. 3차원 공간($\mathbb{R}^3$)에서 원점을 지나는 평면 $\mathbb{W}_1$와 평면에 포함되지 않는 다른 평면 또는 직선$\mathbb{W}_2$를 합쳐놓은 합집합을 상상해 보자. 이 집합에서 $\mathbb{W}_{1}$에 있는 벡터랑 $\mathbb{W}_{2}$에 있는 벡터를 골라서 더하면 어떻게 될까? 평행사변형 법칙 때문에 덧셈 결과는 합집합 밖의 텅 빈 공간으로 훅 튀어나가 버린다. 즉 덧셈에 대해 안 닫혀있다. 따라서 두 공간을 합쳤을 때 부분공간으로 살아남으려면, 애초에 두 공간이 하나로 포개져 있어야(포함 관계여야) 한다는 뜻이다.

![[geogebra-export.png]]