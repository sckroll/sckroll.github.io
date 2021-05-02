---
title: LeetCode 561번 문제
description: Array Partition I
tags: algorithm, python, leetcode, array
---

### 문제 링크

https://leetcode.com/problems/array-partition-i/

### 나의 풀이

```python
from typing import List


class Solution:
    def my_solution(self, nums: List[int]) -> int:
        result = 0
        nums.sort()
        for i in range(0, len(nums), 2):
            result += nums[i]
        return result
```

### 문제 풀이

#### 1. 오름차순 풀이

- 정렬된 상태에서 앞에서부터 오름차순으로 인접 요소 페어를 생성하며, 이 페어들의 합이 곧 만들 수 있는 최대 합이 된다.

```python
from typing import List


class Solution:
    def solution1(self, nums: List[int]) -> int:
        result = 0
        pair = []
        nums.sort()

        for n in nums:
            # 앞에서부터 오름차순으로 페어를 만들면서 합 계산
            pair.append(n)
            if len(pair) == 2:
                result += min(pair)
                pair = []

        return result
```

#### 2. 짝수 번째 값 계산

- 정렬된 상태에서는 두 수씩 페어로 묶을 때 짝수 번째 인덱스에 항상 작은 값이 위치하고 있다는 점을 이용한 풀이법이다.

```python
from typing import List


class Solution:
    def solution2(self, nums: List[int]) -> int:
        result = 0
        nums.sort()

        for i, n in enumerate(nums):
            # 짝수 번째 값의 합 계산
            if i % 2 == 0:
                result += n

        return result
```

### 3. 파이썬다운 방식

- 더 이상의 자세한 설명은 생략한다.

```python
from typing import List


class Solution:
    def solution3(self, nums: List[int]) -> int:
        return sum(sorted(nums)[::2])
```

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p190-192.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
