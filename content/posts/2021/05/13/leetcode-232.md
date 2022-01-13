---
title: LeetCode 232번 문제
description: Implement Queue using Stacks
tags: algorithm, python, leetcode, queue, stack
---

## 문제 링크

https://leetcode.com/problems/implement-queue-using-stacks/

## 나의 풀이

- 전반적으로 225번 문제와 유사하다. 차이점이 있다면 Deque 대신 파이썬 리스트(스택)으로 큐를 구현하는 것이다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class MyQueue:
    def __init__(self):
        self.main_stack, self.temp_stack = [], []
        self.length = 0

    def push(self, x: int) -> None:
        self.main_stack.append(x)
        self.length += 1

    def pop(self) -> int:
        for _ in range(self.length - 1):
            self.temp_stack.append(self.main_stack.pop())
        value = self.main_stack.pop()
        for _ in range(self.length - 1):
            self.main_stack.append(self.temp_stack.pop())
        self.length -= 1
        return value

    def peek(self) -> int:
        for _ in range(self.length - 1):
            self.temp_stack.append(self.main_stack.pop())
        value = self.main_stack.pop()
        self.main_stack.append(value)
        for _ in range(self.length - 1):
            self.main_stack.append(self.temp_stack.pop())
        return value

    def empty(self) -> bool:
        return self.length == 0
```

</div>
</details>

## 문제 풀이

### 스택 2개 사용

- `push()`는 `input` 스택에만 저장한다.
- `peek()`는 `output` 스택의 마지막 원소, 즉 가장 위의 값만 사용하면 되므로 `input` 스택에 어떤 원소가 push되든 `output` 스택만 사용한다.
- `pop()`은 `output` 스택이 비어있을 수도 있으므로 `peek()` 메소드 사용 후 `output` 스택에서 pop한다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class solution1:
    def __init__(self):
        self.input = []
        self.output = []

    def push(self, x: int) -> None:
        self.input.append(x)

    def pop(self) -> int:
        self.peek()
        return self.output.pop()

    def peek(self) -> int:
        # output이 없으면 output의 요소를 모두 input에 push
        if not self.output:
            while self.input:
                self.output.append(self.input.pop())
        return self.output[-1]

    def empty(self) -> bool:
        return self.input == [] and self.output == []
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p257-258.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
