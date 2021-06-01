---
title: LeetCode 332번 문제
description: Reconstruct Itinerary
tags: algorithm, python, leetcode, dfs, stack
---

## 문제 링크

https://leetcode.com/problems/reconstruct-itinerary/

## 나의 풀이 (시간 초과)

- 인접 리스트(`itinerary`)를 딕셔너리로 만들고 모든 경로(`all_routes`)를 세트에 저장한 후 해당하는 경로를 하나씩 빼면서 DFS를 구현하려 했으나 출발 항공과 도착 항공이 중복되는 경우가 있었다.
- 그래서 세트가 아닌 그냥 리스트로 구현했지만 시간 초과로 인한 오답 처리가 되었다.
  - 아마 DFS 도중 현재 경로가 `all_routes`(DFS에서는 `routes`)에 존재하는지 확인하는 과정에서 시간 복잡도가 늘어난 것으로 보인다.
- 참고로 `result`를 `min()` 함수로 감싸서 리턴한 이유는 `result` 리스트에는 DFS를 호출하면서 얻은 모든 경로가 저장되는데, `min()`을 호출함으로써 사전 순서가 가장 빠른 경로를 리턴할 수 있기 때문이다.

```python
from typing import List
import collections


class MySolution1:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        result = []
        all_routes = []
        itinerary = collections.defaultdict(list)
        for i, [departure, arrival] in enumerate(tickets):
            itinerary[departure].append(arrival)
            all_routes.append((departure, arrival))

        def dfs(dep, path, routes):
            if len(routes) == 0:
                result.append(path)
                return

            for arrival in itinerary[dep]:
                if (dep, arrival) in routes:
                    routes.remove((dep, arrival))
                    dfs(arrival, path + [arrival], routes)
                    routes.append((dep, arrival))

        dfs('JFK', ['JFK'], all_routes)
        return min(result)
```

## 문제 풀이

### 1. DFS로 일정 그래프 구성

```python
from typing import List
import collections


class Solution1:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = collections.defaultdict(list)

        # 그래프 순서대로 구성
        # 사전 어휘 순으로 정렬 (굳이 매번 sort()를 호출할 필요 없음)
        for a, b in sorted(tickets):
            graph[a].append(b)

        route = []

        def dfs(a):
            # 첫 번째 값을 읽어 어휘 순 방문
            # pop()으로 꺼내므로 그래프에서 해당 경로는 사라짐
            # 어휘 순으로 방문해야 하기 때문에
            # 정렬된 리스트 중 맨 앞의 값을 추출 (큐 연산)
            while graph[a]:
                dfs(graph[a].pop(0))

            # route에 쌓이는 건 역순
            route.append(a)

        dfs('JFK')
        # 다시 뒤집어 어휘 순 결과로
        return route[::-1]
```

### 2. 스택 연산으로 큐 연산 최적화 시도

- 풀이 1의 큐 연산(`pop(0)`)은 시간 복잡도가 $O(n)$이기 때문에 $O(1)$으로 최적화시킬 필요가 있다.

```python
from typing import List
import collections


class Solution2:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = collections.defaultdict(list)

        # 그래프를 뒤집어서 구성 (reverse=True)
        for a, b in sorted(tickets, reverse=True):
            graph[a].append(b)

        route = []

        def dfs(a):
            # 마지막 값을 읽어 어휘 순 방문
            while graph[a]:
                dfs(graph[a].pop())
            route.append(a)

        dfs('JFK')
        # 다시 뒤집어 어휘 순 결과로
        return route[::-1]
```

### 3. 일정 그래프 반복

- 재귀 대신 반복으로 풀이하는 방법이다.

```python
from typing import List
import collections


class Solution3:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = collections.defaultdict(list)

        # 그래프 순서대로 구성
        for a, b in sorted(tickets):
            graph[a].append(b)

        route, stack = [], ['JFK']
        while stack:
            # 반복으로 스택을 구성하되 막히는 부분에서 풀어내는 처리
            # 즉, stack[-1]의 인접 노드가 없으면 while 문을 건너뛰고 스택에서 pop
            while graph[stack[-1]]:
                stack.append(graph[stack[-1]].pop(0))
            route.append(stack.pop())

        # 다시 뒤집어 어휘 순 결과로
        return route[::-1]
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p357-363.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
