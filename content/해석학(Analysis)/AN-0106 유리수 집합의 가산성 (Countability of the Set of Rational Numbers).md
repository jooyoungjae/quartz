---
title: AN-0106 유리수 집합의 가산성 (Countability of the Set of Rational Numbers)
aliases:
  - AN-0106
  - 유리수 집합의 가산성
  - Countability of the Set of Rational Numbers
tags:
  - 해석학
date: 2026-04-03 21:47
updated: 2026-04-03 23:23
draft: false
---

# AN-0106 유리수 집합의 가산성 (Countability of the Set of Rational Numbers)

## 정리 (Theorem)

> [!NOTE] AN-0106 유리수 집합의 가산성 (Countability of the Set of Rational Numbers)
> **정리**
> 유리수 집합 $\mathbb{Q}$와 $\mathbb{N}$의 기수가 같다.
> $$
> \mathbb{Q} \sim \mathbb{N}
> $$

## 증명 (Proof)

> [!abstract] Proof
>
> **전제**
> - Let 
> $$
> A_{n}=\left\{  \frac{q}{p}\ |\ p+q=n\ \land\ p\text{와 } q\text{는 서로소}\ \land\ p, q\in \mathbb{N}  \right\}
> $$
> 
> **전개**
> 1. 먼저 $p+q=n$을 만족시키는 자연수 $(p, q)$의 개수가 $n-1$개 이므로, $A_{n}$은 유한집합이다.
> 2. $n\neq m$ 이면 $A_{n} \cap A_{m}=\varnothing$ 이다.
> 3. 임의의 양의 유리수 $x \in \mathbb Q_{+}$에 대하여 $x \in A_{n}$인 $n$이 유일하게 존재한다.
> 4. 따라서 아래 표와 같이 함수 $f:\mathbb{N}\longrightarrow \mathbb Q_{+}$를 정의하면 일대일대응이다.
> 5. 
> $$
> \begin{array}{c|c|cc|cccc|cccc|cc} \mathbb{N} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & \cdots \\ \hline f & \updownarrow & \updownarrow & \updownarrow & \updownarrow & \updownarrow & \updownarrow & \updownarrow & \updownarrow & \updownarrow & \updownarrow & \updownarrow & \updownarrow \\ \hline \mathbb{Q_{+}} & 0 & \frac{1}{1} & -\frac{1}{1} & \frac{1}{2} & -\frac{1}{2} & \frac{2}{1} & -\frac{2}{1} & \frac{1}{3}  & -\frac{1}{3} & \frac{3}{1} & -\frac{3}{1} & \frac{1}{4} &  \cdots  \\ \text{set} & A_{1} & A_{2} &  & A_{3} &  &  &  & A_{4} &  &  &  & A_{5} & \\
\end{array}
> $$
> 6. 함수 $g:\mathbb{Z}\longrightarrow \mathbb Q$를 다음과 같이 정의 하면 일대일 대응이다.
> $$
> g(n)=\begin{cases}
> f(n) \quad &(n>0)\\ 
> 0 \quad &(n=0)\\
> -f(-n) \quad &(n<0)
> \end{cases}
> $$
> 7. [[AN-0105 정수 집합의 가산성 (The Countability of the Set of Integers)|정수 집합의 가산성]]에 의하여 $\mathbb{N}\sim\mathbb{Z}$이고 일대일 대응 $g$가 존재하므로 $\mathbb{Z}\sim\mathbb{Q}$ 이다.
>   
> **결론($\therefore$)**
> - 따라서 $\mathbb{N}\sim \mathbb{Q}$이다.


---

## 코멘트

- 유리수 집합은 가산 집합이다.

---

## 참고문헌
- 교재명 : 스티븐 애벗.『해석학 첫걸음』.(한빛수학교재연구소).
- 페이지 : p.49