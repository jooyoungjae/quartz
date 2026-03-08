---
title: AN-0104 아르키메데스 성질 (Archimedean property)
aliases:
  - AN-0104
  - 아르키메데스 성질
  - Archimedean property
tags:
  - 해석학
date: 2026-02-18 12:29
updated: 2026-03-08 21:00
draft: false
---

# AN-0104 아르키메데스 성질 (Archimedean property)

## 정리 (Theorem)

> [!NOTE] AN-0104 아르키메데스 성질 (Archimedean property)
> **임의의 실수 $x\in \mathbb{R}$에 대하여 $n>x$를 만족하는$n\in \mathbb{N}$이 존재한다.**
> 
> $$
> (\forall x \in \mathbb{R}),\ ( \exists n \in \mathbb{N}) \  n > x
> $$

## 증명 (Proof)

> [!abstract] Proof
>
> **전제**
> - Let $x$ be any real number
> 
> **전개**
> 
> 귀류법을 사용하자
> 1. 증명하고자 하는 명제의 부정을 가정하자.
> $$(\exists x\in \mathbb{R}),\  (\forall n\in \mathbb{N})\ n\leq x$$
> 2. 이는 $\mathbb{N}$이 위로 유계임을 가정하는 것과 같다. 따라서 [[AN-0103 완비성 공리 (Axiom of Completeness)|완비성 공리]]에 의해 상한 $\text{sup }\mathbb{N}$이 존재한다.
> 3. [[AN-0101 상한의 두 가지 정의 (Two Definitions of Supremum)|상한의 해석적 정의]]에 의해 $\text{sup }\mathbb{N}-1<n$인 $n\in \mathbb{N}$이 존재한다.
> 4. 한편, $\text{sup }\mathbb{N}-1<n \iff \text{sup }\mathbb{N}<(n+1)\in \mathbb{N}$이므로 $\text{sup }\mathbb{N}$이 상계라는 점에 모순이다.
>   
> **결론($\therefore$)**
> $$(\forall x \in \mathbb{R}),\ ( \exists n \in \mathbb{N}) \  n > x$$


---

## 따름정리 (Corollary)


### 따름정리 1

> [!NOTE] AN-0104-C1 아르키메데스 성질의 따름정리 1 (Corollary 1)
> **임의의 실수 $\epsilon>0$에 대하여 $\frac{1}{n}<\epsilon$ 를 만족하는 $n\in \mathbb{N}$이 존재한다.**
>
> $$
> (\forall \epsilon > 0),\  (\exists n \in \mathbb{N}) \  \frac{1}{n} < \epsilon
> $$

### 따름정리 1의 증명

> [!abstract] Proof of Corollary 1
> 아르키메데스 성질에서 $x=\frac{1}{\epsilon}$으로 두면 바로 유도된다.


<br>



### 따름정리 2

> [!NOTE] AN-0104-C2 아르키메데스 성질의 따름정리 2 (Corollary 2)
> **임의의 실수 $x$에 대하여 $x$보다 작거나 같은 정수 중 최대 정수가 존재한다.**
>
> $$
> (\forall x \in \mathbb{R}), \ (\exists m \in \mathbb{Z}) \ m - 1 \le x < m
> $$

### 따름정리 2의 증명

> [!abstract] Proof of Corollary 2
> 1. $A_{x} = \{ a\in \mathbb{Z}\ |\ a> x \}$라 하자.
> 2. 아르키메데스 성질에 의하여 $A_{x}$는 공집합이 아니다.
> 3. $A_{x}$는 $\mathbb{Z}$의 공집합이 아닌 $\mathbb{Z}$의 부분집합이고, 아래로 유계이므로 최솟값을 갖는다. 그 값을 m이라 하자.
> 4. $m-1<m$이므로 $m-1\notin A\iff m-1\leq x$이다.
> 5. 한편 $m\in A$이므로 $x<m$이다. 두 부등식을 합치면 $m-1\leq x<m$이다.
> 6. 따라서 따름정리 2가 성립한다.
> 


<br>



### 따름정리 3

