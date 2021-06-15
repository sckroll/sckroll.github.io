---
title: LeetCode 543번 문제
description: Diameter of Binary Tree
tags: algorithm, python, leetcode, dfs, tree
---

## 문제 링크

https://leetcode.com/problems/diameter-of-binary-tree/

## 나의 풀이 (풀이 실패)

- 노드의 값이 모두 다른 경우는 별다른 문제가 없지만, 모든 요소의 값이 똑같을 경우 아래 방법으로 해결할 수 없다.
- ex: `[0, 0, 0, 0, None, None, 0, None, None, None, 0]`

```python
class MySolution1:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        # 리프 노드까지의 모든 경로를 routes 리스트에 저장
        def dfs(tree, curr_route):
            if not tree:
                if curr_route not in routes:
                    routes.append(curr_route)
                return

            appended_route = curr_route[:]
            appended_route.append(tree.val)
            dfs(tree.left, appended_route)
            dfs(tree.right, appended_route)

        routes = []
        dfs(root, [])

        max_length = 0
        # routes에 존재하는 모든 리프 노드까지의 경로끼리 비교,
        # 요소의 값이 달라지는 순간부터 이후의 모든 값의 개수를 합산하면
        # 두 리프 노드의 길이(length)가 됨
        for i in range(len(routes)):
            for j in range(i, len(routes)):
                a, b = routes[i], routes[j]
                print(a, b)

                for k in range(min(len(a), len(b))):
                    if a[k] != b[k]:
                        length = (len(a) - k) + (len(b) - k)
                        max_length = max(max_length, length)
                # 리프 노드가 하나만 있을 경우를 위해
                # 두 노드의 최대 거리를 계산
                # ex: [1, 2]
                length = max(len(a), len(b)) - min(len(a), len(b))
                max_length = max(max_length, length)
        return max_length
```

## 문제 풀이

### 1. 상태값 누적 트리 DFS

- 리프 노드까지 탐색한 다음 부모로 거슬러 올라가면서 각각의 거리를 계산해 상태값(리프 노드에서 현재 노드까지의 거리)을 업데이트하는 방법이다.
- 존재하지 않는 노드에 `-1`을 부여, 거리는 `왼쪽 자식 노드의 상태값 + 오른쪽 자식 노드의 상태값 + 2`으로 계산한다.
  - `2`를 더한 이유는 현재 노드와 왼쪽, 오른쪽 자식 노드와의 거리가 `2`이기 때문이다.
- 중첩 함수(`dfs`)를 사용할 때 클래스 변수(`self.longest`)를 사용한 이유
  - 중첩 함수에서 부모 함수(`diameterOfBinaryTree`)의 변수를 재할당하면 참조 ID가 변경되어 별도의 로컬 변수로 선언되기 때문이다.
  - 단, `self.longest`의 값이 리스트나 딕셔너리라면 굳이 클래스 변수를 사용할 필요가 없다.

```python
class Solution1:
    longest: int = 0

    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        def dfs(node: TreeNode) -> int:
            # 존재하지 않는 노드의 상태값은 -1
            if not node:
                return -1

            # 왼쪽, 오른쪽의 각 리프 노드까지 탐색
            left = dfs(node.left)
            right = dfs(node.right)

            # 가장 긴 경로
            self.longest = max(self.longest, left + right + 2)

            # 상태값
            return max(left, right) + 1

        dfs(root)
        return self.longest
```

## 배운 점

### 이진 트리의 유형

1. **정 이진 트리 (Full Binary Tree)**: 모든 노드가 0개 또는 2개의 자식 노드를 갖는 트리
2. **완전 이진 트리 (Complete Binary Tree)**: 마지막 레벨을 제외하고 모든 레벨이 완전히 채워져 있으며, 마지막 레벨의 모든 노드는 가장 왼쪽부터 채워져 있는 트리
3. **포화 이진 트리 (Perfect Binary Tree)**: 모든 노드가 2개의 자식 노드를 가지고 있으며, 모든 리프 노드가 동일한 깊이 또는 레벨을 갖는, 말 그대로 가장 완벽한(Perfect) 유형의 트리

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p390-392.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
