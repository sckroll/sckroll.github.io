---
title: LeetCode 238번 문제
description: Product of Array Except Self
tags: algorithm, python, leetcode, array
---

## 문제 링크

https://leetcode.com/problems/product-of-array-except-self/

## 나의 풀이

- 나눗셈을 하지 않고 $O(n)$에 푸는 제약 사항이 있었지만 지키지 않았다. 하지만 제출할 땐 아무 문제가 없었다.

```python
from typing import List


class Solution:
    def my_solution(self, nums: List[int]) -> List[int]:
        zero_idx = -1
        product = 1

        for i, n in enumerate(nums):
            if n == 0:
                if zero_idx == -1:
                    zero_idx = i
                else:
                    return [0 for _ in range(len(nums))]
            else:
                product *= n

        if zero_idx == -1:
            answer = [product // num for num in nums]
        else:
            answer = [0 for _ in range(len(nums))]
            answer[zero_idx] = product
        return answer
```

## 문제 풀이

### 왼쪽 곱셈 결과에 오른쪽 값을 차례대로 곱셈

- 별도의 리스트 변수를 만들지 않고 결과값을 저장할 리스트를 재활용함으로써 공간 복잡도를 $O(1)$로 줄일 수 있다.
- 값을 `1`부터 시작, 자신의 왼쪽에 있는 모든 원소를 곱하여 `out` 리스트에 저장한다.
- 왼쪽 곱셈이 끝났으므로 오른쪽 곱셈을 수행한다. 이번에도 마찬가지로 값을 1부터 시작하되, 오른쪽에서부터 순회하여 자신의 오른쪽에 있는 모든 원소를 곱한 값을 `out` 리스트의 해당하는 위치의 값에 곱한다.

|nums||1|2|3|4||||
|---|---|---|---|---|---|---|---|---|
|p|1|1|2|6|||||
|out||1|1|2|6||||
||||24|12|4|1|p
|||24|12|8|6||out (최종 결과)

```python
from typing import List


class Solution:
    def solution1(self, nums: List[int]) -> List[int]:
        out = []

        # 왼쪽 곱셈
        # 별도의 리스트 변수를 만들지 않고 기존 out 변수를 재활용함으로써
        # 공간 복잡도를 O(1)로 절약
        # (출력에 필요한 공간은 공간 복잡도에 포함하지 않음)
        p = 1
        for i in range(len(nums)):
            out.append(p)
            p *= nums[i]
        print(out)

        # 왼쪽 곱셈 결과에 오른쪽 값을 차례대로 곱셈
        # 오른쪽 끝에서부터 차례대로 곱셈 수행
        p = 1
        for i in range(len(nums) - 1, -1, -1):
            out[i] *= p
            p *= nums[i]
        return out
```


## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p193-194.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
