---
title: LeetCode 24번 문제
description: Swap Nodes in Pairs
tags: algorithm, leetcode, python, linked_list
---

## 문제 링크

https://leetcode.com/problems/swap-nodes-in-pairs/

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
        # 루트 노드, 현재 페어와 연결되는 이전 노드, 홀수 번째 노드
        root, prev, odd_node = None, None, head

        while odd_node:
            # 짝수 번째 노드
            even_node = odd_node.next
            if even_node:
                # 이전 노드가 있다면 연결
                if prev:
                    prev.next = even_node
                odd_node.next, even_node.next = even_node.next, odd_node

            # 요소가 1개일 때와 2개 이상일 때의 루트 노드 설정
            if not root:
                if even_node:
                    root = even_node
                else:
                    root = odd_node

            # 이전 노드와 홀수 노드 갱신
            prev, odd_node = odd_node, odd_node.next
        return root
```

</div>
</details>

## 문제 풀이

### 1. 값만 교환

- 원래 의도와는 맞지 않는 변칙적인 풀이법이므로 추천하지 않는 풀이법이다.

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
        cur = head

        while cur and cur.next:
            # 값만 교환
            cur.val, cur.next.val = cur.next.val, cur.val
            cur = cur.next.next

        return head
```

</div>
</details>

### 2. 반복 구조로 스왑

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
        root = prev = ListNode(None)
        prev.next = head
        while head and head.next:
            # b가 a(head)를 가리키도록 할당
            b = head.next
            head.next = b.next
            b.next = head

            # prev가 b를 가리키도록 할당
            prev.next = b

            # 다음번 비교를 위해 이동
            head = head.next
            prev = prev.next.next
        return root.next
```

</div>
</details>

### 3. 재귀 구조로 스왑

- 2번 풀이에 비해 공간 복잡도가 낮은 방법이다.
- 최종적으로는 백트래킹되면서 연결 리스트가 이어지게 된다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solution3(self, head: ListNode) -> ListNode:
        if head and head.next:
            p = head.next

            # 스왑된 값 리턴
            head.next = self.solution3(p.next)
            p.next = head
            return p
        return head
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p229-232.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
