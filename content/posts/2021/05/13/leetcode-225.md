---
title: LeetCode 225번 문제
description: Implement Stack using Queues
tags: algorithm, leetcode, python, queue, stack
---

## 문제 링크

https://leetcode.com/problems/implement-stack-using-queues/

## 나의 풀이

- 문제에서 오직 두 개의 큐를 사용해서 스택을 구현하라길래 Deque를 두 개 사용하여 풀었다.
- 큐의 기본 연산인 `뒤에서 push`, `앞에서 pop`만 사용했으며, `len()` 함수 대신 스택의 원소 개수를 변수에 저장하여 `empty()` 메소드를 구현하였다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class MyStack:
    def __init__(self):
        self.main_queue, self.temp_queue = deque(), deque()
        self.length = 0

    def push(self, x: int) -> None:
        self.main_queue.appendleft(x)
        self.length += 1

    def pop(self) -> int:
        value = self.switch_queue()
        self.length -= 1
        return value

    def top(self) -> int:
        value = self.switch_queue()
        self.main_queue.appendleft(value)
        return value

    def empty(self) -> bool:
        return self.length == 0

    # push와 pop의 중복 코드를 별도의 메소드로 분리
    # 가장 위에 있는 원소, 즉 마지막으로 push한 원소를 제외하고
    # main_queue의 모든 원소를 차례대로 temp_queue에 push,
    # main_queue의 남은 원소를 변수 value에 저장한 다음
    # temp_queue에 push한 원소를 전부 다시 main_queue에 push 후 value 리턴
    def switch_queue(self) -> int:
        for _ in range(self.length - 1):
            self.temp_queue.appendleft(self.main_queue.pop())
        value = self.main_queue.pop()
        for _ in range(self.length - 1):
            self.main_queue.appendleft(self.temp_queue.pop())
        return value
```

</div>
</details>

## 문제 풀이

### `push()` 할 떄 큐를 이용해 재정렬

- 요소 삽입 시 시간 복잡도가 O(n)이다.
- 위의 풀이보다는 비교적 간단하게 구현할 수 있다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class solution1:
    def __init__(self):
        self.q = deque()

    def push(self, x: int) -> None:
        self.q.append(x)

        # 요소 삽입 후 맨 앞에 두는 상태로 재정렬
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self) -> int:
        return self.q.popleft()

    def top(self) -> int:
        return self.q[0]

    def empty(self) -> bool:
        return len(self.q) == 0
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p255-256.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
