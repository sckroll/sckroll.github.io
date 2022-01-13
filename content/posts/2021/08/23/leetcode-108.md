---
title: LeetCode 108번 문제
description: Convert Sorted Array to Binary Search Tree
tags: algorithm, python, leetcode, tree, bst
---

## 문제 링크

https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

## 나의 풀이

- 이진 탐색 트리(BST)를 응용하여 재귀 호출하면서 해결하였다.


<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class MySolution1:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if not nums:
            return None

        # 인덱스 설정
        start, end = 0, len(nums) - 1
        mid = (start + end) // 2

        # 현재 노드와 양쪽 자식 노드 구성
        root = TreeNode(nums[mid])
        root.left = self.sortedArrayToBST(nums[0:mid])
        root.right = self.sortedArrayToBST(nums[mid+1:])
        return root
```

## 문제 풀이

 검색 결과로 트리 구성

- 로직은 같지만, 위의 방법처럼 굳이 `start`와 `end` 변수를 생성할 필요 없이 `mid` 하나로 슬라이싱을 수행하는 방법이다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution1:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if not nums:
            return None

        mid = len(nums) // 2

        # 분할 정복으로 이진 검색 결과 트리 구성
        node = TreeNode(nums[mid])
        node.left = self.sortedArrayToBST(nums[:mid])
        node.right = self.sortedArrayToBST(nums[mid+1:])

