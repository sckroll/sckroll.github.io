---
title: LeetCode 5번 문제
description: Longest Palindromic Substring
tags: algorithm, python, leetcode, string
---

### 문제 링크

https://leetcode.com/problems/longest-palindromic-substring/

### 나의 풀이

```python
class Solution:
    def my_solution(self, s: str) -> str:
        # 문자열 전체가 회문이면 문자열 리턴
        if s == s[::-1]:
            return s

        # 부분 문자열 길이를 줄여가면서 각 부분 문자열이 회문인지 검사
        for length in reversed(range(len(s))):
            for i in range(len(s) - length + 1):
                curr = s[i:i+length]
                if curr == curr[::-1]:
                    return curr
```

### 문제 풀이

#### 중앙을 중심으로 확장하는 풀이 (투 포인터)

- 최장 공통 부분 문자열(Longest Common Substring, LCS): 여러 개의 입력 문자열이 있을 때 서로 공통된 가장 긴 부분 문자열을 찾는 문제
  - 다이나믹 프로그래밍(DP)으로 풀 수 있지만, 덜 직관적이며 이 문제에서는 실행 속도가 더 늦기 때문에 투 포인터를 사용하여 문제를 풀었다.
- 각각 2칸, 3칸으로 이루어진 2개의 포인터가 왼쪽에서 오른쪽으로 슬라이딩하면서 이동하는데, 이때 포인터 영역(슬라이딩 윈도우)에 들어온 문자열이 팰린드롬이라면 그 자리에 멈추고 투 포인터가 점점 확장하는 식이다.
- 2칸 포인터는 모든 짝수의 경우, 3칸 포인터는 모든 홀수의 경우에 대해 판별한다.

```python
class Solution:
    def solution1(self, s: str) -> str:
        # 팰린드롬 판별 및 투 포인터 확장
        def expand(left: int, right: int) -> str:
            # 좌우를 확장해가면서 팰린드롬 여부 판별
            while left >= 0 and right <= len(s) and s[left] == s[right-1]:
                left -= 1
                right += 1
    
            # 가장 긴 길이의 팰린드롬을 찾으면 마지막으로 확장한 좌우 인덱스 값의 이전 값을 사용
            return s[left + 1:right - 1]

        # 해당 사항이 없을 때 빠르게 리턴
        # 전체적인 풀이 속도 향상에 매우 큰 도움이 됨
        if len(s) < 2 or s == s[::-1]:
            return s

        result = ''

        # 슬라이딩 윈도우 우측으로 이동
        for i in range(len(s) - 1):
            # 기존 result 값과 짝수/홀수 슬라이딩 윈도우 중에서 길이가 가장 긴 값을 선택
            result = max(result, expand(i, i + 1), expand(i, i + 2), key=len)
        return result
```

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p159-165.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
