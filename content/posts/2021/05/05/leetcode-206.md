---
title: LeetCode 206번 문제
description: Reverse Linked List
tags: algorithm, leetcode, python, linked_list
---

## 문제 링크

https://leetcode.com/problems/reverse-linked-list/

## 나의 풀이

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def my_solution(self, head: ListNode) -> ListNode:
        reversed_list = None
        while head:
            reversed_list = ListNode(head.val, reversed_list)
            head = head.next
        return reversed_list
```

</div>
</details>

## 문제 풀이

### 1. 재귀 구조로 뒤집기

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solution1(self, head: ListNode) -> ListNode:
        def reverse(node: ListNode, prev: ListNode = None):
            if not node:
                return prev
            next, node.next = node.next, prev
            return reverse(next, node)

        return reverse(head)
```

</div>
</details>

### 2. 반복 구조로 뒤집기

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solution2(self, head: ListNode) -> ListNode:
        node, prev = head, None

        while node:
            next, node.next = node.next, prev
            prev, node = node, next

        return prev
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p219-220.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
