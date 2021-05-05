---
title: LeetCode 21번 문제
description: Merge Two Sorted Lists
tags: algorithm, python, leetcode, linked_list
---

### 문제 링크

https://leetcode.com/problems/merge-two-sorted-lists/

### 나의 풀이

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def my_solution(self, l1: ListNode, l2: ListNode) -> ListNode:
        # 빈 연결 리스트의 경우
        if not l1 and not l2:
            return None
        if not l1:
            return l2
        if not l2:
            return l1

        # 연결 리스트의 머리와 현재 위치를 초기화
        merged_node = curr_node = None

        # 두 리스트 병합 수행
        while l1 and l2:
            if l1.val >= l2.val:
                if not curr_node:
                    merged_node = curr_node = ListNode(l2.val)
                else:
                    curr_node.next = ListNode(l2.val)
                    curr_node = curr_node.next
                l2 = l2.next
            else:
                if not curr_node:
                    merged_node = curr_node = ListNode(l1.val)
                else:
                    curr_node.next = ListNode(l1.val)
                    curr_node = curr_node.next
                l1 = l1.next

        # 연결 리스트에 요소가 남았다면 남은 요소를 모조리 연결
        if not l1:
            while l2:
                curr_node.next = ListNode(l2.val)
                curr_node = curr_node.next
                l2 = l2.next
        else:
            while l1:
                curr_node.next = ListNode(l1.val)
                curr_node = curr_node.next
                l1 = l1.next

        return merged_node
```

### 문제 풀이

#### 재귀 구조로 연결

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solution1(self, l1: ListNode, l2: ListNode) -> ListNode:
        # l1과 l2 값을 비교, 작은 값을 왼쪽(l1)으로 스왑
        if (not l1) or (l2 and (l1.val > l2.val)):
            l1, l2 = l2, l1
            
        # l1의 next를 재귀 호출
        # 최종적으로 모두 백트래킹으로 엮이면서 하나의 연결 리스트로 병합
        if l1:
            l1.next = self.solution1(l1.next, l2)
        return l1
```

### 배운 점

- 풀이 1번에 사용된 다음 `if` 구문은 괄호를 모두 생략할 수 있다.
  ```python
  if (not l1) or (l2 and (l1.val > l2.val)):
  ```
  ```python
  if not l1 or l2 and l1.val > l2.val:
  ```
  위의 `if` 구문에서 가장 우선순위가 높은 연산자는 `>`이며, 그 다음은 `not l1`이다. 그리고 `and`, `or` 순이다.  
  하지만 `and`가 `or`보다 먼저 실행되는 점을 포함하여 연산자의 우선순위를 모르고 있다면 괄호를 사용하는 편이 더 좋아 보인다. 괄호는 파이썬의 모든 연산자 중에서 가장 우선순위가 높기 때문이다. 실제로 본인도 헷갈리는 부분이고, 가독성을 위해서라도 괄호를 쓰는 편이 더 좋다고 생각한다.

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p213-218.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
