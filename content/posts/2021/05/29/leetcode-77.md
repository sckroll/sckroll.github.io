---
title: LeetCode 77번 문제
description: Combinations
tags: algorithm, python, leetcode, dfs
---

## 문제 링크

https://leetcode.com/problems/combinations/

## 나의 풀이

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def dfs(num=1, comb=[]):
            if len(comb) == k:
                result.append(comb)
                return

            for curr in range(num, n + 1):
                copied = comb[:]
                copied.append(curr)
                dfs(curr + 1, copied)

        result = []
        dfs()
        return result
```

</div>
</details>

## 문제 풀이

### 1. DFS로 `k`개 조합 생성

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution1:
    def combine(self, n: int, k: int) -> List[List[int]]:
        results = []

        def dfs(elements, start: int, k: int):
            if k == 0:
                results.append(elements[:])

            # 자신 이전의 모든 값을 고정하여 재귀 호출
            for i in range(start, n + 1):
                elements.append(i)
                dfs(elements, i + 1, k - 1)
                elements.pop()

        dfs([], 1, k)
        return results
```

</div>
</details>

### 2. `itertools` 모듈 사용

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List
import itertools


class Solution2:
    def combine(self, n: int, k: int) -> List[List[int]]:
        # 리트코드에서는 리스트 반환 문제도 튜플로 반환하면 정답으로 처리되므로
        # 아래와 같이 작성해도 문제는 없음
        # return list(itertools.combinations(range(1, n + 1), k))

        return list(map(list, itertools.combinations(range(1, n + 1), k)))
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p346-350.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
