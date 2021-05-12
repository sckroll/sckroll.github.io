---
title: LeetCode 739번 문제
description: Daily Temperatures
tags: algorithm, python, leetcode, stack
---

### 문제 링크

https://leetcode.com/problems/daily-temperatures/

### 나의 풀이

```python
from typing import List


class Solution:
    def my_solution(self, temperatures: List[int]) -> List[int]:
        stack, result = [], [0] * len(temperatures)
        for i, temp in enumerate(temperatures):
            # 현재 온도가 스택의 마지막 요소의 온도보다 높으면
            # 해당 날짜(인덱스)를 스택에서 꺼내 현재 날짜에서 뺀 값을
            # result 리스트의 해당하는 인덱스에 저장
            while stack and temp > stack[-1][0]:
                day = stack.pop()[1]
                result[day] = i - day
                
            # 스택에 현재 온도와 인덱스를 튜플로 묶어서 저장
            stack.append((temp, i))
        return result
```

### 문제 풀이

#### 스택 값 비교

```python
class Solution:
    def solution1(self, temperatures: List[int]) -> List[int]:
        answer = [0] * len(temperatures)
        stack = []
        for i, cur in enumerate(temperatures):
            # 현재 온도가 스택 값보다 높다면 정답 처리
            while stack and cur > temperatures[stack[-1]]:
                last = stack.pop()
                answer[last] = i - last
            stack.append(i)
        return answer
```

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p252-254.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
