---
title: LeetCode 347번 문제
description: Top K Frequent Elements
tags: algorithm, leetcode, python, hash_table
---

## 문제 링크

https://leetcode.com/problems/top-k-frequent-elements/

## 나의 풀이

- 풀긴 풀었지만 실행 시간이 너무 느리다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List
from collections import defaultdict


class Solution:
    def my_solution(self, nums: List[int], k: int) -> List[int]:
        counts = defaultdict(int)
        result = []

        for num in nums:
            counts[num] += 1
        for _ in range(k):
            max_key = max(counts, key=lambda x: counts[x])
            counts.pop(max_key)
            result.append(max_key)

        return result
```

</div>
</details>

## 문제 풀이

### 1. Counter를 이용한 음수 순 추출

- 우선순위 큐를 이용하여 `k`번만큼 추출하는 방법을 사용한다.
- 마지막에 `heapify()`를 하는 방법과 매번 `heappush()`를 하는 방법이 있지만, 후자를 사용하면 매번 `heapify()`가 일어나기 때문에 별도로 처리할 필요가 없다. 여기서는 `heapify()`를 매번 쓰는 방법을 사용한다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List
from collections import Counter
import heapq


class Solution:
    def solution1(self, nums: List[int], k: int) -> List[int]:
        freqs = Counter(nums)
        freqs_heap = []

        for f in freqs:
            # 키/값을 바꿔서 힙에 추가하며, 값을 음수로 저장함으로써
            # 최소 힙으로도 가장 빈도 수가 높은 값을 추출할 수 있음
            heapq.heappush(freqs_heap, (-freqs[f], f))

        topk = list()
        # k번 만큼 추출하며, 최소 힙이므로 가장 작은 음수 순으로 추출
        for _ in range(k):
            topk.append(heapq.heappop(freqs_heap)[1])

        return topk
```

</div>
</details>

### 2. 파이썬다운 방식

- `Counter.most_common(n)` 메소드를 사용하여 빈도 수가 높은 순서대로 `n`개를 선택할 수 있다.
- 단, `zip` 함수와 별표(`*`)를 함께 사용하여 각 튜플의 `0`번 인덱스만 추출한다.
- 리턴 타입은 튜플이지만, 리스트와 마찬가지로 정답으로 처리된다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution:
    def solution2(self, nums: List[int], k: int) -> List[int]:
        return list(zip(*Counter(nums).most_common(k)))[0]
```

</div>
</details>

## 배운 점

### `zip()`
- 2개 이상의 시퀀스를 짧은 길이를 기준으로 일대일 대응하는 새로운 튜플 시퀀스를 만드는 함수
```python
a = [1, 2, 3, 4, 5]
b = [2, 3, 4, 5]
c = [3, 4, 5]
zip(a, b)           # <zip object at 0x000002424D530A40>
list(zip(a, b))     # [(1, 2), (2, 3), (3, 4), (4, 5)]
list(zip(a, b, c))  # [(1, 2, 3), (2, 3, 4), (3, 4, 5)]
```
- 파이썬 2에서는 리스트를, 파이썬 3 이상에서는 제너레이터를 리턴한다. 따라서 파이썬 3 이상에서 실제 리턴 값을 받기 위해서는 `list()`로 묶어야 한다.
- `zip()`의 결과 자체는 **튜플** 시퀀스이기 때문에 불변(Immutable) 객체다.
  
### 파이썬에서의 별표(`*`, Asterisk)
- 시퀀스 언패킹 연산자(Sequence Unpacking Operator)
  - (튜플이나 리스트와 같은) 시퀀스를 풀어헤치는(Unpack) 연산자를 의미한다.
- 별표를 사용하면 시퀀스가 풀어지지 않고 그대로 하나의 값처럼 묶여서 사용된다.
```python
Counter(nums).most_common(k)
# [(1, 3), (2, 2)]

# 풀이 2번에서 별표(*)를 사용했을 때
list(zip(*Counter(nums).most_common(k)))
# [(1, 2), (3, 2)]

# 풀이 2번에서 별표(*)를 사용하지 않았을 때
list(zip(Counter(nums).most_common(k)))
# [((1, 3),), ((2, 2),)]
```
```python
test = ['aaaa', 'bbb', 'cc', 'ddddd']
print(test)   # ['aaaa', 'bbb', 'cc', 'ddddd']
print(*test)  # aaaa bbb cc ddddd
```
- 함수의 파라미터가 되었을 때는 반대로 패킹(Packing)의 기능을 수행한다.
  - `zip()`, `print()` 등은 내부적으로 `*`로 패킹함으로써 여러개의 파라미터가 전달되어도 하나의 변수로 패킹되어 처리된다.
```python
def f(*params):
  print(params)

f('a', 'b', 'c')        # ('a', 'b', 'c')
print('a')              # a
print('a', 'b', 'c')    # a b c
```
- 변수의 할당도 묶어서 처리할 수 있다. 일반적인 변수는 값을 하나만 취하지만, `*`로 처리하게 되면 나머지 모든 값을 취하게 된다.
```python
a, *b = [1, 2, 3, 4]
print(a)    # 1
print(b)    # [2, 3, 4]

*a, b = [1, 2, 3, 4]
print(a)    # [1, 2, 3]
print(b)    # 4
```
- 별표가 2개 쓰이는 경우(`**`)
  - 키/값 페어를 언패킹하는 데 사용된다. (1개만 쓰면 위에서 설명한 것처럼 시퀀스를 언패킹)
```python
# date_info의 모든 요소를 언패킹 후 day의 값을 업데이트하는 예시
date_info = {'year': '2021', 'month': '05', 'day': '26'}
new_info = {**date_info, 'day': '31'}
print(new_info)   # {'year': '2021', 'month': '05', 'day': '31'}
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p307-313.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
