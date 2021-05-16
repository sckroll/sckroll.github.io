---
title: LeetCode 49번 문제
description: Group Anagrams
tags: algorithm, python, leetcode, string
---

## 문제 링크

https://leetcode.com/problems/group-anagrams/

## 나의 풀이

```python
from typing import List
from collections import defaultdict


class Solution:
    def my_solution(self, strs: List[str]) -> List[List[str]]:
        words = defaultdict(list)

        for word in strs:
            # 문자열을 문자 단위로 분리, 리스트에 저장 후 정렬
            chrs = []
            for c in word:
                chrs.append(c)
            sorted_word = ''.join(sorted(chrs))
            
            # 정렬된 문자열을 key로 하여 딕셔너리에 추가
            words[sorted_word].append(word)

        return list(words.values())
```

## 문제 풀이

### 정렬하여 딕셔너리에 추가

```python
from typing import List
from collections import defaultdict


class Solution:
    def solution1(self, paragraph: str, banned: List[str]) -> str:
        anagrams = defaultdict(list)

        for word in strs:
            # sorted()는 문자열도 정렬할 수 있음
            anagrams[''.join(sorted(word))].append(word)
        return list(anagrams.values())
```

## 배운 점

- `sorted()` 함수는 문자열도 정렬할 수 있다. 난 뭣도 모르고 문자열을 리스트로 일일이 변환해서 정렬한 후 `join()`하는 방법을 썼는데, 굳이 그렇게 할 필요가 없는 것이다.
  - `sorted()`로 문자열을 정렬하면 정렬된 문자열이 리스트 형태로 반환된다. 따라서 `join()` 함수는 내가 풀었던 방법과 똑같이 사용해야 한다.
- `sorted()`와 `sort()`의 차이점은 전자는 리스트 뿐만 아니라 문자열이나 딕셔너리 등 어떠한 이터러블 객체도 받을 수 있으며, 정렬 결과를 별도로 리턴하지만, 후자는 리스트 자료형에만 존재하며, 입력을 출력으로 덮어 쓰기 때문에 별도의 추가 공간이 필요하지 않고, 리턴값이 없다.

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p153-158.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
- https://docs.python.org/ko/3/howto/sorting.html
