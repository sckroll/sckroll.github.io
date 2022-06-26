---
title: LeetCode 938번 문제
description: Range Sum of BST
tags: algorithm, leetcode, python, tree, bst
---

## 문제 링크

https://leetcode.com/problems/range-sum-of-bst/

## 나의 풀이

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class MySolution1:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        def dfs(root):
            if not root:
                return
            
            # 범위 내에 있을 때에만 값 누적
            if low <= root.val <= high:
                self.sum_number += root.val
            
            # 자식 노드 탐색
            dfs(root.left)
            dfs(root.right)
        
        self.sum_number = 0
        dfs(root)
        return self.sum_number
```

</div>
</details>

## 문제 풀이

### 1. 재귀 구조 DFS로 브루트 포스 탐색

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution1:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        if not root:
            return 0

        return (root.val if low <= root.val <= high else 0) + self.rangeSumBST(root.left, low, high) + self.rangeSumBST(root.right, low, high)
```

</div>
</details>

### 2. DFS 가지치기로 필요한 노드 탐색

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution2:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        def dfs(node: TreeNode):
            if not node:
                return 0

            if node.val < low:
                return dfs(node.right)
            elif node.val > high:
                return dfs(node.left)
            return node.val + dfs(node.left) + dfs(node.right)

        return dfs(root)
```

</div>
</details>

### 3. 반복 구조 DFS로 필요한 노드 탐색

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution3:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        stack, sum = [root], 0

        # 스택 이용 필요한 노드 DFS 반복
        while stack:
            node = stack.pop()
            if node:
                if node.val > low:
                    stack.append(node.left)
                if node.val < high:
                    stack.append(node.right)
                if low <= node.val <= high:
                    sum += node.val

        return sum
```

</div>
</details>

### 4. 반복 구조 BFS로 필요한 노드 탐색

- 스택을 큐로 변경하였으며, 성능을 위해서는 Deque를 이용하는 것이 더 좋다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution4:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        queue, sum = [root], 0

        # 스택 이용 필요한 노드 DFS 반복
        while queue:
            node = queue.pop(0)
            if node:
                if node.val > low:
                    queue.append(node.left)
                if node.val < high:
                    queue.append(node.right)
                if low <= node.val <= high:
                    sum += node.val

        return sum
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p431-434.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
