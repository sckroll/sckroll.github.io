---
title: LeetCode 208번 문제
description: Implement Trie (Prefix Tree)
tags: algorithm, python, leetcode, trie
---

## 문제 링크

https://leetcode.com/problems/implement-trie-prefix-tree/

## 나의 풀이 (풀이 실패)

- 처음 접해보는 자료구조라 구현 방법을 다소 참고할 수 밖에 없었다.
- 참고해서 구현했지만 책에서 나온 풀이법과 다를 바가 없으므로 풀이법은 생략하였다.

## 문제 풀이

### 1. 딕셔너리를 이용해 간결한 트라이 구현

- 트라이는 다진 트리(m-ary Tree)이기 때문에 이진 트리처럼 `left`와 `right`를 나눌 필요 없이 딕셔너리 하나로 자식 노드를 관리할 수 있다.
- 일반 딕셔너리 대신 `defaultdict`를 사용하면 코드를 더 줄일 수 있다.

```python
import collections


# 트라이를 저장할 노드를 별도의 클래스로 선언
class TrieNode:
    def __init__(self):
        # 현재 노드까지 연결했을 때 단어가 완성되는 경우 True
        self.word = False
        
        # 자식 노드를 저장하는 딕셔너리
        # self.children = {}
        self.children = collections.defaultdict(TrieNode)


class Trie:
    def __init__(self):
        self.root = TrieNode()

    # 트라이에 단어 삽입
    def insert(self, word: str) -> None:
        node = self.root

        for char in word:
            # 해당하는 자식 노드가 없으면 노드를 새로 생성
            # if char not in node.children:
            #     node.children[char] = TrieNode()
                
            # 노드 위치 갱신
            node = node.children[char]

        # 단어가 추가되었으므로 단어 여부를 True로 설정
        node.word = True

    # 단어 검색
    def search(self, word: str) -> bool:
        node = self.root
        
        for char in word:
            # 해당하는 자식 노드가 없으면 단어가 존재하지 않다는 의미
            if char not in node.children:
                return False

            # 노드 위치 갱신
            node = node.children[char]
            
        # 마지막 노드의 word 속성이 True면 찾고자 하는 단어가 존재한다는 뜻
        return node.word

    # 해당 문자열로 시작하는 단어가 있는지 여부 판별 (단어 검색 메소드의 로직과 비슷)
    def startsWith(self, prefix: str) -> bool:
        node = self.root

        for char in prefix:
            # 해당하는 자식 노드가 없으면 prefix로 시작하는 단어가 존재하지 않다는 의미
            if char not in node.children:
                return False

            # 노드 위치 갱신
            node = node.children[char]

        # 단어 검색과 달리 단어 자체가 존재하는지 판단하는 게 아니라
        # 자식 노드가 존재하는지 여부만 판별하기 때문에 True 반환
        return True
```

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p459-465.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