> [!NOTE] AN-0104-C3 아르키메데스 성질의 따름정리 3 (Corollary 3)
> **유리수 집합은 조밀하다 (Density of Rational Numbers)**
>
> $$
> (\forall x, y \in \mathbb{R} \text{ with } x < y), \ (\exists q \in \mathbb{Q} )\  x < q < y
> $$

### 따름정리 3의 증명

> [!abstract] Proof of Corollary 3
> 1. $q = \frac{m}{n}$이라 하자. (단, $m\in \mathbb{Z},\ n\in \mathbb{N}$)
> 2. 아르키메데스 성질에 의하여 $\frac{1}{n}\stackrel{(1)}{<}y-x$인 자연수 $n$이 존재한다.
> 3. 따름정리 2에 의하여 $m-1\stackrel{(2)}{\leq} nx \stackrel{(3)}{<} m$인 정수 $m$이 존재한다.
> 4. 부등식 (2)를 생각해보자.
> $$
> \begin{align*} 
> m &\leq nx+1 \\ &< n\left( y-\frac{1}{n} \right)+1 \quad (\because \text{부등식(1)})\\ &=ny\\ \\ \therefore m&\stackrel{(4)}{<} ny 
> \end{align*}
> $$
> 5. 부등식 (3)과 (4)에 의하여 $x< \frac{m}{n}< y$를 얻을 수 있다.
> 6. 2번과 3번과정은 임의의 실수 $x, y$ (단, $x$<$y$)에 대하여 성립한다.
> 7. 따라서 따름정리 3이 성립한다.


<br>



### 따름정리 4

> [!NOTE] AN-0104-C4 아르키메데스 성질의 따름정리 4 (Corollary 4)
> **무리수 집합은 조밀하다. (Density of Irrational Numbers)**
>
> $$
> (\forall x, y \in \mathbb{R} \text{ with } x < y),\ (\exists r \in (\mathbb{R} \setminus \mathbb{Q}) )\ x < r < y
> $$

### 따름정리 4의 증명

> [!abstract] Proof of Corollary 4
> 따름정리 3을 $x<y$인 두 실수 $x-\sqrt{ 2 },\ y-\sqrt{ 2 }$에 대하여 적용하면 무리수 $r=q+\sqrt{ 2 }$가 $x<r<y$를 만족함을 보일 수 있다.



---

## 코멘트

- 아르키메데스 성질의 증명은 완비성 공리와 $\mathbb{N}$ 이 덧셈에 대하여 닫혀 있다는 사실에만 의존한다.
- 아르키메데스 성질과 그 따름정리들은 $\mathbb{R}$에포함된 $\mathbb{N},\ \mathbb{Z},\ \mathbb{Q},\ (\mathbb{R} \setminus \mathbb{Q})$이 어떤 식으로 존재하는지 보여준다.
- 따름정리 2는 가우스기호인  $\lfloor x \rfloor$가 존재할 수 있는 근거가 된다. 
- 따름정리 3의 증명과정을 말로 풀어 쓰면 다음과 같다. 

	먼저 $\frac{1}{n}$이 $x$와 $y$의 차이보다 작게 $n$을 잡아서  분모가 $n$인 유리수들 중 적어도 하나가 $x$와 $y$사이에 있게끔 한다.(과정 2) 그 후 $m$에 대해서는 따름정리 2와 아주 비슷하게 실수 x보다 큰 최소의 유리수를 잡는다. 앞선 과정에 의하여 그 점은 $y$를 넘지 않는다. 따라서 $x$와 $y$ 사이의 유리수 $\frac{m}{n}$이 존재한다.(과정 3~5) 수직선 상에서 그림으로 나타내면 다음과 같다.

($n = 1$, $y-x\leq \frac{1}{n}$) 이 경우에는 $x$와 $y$ 사이에 분모가 $n$인 유리수가 없다.
![[Pasted image 20260308204725.png]]
($n = 2$, $y-x> \frac{1}{n}$)
![[Pasted image 20260308204800.png]]

($\frac{m-1}{n}\leq x< \frac{m}{n}$이게 끔 m 잡기)
![[Pasted image 20260308204908.png]]

---

## 참고문헌
- 교재명 : 스티븐 애벗.『해석학 첫걸음』.(한빛수학교재연구소).
- 페이지 : p.41