---
title: LeetCode 42번 문제
description: Trapping Rain Water
tags: algorithm, python, leetcode, array
---

### 문제 링크

https://leetcode.com/problems/trapping-rain-water/

### 나의 풀이

```python
from typing import List


class Solution:
    def my_solution(self, height: List[int]) -> int:
        # 해당 구간의 빗물의 양을 구하는 함수
        def get_trapped(elevation: List[int]) -> int:
            max_height = min(elevation[0], elevation[-1])
            water = 0
            for curr in elevation[1:-1]:
                water += max_height - curr
            return water

        # 빈 배열의 경우 0 리턴
        if len(height) == 0:
            return 0

        start, total = 0, 0

        # 가장 큰 값의 인덱스 (중복되는 경우 마지막 인덱스)
        max_idx = len(height) - height[::-1].index(max(height)) - 1

        # 가장 큰 값의 인덱스까지 빗물의 양 계산
        for end in range(1, max_idx + 1):
            if height[end] >= height[start]:
                total += get_trapped(height[start:end + 1])
                start = end

        # 가장 큰 값의 인덱스가 오른쪽 끝에 존재하거나
        # 현재까지 구한 빗물의 양이 0일 경우
        # 가장 큰 값의 인덱스부터 끝까지 슬라이싱 후 뒤집어서 새로운 리스트 생성,
        # 해당 리스트의 빗물의 양을 계산
        if max_idx != len(height) - 1 or total == 0:
            left_heights = height[max_idx:][::-1]

            start = 0
            for end in range(1, len(left_heights)):
                if left_heights[end] >= left_heights[start]:
                    total += get_trapped(left_heights[start:end + 1])
                    start = end

        return total
```

### 문제 풀이

#### 1. 투 포인터를 최대로 이동

- 시간 복잡도는 $O(n)$이다.

```python
from typing import List


class Solution:
    def solution1(self, paragraph: str, banned: List[str]) -> str:
        # 빈 배열 예외 처리
        if not height:
            return 0

        volume = 0
        left, right = 0, len(height) - 1
        left_max, right_max = height[left], height[right]

        # 투 포인터 이동
        while left < right:
            left_max, right_max = max(height[left], left_max), max(height[right], right_max)

            # 더 높은 쪽을 향해 투 포인터 이동
            if left_max <= right_max:
                volume += left_max - height[left]
                left += 1
            else:
                volume += right_max - height[right]
                right -= 1
        return volume
```

#### 2. 투 포인터를 최대로 이동

- 시간 복잡도는 $O(n)$이지만, 투 포인터 방식보다 실행 시간이 조금 더 걸린다.

```python
from typing import List


class Solution:
    def solution2(self, height: List[int]) -> int:
        stack = []
        volume = 0

        for i in range(len(height)):
            # 변곡점(Inflection Point), 즉 현재 높이가 이전보다 더 높을 때
            while stack and height[i] > height[stack[-1]]:
                # 스택에서 추출
                top = stack.pop()

                if not len(stack):
                    break

                # 이전과의 차이만큼 물 높이 처리
                distance = i - stack[-1] - 1
                waters = min(height[i], height[stack[-1]]) - height[top]

                volume += distance * waters
            stack.append(i)
        return volume
```

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p153-158.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
