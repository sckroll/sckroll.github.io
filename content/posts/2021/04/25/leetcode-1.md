---
title: LeetCode 1번 문제
description: Two Sum
img: https://picsum.photos/id/14/300/200
alt: LeetCode 1번 문제
tags: [algorithm, python, leetcode, array]
---

### 문제 링크

https://leetcode.com/problems/two-sum/

### 나의 풀이

```python
from typing import List


class Solution:
    def my_solution(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
```

### 문제 풀이

#### 1. 브루트 포스

- 시간 복잡도 $O(n^2)$으로, 가장 비효율적인 방법이다.
  - 그래서 실행 시간도 느려야 하겠지만, 리트코드 측에서 테스트 케이스를 대폭 삭제하면서 실행 시간이 상당히 빨라졌다고 한다. 다른 풀이도 전체적으로 빨라진 것으로 보인다. [참고](https://github.com/onlybooks/algorithm-interview/issues/62)
- 내가 풀었던 방법과 동일하기 때문에 소스 코드는 생략한다.

#### 2. `in`을 이용한 탐색

- 시간 복잡도 $O(n^2)$이고, `in`의 시간 복잡도는 $O(n)$이지만, 파이썬 내부 함수로 구현된 `in`은 속도가 빠르다고 한다.

```python
from typing import List


class Solution:
    def solution2(self, nums: List[int], target: int) -> List[int]:
        for i, n in enumerate(nums):
            complement = target - n

            if complement in nums[i + 1:]:
                # return [nums.index(n), nums[i + 1:].index(complement) + (i + 1)]
                return [i, nums[i + 1:].index(complement) + (i + 1)]
```

#### 3. 첫 번째 수를 뺀 결과 키 조회

- 시간 복잡도는 $O(n)$이다. 딕셔너리의 조회는 평균적으로 시간 복잡도가 $O(1)$이기 때문이다.

```python
from typing import List


class Solution:
    def solution3(self, nums: List[int], target: int) -> List[int]:
        nums_map = {}

        # 키와 값을 바꿔서 딕셔너리로 저장
        for i, num in enumerate(nums):
            nums_map[num] = i

        # 타겟에서 첫 번째 수를 뺀 결과를 키로 조회
        for i, num in enumerate(nums):
            # 딕셔너리에 키가 있고, 같은 원소를 두 번 선택하지 않았는지 검사
            if target - num in nums_map and i != nums_map[target - num]:
                return [i, nums_map[target - num]]
```

#### 4. 조회 구조 개선

- 시간 복잡도는 $O(n)$이다.
- 전체를 모두 저장할 필요 없이 정답을 찾으면 함수를 바로 빠져나올 수 있으나, 두 번째 값을 찾기 위해 매번 비교해야 하기 때문에 풀이 3에 비해 성능상의 큰 이점은 없다.

```python
from typing import List


class Solution:
    def solution4(self, nums: List[int], target: int) -> List[int]:
        nums_map = {}

        # 하나의 for 문으로 통합
        for i, num in enumerate(nums):
            if target - num in nums_map:
                return [nums_map[target - num], i]
            nums_map[num] = i
```

#### 풀이 불가: 투 포인터 이용

- 두 개의 포인터가 간격을 좁혀가며 타겟을 찾는 방식
- 하지만 `nums`는 정렬되어 있어야 하며, 정렬한 이후에는 인덱스가 섞이기 때문에 투 포인터를 사용하여 문제를 해결할 수 없다.

```python
from typing import List


class Solution:
    def solutionX(self, nums: List[int], target: int) -> List[int]:
        # nums.sort()
        left, right = 0, len(nums) - 1
        while not left == right:
            # 합이 타겟보다 작으면 왼쪽 포인터를 오른쪽으로
            if nums[left] + nums[right] < target:
                left += 1
            # 합이 타겟보다 크면 오른쪽 포인터를 왼쪽으로
            elif nums[left] + nums[right] > target:
                right -= 1
            else:
                return [left, right]
```

### 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p173-179.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
