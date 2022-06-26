---
title: LeetCode 215번 문제
description: Kth Largest Element in an Array
tags: algorithm, leetcode, python, heap
---

## 문제 링크

https://leetcode.com/problems/kth-largest-element-in-an-array/

## 나의 풀이

- `heapq`는 최소 힙으로만 구현되어 있기 때문에, `nums` 리스트의 모든 요소의 부호를 뒤집어서 힙에 저장 후 해당하는 순서의 요소를 꺼내 다시 부호를 뒤집었다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
import heapq
from typing import List


class MySolution1:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = []
        for i in range(len(nums)):
            heapq.heappush(heap, -nums[i])
        for _ in range(k-1):
            heapq.heappop(heap)
        return -heapq.heappop(heap)
```

</div>
</details>

## 문제 풀이

### 1. `heapq` 모듈 이용

- 리트코드 31번 문제와 유사하지만, 이번 문제에서는 `Counter`를 사용하지 않는다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
import heapq
from typing import List


class MySolution1:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = []
        for i in range(len(nums)):
            heapq.heappush(heap, -nums[i])
        for _ in range(k-1):
            heapq.heappop(heap)
        return -heapq.heappop(heap)
```

</div>
</details>

### 2. `heapq` 모듈의 `heapify` 이용

- `heapify()`를 사용하여 리스트의 값을 하나씩 꺼내서 힙에 푸시할 필요가 없다.
- 단, `heapify()`를 사용한 상태에서 힙에 하나라도 값을 추가하면 힙 특성이 깨지기 때문에 다시 `heapify()`를 호출해야 한다.
- 하지만 이 문제에서는 `heapify()` 이후에 값이 추가되지 않으므로 한 번만 호출해도 문제는 없다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
import heapq
from typing import List


class Solution2:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)

        for _ in range(len(nums) - k):
            heapq.heappop(nums)

        return heapq.heappop(nums)
```

</div>
</details>

### 3. `heapq` 모듈의 `nlargest` 이용

- `nlargest()`를 사용하면 `n`번째로 큰 값을 추출할 수 있다.
- `k`번째만큼 큰 값이 가장 큰 값부터 순서대로 리스트로 리턴되며, 마지막 인덱스가 `k`번째 값이 된다.
- 힙이 아니더라도 내부적으로 `heapify()`를 호출해주기 때문에 별도의 힙 처리를 할 필요가 없다.
- `nlargest()`의 반대로 `nsmallest()`도 있다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
import heapq
from typing import List


class Solution3:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return heapq.nlargest(k, nums)[-1]
```

</div>
</details>

### 4. 정렬을 이용한 풀이

- 입력값이 고정되어 있기 때문에 힙을 사용할 필요 없이 그저 한 번 정렬하는 것만으로 해결할 수 있다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class Solution4:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # nums.sort()
        # return nums[-k]
        return sorted(nums, reverse=True)[k - 1]
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p456-458.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
