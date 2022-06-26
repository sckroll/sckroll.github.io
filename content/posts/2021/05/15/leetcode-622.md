---
title: LeetCode 622번 문제
description: Design Circular Queue
tags: algorithm, leetcode, python, queue, circular_queue
---

## 문제 링크

https://leetcode.com/problems/design-circular-queue/

## 나의 풀이

- 원형 큐(환형 큐, 링 버퍼)를 구현하는 데 사용한 큐는 데크를 사용하였다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from collections import deque


class MyCircularQueue:
    def __init__(self, k: int):
        self.queue = deque()
        self.max = k

    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False
        self.queue.append(value)
        return True

    # 문제에서 요소를 꺼내지 않고 삭제만 수행하도록 요구하고 있음
    def deQueue(self) -> bool:
        if self.isEmpty():
            return False
        self.queue.popleft()
        return True

    def Front(self) -> int:
        if self.isEmpty():
            return -1
        return self.queue[0]

    def Rear(self) -> int:
        if self.isEmpty():
            return -1
        return self.queue[-1]

    def isEmpty(self) -> bool:
        return len(self.queue) == 0

    def isFull(self) -> bool:
        return len(self.queue) == self.max
```

</div>
</details>

## 문제 풀이

### 배열을 이용한 풀이

- 원형 큐(환형 큐, 링 버퍼)의 원리는 투 포인터 방법과 유사하다.
- 배열로 구현하면 공간을 재활용한다는 원형 큐의 이점을 누릴 수 있다.
- `front` 포인터와 `rear` 포인터가 만날 경우 `front` 포인터 위치의 요소 존재 여부에 따라 `isFull()`, `isEmpty()`를 결정한다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class solution1:
    def __init__(self, k: int):
        # k만큼의 크기를 미리 할당
        self.q = [None] * k
        self.maxlen = k
        self.front = 0
        self.rear = 0

    # rear 포인터를 앞으로 아동
    def enQueue(self, value: int) -> bool:
        if self.q[self.rear] is None:
            # 아직 공간이 남아있을 경우
            self.q[self.rear] = value
            self.rear = (self.rear + 1) % self.maxlen
            return True
        else:
            return False

    # front 포인터를 앞으로 이동
    def deQueue(self) -> bool:
        if self.q[self.front] is None:
            return False
        else:
            # 해당 공간에 요소가 있을 경우
            self.q[self.front] = None
            self.front = (self.front + 1) % self.maxlen
            return True

    # front 포인터에 해당하는 요소가 없으면 -1 리턴
    def Front(self) -> int:
        return -1 if self.q[self.front] is None else self.q[self.front]

    # rear 포인터에 해당하는 요소가 없으면 -1 리턴
    # rear는 마지막에 삽입한 요소의 바로 다음 위치를 가리키므로
    # 마지막에 삽입한 위치, 즉 (self.rear - 1)을 가리켜야 함
    def Rear(self) -> int:
        return -1 if self.q[self.rear - 1] is None else self.q[self.rear - 1]

    def isEmpty(self) -> bool:
        return self.front == self.rear and self.q[self.front] is None

    def isFull(self) -> bool:
        return self.front == self.rear and self.q[self.front] is not None
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p259-263.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
