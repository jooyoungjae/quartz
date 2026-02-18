---
title: AN-0102 축소구간 성질 (Nested Interval Property)
aliases:
  - AN-0102
  - 축소구간 성질
  - Nested Interval Property
tags:
  - 해석학
date: 2026-02-17 19:22
updated: 2026-02-18 19:54
draft: false
---

# AN-0102 축소구간 성질 (Nested Interval Property)

## 정리 (Theorem)

> [!NOTE] AN-0102 축소구간 성질 (Nested Interval Property)
> **닫힌 구간열 $I_{n}=[a_{n}, b_{n}]=\{ x\in \mathbb{R}|a_{n}\leq x\leq b_{n} \}$을 생각하자(단, $n\in \mathbb{N}$). 모든 자연수 n에 대하여 $I_{n}\supseteq I_{n+1}$일 때[^1] 다음이 성립한다.**
> 
> $$
> \bigcap_{n=1}^{\infty}I_{n}\neq \varnothing
> $$
[^1]: $I_{1}\supseteq I_{2}\supseteq I_{3}\supseteq I_{4}\supseteq \cdots$
## 증명 (Proof)

> [!abstract] Proof
>
> **전제**
> 1. $I_{n}=[a_{n}, b_{n}]=\{ x\in \mathbb{R}|a_{n}\leq x\leq b_{n} \}$
> 2. $(\forall n\in \mathbb{N}) \ I_{n}\supseteq I_{n+1}$
> 
> **전개**
> 1. $A=\{ a_{n}\ |\ n \in \mathbb{N}\}$이라 하자.
> 2. 전제 2에 의하여 다음이 성립하며 $A$는 위로 유계이다.
> $$a_{1}\leq a_{2}\leq\dots\leq a_{n}\leq\dots\leq b_{n}\leq\dots\leq b_{2}\leq b_{1}$$
> 3. 완비성 공리에 의하여 $A$의 상한이 존재한다. $x=\text{sup }A$라 하자.
> 4. 임의의 자연수 $n$ 에 대하여 $b_{n}$은 $A$의 상계이다. 
> 5. [[AN-0101 상한의 두 가지 정의 (Two Definitions of Supremum)|상한의 최소 상계로서의 정의]]에 의하여 $a_{n} \leq x\leq b_{n}$이다.($x$가 상계임에 왼쪽 부등식이 성립하고, 최소 상계임에 오른쪽 부등식이 성립함)
> 6. 이는 임의의 자연수 $n$에 대하여 $x\in I_{n}$임을 의미한다.
>   
> **결론($\therefore$)**
>  $$\bigcap_{n=1}^{\infty}I_{n}\neq \varnothing\ \ \ \ \blacksquare$$

---

## 코멘트

- 축소구간 성질이 성립하기 위해서는 구간이 닫힌 구간이어야 한다. 열린 구간에 대해서는 일반적으로 성립하지는 않는다. 예시: $I_n = (0, \frac{1}{n})$

---

## 참고문헌
- 교재명 : 스티븐 애벗. 『해석학 첫걸음』.(한빛수학교재연구소).
- 페이지 : p.40