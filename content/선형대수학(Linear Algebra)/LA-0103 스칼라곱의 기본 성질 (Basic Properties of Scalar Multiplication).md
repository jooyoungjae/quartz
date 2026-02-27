---
title: LA-0103 스칼라곱의 기본 성질 (Basic Properties of Scalar Multiplication)
aliases:
  - LA-0103
  - 스칼라곱의 기본 성질
  - Basic Properties of Scalar Multiplication
tags:
  - 선형대수학
date: 2026-02-25 18:25
updated: 2026-02-27 14:57
draft: false
---

# LA-0103 스칼라곱의 기본 성질 (Basic Properties of Scalar Multiplication)

## 정리 (Theorem)

> [!NOTE] LA-0103 스칼라곱의 기본 성질 (Basic Properties of Scalar Multiplication)
> 체 $\mathbf{F}$의 임의의 스칼라 $a$와 벡터공간 $\mathbb{V}$의 임의의 벡터 $x$에 대하여 다음 세 가지 성질이 성립한다. (단, $-x$는 벡터 $x$의 덧셈에 대한 역벡터)
> 
> $$
> \begin{align} &0x = \mathbf{0} \\ &a\mathbf{0} = \mathbf{0} \\ &(-a)x = -(ax) = a(-x) \end{align} 
> $$

## 증명 (Proof)

> [!abstract] 성질 (1) 증명
>
> **전제**
> - [[LA-0101 벡터공간 (Vector Space)|벡터공간]]의 조건 (3), (8)
> - (*) : $0+0=0$
> 
> **전개**
> 1. 
> $$
> \begin{align*} 
> 0x + 0x \stackrel{\text{(8)}}{=} (0+0)x \stackrel{\text{(*)}}{=} 0x \stackrel{\text{(3)}}{=} 0x + \mathbf{0} 
> \end{align*}
> $$
> 2. [[LA-0102 벡터합의 소거법칙 (Cancellation Law for Vector Addition)#정리 (Theorem)|벡터합의 소거법칙]] 에 의하여 다음을 얻는다
> 
> **결론($\therefore$)**
> $$0x = \mathbf{0}\ \blacksquare$$


> [!abstract] 성질 (2) 증명
>
> **전제**
> - [[LA-0101 벡터공간 (Vector Space)|벡터공간]]의 조건 (3), (7)
> 
> **전개**
> 1. 
> $$
> \begin{align*} 
> a\mathbf{0} + a\mathbf{0} \stackrel{\text{(7)}}{=} a(\mathbf{0}+\mathbf{0}) \stackrel{\text{(3)}}{=} a\mathbf{0} \stackrel{\text{(3)}}{=} a\mathbf{0} + \mathbf{0} 
> \end{align*}
> $$
> 2. [[LA-0102 벡터합의 소거법칙 (Cancellation Law for Vector Addition)#정리 (Theorem)|벡터합의 소거법칙]] 에 의하여 다음을 얻는다
> 
> **결론($\therefore$)**
> $$a\mathbf{0} = \mathbf{0}\ \blacksquare$$

> [!abstract] 성질 (3) 증명
>
> **전제**
> - [[LA-0101 벡터공간 (Vector Space)|벡터공간]]의 조건 (3), (4), (7), (8)
> - (a): 따름정리 1
> - (b): 따름정리 2
> - [[LA-0102 벡터합의 소거법칙 (Cancellation Law for Vector Addition)#따름정리 2|덧셈에 대한 역벡터의 유일성(LA-0102-C2)]]
> - (\*): 임의의 스칼라 $a$에 대하여 $a+(-a)=0$
> - (\*\*): 체 $\mathbf{F}$의 덧셈의 항등원에 대하여 $0+0=0$
> 
> **전개**
> 1. 
> $$
> \begin{align*} 
> ax + (-a)x \stackrel{\text{(8)}}{=} (a+(-a))x\stackrel{\text{(*)}}{=} 0x \stackrel{\text{(a)}}{=}\mathbf{0} 
> \end{align*}
> $$
> 2. 따라서 $(-a)x$는 $ax$의 역벡터이다.
> 3. 
> $$
> \begin{align*} ax + a(-x) \stackrel{\text{(7)}}{=} a(x+(-x))\stackrel{\text{(4)}}{=} a\mathbf{0} \stackrel{\text{(b)}}{=}\mathbf{0} 
> \end{align*}
> $$
> 4. 따라서 $a(-x)$는 $ax$의 역벡터이다.
> 5. [[LA-0102 벡터합의 소거법칙 (Cancellation Law for Vector Addition)#따름정리 2|덧셈에 대한 역벡터의 유일성(LA-0102-C2)]]에 의하여 다음의 세 값이 모두 같다.
> 
> **결론($\therefore$)**
> $$(-a)x = -(ax) = a(-x)\ \blacksquare$$

---

## 코멘트

- 주의할 점 : 이 문서에서 쓰인 0과 a는 스칼라이고 $x, \mathbf{0}$은 벡터이다.

---

## 참고문헌
- 교재명 : 스티븐 H. 프리드버그, 아놀드 J. 인셀, 로렌스 E. 스펜스.『프리드버그 선형대수학』(한빛수학교재연구소).
- 페이지 : p.27