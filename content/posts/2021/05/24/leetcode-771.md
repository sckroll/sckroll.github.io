---
title: LeetCode 771번 문제
description: Jewels and Stones
tags: algorithm, python, leetcode, hash_table
---

## 문제 링크

https://leetcode.com/problems/jewels-and-stones/

## 나의 풀이

```python
from collections import Counter


class Solution:
    def my_solution(self, jewels: str, stones: str) -> int:
        stone_cnt = Counter(stones)
        result = 0
        for j in jewels:
            if j in stone_cnt:
                result += stone_cnt[j]
        return result
```

## 문제 풀이

### 1. 해시 테이블을 이용한 풀이

- 코드를 줄이지 않고 정석으로 풀이한 방법이다.

```python
from collections import Counter


class Solution:
    def solution1(self, jewels: str, stones: str) -> int:
        freqs = {}
        count = 0

        # 돌의 빈도 수 계산
        for char in stones:
            if char not in freqs:
                freqs[char] = 1
            else:
                freqs[char] += 1

        # 보석의 빈도 수 합산
        for char in jewels:
            if char in freqs:
                count += freqs[char]

        return count
```

### 2. defaultdict를 이용한 비교 생략

```python
from collections import defaultdict


class Solution:
    def solution2(self, jewels: str, stones: str) -> int:
        freqs = defaultdict(int)
        count = 0

        # 비교 없이 돌의 빈도 수 계산
        for char in stones:
            freqs[char] += 1

        # 비교 없이 보석의 빈도 수 합산
        for char in jewels:
            count += freqs[char]

        return count
```

### 3. Counter로 계산 생략

- 내가 푼 방법과 동일하지만, `collections.Counter`는 존재하지 않는 키의 경우 `KeyError` 대신 `0`을 출력한다. 따라서 내가 푼 방법처럼 에러에 대한 예외 처리를 해줄 필요가 없다.

```python
from collections import Counter


class Solution:
    def solution3(self, jewels: str, stones: str) -> int:
        # 돌의 빈도 수 계산
        freqs = Counter(stones)
        count = 0

        # 비교 없이 보석의 빈도 수 합산
        for char in jewels:
            count += freqs[char]

        return count
```

### 4. 파이썬다운 방식

- 해시 테이블과는 관련이 없지만, 단 한 줄로 풀 수 있다.
- 아래 `sum` 함수에 인수로 들어가는 식은 **Generator Expression**으로, 여기선 리스트 컴프리헨션과 동일하게 동작한다.
  - 리스트 컴프리헨션은 대괄호(`[]`)를, Generator Expression은 소괄호(`()`)를 사용한다.
  
    ![leetcode-771](/images/210524-leetcode-771.png)
- `s in jewels` 부분으로 인해 `True`, `False`로만 값이 결정되게 되고, `sum` 함수의 결과는 `True`의 개수가 된다.

```python
class Solution:
    def solution4(self, jewels: str, stones: str) -> int:
        return sum(s in jewels for s in stones)
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p298-302.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
