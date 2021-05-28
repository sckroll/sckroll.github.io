---
title: LeetCode 200번 문제
description: Number of Islands
tags: algorithm, python, leetcode, dfs
---

## 문제 링크

https://leetcode.com/problems/number-of-islands/

## 나의 풀이

- 실행 시간과 메모리 최적화가 필요한 풀이법이다.

```python
from typing import List, Tuple


class Solution:
    def find_path(self, x, y, lands=[]) -> List[Tuple[int]]:
        if x < 0 or x >= len(self.grid) or y < 0 or y >= len(self.grid[x]):
            return lands
        if (x, y) in self.visited:
            return lands

        if self.grid[x][y] == '1':
            lands.append((x, y))
            self.visited.add((x, y))
            lands = self.find_path(x - 1, y, lands)
            lands = self.find_path(x + 1, y, lands)
            lands = self.find_path(x, y - 1, lands)
            lands = self.find_path(x, y + 1, lands)
        return lands

    def numIslands(self, grid: List[List[str]]) -> int:
        self.grid = grid
        self.visited = set()

        land_list = []
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == '1':
                    land_list.append((i, j))

        islands = prev_length = 0
        for land in land_list:
            lands = self.find_path(*land)
            if len(lands) > prev_length:
                islands += 1
                prev_length = len(lands)

        return islands
```

## 문제 풀이

### 1. DFS로 그래프 탐색

```python
from typing import List


class Solution1:
    def dfs(self, grid: List[List[str]], i: int, j: int):
        # 더 이상 땅이 아닌 경우 종료
        if i < 0 or i >= len(grid) or \
                j < 0 or j >= len(grid[0]) or \
                grid[i][j] != '1':
            return

        # 발견한 땅을 1이 아닌 값으로 설정함으로써
        # 다음에 다시 계산하는 경우가 발생하지 않도록 만듦 (일종의 가지치기)
        grid[i][j] = '0'

        # 동서남북 탐색
        self.dfs(grid, i+1, j)
        self.dfs(grid, i-1, j)
        self.dfs(grid, i, j+1)
        self.dfs(grid, i, j-1)

    def numIslands(self, grid: List[List[str]]) -> int:
        # 예외 처리
        if not grid:
            return 0

        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    self.dfs(grid, i, j)
                    # 모든 육지 탐색 후 카운트 1 증가
                    count += 1
        return count
```

### 1-1. 풀이 1에서 `grid` 변수를 클래스의 멤버 변수로 선언

- `dfs` 함수를 호출할 때마다 매번 `grid` 변수를 넘기는 것을 방지하는 방법이다.

```python
from typing import List


class Solution1:
    grid: List[List[str]]

    def dfs(self, i: int, j: int):
        # 더 이상 땅이 아닌 경우 종료
        if i < 0 or i >= len(self.grid) or \
                j < 0 or j >= len(self.grid[0]) or \
                self.grid[i][j] != '1':
            return

        self.grid[i][j] = '0'

        # 동서남북 탐색
        self.dfs(i+1, j)
        self.dfs(i-1, j)
        self.dfs(i, j+1)
        self.dfs(i, j-1)

    def numIslands(self, grid: List[List[str]]) -> int:
        self.grid = grid

        # 예외 처리
        if not self.grid:
            return 0

        count = 0
        for i in range(len(self.grid)):
            for j in range(len(self.grid[0])):
                if self.grid[i][j] == '1':
                    self.dfs(i, j)
                    # 모든 육지 탐색 후 카운트 1 증가
                    count += 1
        return count
```

### 1-2. 풀이 1에서 `dfs` 함수를 `numIslands`의 중첩 함수로 변경

- `grid` 변수 앞에 매번 `self.`를 붙임으로 인해 가독성이 떨어지는 것을 방지하는 방법이다.

```python
from typing import List


class Solution1:
    def numIslands(self, grid: List[List[str]]) -> int:
        def dfs(i: int, j: int):
            # 더 이상 땅이 아닌 경우 종료
            if i < 0 or i >= len(grid) or \
                    j < 0 or j >= len(grid[0]) or \
                    grid[i][j] != '1':
                return

            grid[i][j] = '0'

            # 동서남북 탐색
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)

        # 예외 처리
        if not grid:
            return 0

        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    dfs(i, j)
                    # 모든 육지 탐색 후 카운트 1 증가
                    count += 1
        return count
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p331-337.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
