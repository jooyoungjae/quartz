---
title: COMB-0101 일반화된 비둘기집 원리 (Generalized Pigeonhole Principle)
aliases:
  - COMB-0101
  - 일반화된 비둘기집 원리
  - Generalized Pigeonhole Principle
tags:
  - COMB
date: 2026-03-09 13:30
updated: 2026-03-09 14:23
draft: false
---

# COMB-0101 일반화된 비둘기집 원리 (Generalized Pigeonhole Principle)

## 정리 (Theorem)

> [!NOTE] COMB-0101 일반화된 비둘기집 원리 (Generalized Pigeonhole Principle)
> $n, k, r$을 $n>rk$인 양의 정수라 하자. $n$개의 동일한 공을 $k$개의 상자에 넣는다고 가정하자. 그러면 적어도 한 개의 상자에는 $r+1$개 이상의 공을 넣게 된다.
> 
> 

## 증명 (Proof)

> [!abstract] Proof
>
> **전개**
> 귀류법을 이용하자.
> 1. 모든 상자에는 $r$개 이하의 공이 들어있다고 가정하자.
> 2. 상자에 들어있는 모든 공의 개수는 $n$개 이고 이는 $rk$개 이하이다.
> 3. $(n\leq rk)\ \land\ (n>rk) \equiv \bot$ 
>   
> **결론($\therefore$)**
> - 따라서 일반화된 비둘기집 원리가 성립한다.


---

## 따름정리 (Corollary)


### 따름정리 1

> [!NOTE] COMB-0101-C1 비둘기집 원리 (Pigeon-hole Principle)
> $n, k$를 $n>k$인 양의 정수라 한다. $n$개의 동일한 공을 $k$개의 상자에 넣는다고 가정하자. 그러면 적어도 한 상자에는 두 개 이상의 공을 넣는다.
>
> 

### 따름정리 1의 증명

> [!abstract] Proof of Corollary 1
> 일반화된 비둘기집 원리에서 $r=1$을 대입하면 바로 유도된다.



---

## 코멘트

- 

---

## 참고문헌
- 교재명 : Bóna, Miklós.『조합론 산책』.노유미 역.(교우사).
- 페이지 : p.5