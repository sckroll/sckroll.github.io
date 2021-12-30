---
title: LeetCode 706번 문제
description: Design HashMap
tags: algorithm, python, leetcode, hash_table
---

## 문제 링크

https://leetcode.com/problems/design-hashmap/

## 나의 풀이

### 첫 번째 시도

- 테이블(리스트)을 키의 최대 개수만큼 미리 할당하여 사용하였다.
- 실행 시간은 빠르지만, 메모리 공간의 낭비가 심하며, 해시 테이블의 로직을 사용하지 않은 일종의 편법이므로 올바른 풀이법은 아니다.

```python
class MyHashMap1:
    def __init__(self):
        self.table = [-1] * (10 ** 6 + 1)

    def put(self, key: int, value: int) -> None:
        # 키가 존재하면 해당 키를 먼저 삭제한 후 삽입
        if self.get(key) != -1:
            self.remove(key)
        self.table[key] = value

    def get(self, key: int) -> int:
        return self.table[key]

    def remove(self, key: int) -> None:
        self.table[key] = -1
```

### 두 번째 시도

- 해시 테이블(리스트)의 공간을 적게 할당하는 대신 해시 충돌을 개별 체이닝 방식(연결 리스트)으로 처리하였다.
- 실행 시간은 첫 번째 시도에 비해 압도적으로 느리지만, 메모리 공간을 절약할 수 있다.

```python
class ListNode:
    def __init__(self, key=None, value=None, next=None):
        self.key = key
        self.value = value
        self.next = next


class MyHashMap2:
    def __init__(self):
        self.hash_size = 101
        # 테이블의 각 공간에 키와 값이 비어있는 노드를 미리 생성
        self.table = [ListNode()] * self.hash_size

    def put(self, key: int, value: int) -> None:
        # 키가 존재하면 해당 키를 먼저 삭제한 후 삽입
        if self.get(key) != -1:
            self.remove(key)

        # 해당 해시 값의 연결 리스트 중 가장 마지막 위치에 노드 삽입
        curr = self.table[key % self.hash_size]
        while curr.next:
            curr = curr.next
        curr.next = ListNode(key, value)

    def get(self, key: int) -> int:
        curr = self.table[key % self.hash_size]
        # 같은 해시 값을 가지는 연결 리스트를 순회
        while curr:
            if curr.key == key:
                return curr.value
            curr = curr.next
        return -1

    def remove(self, key: int) -> None:
        curr = self.table[key % self.hash_size]
        prev = None
        while curr:
            # 삭제할 키를 찾으면 이전 노드와 다음 노드를 연결
            if curr.key == key:
                prev.next = curr.next
            prev, curr = curr, curr.next
```

## 문제 풀이

### 개별 체이닝 방식을 이용한 해시 테이블 구현

```python
from collections import defaultdict


class ListNode:
    def __init__(self, key=None, value=None):
        self.key = key
        self.value = value
        self.next = None


class solution1:
    def __init__(self):
        self.size = 1000
        # 존재하지 않는 키를 조회할 경우 디폴트로 연결 리스트의 노드 생성
        self.table = defaultdict(ListNode)

    def put(self, key: int, value: int) -> None:
        index = key % self.size

        # self.table[index]가 아닌 굳이 value의 존재 유무를 비교한 이유
        # self.table이 collections.defaultdict()로 선언되었기 때문에
        # 존재하지 않는 인덱스를 조회할 경우 바로 빈 ListNode를 생성
        # 자동으로 처리하는 부분은 편리하지만 자칫 잘못하면 버그를 유발할 수 있음
        if self.table[index].value is None:
            self.table[index] = ListNode(key, value)
            return

        # 해당 인덱스에 노드가 존재하는 경우 (해시 충돌)
        p = self.table[index]
        while p:
            # 키가 이미 존재하는 경우 값을 업데이트하고 종료
            if p.key == key:
                p.value = value
                return
            # 연결 리스트가 끝났다면 루프 종료
            if p.next is None:
                break
            p = p.next
            
        # 연결 리스트의 마지막에 새 노드 연결
        p.next = ListNode(key, value)

    def get(self, key: int) -> int:
        index = key % self.size

        # 아직 어떠한 키도 이 값으로 해싱되지 않은 경우
        if self.table[index].value is None:
            return -1

        # 해싱 결과가 존재하는 경우 연결 리스트를 탐색
        p = self.table[index]
        while p:
            if p.key == key:
                return p.value
            p = p.next
        return -1

    def remove(self, key: int) -> None:
        index = key % self.size

        # 아직 어떠한 키도 이 값으로 해싱되지 않은 경우
        if self.table[index].value is None:
            return

        # 인덱스의 첫 번째 노드일 때 삭제 처리
        p = self.table[index]
        if p.key == key:
            # self.table이 collections.defaultdict()로 선언되었으므로
            # None으로 삭제하는 대신 빈 ListNode 객체를 디폴트로 설정
            self.table[index] = ListNode() if p.next is None else p.next
            return

        # 연결 리스트 노드 삭제
        prev = p
        while p:
            if p.key == key:
                prev.next = p.next
                return
            prev, p = p, p.next
```

## 배운 점

### 로드 팩터 (Load Factor)

- 해시 테이블에 저장된 데이터 개수 `n`을 버킷의 개수 `k`로 나눈 것
- 버킷(Bucket): 해시 테이블에서 데이터가 저장되는 곳 (= 슬롯(Slot))
- 로드 팩터 비율에 따라 해시 함수를 재작성하거나 해시 테이블의 크기를 조정할지를 결정한다.
- 로드 팩터가 증가할 수록 해시 테이블의 성능은 점점 감소한다.

### 해시의 충돌(Collision)을 처리하는 방법

1. 개별 체이닝 (Separate Chaining)
   - 충돌 발생 시 연결 리스트로 연결하는 방식
   - 대부분 시간 복잡도는 O(1)이지만, 최악의 경우 O(n)이다.
2. 오픈 어드레싱 (Open Addressing)
   - 충돌 발생 시 해시 테이블의 빈 공간을 탐사(Probing)하여 저장하는 방식
     - 충돌 위치부터 시작하여 순차적으로 탐사하는 선형 탐사(Linear Probing) 방식이 가장 간단하지만, 해시 테이블에 저장되는 데이터들이 고르게 분포되지 않는 현상(Clustering)이 발생한다는 단점이 있다.
   - 개별 체이닝 방법과는 달리 전체 슬롯의 개수 이상은 저장할 수 없다.
     - 기준이 되는 로드 팩터 비율을 넘어서면 더 큰 크기의 또 다른 버킷을 만들어 복사하는 리해싱(Rehashing) 작업이 일어난다.
   - 모든 원소가 반드시 자신의 해시값과 일치하는 주소에 저장된다는 보장이 없다.
   - 파이썬은 이 방법을 사용한다고 한다. 개별 체이닝 방법으로 접근하면 연결 리스트를 만들 때마다 추가 메모리를 할당하는 작업에서 오버헤드가 높아지기 때문이다.
   - 선형 탐사 방식은 일반적으로 개별 체이닝 방식에 비해 성능이 더 좋지만, 슬롯의 대부분이 차면 급격한 성능 저하가 일어나기 때문에 파이썬같은 모던(Modern) 언어들은 로드 팩터를 낮게 잡아 성능 저하 문제를 해결한다고 한다.

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p279-297.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
- https://ratsgo.github.io/data%20structure&algorithm/2017/10/25/hash/
