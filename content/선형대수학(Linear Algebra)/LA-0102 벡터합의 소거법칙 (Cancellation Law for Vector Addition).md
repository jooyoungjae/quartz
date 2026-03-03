---
title: LA-0102 벡터합의 소거법칙 (Cancellation Law for Vector Addition)
aliases:
  - LA-0102
  - 벡터합의 소거법칙
  - Cancellation Law for Vector Addition
tags:
  - 선형대수학
date: 2026-02-25 17:24
updated: 2026-02-27 16:31
draft: false
---

# LA-0102 벡터합의 소거법칙 (Cancellation Law for Vector Addition)

## 정리 (Theorem)

> [!NOTE] LA-0102 벡터합의 소거법칙 (Cancellation Law for Vector Addition)
> **[[LA-0101 벡터공간 (Vector Space)|벡터공간]] $\mathbb{V}$의 세 벡터 $x,y, z$에 대하여, $x+z=y+z$이면 $x=y$이다.**
> 
> $$
> (\forall x, y, z \in \mathbb{V})\ x+z=y+z \to x=y
> $$

## 증명 (Proof)

> [!abstract] Proof
>
> **전제**
> - (*) : $x+z=y+z$
> - [[LA-0101 벡터공간 (Vector Space)|벡터공간]]의 조건 (2), (3), (4) 를 이용하자.
> 
> **전개**
>   1. 벡터공간의 조건 (4)에 의해 $z+v=\mathbf{0}$인 역벡터 $v \in \mathbb{V}$가 존재한다.
>   2. 다음이 성립한다.
> $$
> \begin{align*}
> x&\stackrel{(3)}{=}x+\mathbf{0}\stackrel{(4)}{=}x+(z+v)\stackrel{(2)}{=}(x+z)+v\\ &\stackrel{\text{(*)}}{=}(y+z)+v\stackrel{(2)}{=}y+(z+v)\stackrel{(4)}{=}y+\mathbf{0}\stackrel{(3)}{=}y 
> \end{align*}
> $$
> 
> **결론($\therefore$)**
> - 따라서 $(\forall x, y, z \in \mathbb{V})\ x+z=y+z \to x=y\  \blacksquare$


---

## 따름정리 (Corollary)


### 따름정리 1

> [!NOTE] LA-0102-C1 영벡터의 유일성 (Corollary 1)
> **벡터공간의 조건 (3)을 만족하는 벡터 $\mathbf{0}$은 유일하다.**
>


### 따름정리 1의 증명

> [!abstract] Proof of Corollary 1
> 1. 영벡터 $\mathbf{0}$가 유일하지 않다고 가정하자.
> 2. 서로 다른 두 벡터 $\mathbf{0}_{1}$과$\mathbf{0}_{2}$ 이 임의의 벡터 $x$에 대하여, $x+\mathbf{0}_{1}=x$ 이고 $x+\mathbf{0}_{2}=x$ 이다.
> 3. $x+\mathbf{0}_{1}=x=x+\mathbf{0}_{2}$ 이므로 소거법칙에 의하여 $\mathbf{0}_{1} = \mathbf{0}_{2}$ 이다.
> 4. 이는 $\mathbf{0}_{1}$과 $\mathbf{0}_{2}$이 서로 다름에 모순이다.
> 
> 따라서 영벡터 $\mathbf{0}$은 유일하다.


<br>



### 따름정리 2

> [!NOTE] LA-0102-C2 덧셈에 대한 역벡터의 유일성 (Corollary 2)
> **[[LA-0101 벡터공간 (Vector Space)|벡터공간]]의 조건 (4)를 만족하는 벡터 $y$는 유일하다.**

### 따름정리 2의 증명

> [!abstract] Proof of Corollary 2
> 1. [[LA-0101 벡터공간 (Vector Space)|벡터공간]]의 조건 (4)를 만족하는 벡터 $y$가 유일하지 않다고 가정하자.
> 2. $y_{1}\neq y_{2}$인 어떤 두 벡터가 임의의 벡터 $x$에 대하여 $x+y_{1}=\mathbf{0}$, $x+y_{2}=\mathbf{0}$을 만족한다.
> 3. 소거법칙에 의하여 $y_{1}=y_{2}$이고 가정에 의해 $y_{1}\neq y_{2}$이므로 모순이다.
> 
> 따라서 덧셈에 대한 역벡터 $y$는 유일하다.


---

## 코멘트


- 따름 정리 1의 직접 증명 방법 : $\mathbf{0}_1 = \mathbf{0}_1 + \mathbf{0}_2 = \mathbf{0}_2$
- 따름 정리 2의 직접 증명 방법 : $y_1 = y_1 + \mathbf{0} = y_1 + (x + y_2) = (y_1 + x) + y_2 = \mathbf{0} + y_2 = y_2$


---

## 참고문헌


- 교재명 : 스티븐 H. 프리드버그, 아놀드 J. 인셀, 로렌스 E. 스펜스.『프리드버그 선형대수학』(한빛수학교재연구소).
- 페이지 : p.26