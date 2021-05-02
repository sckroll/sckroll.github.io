---
title: LeetCode 125번 문제
description: Valid Palindrome
tags: algorithm, python, leetcode, string
---

### 문제 링크

https://leetcode.com/problems/valid-palindrome/

### 나의 풀이

```python
class Solution:
    def my_solution(self, s: str) -> bool:
        string = ''
        for c in s:
            if c.isalpha() or c.isnumeric():
                string += c
            elif c.isspace():
                continue
        return string.lower() == string[::-1].lower()
```

### 문제 풀이

#### 1. 리스트로 변환하여 푸는 방법

```python
class Solution:
    def solution1(self, s: str) -> bool:
        strs = []
        for char in s:
            # isalpha() + isnumeric()
            if char.isalnum():
                strs.append(char.lower())

        # 리스트의 처음과 끝을 pop하여 비교
        while len(strs) > 1:
            if strs.pop(0) != strs.pop():
                return False

        return True
```

#### 2. 데크(Deque)를 사용하여 푸는 방법

```python
from typing import Deque  # 데크 타입 힌트를 위해 추가
from collections import deque


class Solution:
    # 데크의 popleft() 덕분에 O(n^2) -> O(n)으로 성능 향상
    # 풀이 1에 비해 실행 속도가 상당히 증가
    def solution2(self, s: str) -> bool:
        strs: Deque = deque()

        for char in s:
            if char.isalnum():
                strs.append(char.lower())

        while len(strs) > 1:
            if strs.popleft() != strs.pop():
                return False

        return True
```

#### 3. 슬라이싱을 사용하여 푸는 방법

```python
import re


class Solution:
    # 슬라이싱과 정규식을 동시에 사용함으로써 풀이 2에 비해 실행 속도 향상
    def solution3(self, s: str) -> bool:
        s = s.lower()
        
        # 정규식 사용 (영문자, 숫자를 제외한 모든 문자를 제외)
        s = re.sub('[^a-z0-9]', '', s)
        
        # 슬라이싱
        return s == s[::-1]
```

### 배운 점

- 문자열 슬라이싱을 기준으로 한 파이썬 문자열 처리 실행 시간 순서는 다음과 같다. (빠름 -> 느림 순)
  > 슬라이싱 -> 리스트 reverse() -> reversed() + join() -> for 반복 -> while 반복 -> 재귀
- 파이썬의 타입 힌트를 처음 써봤는데, 사용법이 타입스크립트와 비슷한 것 같다. 정작 TS는 써본 적이 없는 게 함정... 하루 빨리 배워야겠다.
- 타입 힌트를 작성할 때 `int`, `str`, `float`, `list` 등과 같은 타입은 별도의 모듈을 임포트할 필요 없이 그냥 작성하면 되지만, `List`, `Set`, `Dict` 등과 같이 좀 더 복잡한 타입 어노테이션을 추가할 땐 `typing` 모듈을 사용하면 된다.
  - `List`와 `list`는 같은 기능을 수행하지만, 후자와 같이 `typing` 모듈 없이 사용하는 건 **파이썬 3.9** 부터 가능하다.
  - 리트코드에서는 `typing` 모듈을 임포트하지 않아도 인식이 되는 것으로 보아 사전에 임포트되어 있는 것으로 보인다. `collections` 모듈도 마찬가지다. 따라서 제출할 때 굳이 모듈을 임포트할 필요는 없을 듯.
- 타입 힌트는 `mypy`라는 정적 타입 검사 도구를 사용하여 검사할 수 있다.
- 타입 힌트는 강제 규약이 아니라서 힌팅을 했다고 해도 여전히 동적 타입으로 동작할 수 있다.
  - 하지만 타입 힌트를 작성함으로써 가독성에 도움은 줄 수 있다.
- `isalpha()`와 `isnumeric()`을 모두 사용할 필요 없이 `isalnum()` 하나만 쓰면 되는 것을 처음 알았다.
- 간단한 정규 표현식(정규식)이라도 미리 익혀두면 나중에 상당히 도움이 될 것 같다.

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p138-144.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
- https://www.journaldev.com/23647
- https://www.daleseo.com/python-type-annotations/
- https://www.daleseo.com/python-mypy/
- https://stackoverflow.com/questions/39458193/using-list-tuple-etc-from-typing-vs-directly-referring-type-as-list-tuple-etc
