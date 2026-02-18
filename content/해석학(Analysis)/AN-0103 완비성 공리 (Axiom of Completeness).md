---
title: AN-0103 완비성 공리 (Axiom of Completeness)
aliases:
  - AN-0103
  - 완비성 공리
  - Axiom of Completeness
tags:
  - 해석학
date: 2026-02-17 19:51
updated: 2026-02-18 19:54
draft: false
---

# AN-0103 완비성 공리 (Axiom of Completeness)

## 공리 (Axiom)

> [!NOTE] AN-0103 완비성 공리 (Axiom of Completeness)
> **공집합이 아니고 위로 유계(bounded above)인 $\mathbb{R}$의 부분집합은 상한을 갖는다.**
> 

---

## 따름정리 (Corollary)

> [!NOTE] AN-0103-C1 완비성 공리의 따름정리 1 (Corollary 1)
> **공집합이 아니고 아래로 유계(bounded below)인 $\mathbb{R}$의 부분집합은 하한을 갖는다.**
>
> 

### 따름정리 1의 증명

> [!abstract] Proof of Corollary 1
> 먼저 해당 집합의 하계들을 모아서 위로 유계인 집합을 만들고 상한이 존재함을 보이자. 
> 그 후에 그 상한이 해당 집합의 하한임을 보이면 된다.
> 
> 1. 공집합이 아니고 아래로 유계인 집합 $A\subseteq \mathbb{R}$을 생각하자.
> 2. $L=\{ l\in \mathbb{R}\ |\ l\text{은} \ A\text{의 하계이다.} \}$이라고 하자.
> 3. $L$의 모든 원소는 임의의 $A$의 원소보다 작거나 같으므로 위로 유계이다.
> 4. 따라서 완비성 공리에 의해 $L$은 상한을 갖는다. 이를 $x$라 하자.
> 5. 어떤 $a \in A$에 대하여, $a <x$ 라고 가정하자.
> 6. $L$의 정의상 $a$는 $L$의 상계이다. 
> 7. 그런데 $x$는 $L$의 [[AN-0101 상한의 두 가지 정의 (Two Definitions of Supremum)|최소 상계]]이므로 $x\leq a$이어야 한다. 이는 가정($a<x$)에 모순이다.
> 8. 귀류법에 의해 모든 $a \in A$에 대하여 $a \geq x$이다. (즉, $x$는 $A$의 하계이다.)
> 9. $x$는 모든$l\in L$($A$의 하계)에 대하여, $l\leq x$이므로 $x=\text{inf }A$이다.
> 10. 따라서 Corollary 1이 성립한다.

---

## 코멘트

- 따름 정리 1은 완비성 공리가 $\mathbb{R}$에 완비성을 잘 부여한다는 것을 보여준다. 

---

## 참고문헌
- 교재명 : 스티븐 애벗.『해석학 첫걸음』.(한빛수학교재연구소).
- 페이지 : p.33