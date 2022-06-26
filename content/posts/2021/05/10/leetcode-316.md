---
title: LeetCode 316번 문제
description: Remove Duplicate Letters
tags: algorithm, leetcode, python, stack
---

## 문제 링크

https://leetcode.com/problems/remove-duplicate-letters/

## 나의 풀이 (풀이 실패)

- 스택의 마지막 원소보다 사전적 순서가 앞이면서 현재 글자가 스택에 존재하지 않으면 스택에서 pop하고, 현재 글자가 이미 스택에 존재하지 않으면 스택에 push하는 방법으로 해결하려 했지만 두 번째 테스트 케이스 `cbacdcbc`에서 오답 처리가 되었다.
- 후술하겠지만 풀이 2번의 `collections.Counter()`를 사용하면 문제를 풀 수 있다. 아래는 마지막으로 제출한 오답 처리된 답안이다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class Solution:
    def my_solution(self, s: str) -> str:
        stack = []
        for char in s:
            # 1. 스택의 마지막 원소보다 사전적 순서가 앞인가?
            while stack:
                if stack[-1] > char and char not in stack:
                    stack.pop()
                else:
                    break
            # 2. 해당 글자가 스택에 이미 존재하는가?
            if char not in stack:
                stack.append(char)
        return ''.join(stack)
```

</div>
</details>

## 문제 풀이

### 1. 재귀를 이용한 분리

- 일종의 분할 정복과 백트래킹을 응용하여 해결할 수 있다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
class Solution:
    def solution1(self, s: str) -> str:
        # 집합으로 정렬 (집합도 sorted()로 정렬할 수 있음)
        for char in sorted(set(s)):
            # 해당 문자를 포함한 이후의 모든 문자를 접미사로 지정
            suffix = s[s.index(char):]
            # 전체 집합과 접미사 집합이 일치할 때 분리 진행
            if set(s) == set(suffix):
                # 기준점 문자는 이미 사용되었으므로 replace()로 제거 후 재귀 수행
                return char + self.solution1(suffix.replace(char, ''))
        return ''
```

</div>
</details>

### 2. 스택을 이용한 문자 제거

- 스택과 `collections.Counter()`를 사용하여 풀 수 있다.
- 예시에서는 `counter`와 `stack` 이외에 별도의 `seen` 변수를 만들어 사용했는데, 파이썬 리스트의 `in` 연산은 스택에는 존재하지 않기 때문이다. 즉, 변칙적인 풀이법이기 때문에 이미 처리된 문자 여부를 확인하기 위한 집합 `seen` 변수를 사용하였다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from collections import Counter


class Solution:
    def solution2(self, s: str) -> str:
        counter, seen, stack = Counter(s), set(), []

        for char in s:
            counter[char] -= 1
            # 파이썬 리스트 자료형은 in 키워드를 사용할 수 있기 때문에
            # seen 변수를 없애고 stack만 사용해도 되지만,
            # 스택에 없는 검색 연산을 수행한 변칙적인 풀이법이기 때문에
            # 별도의 seen 변수를 생성하여 in 연산을 수행
            if char in seen:
                continue

            # 스택이 비어 있지 않고 현재 문자가 스택의 마지막 원소보다
            # 사전적 순서가 뒤에 있으며, 뒤에 붙일 문자가 남아 있다면 스택에서 제거
            # 현재 문자가 뒤에 한 번 더 나오는 건 카운터의 개수를 통해 알 수 있음
            # (이미 위에서 해당 글자의 카운터를 하나 감소시켰으므로)
            while stack and char < stack[-1] and counter[stack[-1]] > 0:
                seen.remove(stack.pop())
            stack.append(char)
            seen.add(char)

        return ''.join(stack)
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p247-251.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
