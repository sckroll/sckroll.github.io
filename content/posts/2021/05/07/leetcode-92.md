---
title: LeetCode 92번 문제
description: Reverse Linked List II
tags: algorithm, python, leetcode, linked_list
---

### 문제 링크

https://leetcode.com/problems/reverse-linked-list-ii/

### 나의 풀이

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def my_solution(self, head: ListNode, left: int, right: int) -> ListNode:
        root = head
        root_end = prev = reverse_end = None

        # left까지 순회
        for _ in range(1, left):
            root_end = root
            root = root.next
        
        # right까지 순서 뒤집기
        for _ in range(left, right + 1):
            next, root.next = root.next, prev
            prev, root = root, next
            # 뒤집히는 연결 리스트의 마지막 노드를 저장
            if not reverse_end:
                reverse_end = prev

        # 모든 노드 연결
        reverse_end.next = root
        if root_end:
            root_end.next = prev
        else:
            # left가 1이어서 root_end가 None일 경우 prev를 head로 설정
            head = prev
        return head
```

### 문제 풀이

#### 반복 구조로 노드 뒤집기

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solution1(self, head: ListNode, left: int, right: int) -> ListNode:
        # 예외 처리
        if not head or left == right:
            return head

        root = start = ListNode(None)
        root.next = head

        # 뒤집히는 연결 리스트의 이전 노드 start와 마지막 노드 end 지정
        for _ in range(left - 1):
            start = start.next
        end = start.next

        # 반복하면서 노드 차례대로 뒤집기
        for _ in range(right - left):
            tmp, start.next, end.next = start.next, end.next, end.next.next
            start.next.next = tmp
        return root.next
```

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p237-239.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
