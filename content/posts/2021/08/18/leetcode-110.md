---
title: LeetCode 110번 문제
description: Balanced Binary Tree
tags: algorithm, python, leetcode, tree, dfs
---

## 문제 링크

https://leetcode.com/problems/balanced-binary-tree/submissions/

## 나의 풀이

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class MySolution1:
    # 높이 균형 여부 (하나의 테스트 케이스가 끝날 때마다 초기화 필요)
    balanced = True

    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        # 예외 처리
        if not root:
            return True

        def dfs(node, level):
            if not node:
                return level - 1
            
            left = dfs(node.left, level + 1)
            right = dfs(node.right, level + 1)
            
            # 양쪽 자식 노드의 레벨 차가 1이 넘으면 높이 균형이 맞지 않은 상태
            if abs(left - right) > 1:
                self.balanced = False
                
            # 부모 노드에서는 레벨이 더 높은 자식 노드를 사용하여 부모 노드의 형제 노드와 비교
            return max(left, right)

        dfs(root, 0)
        result = self.balanced
        # 다음 테스트 케이스를 위해 초기화
        self.balanced = True
        return result
```

## 문제 풀이

### 1. 재귀 구조로 높이 차이 계산

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution1:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def check(root):
            if not root:
                return 0

            left = check(root.left)
            right = check(root.right)

            # 높이 차이가 나는 경우 -1, 이외에는 높이에 따라 1 증가
            # 한 번 -1을 리턴하면 더 이상 다른 값으로 변경되지 않음
            if left == -1 or right == -1 or abs(left - right) > 1:
                return -1
            return max(left, right) + 1

        return check(root) != -1
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p413-415.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
