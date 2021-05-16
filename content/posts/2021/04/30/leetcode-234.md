---
title: LeetCode 234번 문제
description: Palindrome Linked List
tags: algorithm, python, leetcode, linked_list
---

## 문제 링크

https://leetcode.com/problems/palindrome-linked-list/

## 나의 풀이

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def my_solution(self, head: ListNode) -> bool:
        nums = []

        # 리스트로 변환
        while head:
            nums.append(head.val)
            head = head.next

        # 뒤집은 리스트와 동일하면 팰린드롬으로 판단
        return nums == nums[::-1]
```

## 문제 풀이

### 1. 리스트 변환

- 리스트의 `pop()` 함수를 이용하여 문제를 해결할 수 있다.

```python
from typing import List


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solution1(self, head: ListNode) -> bool:
        q: List = []

        if not head:
            return True

        node = head
        # 리스트 변환
        while node is not None:
            q.append(node.val)
            node = node.next

        # 팰린드롬 판별
        while len(q) > 1:
            if q.pop(0) != q.pop():
                return False

        return True
```

### 2. 데크(Deque)를 이용한 최적화

- 풀이 1에서 `pop(0)`을 하는 과정의 시간 복잡도가 $O(n)$이기 때문에, 데크를 사용하여 이를 $O(1)$으로 단축시킬 수 있다.

```python
from typing import List, Deque
from collections import deque


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solution2(self, head: ListNode) -> bool:
        # 데크 자료형 선언
        q: Deque = deque()

        if not head:
            return True

        node = head
        # 리스트 변환
        while node is not None:
            q.append(node.val)
            node = node.next

        # 팰린드롬 판별
        while len(q) > 1:
            # pop(0) 대신 popleft() 사용
            if q.popleft() != q.pop():
                return False

        return True
```

### 3. 런너(Runner) 기법을 이용한 풀이

- 런너 기법에 대한 설명은 하단 참고

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solution3(self, head: ListNode) -> bool:
        # 역순 연결 리스트
        rev = None
        # 빠른 런너(2칸 이동)와 느린 런너(1칸 이동) 생성
        slow = fast = head

        # 런너를 이용해 역순 연결 리스트 구성
        while fast and fast.next:
            fast = fast.next.next
            rev, rev.next, slow = slow, rev, slow.next

        # 빠른 런너가 아직 한 칸 남았을 때, 즉 입력값이 홀수일 때
        # 입력값이 홀수이면 입력값 중 중앙값은 팰린드롬을 검사할 때 배제하므로
        # 느린 런너는 중앙값을 빗겨 나가야 함 -> slow를 한 칸 더 이동
        if fast:
            slow = slow.next

        # 팰린드롬 여부 확인
        # rev와 slow의 값을 하나씩 비교하여 검사
        while rev and rev.val == slow.val:
            slow, rev = slow.next, rev.next
            
        # 팰린드롬이라고 판단할 경우 rev와 slow 모두 끝까지 이동하여 None이 될 것
        # 따라서 결과를 반전하여 True 값을 리턴해야 함
        # return not slow
        return not rev
```

## 배운 점

- 런너(Runner) 기법
  - 연결 리스트를 순회할 때 **2개의 포인터**를 동시에 사용하는 기법이다.
  - 이때 한 포인터를 다른 포인터보다 앞서게 하여 병합 지점이나 중간 위치, 길이 등을 판별할 때 유용하게 쓸 수 있다.
  - 대개 빠른 런너(Fast Runner)는 두 칸씩, 느린 런너(Slow Runner)는 한 칸씩 이동하는 기법을 사용한다.
    - 빠른 런너가 끝까지 도달하면 느린 런너는 연결 리스트의 중간 지점을 가리키고, 여기서부터 값을 비교하거나 뒤집기를 시도하는 등 여러모로 활용할 수 있다.
