---
title: LeetCode 226번 문제
description: Invert Binary Tree
tags: algorithm, python, leetcode, tree, dfs, bfs
---

## 문제 링크

https://leetcode.com/problems/invert-binary-tree/

## 나의 풀이 (풀이 실패)

- 포화 이진 트리일 때 뒤집는 데 성공했지만, 그 외의 트리에는 적용하지 못했다. 너무 오랜만에 풀어서 그런가, 머리가 잘 돌아가지 않는 느낌...

```python
from typing import Optional, List, Deque
import collections


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class MySolution1:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        values: Deque[int] = collections.deque([])
        val_queue: List[int] = []
        node_queue: Deque[TreeNode] = collections.deque([root])
        i: int = 1

        while node_queue:
            curr_node = node_queue.popleft()
            if curr_node is not None:
                node_queue.append(curr_node.left)
                node_queue.append(curr_node.right)
                val_queue.append(curr_node.val)

            if i == len(val_queue):
                values.extend(val_queue[::-1])
                val_queue.clear()
                i *= 2

        node_queue.append(root)
        while node_queue:
            curr_node = node_queue.popleft()
            if curr_node is not None:
                node_queue.append(curr_node.left)
                node_queue.append(curr_node.right)
                curr_node.val = values.popleft()

        return root
```

## 문제 풀이

### 1. 파이썬다운 방식 (Bottom-Up)

- 트리의 우측 하단부터 재귀를 시도하며(실제로는 자식 노드인 None부터 시작), 부모 노드가 스왑될 땐 자식 노드들도 따라오는 점을 기억하자.
- 즉, 2의 자식 노드가 3과 1이고 7의 자식 노드가 9와 6일 때, 스왑되고 난 뒤에 7의 자식 노드가 3과 1이 되는 일은 없다는 의미다.

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution1:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root:
            root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
            return root
        # 파이썬에서는 아무 것도 리턴하지 않으면 암묵적으로 None을 리턴하기 때문에 아래 코드는 생략할 수 있다.
        return None
```

### 2. 반복 구조로 BFS (Top-Down)

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution2:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        queue = collections.deque([root])

        while queue:
            node = queue.popleft()

            # 부모 노드로부터 하향식 스왑
            if node:
                node.left, node.right = node.right, node.left

                queue.append(node.left)
                queue.append(node.right)

        return root
```

### 3. 반복 구조로 DFS

- 풀이 2번에서 큐(Deque) 대신에 스택을 사용하면 된다.

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution3:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        stack = collections.deque([root])

        while stack:
            node = stack.pop()

            # 부모 노드로부터 하향식 스왑
            if node:
                node.left, node.right = node.right, node.left

                stack.append(node.left)
                stack.append(node.right)

        return root
```

### 4. 반복 구조로 DFS 후위 순회

- 풀이 2번 혹은 3번에서 적용한 방식인 전위 순회 대신, 큐/스택에 삽입하는 코드를 스왑하는 코드보다 먼저 실행하는 후위 순회를 사용해도 결과는 같다.

```python
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution4:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        stack = collections.deque([root])

        while stack:
            node = stack.pop()

            if node:
                stack.append(node.left)
                stack.append(node.right)
                
                # 후위 순회
                node.left, node.right = node.right, node.left

        return root
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p397-403.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
