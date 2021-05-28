---
title: LeetCode 46번 문제
description: Permutations
tags: algorithm, python, leetcode, dfs
---

## 문제 링크

https://leetcode.com/problems/permutations/

## 나의 풀이

```python
from typing import List


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def dfs(curr=[]):
            # 예외 처리
            if len(curr) == len(nums):
                result.append(curr)
                return

            for num in nums:
                if num not in curr:
                    # 리스트 복사 후 요소를 추가하여 재귀 수행
                    new_nums = curr[:]
                    new_nums.append(num)
                    dfs(new_nums)

        result = []
        dfs()
        return result
```

## 문제 풀이

### 1. DFS를 활용한 순열 생성

- 위의 풀이와 마찬가지로 주의할 점은 리스트에 결과를 추가할 때 리스트를 복사(`[:]`)하여 추가해야 한다.

```python
from typing import List


class Solution1:
    def permute(self, nums: List[int]) -> List[List[int]]:
        results = []
        prev_elements = []

        def dfs(elements):
            # 리프 노드일 때 결과 추가
            if len(elements) == 0:
                results.append(prev_elements[:])

            # 순열 생성 재귀 호출
            for e in elements:
                next_elements = elements[:]
                next_elements.remove(e)

                prev_elements.append(e)
                dfs(next_elements)
                prev_elements.pop()

        dfs(nums)
        return results
```

### 2. `itertools` 모듈 사용

```python
from typing import List
import itertools


class Solution2:
    def permute(self, nums: List[int]) -> List[List[int]]:
        # 리트코드에서는 리스트 반환 문제도 튜플로 반환하면 정답으로 처리되므로
        # 아래와 같이 작성해도 문제는 없음
        # return list(itertools.permutations(nums))
        
        return list(map(list, itertools.permutations(nums)))
```

## 배운 점

### 객체 복사 방법

1. `[:]` 사용
2. `copy()` 메소드 사용
3. `copy.deepcopy()` 메소드 사용
   - 중첩된 리스트와 같이 복잡한 리스트도 복사할 수 있다. (깊은 복사)
   - `copy` 모듈을 임포트한 후 사용할 수 있다.

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p341-345.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
