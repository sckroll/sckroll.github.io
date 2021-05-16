---
title: LeetCode 20번 문제
description: Valid Parentheses
tags: algorithm, python, leetcode, stack
---

## 문제 링크

https://leetcode.com/problems/valid-parentheses/

## 나의 풀이

```python
class Solution:
    def my_solution(self, s: str) -> bool:
        stack = []
        for char in s:
            if char == '(' or char == '{' or char == '[':
                stack.append(char)
            else:
                if not stack:
                    return False
                if (stack[-1] == '(' and char == ')') or \
                        (stack[-1] == '{' and char == '}') or \
                        (stack[-1] == '[' and char == ']'):
                    stack.pop()
                else:
                    return False
        return not stack
```

## 문제 풀이

### 스택 일치 여부 판별

- 매핑 테이블을 만들어 놓고 해당 괄호가 매핑 테이블에 존재하는지 확인하면서 문제를 해결할 수 있다.

```python
class Solution:
    def solution1(self, s: str) -> bool:
        stack = []
        table = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        # 스택 이용 예외 처리 및 일치 여부 판별
        for char in s:
            if char not in table:
                stack.append(char)
            elif not stack or table[char] != stack.pop():
                return False
        return len(stack) == 0
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p245-246.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