- 파이썬의 다중 할당
  - 풀이 3에서 아래의 다중 할당 코드를 두 줄로 분리하여 가독성을 개선하면 에러가 난다.
    ```python
    while fast and fast.next:
        fast = fast.next.next
        rev, rev.next, slow = slow, rev, slow.next
    ```
    ```python
    while fast and fast.next:
        fast = fast.next.next
        rev, rev.next = slow, rev
        slow = slow.next
    ```
  - 분리하기 전의 코드는 다중 할당을 하게 되면 각 3개의 변수에 할당을 하는 작업이 동시에 일어난다. 하지만 두 줄로 분리한 코드는 `rev`와 `rev.next`에만 할당이 끝나면 `slow`는 `rev`와 같은 값을 참조하게 되므로 결국 원하지 않은 값을 얻게 된다.
    - 정확히는 우변의 값을 좌변에 할당하기 전에 평가(evaluate)한다. 스택 오버플로우의 예시를 참고하자면 다음과 같다.
      ```python
      x = 1
      y = 2
      ```
      ```python
      x, y = y, x + y
      print(x, y)   # 2, 3

      # 위의 식은 다음과 같이 해석할 수 있다.
      ham = y
      spam = x + y
      x = ham
      y = spam
      print(x, y)   # 2, 3
      ```
      ```python
      x = y
      y = x + y
      print(x, y)   # 2, 4

      # 위의 식은 다음과 같이 해석할 수 있다.
      x = y
      y = y + y
      print(x, y)   # 2, 4
      ```
  - `rev = 1`, `slow = 2->3`으로 예시를 들자면, 전자에서는 `rev = 2->3`, `rev.next = 1`, `slow = 3`이 되고 `rev.next = 1`이므로 최종적으로는 `rev = 2->1`, `slow = 3`이 된다.
    ```python
    rev = ListNode(1)
    slow = ListNode(2, ListNode(3))

    # rev, rev.next, slow = slow, rev, slow.next

    temp1 = slow      # ListNode(2, ListNode(3))
    temp2 = rev       # ListNode(1)
    temp3 = slow.next # ListNode(3)
    rev = temp1       # ListNode(2, ListNode(3)) => ListNode(2, ListNode(1))
    rev.next = temp2  # ListNode(1)
    slow = temp3      # ListNode(3)

    print(rev)  # ListNode{val: 2, next: ListNode{val: 1, next: None}}
    print(slow) # ListNode{val: 3, next: None}
    ```
  - 하지만 후자에서는 `rev = 2->3`이고 `rev.next = 1`이므로 `rev = 2->1`이 되는데, `rev = slow`이기 때문에 동일한 참조 값을 가지게 되어 `slow = 2->1`이 함께 되어 버린다. 따라서 `slow = slow.next`는 `slow = 1`이 되므로 최종 결과는 `rev = 2->1`, `slow = 1`이 된다.
    ```python
    rev = ListNode(1)
    slow = ListNode(2, ListNode(3))

    # rev, rev.next = slow, rev
    # slow = slow.next

    temp1 = slow      # ListNode(2, ListNode(3))
    temp2 = rev       # ListNode(1)
    rev = temp1       # ListNode(2, ListNode(3)) => ListNode(2, ListNode(1))
    rev.next = temp2  # ListNode(1)

    # rev == slow, 즉 rev와 slow는 모두 ListNode(2, ListNode(1))를 참조
    slow = rev.next  # ListNode(1)

    print(rev)  # ListNode{val: 2, next: ListNode{val: 1, next: None}}
    print(slow) # ListNode{val: 1, next: None}
    ```
- 문제를 풀긴 풀었으나, 제출도 안한 상태에서 좀 더 효율적인 알고리즘을 찾는다고 시간만 끄는 경향이 있는 것 같다. 괜히 시간만 낭비하는 것 같으니 정말 모를 땐 빠르게 넘어가는 것이 좋겠다.

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p201-212.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
- https://stackoverflow.com/questions/8725673/multiple-assignment-and-evaluation-order-in-python
