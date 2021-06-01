---
title: LeetCode 207번 문제
description: Course Schedule
tags: algorithm, python, leetcode, dfs, graph
---

## 문제 링크

https://leetcode.com/problems/course-schedule/

## 나의 풀이 (풀이 실패)

- 나름대로 제한 시간을 두고 풀어보려 했으나... 어쩔 수 없었다. 우선 킵해놓고 나중에 다시 풀어봐야겠다.

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

### 1. DFS로 순환 구조 판별 (시간 초과)

- 모든 코스를 완료할 수 있는지 판별하기 위해서는 모든 코스가 순환 구조를 이루고 있는지 확인해야 한다.
- 하지만 해당 풀이법을 사용하면 시간 초과로 인해 오답 처리가 되었다. 아마 리트코드 테스트 케이스가 추가된 듯 싶다.

```python
from typing import List
import collections


class Solution1:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = collections.defaultdict(list)
        # x를 완료하기 위해 y를 끝내야 하므로 x -> y 연결
        for x, y in prerequisites:
            graph[x].append(y)

        # 이미 방문했던 노드를 중복 없이 저장
        traced = set()

        def dfs(i):
            # 순환 구조이면 False
            if i in traced:
                return False

            traced.add(i)
            for y in graph[i]:
                if not dfs(y):
                    return False

            # 탐색 종료 후 순환 노드 삭제
            traced.remove(i)

            return True

        # 순환 구조 판별
        # graph를 list() 함수로 묶어서 graph의 키로만 이루어진 리스트 사용
        # 이렇게 사용한 이유는 아래에 설명
        for x in list(graph):
            if not dfs(x):
                return False

        return True
```

### 2. 가지치기를 이용한 최적화

- DFS는 순환이 발견될 때까지 모든 자식 노드를 탐색하기 때문에 불필요하게 동일한 그래프를 여러 번 탐색할 수도 있다.
- 따라서 한 번 방문한 그래프는 무조건 `True`로 리턴하도록 하여 가지치기를 구현한다.

```python
from typing import List
import collections


class Solution2:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = collections.defaultdict(list)
        for x, y in prerequisites:
            graph[x].append(y)

        # 이미 방문했던 노드를 중복 없이 저장
        traced = set()

        # 방문 여부를 저장하는 변수
        visited = set()

        def dfs(i):
            # 순환 구조이면 False
            if i in traced:
                return False

            # 방문 여부 확인
            if i in visited:
                return True

            traced.add(i)
            for y in graph[i]:
                if not dfs(y):
                    return False

            # 탐색 종료 후 순환 노드 삭제
            traced.remove(i)

            # 탐색 종료 후 방문 노드 추가
            visited.add(i)

            return True

        # 순환 구조 판별
        for x in list(graph):
            if not dfs(x):
                return False

        return True
```

## 배운 점

### `defaultdict` 순회 문제

- 풀이 1과 풀이 2에서 순환 구조를 판별할 때 아래 코드를 사용했다.
  ```python
  # 순환 구조 판별
  for x in list(graph):
      if not dfs(x):
          return False
  ```
- 만약 `list()`를 사용하지 않는다면 다음과 같은 에러가 뜬다.
  ```python
  # 순환 구조 판별
  for x in graph:
      if not dfs(x):
          return False
  ```
  ```
  RuntimeError: dictionary changed size during iteration
  ```
- 이는 `collections.defaultdict()`를 사용하면 빈 값 조회 시 오류가 발생하지 않도록 처리하기 때문에 반복문에서 `graph`의 값이 변경된다는 오류가 발생하는 것이다. [스택 오버플로우](https://stackoverflow.com/questions/11941817/how-to-avoid-runtimeerror-dictionary-changed-size-during-iteration-error)의 답변을 참고하면 해당 변수를 `list()`로 묶으면 된다. (파이썬 3 기준) `list()`로 묶으면 새로운 복사본을 만들어서 `graph` 변수를 `defaultdict()`로부터 분리 & 고정시킬 수 있다.

### 위상 정렬 (Topological Sort)

- 유향(방향이 있는) 그래프의 꼭짓점들을 변의 방향을 거스르지 않도록 나열하는 정렬 알고리즘
  - 어떤 일을 하는 순서를 찾는 알고리즘
  - ex: 대학의 선수과목 구조
- 하나의 방향 그래프는 여러 위상 정렬이 가능하며, 위상 정렬의 과정에서 선택되는 정점의 순서를 위상 순서(Topological Order)라고 한다.
- 위상 정렬이 성립하기 위해서는 **그래프의 순환이 존재하지 않아야 한다.**
  - 즉, 진입 차수(노드로 들어오는 간선)가 `0`인 시작점이 존재해야 한다.
- 위상 정렬 순서 (큐를 사용하는 방법)
   1. 각 노드들의 진입 차수 계산
   2. 진입 차수가 `0`인 노드들을 큐에 삽입
      - 여러 개일 경우 삽입 순서는 상관 없다.
   3. 큐에서 노드를 꺼내 연결된 간선을 제거
   4. 제거로 인해 진입 차수가 `0`이 된 노드를 큐에 삽입
   5. 3번과 4번을 반복하며 큐가 비었으면 종료
      - 모든 원소를 방문하기 전에 큐가 빈다면 그래프의 순환이 존재한다는 뜻이므로 위상 정렬이 불가능하다.

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p364-370.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
- https://ko.wikipedia.org/wiki/%EC%9C%84%EC%83%81%EC%A0%95%EB%A0%AC
- https://gmlwjd9405.github.io/2018/08/27/algorithm-topological-sort.html
- https://ssungkang.tistory.com/entry/Algorithm-%EC%9C%84%EC%83%81%EC%A0%95%EB%A0%AC
- https://velog.io/@max9106/Algorithm-%EC%9C%84%EC%83%81-%EC%A0%95%EB%A0%ACTopology-Sort
