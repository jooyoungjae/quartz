---
title: LA-0104 부분공간의 조건 (Subspace Test)
aliases:
  - LA-0104
  - 부분공간의 조건
  - Subspace Test
tags:
  - 선형대수학
date: 2026-03-03 18:02
updated: 2026-03-03 18:48
draft: false
---

# LA-0104 부분공간의 조건 (Subspace Test)

## 정리 (Theorem)

> [!NOTE] LA-0104 부분공간의 조건 (Subspace Test)
> $\mathbf{F}$-벡터 공간 $\mathbb{V}$와 부분집합 $\mathbb{W}$를 생각하자. $\mathbb{W}$가 $\mathbb{V}$에서 정의한 합과 스칼라 곱을 가진 $\mathbf{F}$-벡터 공간이면 $\mathbb{W}$가 $\mathbb{V}$의 부분공간이라고 한다. **그리고 $\mathbb{W}$가 $\mathbb{V}$의 부분공간이기 위한 필요충분조건은 다음 세 가지 조건을 만족하는 것이다.**
> 
> $$
> \begin{align}
> \mathbf{0}\in \mathbb{W} \\
> (\forall x,\ y \in \mathbb{W})\ x+y \in \mathbb{W} \\
> (\forall c \in \mathbf{F},\ x \in \mathbb{W})\ cx \in\mathbb{W}
> \end{align}
> $$

## 증명 (Proof)

> [!abstract] Proof
>
> **순방향 전개($\to$)**
> 1. $\mathbb{W}$가 $\mathbb{V}$의 부분공간이라고 가정하자.
> 2. $\mathbb{W}$의 영벡터를 $e$라고 하자.
> 3. $x \in \mathbb{W}$에 대하여 $x+e=x$가 성립한다.
> 4. 한편 $x \in \mathbb{V}$이므로 $x+\mathbf{0}=x$도 성립한다.
> 5. [[LA-0102 벡터합의 소거법칙 (Cancellation Law for Vector Addition)#정리 (Theorem)|벡터합의 소거법칙]]에 의하여 $e=\mathbf{0}$이므로 $(1)$이 성립한다.
> 6. $\mathbb{W}$는 $\mathbb{V}$의 합과 스칼라 곱이 정의된 공간이므로 $(2)$와 $(3)$이 성립한다.
> 
> 
> **역방향 전개($\leftarrow$)**
> 1. 세 조건 $(1), (2), (3)$이 성립한다고 가정하자. 
> 2. $\mathbb{W}$의 원소는 모두 $\mathbb{V}$의 벡터이므로 [[LA-0101 벡터공간 (Vector Space)#정의 (definition)|벡터공간의 조건]] (1), (2), (5), (6), (7), (8)이 성립한다.
> 3. 조건$(2)$와 $(3)$에 의하여 $\mathbb{W}$는 합과 스칼라 곱에 대하여 닫혀있다.
> 4. 조건$(1)$에 의하여 $\mathbb{W}$에 영벡터가 존재한다.
> 5. 조건$(3)$과 [[LA-0103 스칼라곱의 기본 성질 (Basic Properties of Scalar Multiplication)#정리 (Theorem)|스칼라 곱의 기본 성질 (3)]]에 의하여 $\mathbb{W}$에 덧셈에 대한 역벡터도 존재한다.
> 6. 따라서 $\mathbb{W}$는 벡터공간이다.
>   
> **결론($\therefore$)**
> - 따라서 $\mathbb{W}$가 $\mathbb{V}$의 부분공간이기 위한 필요충분조건은 위의 세 가지 조건을 만족하는 것이다.


---

## 코멘트

- $\mathbb{W}$가 벡터공간 $\mathbb{V}$의 부분집합이라는 것 만으로도 좋은 성질들을 꽤 물려받는다. 하지만 벡터공간이 되기엔 충분치 않다. 그 모자란 성질 4가지는 각각 벡터공간의 조건 (3), (4)와 덧셈과 스칼라 곱에 대하여 닫혀있음이다. 그런데 해당 정리는 조건 (4)인 덧셈에 대한 역벡터의 존재성의 경우에는 스칼라 곱에 대하여 닫혀있다는 것으로 그 성질을 갖기에 충분하다는 것을 보여준다.
- $\mathbb{W}$가 공집합이 아니면 조건$(1)$은 자동으로 만족한다. 왜냐하면 $\mathbb{W}$에 속하는 벡터 $x$에 대하여 [[LA-0103 스칼라곱의 기본 성질 (Basic Properties of Scalar Multiplication)#정리 (Theorem)|스칼라곱의 기본 성질]]에 의해 $0x=\mathbf{0}$이므로 조건$(3)$에 의하여 영벡터가 $\mathbb{W}$에 속하기 때문이다.

---

## 참고문헌 
- 교재명 : 스티븐 H. 프리드버그, 아놀드 J. 인셀, 로렌스 E. 스펜스.『프리드버그 선형대수학』(한빛수학교재연구소).
- 페이지 : p.32