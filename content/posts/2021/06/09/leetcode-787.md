---
title: LeetCode 787번 문제
description: Cheapest Flights Within K Stops
tags: algorithm, python, leetcode, bfs, dijkstra_algorithm
---

## 문제 링크

https://leetcode.com/problems/cheapest-flights-within-k-stops/

## 나의 풀이 (풀이 실패)

- 다익스트라 알고리즘을 응용하는 문제라서 만만하게 봤다가 무수한 오답 처리만 받았다.
- 정신 나갈 것 같다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List
import collections
import heapq


class MySolution1:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        graph = collections.defaultdict(list)
        for start, end, price in flights:
            graph[start].append((end, price))

        queue = [(src, 0)]
        distance = {src: 0}
        stops = 0
        last_stop = None

        while queue:
            curr_stop, curr_price = heapq.heappop(queue)

            # 노드를 이동한 경우 stops 증가
            if last_stop != curr_stop:
                stops += 1
                last_stop = curr_stop

            # 경유지(k) + 출발지(1) + 도착지(1)
            if stops == k + 2:
                if dst not in distance:
                    stops -= 1
                    continue

            # 도착지에 도착했지만 k만큼의 경유지를 경유하지 않은 경우
            if curr_stop == dst and stops != k + 2:
                print('test:', curr_stop, dst, stops)
                stops -= 1
                continue

            for adj_stop, adj_price in graph[curr_stop]:
                if adj_stop not in distance or curr_price + adj_price < distance[adj_stop]:
                    distance[adj_stop] = curr_price + adj_price
                    heapq.heappush(queue, (adj_stop, curr_price + adj_price))
            # print('current:', curr_stop, stops, queue, distance)
        # print(distance)

        return distance[dst] if dst in distance else -1
```

</div>
</details>

## 문제 풀이

### 1. 다익스트라 알고리즘 응용

- 우선순위 큐에 추가할 때 `k` 이내일 때만 경로를 추가하도록 설정한다.
- 전체 거리를 보관할 필요가 없으므로, 기존에 사용하던 `distance` 딕셔너리는 사용할 필요가 없다.
  - `k` 제한 이내에는 몇 번이나 추가로 방문해도 상관이 없는 문제이기 때문이다.
  - 참고: https://github.com/onlybooks/algorithm-interview/issues/71
- 하지만 이 풀이법도 시간 초과로 인한 오답 처리가 뜬다. 리트코드의 테스트 케이스가 추가된 것 같다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List
import collections
import heapq


class Solution1:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        graph = collections.defaultdict(list)
        for u, v, w in flights:
            # (가격, 도착점)
            graph[u].append((v, w))

        # (가격, 정점, 남은 가능 경유지 수)
        q = [(0, src, k)]

        # 우선순위 큐 최솟값 기준으로 도착점까지 최소 비용 판별
        while q:
            price, node, stop = heapq.heappop(q)
            if node == dst:
                return price
            if stop >= 0:
                for v, w in graph[node]:
                    alt = price + w
                    # 경유지가 하나씩 늘 때마다 stop을 하나씩 감소
                    heapq.heappush(q, (alt, v, stop-1))
        return -1
```

</div>
</details>

### 2. 벨만-포드 알고리즘(Bellman-Ford’s algorithm) 사용

- 다익스트라 알고리즘과는 다르게 가중치가 음수일 경우에도 사용할 수 있다.
- 하지만 정작 테스트 케이스에는 음수가 없다... 왜 벨만-포드 알고리즘으로 풀면 정답 처리가 되는지는 잘 모르겠다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution2:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        distance = [float("inf")] * n
        distance[src] = 0

        for i in range(k + 1):
            temp = distance.copy()

            for u, v, w in flights:
                if temp[u] == float("inf"):
                    continue
                distance[v] = min(distance[v], w + temp[u])
        if distance[dst] == float("inf"):
            return -1

        return distance[dst]
```

</div>
</details>

## 배운 점

### 벨만-포드 알고리즘(Bellman-Ford’s algorithm)

- 다익스트라 알고리즘과는 달리 가중치가 음수일 경우에도 적용할 수 있다.
- 하지만 음수 가중치가 사이클을 이루고 있으면 적용할 수 없다. 따라서 각 엣지에 대해 거리를 업데이트하는 과정(Edge Relaxation)을 수행한 후 마지막으로 그래프의 모든 엣지에 대해 Edge Relaxation을 1번 수행해야 한다. 이 과정에서 한 번이라도 업데이트가 일어난다면 사이클이 존재한다는 의미이다.
  - 풀이 2에서는 마지막 과정이 생략되었는데, 아마 테스트 케이스에 음수 가중치가 없기 때문으로 보인다.
  

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p379-382.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
- https://leetcode.com/problems/cheapest-flights-within-k-stops/discuss/1259258/Bellman-ford-All-test-case-working-Python
- https://ratsgo.github.io/data%20structure&algorithm/2017/11/27/bellmanford/
