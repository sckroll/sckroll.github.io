---
title: LeetCode 39번 문제
description: Combination Sum
tags: algorithm, leetcode, python, dfs, backtracking
---

## 문제 링크

https://leetcode.com/problems/combination-sum/

## 나의 풀이

### 첫 번째 시도

- 상당히 느린 방식의 풀이법이다. 아마 리스트 정렬 과정에서 실행 시간을 잡아먹은 듯하다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class MySolution1:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        def dfs(curr, comb=[]):
            if curr == target:
                if sorted(comb) not in result:
                    result.append(comb)
                return
            if curr > target:
                return

            for num in candidates:
                selected = comb[:]
                selected.append(num)
                dfs(curr + num, selected)

        # candidates가 정렬이 되어있지 않으면
        # result의 순서가 올바르지 않아 오답 처리
        candidates.sort()

        result = []
        dfs(0)
        return result
```

</div>
</details>

### 두 번째 시도

- 위의 풀이 방법보다 실행 시간이 개선되었다.
- 매번 정렬을 하는 대신, 재귀를 호출하기 전 `candidates`의 숫자가 현재 조합의 마지막 요소보다 크거나 같을 경우에만 조합에 추가함으로써 각 조합의 정렬된 상태를 유지한다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class MySolution2:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        def dfs(curr, comb=[]):
            if curr == target:
                if comb not in result:
                    result.append(comb)
                return
            if curr > target:
                return

            for num in candidates:
                if comb and num < comb[-1]:
                    continue
                selected = comb[:]
                selected.append(num)
                dfs(curr + num, selected)

        result = []
        dfs(0)
        return result
```

</div>
</details>

## 문제 풀이

### 1. DFS로 중복 조합 그래프 탐색

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution1:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []

        def dfs(csum, index, path):
            # 종료 조건
            if csum < 0:
                return
            if csum == 0:
                result.append(path)
                return

            # 자신부터 하위 원소까지의 나열 재귀 호출
            # 순열과는 다르게 항상 처음부터 시작할 필요가 없음
            # 만약 순열이라면 매번 탐색을 처음부터 수행하기 때문에
            # 두 번째 인자로 i 대신 0을 기입해야 함
            for i in range(index, len(candidates)):
                dfs(csum - candidates[i], i, path + [candidates[i]])

        dfs(target, 0, [])
        return result
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p351-354.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
