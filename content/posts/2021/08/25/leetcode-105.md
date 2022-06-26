---
title: LeetCode 105번 문제
description: Construct Binary Tree from Preorder and Inorder Traversal
tags: algorithm, leetcode, python, tree, bst, divide_and_conquer
---

## 문제 링크

https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

## 나의 풀이 (풀이 실패)

- 전위 순회와 중위 순회를 동시에 활용할 방법이 떠오르지 않아 풀 수가 없었다.
- 아래 코드는 전위 순회로만 트리를 구성하는 과정을 구현한 것이다. 당연하지만 중위 순회 결과와는 일치하지 않는다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
import collections
from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class MySolution1:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        root = TreeNode(preorder[0])
        queue = collections.deque([root])

        for i in range(1, len(preorder), 2):
            if not queue:
                break
            node = queue.popleft()
            node.left = TreeNode(preorder[i])
            queue.append(node.left)
            if (i+1) < len(preorder):
                node.right = TreeNode(preorder[i+1])
                queue.append(node.right)

        return root
```

</div>
</details>

## 문제 풀이

### 1. 전위 순회 결과로 중위 순회 분할 정복

- 전위 순회의 첫 번째 값은 부모 노드이므로 정확히 중위 순회 결과를 왼쪽과 오른쪽으로 분할시키는 역할을 한다.
- 만약 분할된 전위 순회 결과의 첫 번째 노드가 분할된 중위 순회 결과의 마지막에 위치해 있다면, 해당 노드의 오른쪽 자식 노드는 존재하지 않는다는 의미이다.
- 마찬가지로 전위 순회 결과의 첫 번째 노드가 분할된 중위 순회 결과의 첫 번째에 위치해 있다면, 해당 노드의 왼쪽 자식 노드는 존재하지 않는다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution1:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if inorder:
            # 전위 순회 결과는 중위 순회 분할 인덱스
            # 시간 복잡도를 위해서 pop(0) 대신 Deque를 사용하는 것이 더 좋음
            index = inorder.index(preorder.pop(0))

            # 중위 순회 결과 분할 정복
            node = TreeNode(inorder[index])
            node.left = self.buildTree(preorder, inorder[0:index])
            node.right = self.buildTree(preorder, inorder[index + 1:])

            return node
```

</div>
</details>

### 2. 풀이 1의 preorder를 Deque로 변환 후 사용

- 책에는 예시가 없어서 직접 구현해보았다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
import collections
from typing import Optional, List, Deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution2:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        def dfs(preorder: Deque[int], inorder: List[int]):
            if inorder:
                # 전위 순회 결과는 중위 순회 분할 인덱스
                index = inorder.index(preorder_queue.popleft())

                # 중위 순회 결과 분할 정복
                node = TreeNode(inorder[index])
                node.left = dfs(preorder, inorder[:index])
                node.right = dfs(preorder, inorder[index + 1:])

                return node

        preorder_queue = collections.deque(preorder)
        return dfs(preorder_queue, inorder)
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p444-445.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
