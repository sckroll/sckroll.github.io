---
title: LeetCode 687번 문제
description: Longest Univalue Path
tags: algorithm, leetcode, python, dfs, tree
---

## 문제 링크

https://leetcode.com/problems/longest-univalue-path/

## 나의 풀이 (풀이 실패)

- 543번 문제를 응용해서 풀어보려 했으나 역부족이었다...

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class MySolution1:
    longest: int = 0

    def longestUnivaluePath(self, root: TreeNode) -> int:
        def dfs(node: TreeNode) -> int:
            # 존재하지 않는 노드의 상태값은 -1
            if not node:
                return -1

            # 왼쪽, 오른쪽의 각 리프 노드까지 탐색
            left = dfs(node.left)
            right = dfs(node.right)

            # 상태값
            distance = 0
            if node.left and node.right:
                if node.left.val == node.right.val == node.val:
                    distance += (math.ceil(left / 2) + 1) + (math.ceil(right / 2) // 2 + 1)
                elif node.left.val == node.val:
                    distance += left + 1
                elif node.right.val == node.val:
                    distance += right + 1
            elif node.left and node.left.val == node.val:
                distance += left + 1
            elif node.right and node.right.val == node.val:
                distance += right + 1

            # 가장 긴 경로
            self.longest = max(self.longest, distance)
            return distance

        dfs(root)
        return self.longest
```

</div>
</details>

## 문제 풀이

### 1. 상태값 거리 계산 DFS

- 내 예상대로 543번 문제와 유사한 방법으로 풀 수 있는 문제였다.
- 백트래킹 과정에서 현재 노드는 양쪽 자식 노드를 모두 연결할 수 있지만, 현재 노드의 부모 노드는 현재 노드의 양쪽 자식 노드 중 하나만 연결해야 한다는 트리의 특징을 간과했기 때문에 제대로 풀이하지 못한 듯하다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution1:
    result: int = 0

    def longestUnivaluePath(self, root: TreeNode) -> int:
        def dfs(node: TreeNode):
            # 존재하지 않는 노드의 상태값을 0으로 설정
            if node is None:
                return 0

            # 존재하지 않는 노드까지 DFS 재귀 탐색
            left = dfs(node.left)
            right = dfs(node.right)

            # 현재 노드가 자식 노드와 동일한 경우 거리 1 증가
            if node.left and node.left.val == node.val:
                left += 1
            else:
                left = 0
            if node.right and node.right.val == node.val:
                right += 1
            else:
                right = 0

            # 왼쪽과 오른쪽 자식 노드 간 거리의 합 최댓값이 결과
            self.result = max(self.result, left + right)

            # 자식 노드 상태값 중 큰 값 리턴
            # 현재 노드는 양쪽 자식 노드를 모두 연결할 수 있지만
            # 현재 노드의 부모 노드에서는 지금의 양쪽 자식 노드를 동시에 연결할 수 없기 때문에
            # 양쪽 자식 노드 중 한쪽만 선택해야 함 (이왕이면 더 큰 쪽으로 선택)
            return max(left, right)

        dfs(root)
        return self.result
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p393-396.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
