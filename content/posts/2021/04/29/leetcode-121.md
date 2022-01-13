---
title: LeetCode 121번 문제
description: Best Time to Buy and Sell Stock
tags: algorithm, python, leetcode, array
---

## 문제 링크

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

## 나의 풀이

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution:
    def my_solution(self, prices: List[int]) -> int:
        profit = 0
        min_price = 10 ** 4

        for price in prices:
            if price - min_price > profit:
                profit = price - min_price
            if price < min_price:
                min_price = price

        return profit
```

</div>
</details>

## 문제 풀이

### 1. 브루트 포스로 계산 (풀이 불가)

- 시간 복잡도는 O(n^2)이지만, 제출 시 시간 초과로 인하여 오답 처리가 된다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution:
    def solution1(self, prices: List[int]) -> int:
        max_price = 0

        for i, price in enumerate(prices):
            for j in range(i, len(prices)):
                max_price = max(prices[j] - price, max_price)

        return max_price
```

</div>
</details>

### 2. 저점과 현재 값과의 차이 계산

- 시간 복잡도는 O(n)이다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution:
    def solution2(self, prices: List[int]) -> int:
        # sys.maxsize: 시스템의 가장 큰 값, 64비트에서는 2^63 - 1
        profit = 0
        min_price = sys.maxsize

        # 최솟값과 최댓값을 계속 갱신
        for price in prices:
            min_price = min(min_price, price)
            profit = max(profit, price - min_price)

        return profit
```

</div>
</details>

## 배운 점

### 최댓값과 최솟값의 초깃값을 지정하는 방법

1. `sys.maxsize`, `-sys.maxsize`: 시스템이 지정할 수 있는 가장 높은 값과 낮은 값을 활용할 수 있다.
   - 사실 파이썬의 특성상 최댓값으로써 지정한 `sys.maxsize`보다 더 큰 수가 저장될 수 있기 때문에 최댓값이나 최솟값으로 지정하는 것이 무의미할 수 있지만, 일반적인 코딩 테스트의 경우는 파이썬 뿐만 아니라 모든 언어에 대응하는 공통된 테스트 케이스로 구성되어 있기 때문에 `sys.maxsize`로도 충분히 모든 테스트 케이스를 통과할 수 있다.
2. `float('inf')`, `float('-inf')`: 파이썬의 무한대(`inf`) 값을 사용할 수 있다.
3. `999999`와 같이 임의의 값을 최댓값이나 최솟값으로 지정하는 방법은 지양해야 한다. 하지만 코딩 테스트에서 입력값의 제약 조건이 제공된다면(ex: `0 <= prices[i] <= 10^4`) 그에 맞춰서 최댓값과 최솟값을 지정할 수 있다.

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p193-198.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
