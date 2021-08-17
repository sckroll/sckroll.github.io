---
title: LeetCode 617번 문제
description: Merge Two Binary Trees
tags: algorithm, python, leetcode, tree, dfs
---

## 문제 링크

https://leetcode.com/problems/merge-two-binary-trees/

## 나의 풀이 (풀이 실패)

- 도저히 감이 잡히지 않는다... 연습 많이 해야겠다.

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class MySolution1:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        if root1 and root2:
            root1.left = self.mergeTrees(root1.left, root2.left)
            root1.right = self.mergeTrees(root1.right, root2.right)
            root1.val += root2.val
        elif root1 and not root2:
            root1.left = self.mergeTrees(root1.left, None)
            root1.right = self.mergeTrees(root1.right, None)
        elif root2 and not root1:
            root2.left = self.mergeTrees(None, root2.left)
            root2.right = self.mergeTrees(None, root2.right)
            return root2

        return root1
```

## 문제 풀이

### 1. 재귀 탐색 (후위 순회)

- 내가 풀었던 방법인 기존에 존재하는 노드에 다른 노드의 값을 합치는 방법 대신 새로운 노드를 만든 후 왼쪽과 오른쪽 자식에 재귀 호출을 하는 방법을 사용한다.
- 그리고 어느 한쪽 노드가 존재하지 않는다면 존재하는 노드만 리턴하고, 양쪽 자식 노드가 모두 존재하지 않는다면 (암묵적으로) None을 리턴한다.

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution1:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        if root1 and root2:
            node = TreeNode(root1.val + root2.val)
            node.left = self.mergeTrees(root1.left, root2.left)
            node.right = self.mergeTrees(root1.right, root2.right)
            return node
        else:
            return root1 or root2
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p404-405.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
