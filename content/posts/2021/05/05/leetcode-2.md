---
title: LeetCode 2번 문제
description: Add Two Numbers
tags: algorithm, python, leetcode, linked_list
---

### 문제 링크

https://leetcode.com/problems/add-two-numbers/

### 나의 풀이

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def my_solution(self, l1: ListNode, l2: ListNode) -> ListNode:
        result = curr_node = None
        # 자릿수가 올라갈 때 추가할 수
        c = 0

        # l1, l2 모두 None이 될 때까지 반복
        while l1 or l2:
            a, b = l1.val if l1 else 0, l2.val if l2 else 0

            # 더했을 때 10이 넘어가면 다음 자리에 1 추가
            if a + b + c >= 10:
                a = (a + b + c) % 10
                c = 1
            else:
                a += b + c
                c = 0

            if not result:
                result = curr_node = ListNode(a)
            else:
                curr_node.next = ListNode(a)
                curr_node = curr_node.next

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        # c가 남아있다면 마지막에 추가
        if c > 0:
            curr_node.next = ListNode(c)
        return result
```

### 문제 풀이

#### 1. 자료형 변환

- 연결 리스트를 문자열로 이어 붙인 다음 숫자로 변환하고 이를 모두 계산한 다음 다시 연결 리스트로 변환한다면?
- 풀이는 가능하나 여러모로 부족한 느낌이 든다...

```python
from typing import List


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solution1(self, l1: ListNode, l2: ListNode) -> ListNode:
        # 연결 리스트를 역순으로 뒤집는 함수 (206번 문제 참고)
        def reverse_list(head: ListNode) -> ListNode:
            node, prev = head, None
            while node:
                next, node.next = node.next, prev
                prev, node = node, next
            return prev

        # 연결 리스트를 파이썬의 리스트로 변환하는 함수
        def to_list(node: ListNode) -> List:
            list: List = []
            while node:
                list.append(node.val)
                node = node.next
            return list

        # 리스트를 연결 리스트로 변환하는 함수
        def to_reversed_linked_list(result: str) -> ListNode:
            prev: ListNode = None
            for r in result:
                node = ListNode(r)
                node.next = prev
                prev = node
            return node

        # 실제로 덧셈을 수행하는 부분
        a = to_list(reverse_list(l1))
        b = to_list(reverse_list(l2))
        # result_str = int(''.join(str(e) for e in a)) + int(''.join(str(e) for e in b))
        result_str = int(''.join(map(str, a))) + int(''.join(map(str, b)))
        return to_reversed_linked_list(str(result_str))
```

#### 2. 전가산기 구현

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def solution2(self, l1: ListNode, l2: ListNode) -> ListNode:
        root = head = ListNode(0)
        carry = 0

        # l1과 l2는 전가산기의 A, B의 역할과 동일
        while l1 or l2 or carry:
            sum = 0

            # 두 입력값의 합 계산
            if l1:
                sum += l1.val
                l1 = l1.next
            if l2:
                sum += l2.val
                l2 = l2.next

            # 몫(자리올림수)과 나머지(값) 계산
            carry, val = divmod(sum + carry, 10)
            head.next = ListNode(val)
            head = head.next

        return root.next
```

### 배운 점

- 풀이 1번에서 숫자형 리스트를 문자형으로 바꿨다가 다시 숫자형으로 바꾸는 코드를 `functools.reduce()`를 통해 숫자형 리스트에서 바로 숫자형으로 바꿀 수 있다. `function` 모듈은 '함수를 다루는 함수'를 뜻하는 고계 함수(Higher-Order Function)를 지원하며, 리트코드에 기본적으로 임포트되어 있다.
  ```python
  # before
  int(''.join(str(e) for e in a))
  ```
  ```python
  # after
  from functools import reduce
  reduce(lambda x, y: 10 * x + y, a, 0)
  ```
- `reduce` 함수를 사용할 때 `operator` 모듈의 `add`와 `mul` 함수를 함께 사용하면 좀 더 가독성을 높일 수 있다.
  ```python
  from functools import reduce
  from operator import add, mul

  reduce(add, [1, 2, 3, 4, 5])  # 15
  reduce(mul, [1, 2, 3, 4, 5])  # 120
  ```
- 풀이 2번의 내장 함수 `divmod(x, y)`는 `x`를 `y`로 나누었을 때 몫과 나머지로 구성된 튜플을 리턴한다. 즉, `(x // y, x % y)`와 같다.

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p221-228.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
