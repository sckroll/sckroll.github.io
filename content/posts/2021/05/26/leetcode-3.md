---
title: LeetCode 3번 문제
description: Longest Substring Without Repeating Characters
tags: algorithm, python, leetcode, hash_table
---

## 문제 링크

https://leetcode.com/problems/longest-substring-without-repeating-characters/

## 나의 풀이

```python
class Solution:
    def my_solution(self, s: str) -> int:
        result, start = 0, 0
        characters = {}

        for i, char in enumerate(s):
            if char in characters:
                # 중복된 문자가 존재하면 start 포인터를 갱신
                start = max(start, characters[char] + 1)
            characters[char] = i
            # start와 i 사이의 요소 개수가 더 길면 해당 값으로 업데이트
            result = max(result, len(s[start:i + 1]))
        return result
```

## 문제 풀이

### 슬라이딩 윈도우와 투 포인터로 사이즈 조절

- 전체적인 로직은 내가 풀었던 방법과 비슷하다.

```python
class Solution:
    def solution1(self, s: str) -> int:
        used = {}
        max_length = start = 0

        for index, char in enumerate(s):
            # 이미 등장했던 문자라면 start 위치 갱신
            # 단, start 포인터는 슬라이딩 윈도우 내부에 위치해야 함
            if char in used and start <= used[char]:
                start = used[char] + 1
            else:
                # 최대 부분 문자열 길이 갱신
                max_length = max(max_length, index - start + 1)

            # 현재 문자의 위치 삽입
            used[char] = index

        return max_length
```

## 배운 점

### subsequence vs. substring

- **subsequence(부분 수열)**이 아닌 **substring(부분 문자열)**임에 주의해야 한다. 전자는 연속된(Contiguous) 문자열이 아니며, 후자는 연속된 문자열이다. 단, subsequence와 substring 모두 요소(문자)의 순서가 있다는 공통점이 있다.
- 문제에서 나오지 않았지만, **subarray(부분 배열)**와 **subset(부분 집합)**의 차이도 알아두면 좋을 것 같다. subarray는 연속적이고 요소의 순서가 있으며, subset은 연속적이지 않고 요소의 순서도 없다.
- 즉, 표로 정리하면 다음과 같다.
  ||subsequence|substring|subarray|subset|
  |---|---|---|---|---|
  |연속적인가?|X|O|O|X|
  |요소의 순서가 있는가?|O|O|O|X|

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p303-306.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
- https://quanticdev.com/algorithms/primitives/subarray-vs-substring-vs-subsequence-vs-subset/
