---
title: LA-0105 부분공간의 교집합 (Intersection of Subspaces)
aliases:
  - LA-0105
  - 부분공간의 교집합
  - Intersection of Subspaces
tags:
  - 선형대수학
date: 2026-03-03 18:48
updated: 2026-03-03 19:31
draft: false
---

# LA-0105 부분공간의 교집합 (Intersection of Subspaces)

## 정리 (Theorem)

> [!NOTE] LA-0105 부분공간의 교집합 (Intersection of Subspaces)
> 벡터공간 $\mathbb{V}$의 부분공간들을 생각하자. **이 부분공간들의 임의의 교집합은 $\mathbb{V}$의 부분공간이다.**
> 
> $$
> \begin{align*}
> \text{벡터공간}\mathbb{V}\text{의 부분공간의 모임을} \mathcal{C}\text{라고 하자  }
> \mathbb{W} = \bigcap_{\mathbb{U} \in \mathcal{C}} \mathbb{U} \text{는 }\mathbb{V}\text{의 부분공간이다.}
> \end{align*}
> $$

## 증명 (Proof)

> [!abstract] Proof
>
> **전제**
> - 위와 같이 $\mathbb{W}$를 $\bigcap_{\mathbb{U} \in \mathcal{C}} \mathbb{U}$라고 정의하자.
> - [[LA-0104 부분공간의 조건 (Subspace Test)|부분공간의 조건]]
> 
> **전개**
> 1. 모든 $\mathbb{U} \in \mathcal{C}$에 영벡터가 속하므로 $\mathbf{0} \in \mathbb{W}$이다.
> 2. 벡터 $x, y \in \mathbb{W}$에 대하여 $x, y$는 모든 $\mathbb{U}\in\mathcal{C}$에 속한다.
> 3. $x+y$또한 모든 **벡터공간** $\mathbb{U}\in\mathcal{C}$에 속하므로 $x+y \in \mathbb{W}$이다.
> 4. 또 스칼라 $a$와 $x \in \mathbb{W}$ 에 대하여 $x$가 모든 **벡터공간** $\mathbb{U}\in\mathcal{C}$에 속한다. 
> 5. $ax$ 또한 모든 $\mathbb{U}\in\mathcal{C}$에 속하므로  $ax\in \mathbb{W}$이다.
>   
> **결론($\therefore$)**
> - [[LA-0104 부분공간의 조건 (Subspace Test)#정리 (Theorem)|부분공간의 조건]]에 의하여 $\mathbb{W}$는 $\mathbb{V}$의 부분공간이다.


---

## 코멘트

- 합집합에 대해서는 어떨까?

---

## 참고문헌
- 교재명 : 스티븐 H. 프리드버그, 아놀드 J. 인셀, 로렌스 E. 스펜스.『프리드버그 선형대수학』(한빛수학교재연구소).
- 페이지 : p.34