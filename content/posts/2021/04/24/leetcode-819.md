---
title: LeetCode 819번 문제
description: Most Common Word
tags: algorithm, python, leetcode, string
---

## 문제 링크

https://leetcode.com/problems/most-common-word/

## 나의 풀이

```python
from typing import List
import re


class Solution:
    def my_solution(self, paragraph: str, banned: List[str]) -> str:
        # 소문자화된 paragraph를 정규식을 사용하여 특수문자를 공백으로 치환, 단어 분리
        words = re.sub('[!?\',;.]', ' ', paragraph.lower()).split()

        # 각 단어의 개수를 저장하는 딕셔너리
        counter = {}
        for word in words:
            if word not in banned:
                if word not in counter:
                    counter[word] = 0
                counter[word] += 1

        # 딕셔너리에 저장된 항목 중 value가 가장 큰 항목의 key를 리턴
        return max(counter.items(), key=lambda x: x[1])[0]
```

## 문제 풀이

### 1. 리스트 컴프리헨션과 `defaultdict()` 사용

```python
from typing import List
import re
from collections import defaultdict


class Solution:
    def solution1(self, paragraph: str, banned: List[str]) -> str:
        # 입력값에 대한 전처리 작업 수행 (데이터 클렌징)
        words = [word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split() if word not in banned]

        # collections.defaultdict()로 int 기본값이 자동으로 부여되게 설정
        counts = defaultdict(int)
        for word in words:
            counts[word] += 1

        # counts에서 값이 가장 큰 키를 리턴
        return max(counts, key=counts.get)
```

### 2. 리스트 컴프리헨션과 `Counter` 객체 사용

```python
from typing import List
import re
from collections import Counter


class Solution:
    def solution2(self, paragraph: str, banned: List[str]) -> str:
        # 입력값에 대한 전처리 작업 수행 (데이터 클렌징)
        words = [word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split() if word not in banned]

        # Counter 모듈 사용
        counts = Counter(words)

        # 가장 흔하게 등장하는 단어의 첫 번째 인덱스를 리턴
        return counts.most_common(1)[0][0]
```

## 배운 점

- 정규식에서 `\w`는 단어 문자(Word Character)를 뜻하며, `^`은 `not`을 의미한다. 그리고 `re` 모듈의 `sub(pattern, repl, string)` 함수는 대상 문자열 `string`에 대해 정규식 `pattern`에 해당되는 문자들을 `repl`로 치환하는 역할을 한다.
  - 따라서 문제 풀이에 사용된 정규식은 단어 문자를 제외한 모든 문자(특수 문자)를 공백으로 치환하는 역할을 수행한다.
- 여기서 특수문자를 **제거**하지 않고 **공백으로 치환**하는 이유는 아래와 같다.
  ```python
  paragraph = 'a, a, a, a, b,b,b,c, c'
  banned = ['a']
  ```
  - 만약 특수문자를 제거한다면 출력값은 `b`가 나와야 하지만, `bbbc`가 출력된다. 특수문자가 제거된 상태에서 `split()`을 하면 문자가 붙어버리기 때문이다. 따라서 이를 방지하기 위해 특수문자를 공백으로 치환해야 한다.
- 리스트 컴프리헨션(List Comprehension)을 사용하여 단어 문자 추출과 단어의 `banned` 포함 여부를 동시에 다룰 수 있다.
- `collections.defaultdict()`를 사용하면 딕셔너리의 키 존재 유무를 확인할 필요 없이 `defaultdict()`의 인수로 들어가는 자료형으로 기본값을 넣을 수 있다. 가령 `defaultdict(int)`라면 새로 생성되는 키의 기본값은 `0`이 되는 셈이다.
- `collections.Counter()`를 사용하면 내가 풀었던 방법처럼 굳이 딕셔너리에 저장하면서 개수를 구할 필요가 없다. `Counter()`의 인수로 리스트 등을 넣어주면 각 항목의 개수를 알아서 구해주기 때문이다. 여기서 가장 높은 빈도로 등장하는 항목을 구하려면 `most_common(1)` 메소드를 사용하면 된다.
  - 이때 리스트에 들어 있는 튜플이 반환된다. (ex: `[('ball', 2)]`)

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p151-152.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
