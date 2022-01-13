---
title: LeetCode 641번 문제
description: Design Circular Deque
tags: algorithm, python, leetcode, deque
---

## 문제 링크

https://leetcode.com/problems/design-circular-deque/

## 나의 풀이

- 이중 연결 리스트를 만들어서 해결하였다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
# 노드 클래스
class Node:
    def __init__(self, value: int, prev=None, next=None):
        self.value = value
        self.prev = prev
        self.next = next


class MyCircularDeque:
    def __init__(self, k: int):
        self.front = None
        self.rear = None
        
        # 데크의 최대 크기를 k, 현재 크기를 length로 지정,
        # 아이템을 추가하거나 제거할 때 length의 길이를 조정
        self.max = k
        self.length = 0

    def insertFront(self, value: int) -> bool:
        if self.isFull():
            return False

        front_node = Node(value, None, self.front)

        # 이미 front 위치에 노드가 있다면 이전 노드를 업데이트
        if self.front:
            self.front.prev = front_node
        self.front = front_node

        # 새로 추가된 노드가 유일한 노드일 경우
        # 마지막(rear) 노드도 front 노드를 가리킬 것
        if not self.rear:
            self.rear = self.front
        self.length += 1
        return True

    def insertLast(self, value: int) -> bool:
        if self.isFull():
            return False

        last_node = Node(value, self.rear, None)

        # 이미 rear 위치에 노드가 있다면 다음 노드를 업데이트
        if self.rear:
            self.rear.next = last_node
        self.rear = last_node

        # 새로 추가된 노드가 유일한 노드일 경우
        # 첫 번째(front) 노드도 rear 노드를 가리킬 것
        if not self.front:
            self.front = self.rear
        self.length += 1
        return True

    def deleteFront(self) -> bool:
        if self.isEmpty():
            return False

        # front 포인터 위치 변경
        self.front = self.front.next
        if self.front:
            # front 노드의 이전 노드 삭제
            self.front.prev = None
        else:
            # 모든 노드가 삭제된 경우 rear 포인터도 None으로 초기화
            self.rear = None
        self.length -= 1
        return True

    def deleteLast(self) -> bool:
        if self.isEmpty():
            return False

        # rear 포인터 위치 변경
        self.rear = self.rear.prev
        if self.rear:
            # rear 노드의 다음 노드 삭제
            self.rear.next = None
        else:
            # 모든 노드가 삭제된 경우 front 포인터도 None으로 초기화
            self.front = None
        self.length -= 1
        return True

    def getFront(self) -> int:
        return -1 if self.isEmpty() else self.front.value

    def getRear(self) -> int:
        return -1 if self.isEmpty() else self.rear.value

    def isEmpty(self) -> bool:
        return self.length == 0

    def isFull(self) -> bool:
        return self.length == self.max
```

</div>
</details>

## 문제 풀이

### 이중 연결 리스트를 이용한 데크 구현

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
# 노드 클래스
class ListNode:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None


class solution1:
    def __init__(self, k: int):
        self.head, self.tail = ListNode(None), ListNode(None)
        self.k, self.len = k, 0
        # head 오른쪽에 tail, tail 왼쪽에 head를 연결
        self.head.right, self.tail.left = self.tail, self.head

    # 실제 삽입을 수행하는 내부 함수
    # 기존에 node와 n의 관계를 "찢고" 그 사이에 new를 삽입 후 좌우 노드와 연결
    def _add(self, node: ListNode, new: ListNode):
        n = node.right
        node.right = new
        new.left, new.right = node, n
        n.left = new

    # 실제 삭제를 수행하는 내부 함수
    def _del(self, node: ListNode):
        n = node.right.right
        node.right = n
        n.left = node

    def insertFront(self, value: int) -> bool:
        if self.len == self.k:
            return False

        self.len += 1
        self._add(self.head, ListNode(value))
        return True

    def insertLast(self, value: int) -> bool:
        if self.len == self.k:
            return False

        self.len += 1
        self._add(self.tail.left, ListNode(value))
        return True

    def deleteFront(self) -> bool:
        if self.len == 0:
            return False

        self.len -= 1
        self._del(self.head)
        return True

    def deleteLast(self) -> bool:
        if self.len == 0:
            return False

        self.len -= 1
        self._del(self.tail.left.left)
        return True

    def getFront(self) -> int:
        return self.head.right.val if self.len else -1

    def getRear(self) -> int:
        return self.tail.left.val if self.len else -1

    def isEmpty(self) -> bool:
        return self.len == 0

    def isFull(self) -> bool:
        return self.len == self.k
```

</div>
</details>

## 배운 점

### 메소드 이름 앞에 붙는 밑줄

- `_add()`와 같이 메소드 이름 앞에 밑줄(`_`, underscore)이 붙는다면 그 함수는 외부가 아닌 내부에서만 사용된다는 의미이다. (PEP8 명명 규칙 기준)

### 기타

- 사실 문제에서 요구하는 **원형** 데크를 이중 연결 리스트로 구현하는 것은 큰 의미가 없다.
- 원형 데크를 이중 연결 리스트로 구현하게 되면 원형의 이점을 살릴 수 없다. 원형의 이점을 살리기 위해서는 이중 연결 리스트가 아닌 배열로 풀이해야 한다.
- 원형으로 구현하는 이유는 뒤쪽으로 요소를 채우다가 공간이 꽉 차면 꼬리(tail)와 머리(head)를 연결해 앞쪽의 빈 공간을 활용하려는 의도지만, 연결 리스트는 애초에 빈 공간이라는 개념이 없기 때문에 원형은 아무런 의미가 없다.
- 데크의 연산은 **맨 처음과 맨 끝의 값을 추출**할 뿐이지 맨 끝의 다음 값을 추출하는 것과 같은 연산은 존재하지 않으므로 서로 연결되어 있을 필요도 없다.

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p268-272.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
