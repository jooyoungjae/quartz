---
title: LA-0101 벡터 공간 (Vector Space)
aliases:
  - LA-0101
  - 벡터 공간
  - Vector Space
tags:
  - 선형대수학
date: 2026-02-25 16:43
updated: 2026-02-25 19:16
draft: false
---

# LA-0101 벡터공간 (Vector Space)

## 정의 (definition)

> [!NOTE] LA-0101 벡터공간 (Vector Space)
> 체 $\mathbf{F}$에서의 벡터공간 $\mathbb{V}$는 합(sum)과 스칼라 곱(scalar multiplication) 연산에 대해 닫혀 있으며, 다음 8가지 조건을 만족하는 집합이다. (단, $1$은 $\mathbf{F}$의 곱셈에 대한 항등원)
> 
> $$
> \begin{align}
> &(\forall x, y \in \mathbb{V} ) \ x+y=y+x \\ 
> &(\forall x, y, z \in \mathbb{V}) \  (x+y)+z=x+(y+z) \\
> &(\exists \mathbf{0} \in \mathbb{V}),\ (\forall x\in \mathbb{V}) \ x+\mathbf{0} = x \\ 
> &(\forall x \in \mathbb{V}),\ (\exists y \in \mathbb{V})\ x+y=\mathbf{0} \\
> &(\forall x \in \mathbb{V})\  1x=x \\
> &(\forall a, b \in \mathbf{F} \text{, } x \in \mathbb{V}) \ (ab)x=a(bx) \\
> &(\forall a \in \mathbf{F} \text{, } x, y \in \mathbb{V}) \  a(x+y)=ax+ay \\
> &(\forall a, b \in \mathbf{F} \text{, } x \in \mathbb{V}) \ (a+b)x=ax+bx &&
> \end{align}
> $$
> 


---

## 코멘트

- 체 $\mathbf{F}$의 원소를 스칼라(scalar) 라하고 벡터공간 $\mathbb{V}$의 원소를 벡터(vector)라 한다.

---

## 참고문헌
- 교재명 : 스티븐 H. 프리드버그, 아놀드 J. 인셀, 로렌스 E. 스펜스.『프리드버그 선형대수학』(한빛수학교재연구소).
- 페이지 : p.21