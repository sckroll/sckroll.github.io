---
title: LeetCode 783번 문제
description: Minimum Distance Between BST Nodes
tags: algorithm, leetcode, python, tree, bst
---

## 문제 링크

https://leetcode.com/problems/minimum-distance-between-bst-nodes/

## 나의 풀이 (풀이 실패)

- 도저히 풀이 방법이 떠오르지 않아 다음에 다시 재도전하기로 했다.

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
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        def dfs(root: TreeNode):
            if root.left:
                left = dfs(root.left)
                self.min_distance = min(self.min_distance, abs(root.val - left))
            if root.right:
                right = dfs(root.right)
                self.min_distance = min(self.min_distance, abs(root.val - right))
            return root.val

        # 조건 최대치인 10^5으로 초기화
        self.min_distance = 10 ** 5
        dfs(root)
        return self.min_distance
```

</div>
</details>

## 문제 풀이

### 1. 재귀 구조로 중위 순회

- 루트 노드와 가장 차이가 작을 수 있는 노드는 왼쪽 자식 노드의 오른쪽 끝 자식 노드와 오른쪽 자식 노드의 왼쪽 끝 자식 노드가 해당된다.
- 중위 순회를 하다 보면 위의 두 노드와 루트 노드를 자동으로 비교하게 된다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
import sys
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution1:
    prev = -sys.maxsize
    result = sys.maxsize

    # 재귀 구조 중위 순회 비교 결과
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        if root.left:
            self.minDiffInBST(root.left)

        # 전위에 위치한 노드가 현재의 루트 노드보다 크기가 작으므로 abs()를 쓸 필요가 없음
        # 처음 아래 코드에 접근했을 때 result 변수는 sys.maxsize가 나오지만,
        # prev 변수가 현재 노드 값으로 재할당된 후 다음 순회 과정에서 result 변수는 정상적인 범위의 값으로 바뀌게 됨
        # (애초에 입력 조건에 적어도 노드가 2개 이상 존재한다고 명시되어 있음)
        self.result = min(self.result, root.val - self.prev)
        self.prev = root.val

        if root.right:
            self.minDiffInBST(root.right)

        return self.result
```

</div>
</details>

### 2. 반복 구조로 중위 순회

<details>
<summary>소스 코드</summary>
<div markdown="1">


```python
import sys
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution2:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        prev = -sys.maxsize
        result = sys.maxsize

        stack = []
        node = root

        # 반복 구조 중위 순회 비교 결과
        while stack or node:
            while node:
                stack.append(node)
                node = node.left

            node = stack.pop()

            result = min(result, node.val - prev)
            prev = node.val

            node = node.right

        return result
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p435-443.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
