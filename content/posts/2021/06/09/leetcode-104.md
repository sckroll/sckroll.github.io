---
title: LeetCode 104번 문제
description: Maximum Depth of Binary Tree
tags: algorithm, python, leetcode, tree
---

## 문제 링크

https://leetcode.com/problems/maximum-depth-of-binary-tree/

## 나의 풀이

- DFS 재귀 호출을 사용하여 좌, 우 자식 노드 중 더 깊은 방향을 리턴한다.

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class MySolution1:
    def maxDepth(self, root: TreeNode) -> int:
        def dfs(node, depth):
            if node is None:
                return depth - 1
            return max(dfs(node.left, depth + 1), dfs(node.right, depth + 1))
        return dfs(root, 1)
```

## 문제 풀이

### 1. 반복 구조로 BFS 풀이

- DFS 구조보다 BFS로 푸는 것이 조금 더 빠르다.

```python
import collections


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution1:
    def maxDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0
        queue = collections.deque([root])
        depth = 0
        
        while queue:
            depth += 1
            # 큐 연산 추출 노드의 자식 노드 삽입
            # len(queue)만큼 반복하므로 자식 노드가 추출될 일은 없음
            for _ in range(len(queue)):
                cur_root = queue.popleft()
                if cur_root.left:
                    queue.append(cur_root.left)
                if cur_root.right:
                    queue.append(cur_root.right)
                    
        # BFS 반복 횟수 == 깊이
        return depth
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p387-389.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
