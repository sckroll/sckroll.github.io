---
title: LeetCode 78번 문제
description: Subsets
tags: algorithm, leetcode, python, dfs, backtracking
---

## 문제 링크

https://leetcode.com/problems/subsets/

## 나의 풀이

- 부분 집합은 모든 탐색의 경로가 정답이 된다.
- 별도의 종료 조건 없이 탐색이 끝나면 저절로 함수가 종료되게 설정하였다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class MySolution1:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        def dfs(idx, curr_set=[]):
            result.append(curr_set)
            for i in range(idx, len(nums)):
                new_set = curr_set[:]
                dfs(i + 1, new_set + [nums[i]])

        result = []
        dfs(0)
        return result
```

</div>
</details>

## 문제 풀이

### 1. 트리의 모든 DFS 결과

- 풀이를 보면서 깨달은 사실인데, 부분 집합을 구하는 과정에서 별도의 리스트를 생성하고 변형하는 과정 없이 `nums` 리스트의 값을 순회하면서 기존 `curr_set`에 요소를 추가만 하여 재귀를 호출해도 큰 문제는 되지 않는다. 따라서 굳이 얕은 복사(`[:]`)를 수행하지 않아도 된다.
- 그 외에는 내가 푼 방법과 큰 차이가 없다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution1:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []

        def dfs(index, path):
            # 매번 결과 추가
            result.append(path)

            # 경로를 만들면서 DFS
            for i in range(index, len(nums)):
                dfs(i + 1, path + [nums[i]])

        dfs(0, [])
        return result
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p355-356.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
