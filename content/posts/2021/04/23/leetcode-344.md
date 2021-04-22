---
title: LeetCode 344번 문제
description: Reverse String
img: https://picsum.photos/id/8/300/200
alt: LeetCode 344번 문제
tags: [algorithm, python, leetcode, string]
---

### 문제 링크

https://leetcode.com/problems/reverse-string/

### 나의 풀이

```python
from typing import List


class Solution:
    def my_solution(self, s: List[str]) -> None:
        string = ''.join(s)
        s.clear()
        for char in string[::-1]:
            s.append(char)
```

### 문제 풀이

#### 1. 투 포인터(Two Pointer)를 이용한 스왑

```python
from typing import List


class Solution:
    # 2개의 포인터를 이용해 범위를 조정해가면서 푸는 방식
    def solution1(self, s: List[str]) -> None:
        left, right = 0, len(s) - 1
        while left < right:
            # 스왑 후 포인터 조정
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1
```

#### 2. 파이썬다운 방식 (Pythonic way)

```python
from typing import List


class Solution:
    # 그냥 reverse() 한 줄이면 끝. 참 쉽죠?
    # 실행 속도도 내가 푼 방법과 거의 동일
    def solution2(self, s: List[str]) -> None:
        s.reverse()
```

#### 2-1. 슬라이싱을 사용하여 푸는 방법

```python
class Solution:
    # 문자열 뿐만 아니라 리스트도 슬라이싱을 쓸 수 있음
    def solution2_1(self, s: List[str]) -> None:
        s[:] = s[::-1]

        # 단, 아래 코드는 리트코드에서 에러로 간주
        # (공간 복잡도를 O(1)로 제한하기 때문)
        # s = s[::-1]
```

### 배운 점

- 리스트를 뒤집는 방법은 굳이 문자열로 조인하여 슬라이싱할 필요가 없이 그냥 리스트에서 슬라이싱을 사용하거나 리스트의 `reverse()` 메소드를 사용하면 된다. 이렇게 간단한 방법을 모르고 있었다...!
- 슬라이싱을 사용하여 풀 때 에러가 나는 경우는 리트코드를 제외한 다른 플랫폼에서 다르게 동작할 수도 있으므로 실제 코딩 테스트를 치루기 전에 해당 플랫폼에 대해서 사전에 충분히 숙지해두는 것이 좋을 것 같다.

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p145-147.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
