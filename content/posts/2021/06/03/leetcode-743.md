---
title: LeetCode 743번 문제
description: Network Delay Time
tags: algorithm, python, leetcode, bfs, dijkstra_algorithm
---

## 문제 링크

https://leetcode.com/problems/network-delay-time/

## 나의 풀이

- 다익스트라 알고리즘을 구현하여 문제를 해결하였다.
- 모든 노드에 대한 거리를 구하여 리스트 `distance`에 저장한 상태에서 무한대가 아닌 거리의 최댓값이 이 문제의 정답이 된다.
  - 여기선 무한대(`float('inf')`) 대신 `101`로 설정하였는데, 문제에서 언급된 각 노드의 가중치(`w`)의 최댓값이 `100`이기 때문이다.

```python
from typing import List
import collections
import heapq


class MySolution1:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        # 그래프 생성
        graph = collections.defaultdict(list)
        for u, v, w in times:
            graph[u].append((v, w))

        # 문제의 최대 w값이 100이므로 float('inf') 대신 101 설정
        distance = [101 for _ in range(n)]
        
        # k번째 거리를 0으로 초기화
        distance[k-1] = 0
        
        # 우선순위 큐 초기화
        queue = []
        heapq.heappush(queue, (0, k))

        while queue:
            weight, curr_node = heapq.heappop(queue)
            for v, w in graph[curr_node]:
                curr_distance = w + weight
                
                # 거리를 업데이트할 때만 우선순위 큐에 추가
                if curr_distance < distance[v-1]:
                    distance[v-1] = curr_distance
                    heapq.heappush(queue, (curr_distance, v))

        # 거리 리스트의 최댓값이 101이면 모든 노드에 접근할 수 없다는 의미
        return max(distance) if max(distance) != 101 else -1
```

## 문제 풀이

### 1. 다익스트라 알고리즘 구현

- 문제에서 판별해야 하는 사항은 다음과 같다.
  - 모든 노드가 신호를 받는 데 걸리는 시간 = 가장 오래 걸리는 노드까지의 (최단) 시간
  - 모든 노드에 도달할 수 있는지 여부 = 모든 노드의 다익스트라 알고리즘 계산 값이 존재하는지의 여부
- 전반적인 로직은 비슷하지만, 모든 노드까지의 거리에 대해 미리 무한대 값을 할당하는 대신, `dist` 딕셔너리의 키(노드) 존재 유무를 통해 노드의 거리를 판단한다. 즉, `dist`에 키가 존재하지 않으면 해당 노드까지의 거리는 무한대이며, 키가 존재하면 그 값이 해당 노드까지의 거리가 된다.

```python
from typing import List
import collections
import heapq


class Solution1:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = collections.defaultdict(list)
        for u, v, w in times:
            graph[u].append((v, w))

        # 큐 변수: [(소요 시간, 정점)]
        Q = [(0, k)]

        # 거리를 저장하는 dist 변수는 초깃값을 무한대로 모두 설정하는 대신
        # 초깃값이 0인 딕셔너리(defaultdict)로 초기화
        dist = collections.defaultdict(int)

        # 우선순위 큐 최솟값 기준으로 정점까지 최단 경로 삽입
        while Q:
            time, node = heapq.heappop(Q)

            # dist에 해당 노드가 존재하지 않음 = 해당 노드까지의 거리가 무한대
            if node not in dist:
                dist[node] = time
                for v, w in graph[node]:
                    alt = time + w
                    heapq.heappush(Q, (alt, v))

        # 모든 노드의 최단 경로를 구한 경우 dist의 노드 개수가 n개 존재
        if len(dist) == n:
            return max(dist.values())
        return -1
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p373-378.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
