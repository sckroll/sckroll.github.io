---
title: LeetCode 17번 문제
description: Letter Combinations of a Phone Number
tags: algorithm, python, leetcode, dfs
---

## 문제 링크

https://leetcode.com/problems/letter-combinations-of-a-phone-number/

## 나의 풀이

```python
from typing import List


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        def dfs(char, idx=0):
            # digits의 마지막 자리까지 확인했을 경우
            if idx >= len(digits):
                result.append(char)
                return

            # mapping 변수에 저장된 문자들을 불러와 재귀 수행
            letters = mapping[digits[idx]]
            for letter in letters:
                dfs(char + letter, idx+1)

        result = []
        mapping = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        }

        if digits:
            dfs('')
        return result
```

## 문제 풀이

### 1. 모든 조합 탐색

```python
from typing import List


class Solution1:
    def letterCombinations(self, digits: str) -> List[str]:
        def dfs(index, path):
            # 끝까지 탐색하면 백트래킹
            if len(path) == len(digits):
                result.append(path)
                return

            # # 입력값 자릿수 단위 반복
            # for i in range(index, len(digits)):
            #     # 숫자에 해당하는 모든 문자열 반복
            #     for j in dic[digits[i]]:
            #         dfs(i + 1, path + j)

            # 더 효율적인 풀이
            # 참고: https://github.com/onlybooks/algorithm-interview/issues/91
            for i in dic[digits[index]]:
                dfs(index + 1, path + i)

        # 예외 처리
        if not digits:
            return []

        dic = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
               '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}
        result = []
        dfs(0, '')

        return result
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p338-340.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
