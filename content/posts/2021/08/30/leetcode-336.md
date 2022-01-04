---
title: LeetCode 336번 문제
description: Palindrome Pairs
tags: algorithm, python, leetcode, trie
---

## 문제 링크

https://leetcode.com/problems/palindrome-pairs/

## 나의 풀이 (풀이 실패)

### 첫 번째 시도

- 트라이로 풀어야 하는 것은 알지만, 그래도 혹시나 이중 루프로 해결이 가능할까 궁금해서 풀어봤다.
- 결과는 예상대로 시간 초과(TLE)였다. 괜히 난이도 Hard가 아니지...
- 트라이를 구현하는 방법은 알지만, 이를 활용하는 방법을 모르는 것이 문제였다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class MySolution1:
    def palindromePairs(self, words: List[str]) -> List[List[int]]:
        result = []

        for i in range(len(words)):
            for j in range(len(words)):
                if i == j:
                    continue
                concat = words[i] + words[j]
                if concat == concat[::-1]:
                    result.append([i, j])

        return result
```

</div>
</details>

### 두 번째 시도

- 만약 1번 풀이에서 이중 루프의 시간 복잡도를 O(n log n)으로 줄인다면?
- 나름 기대를 품고 구현했으나 TLE가 뜨는 건 마찬가지였다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
from typing import List


class MySolution2:
    def palindromePairs(self, words: List[str]) -> List[List[int]]:
        result = []

        for i in range(len(words)):
            for j in range(i+1, len(words)):
                concat = words[i] + words[j]
                if concat == concat[::-1]:
                    result.append([i, j])

                concat = words[j] + words[i]
                if concat == concat[::-1]:
                    result.append([j, i])

        return result
```

</div>
</details>

## 문제 풀이

### 1. 팰린드롬을 브루트 포스로 계산

- 내가 푼 첫 번째 풀이와 다를 바 없기 때문에 코드는 생략한다.
- 마찬가지로 리트코드에서 시간 초과로 인해 모든 테스트 케이스를 통과할 수 없는 방법이다.

### 2. 트라이 구현

- 풀이를 보고 나니 왜 난이도가 Hard인지 알겠다. 정신 나갈 것 같다.
- 한 번만 봐서는 이해하기 어려운 풀이법이니 다시 정리해서 포스팅해야겠다.
- 트라이를 구현해서 문제를 풀면 모든 입력 값을 트라이로 만들어두고 딱 한 번씩만 탐색하기 때문에 O(n)의 시간 복잡도로 풀 수 있다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
import collections
from typing import List


# 트라이를 저장할 노드
class TrieNode:
    def __init__(self):
        # word_id가 -1이면 현재까지의 단어가 words에 존재하지 않다는 의미
        self.word_id = -1

        # 삽입 과정에서 팰린드롬이 발견된 단어의 인덱스를 저장하는 리스트
        self.palindrome_word_ids = []

        self.children = collections.defaultdict(TrieNode)


# 트라이 구현
class Trie:
    def __init__(self):
        self.root = TrieNode()

    # 클래스의 static 메소드 선언
    @staticmethod
    def is_palindrome(word: str) -> bool:
        return word[::] == word[::-1]

    # 단어 삽입
    def insert(self, index: int, word: str) -> None:
        node = self.root

        for i, char in enumerate(reversed(word)):
            # 삽입 과정에서 팰린드롬이 발견되면 파라미터로 받은 단어의 인덱스를 별도로 리스트에 저장
            if self.is_palindrome(word[0:len(word) - i]):
                node.palindrome_word_ids.append(index)
            node = node.children[char]

        # 각각의 단어가 끝나는 지점에 단어 인덱스를 부여
        node.word_id = index

    # 단어 탐색
    def search(self, index: int, word: str) -> List[List[int]]:
        result = []
        node = self.root

        while word:
            # 판별 로직 3
            # 탐색 중간에 word_id가 있고 나머지 문자가 팰린드롬인 경우
            if node.word_id >= 0:
                if self.is_palindrome(word):
                    result.append([index, node.word_id])
            if not word[0] in node.children:
                return result
            node = node.children[word[0]]
            word = word[1:]

        # 판별 로직 1
        # 끝까지 탐색했을 때 word_id가 있는 경우
        # 즉, 두 단어의 길이가 같고 현재 단어를 뒤집었을 때 단어가 트라이에 존재할 때
        if node.word_id >= 0 and node.word_id != index:
            result.append([index, node.word_id])

        # 판별 로직 2
        # 끝까지 탐색했을 때 palindrome_word_ids가 있는 경우
        # 즉, 트라이 삽입 중에 남아 있는 단어가 팰린드롬일 때
        for palindrome_word_id in node.palindrome_word_ids:
            result.append([index, palindrome_word_id])

        return result


class Solution2:
    def palindromePairs(self, words: List[str]) -> List[List[int]]:
        trie = Trie()

        for i, word in enumerate(words):
            trie.insert(i, word)

        results = []
        for i, word in enumerate(words):
            results.extend(trie.search(i, word))

        return results
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p466-475.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
