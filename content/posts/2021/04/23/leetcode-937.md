---
title: LeetCode 937번 문제
description: Reorder Data in Log Files
tags: algorithm, leetcode, python, string
---

## 문제 링크

https://leetcode.com/problems/reorder-data-in-log-files/

## 나의 풀이

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution:
    def my_solution(self, logs: List[str]) -> List[str]:
        let, dig = [], []
        for log in logs:
            if log[-1].isnumeric():
                dig.append(log)
            else:
                splitted = log.split()
                words = (splitted[0], ' '.join(splitted[1:]))
                let.append(words)
                let.sort(key=lambda x: (x[1], x[0]))

        result = list(map(lambda x: ' '.join(x), let))
        return result + dig
```

</div>
</details>

## 문제 풀이

### 람다와 `+` 연산자를 사용하는 방법

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution:
    def solution1(self, logs: List[str]) -> List[str]:
        letters, digits = [], []
        for log in logs:
            # 1. 문자와 숫자 구분
            if log.split()[1].isdigit():
                digits.append(log)
            else:
                letters.append(log)

        # 2. 2개의 키를 람다 표현식으로 정렬
        # 튜플의 첫 번째 요소를 기준으로 정렬 수행,
        # 값이 같을 경우 두 번째 요소를 기준으로 정렬 수행
        letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))

        # 3. '+' 연산자로 두 개의 리스트를 병합
        return letters + digits
```

</div>
</details>

## 배운 점

### 문자열이 숫자로 이루어져 있는지 판별하는 함수

- `isdecimal()`: `0` ~ `9`로만 이루어진, `int`로 변환 가능한 숫자 문자인지 판단하는 함수
- `isdigit()`: `0` ~ `9` 뿐만 아니라, `²`나 `₃`같이 **숫자처럼 생긴** 글자의 여부를 판단하는 함수
- `isnumeric()`: `isdigit()`보다 넓은 의미로, `½`과 같이 숫자값 표현에 해당하는 텍스트인지 판단하는 함수
- 즉, `isdecimal()` -> `isdigit()` -> `isnumeric()` 순으로 범위가 넓어진다고 보면 된다.

### 기타

- 람다 표현식에 들어가는 튜플은 첫 번째 요소부터 비교, 해당 요소가 같으면 다음 요소를 비교하는 방식으로 동작한다.
- 리스트 간에도 `+` 연산자를 사용하여 두 리스트를 병합할 수 있다.

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p148-150.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
- https://soooprmx.com/%ed%8c%8c%ec%9d%b4%ec%8d%ac%ec%9d%98-%ec%88%ab%ec%9e%90%ed%8c%90%eb%b3%84%ed%95%a8%ec%88%98/
- https://www.learnbyexample.org/python-string-isdecimal-method/
- https://it-neicebee.tistory.com/33
