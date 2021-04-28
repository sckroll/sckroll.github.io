---
title: LeetCode 15번 문제
description: 3Sum
img: https://picsum.photos/id/16/300/200
alt: LeetCode 15번 문제
tags: [algorithm, python, leetcode, array]
---

### 문제 링크

https://leetcode.com/problems/3sum/

### 나의 풀이 (풀이 실패)

- 효율적인 해결 방법을 찾지 못해 브루트 포스로 풀었고, 당연히 시간 초과로 인해 오답 처리되었다.

```python
from typing import List


class Solution:
    def my_solution(self, nums: List[int]) -> List[List[int]]:
        triplets = set()
        if len(nums) < 3:
            return []

        nums.sort()
        for i in range(len(nums) - 2):
            for j in range(i + 1, len(nums)):
                for k in range(j + 1, len(nums)):
                    if nums[i] + nums[j] + nums[k] == 0:
                        triplets.add((nums[i], nums[j], nums[k]))

        return [list(triplet) for triplet in triplets]
```

### 문제 풀이

#### 1. 브루트 포스 (해결 불가)

- 시간 복잡도는 $O(n^3)$이다.
- 나의 풀이와 크게 다를 게 없으므로 코드는 생략했다.
- 단, 중복을 피하기 위해 `set`을 사용한 내 방법과 달리 정렬된 리스트의 이전 항목과 현재 항목이 같으면 `continue`로 건너뛰어 중복을 피하는 방법을 사용했고, 이 방법은 방법 2에서도 사용된다.

#### 2. 투 포인터로 합 계산

- 시간 복잡도는 $O(n^2)$이다.

```python
from typing import List


class Solution:
    def solution2(self, nums: List[int]) -> List[List[int]]:
        results = []
        nums.sort()

        for i in range(len(nums) - 2):
            # 중복된 값 건너뛰기
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            # i 이후의 구간의 양 끝 간격을 좁혀가며 합 sum 계산
            left, right = i + 1, len(nums) - 1
            while left < right:
                sum = nums[i] + nums[left] + nums[right]

                if sum < 0:
                    # 값을 더 키우기 위해 left를 이동
                    left += 1
                elif sum > 0:
                    # 값을 더 줄이기 위해 right를 이동
                    right -= 1
                else:
                    # sum = 0인 경우이므로 정답 및 스킵 처리
                    results.append([nums[i], nums[left], nums[right]])

                    # left, right 양 옆으로 동일한 값이 있을 수 있으므로
                    # 동일한 값이 나오지 않을 때까지 포인터를 스킵
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1

                    # left와 right를 한 칸 더 이동
                    left += 1
                    right -= 1

        return results
```

### 배운 점

- 최근 문제 풀이 방법 중 **투 포인터(Two Pointers)**라는 기법이 자주 사용되었는데, 궁금해하던 중 마침 책에서 투 포인터 기법에 대해 설명해주었다.
  - 대개는 **시작점과 끝점** 또는 **왼쪽 포인터와 오른쪽 포인터 두 지점**을 기준으로 하는 문제 풀이 전략을 의미한다.
  - 범위를 좁혀 나가기 위해서는 일반적으로 배열이 정렬되어 있을 때가 더 유용하다.

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p184-189.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
