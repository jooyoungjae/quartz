---
title: AN-0105 정수 집합의 가산성 (The Countability of the Set of Integers)
aliases:
  - AN-0105
  - 정수 집합의 가산성
  - The Countability of the Set of Integers
tags:
  - 해석학
  - 집합론
date: 2026-04-03 21:47
updated: 2026-04-04 23:03
draft: false
---

# AN-0105 정수 집합의 가산성 (The Countability of the Set of Integers)

## 정리 (Theorem)

> [!NOTE] AN-0105 정수 집합의 가산성 (The Countability of the Set of Integers)
> **정리**
> 정수집합 $\mathbb Z$와 자연수 집합$\mathbb N$의 기수가 같다.
> $$
> \mathbb{Z} \sim \mathbb{N}
> $$

## 증명 (Proof)

> [!abstract] Proof
>
> **전제**
> - Let 
> $$
> f(n)=
> \begin{cases} 
> -\frac{(n-1)}{2} \quad &(n\text{은 홀수})\\ \\
> \frac n 2 \quad &(n\text{은 짝수})
> \end{cases}
> $$
> 
> **전개**
> 위와 같이 함수를 정의하면 아래의 표에서 볼 수 있듯이 자연수와 정수를 일대일 대응시킬 수 있다.
> $$ 
> \begin{array}{c|c|c|c|c|c|c|c} \mathbb{N} & 1 & 2 & 3 & 4 & 5 & 6 & \cdots \\ \hline f & \updownarrow & \updownarrow & \updownarrow & \updownarrow & \updownarrow & \updownarrow & \\ \hline \mathbb{Z} & 0 & 1 & -1 & 2 & -2 & 3 & \cdots \end{array}
> $$
> 
>   
> **결론($\therefore$)**
> - 따라서 $\mathbb{Z}\sim\mathbb{N}$ 이다.


---

## 코멘트

- 정수 집합은 가산(countable) 집합이다.
---

## 참고문헌
- 교재명 : 스티븐 애벗.『해석학 첫걸음』.(한빛수학교재연구소).
- 페이지 : p.47