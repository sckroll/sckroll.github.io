---
title: LeetCode 310번 문제
description: Minimum Height Trees
tags: algorithm, python, leetcode, tree
---

## 문제 링크

https://leetcode.com/problems/minimum-height-trees/

## 나의 풀이 (풀이 실패)

### 첫 번째 시도 (시간 초과)

- 트리 순회 결과를 우선순위 큐(힙)에 저장 후 높이가 가장 낮은 결과들만 추출하여 리턴하여 구현했으나 TLE가 떴다...

```python
from typing import List
import collections, heapq


class MySolution1:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        graph = collections.defaultdict(list)
        p_queue = []

        # 그래프 구성
        for s, t in edges:
            graph[s].append(t)
            graph[t].append(s)

        for i in range(n):
            visited = set()
            stack = [(i, 0)]
            max_length = 0

            # 스택 루프
            while stack:
                curr_node, length = stack.pop()
                visited.add(curr_node)

                # 방문한 적 없는 노드만 스택에 추가
                for next_node in graph[curr_node]:
                    if next_node not in visited:
                        stack.append((next_node, length + 1))

                # 트리의 길이 갱신
                max_length = max(max_length, length)

            # 우선순위 큐에 추가
            heapq.heappush(p_queue, (max_length, i))

        # 우선순위 큐에서 길이가 최소인 루트 노드만 추출
        # 하나뿐만 아니라 여러 개일 수도 있으므로 최소가 아닌 값이 나올 때까지 루프
        min_node = heapq.heappop(p_queue)
        result = [min_node[1]]
        while p_queue:
            length, i = heapq.heappop(p_queue)
            if length == min_node[0]:
                result.append(i)
        return result
```

### 두 번째 시도 (시간 초과)

- 우선순위 큐를 사용하는 대신 트리를 순회하면서 최소 높이의 트리만 루트 값을 `result` 리스트에 저장하기로 했으나, 마찬가지로 TLE가 뜨고 말았다. 우선순위 큐가 원인이 아니라 트리를 순회하는 부분이 문제인 듯 하다.

```python
from typing import List
import collections, heapq


class MySolution2:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        graph = collections.defaultdict(list)
        min_length = 2 * 10 ** 4
        result = []

        # 그래프 구성
        for s, t in edges:
            graph[s].append(t)
            graph[t].append(s)

        for i in range(n):
            visited = set()
            stack = [(i, 0)]
            max_length = 0

            # 스택 루프
            while stack:
                curr_node, length = stack.pop()
                visited.add(curr_node)

                # 방문한 적 없는 노드만 스택에 추가
                for next_node in graph[curr_node]:
                    if next_node not in visited:
                        stack.append((next_node, length + 1))

                # 트리의 길이 갱신
                max_length = max(max_length, length)
                
            # 트리의 길이가 최소 길이보다 더 작을 때 해당 루트 노드로 result 리스트 초기화
            # 최소 길이가 같은 루트 노드가 더 있다면 result 리스트에 추가
            if max_length < min_length:
                min_length = max_length
                result = [i]
            elif max_length == min_length:
                result.append(i)

        return result
```

## 문제 풀이

### 1. 단계별 리프 노드 제거

- 최소 높이를 구성하려면 가장 가운데에 위치한 값이 루트여야 한다.
- 즉, 리프 노드를 하나씩 제거하면서 남아 있는 값을 찾으면 해당 값이 가장 가운데에 있는 값이므로 해당 값을 루트로 하여 트리를 구성하면 높이가 최소인 트리를 구성할 수 있다.

```python
from typing import List
import collections


class Solution1:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        # 예외 처리
        if n <= 1:
            return [0]
        
        # 양방향 그래프 구성
        graph = collections.defaultdict(list)
        for i, j in edges:
            graph[i].append(j)
            graph[j].append(i)

        # 리프 노드 = 그래프에서 해당 키의 배열 요소 개수가 하나뿐인 노드
        leaves = []
        for i in range(n + 1):
            if len(graph[i]) == 1:
                leaves.append(i)

        # 루트 노드가 남을 때까지 반복해서 제거
        # 마지막에 남는 노드는 1개 또는 2개가 될 수 있음
        while n > 2:
            n -= len(leaves)
            new_leaves = []
            
            for leaf in leaves:
                neighbor = graph[leaf].pop()
                graph[neighbor].remove(leaf)

                if len(graph[neighbor]) == 1:
                    new_leaves.append(neighbor)

            leaves = new_leaves

        return leaves
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p416-424.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
