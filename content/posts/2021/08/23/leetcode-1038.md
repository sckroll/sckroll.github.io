---
title: LeetCode 1038번 문제
description: Binary Search Tree to Greater Sum Tree
tags: algorithm, leetcode, python, tree, bst
---

## 문제 링크

https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

## 나의 풀이

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
    def bstToGst(self, root: TreeNode) -> TreeNode:
        def gst(node: TreeNode):
            if not node:
                return

            # 값이 더 큰 오른쪽 자식 노드부터 탐색
            gst(node.right)

            # 현재까지 탐색한 노드의 값을 누적 후 현재 노드에 저장
            node.val += self.sum_number
            self.sum_number = node.val

            # 이후 왼쪽 자식 노드 탐색
            gst(node.left)

        self.sum_number = 0
        gst(root)
        return root
```

</div>
</details>

## 문제 풀이

### 1. 중위 순회로 노드 값 누적

- 오른쪽 자식 -> 부모 -> 왼쪽 자식 순으로 순회하므로 중위(In-Order) 순회에 해당된다.

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
    val: int = 0
    
    def bstToGst(self, root: TreeNode) -> TreeNode:
        # 중위 순회 노드 값 누적
        if root:
            self.bstToGst(root.right)
            self.val += root.val
            root.val = self.val
            self.bstToGst(root.left)

        return root
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p428-430.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
