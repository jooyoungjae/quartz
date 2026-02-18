---
title: AN-0101 상한의 두 가지 정의 (Two Definitions of Supremum)
aliases:
  - AN-0101
  - 상한의 두 가지 정의
  - Two Definitions of Supremum
tags:
  - 해석학
date: 2026-02-17 17:26
updated: 2026-02-18 19:54
draft: false
---

# AN-0101 상한의 두 가지 정의 (Two Definitions of Supremum)

## 정리 (Theorem)

> [!NOTE] AN-0101 상한의 두 가지 정의 (Two Definitions of Supremum)
> **상한(Supremum)을 정의하는 방식은 크게 두 가지가 있고 이들은 동치이다.**
> 실수 $\text{sup }A$는 집합 $A\subseteq \mathbb{R}$의 상계(Upper Bound)이고,
> 
> - (첫 번째 방법): 임의의 $A$의 상계 $b$에 대하여 $\text{sup }A \leq b$이다.
> - (두 번째 방법): 임의의 $\epsilon>0$에 대하여 $\text{sup }A-\epsilon<a$를 만족하는 원소 $a\in A$가 존재한다.  
> $$
> (\forall b\text{는 } A\text{의 상계})\  \text{sup }A \leq b 
> \iff  (\forall \epsilon >0), (\exists a \in A)\  \text{sup }A-\epsilon<a
> $$

## 증명 (Proof)

> [!abstract] Proof
>
> 필요충분 조건의 순방향과 역방향 명제가 각각 참임을 증명하자.
> 
> 
> **순방향 전개($\implies$)**
> 1. $\text{sup }A$보다 작은 실수가 $A$의 상계라고 하면 (조건 명제의)가정에 모순이다.
> 2. 따라서 모든 양수 $\epsilon$에 대해 $\text{sup }A-\epsilon$은 $A$의 상계가 아니다.
> 3. 상계가 아님은 $\text{sup }A-\epsilon<a$인 $a\in A$가 존재한다는 것과 동치이다.
> 4. 따라서 순방향 조건 명제가 성립한다.
>
> **역방향 전개($\impliedby$)**
> 1. $A$의 상계 이고 $\text{sup }A$보다 작은 실수 $b$가 존재한다고 가정하고 모순을 찾자.
> 2. $\epsilon=\text{sup }A-b$이라 하면, $\epsilon>0$이다.
> 3. 조건 명제의 가정에 따라서, $\text{sup }A-\epsilon$는 $A$의 상계가 아니다.
> 4. 이는 모순이다. ($\text{sup }A-\epsilon=b$가 상계이면서 상계가 아니므로)
> 5. 따라서 역방향 조건 명제도 성립한다.
> 
> **결론($\therefore$)**
> $$
> (\forall b\text{는 } A\text{의 상계})\  \text{sup }A \leq b 
> \iff  (\forall \epsilon >0), (\exists a \in A)\  \text{sup }A-\epsilon<a
> $$


---

## 코멘트

- 교재에 따라 상한을 최소 상계(첫 번째 방법)로 정의하기도 하고 해석학적(두 번째 방법)으로 정의하기도 한다.
- 역방향 증명에 귀류법을 사용하였다.
- 어떠한 수가 상한/하한임을 증명 할 때 두 방식 모두 유용하게 쓰인다.

---

## 참고문헌
- 교재명 : 스티븐 애벗. 『해석학 첫걸음』.(한빛수학교재연구소).
- 페이지 : p.37