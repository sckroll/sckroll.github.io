---
title: LeetCode 328번 문제
description: Odd Even Linked List
tags: algorithm, python, leetcode, linked_list
---

### 문제 링크

https://leetcode.com/problems/odd-even-linked-list/

### 나의 풀이

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def my_solution(self, head: ListNode) -> ListNode:
        # 홀수 순서 연결 리스트의 루트
        odd_root = head

        # 짝수 순서 연결 리스트, 짝수 번째 포인터
        even_root = even = None

        while head and head.next:
            # 짝수 순서 연결 리스트에 연결
            if even:
                even.next = head.next
                even = even.next
            else:
                even_root = even = head.next

            # 홀수 순서 연결 리스트에 연결
            if head.next.next:
                head.next = head.next.next
                head = head.next
            else:
                # 전체 연결 리스트의 노드 개수가 짝수일 때
                # 마지막에 저장한 홀수 연결 리스트 노드와 짝수 연결 리스트를 연결
                head.next = even_root
                break

        # 짝수 연결 리스트의 마지막 노드를 제거
        if head and even:
            even.next = None
            head.next = even_root

        return odd_root
```

### 문제 풀이

#### 반복 구조로 홀짝 노드 처리

- 사용된 변수(`odd`, `even`, `even_head`)는 `n`의 크기에 관계 없이 항상 일정하게 사용되므로 공간 복잡도 $O(1)$을 만족한다.

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solution1(self, head: ListNode) -> ListNode:
        # 예외 처리
        if head is None:
            return None
        
        odd = head
        even = head.next
        even_head = head.next

        # 반복하면서 홀짝 노드 처리
        while even and even.next:
            odd.next, even.next = odd.next.next, even.next.next
            odd, even = odd.next, even.next

        # 홀수 노드의 마지막을 짝수 헤드로 연결
        odd.next = even_head
        return head
```

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p233-236.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
