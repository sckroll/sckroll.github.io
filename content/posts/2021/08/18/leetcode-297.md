---
title: LeetCode 297번 문제
description: Serialize and Deserialize Binary Tree
tags: algorithm, python, leetcode, tree, bfs
---

## 문제 링크

https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

## 나의 풀이

- 직렬화의 결과로 문자열이 나와야 하지만, 아래 예시처럼 직렬화의 결과가 리스트여도 테스트 케이스는 무난하게 통과한다. 문자열로 변경해야 한다면 직렬화 메소드의 리턴 값을 `''.join(result)`으로 변경하면 된다.

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
import collections


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class MySolution1:
    def serialize(self, root):
        result: list = []
        queue = collections.deque([root])

        # BFS 수행
        while queue:
            node = queue.popleft()
            if node is None:
                result.append(None)
                continue
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
            
        # 배열의 뒷부분에 붙은 모든 None을 제거
        while result:
            curr = result.pop()
            if curr is not None:
                result.append(curr)
                break

        return result

    def deserialize(self, data):
        # 직렬화 결과가 빈 리스트라면 역직렬화할 필요가 없음
        if not data:
            return None

        result = TreeNode(data[0])
        queue = collections.deque([result])

        # 이전 노드의 왼쪽/오른쪽 자식 노드를 동시에 처리
        for i in range(1, len(data), 2):
            node = queue.popleft()
            if node is None:
                continue

            # 왼쪽 노드
            if data[i] is not None:
                node.left = TreeNode(data[i])
                queue.append(node.left)
            # 오른쪽 노드
            if (i+1) < len(data) and data[i+1] is not None:
                node.right = TreeNode(data[i + 1])
                queue.append(node.right)

        return result
```

</div>
</details>

## 문제 풀이

### 1. 직렬화 & 역직렬화 구현

<details>
<summary>소스 코드</summary>
<div markdown="1">

```python
import collections


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution1:
    def serialize(self, root: TreeNode) -> str:
        queue = collections.deque([root])

        # 인덱스 0번은 None으로 고정
        # 문자열에서 None을 표현할 수 없으므로 #으로 대체
        result = ['#']

        # 트리 BFS 직렬화
        while queue:
            node = queue.popleft()
            if node:
                queue.append(node.left)
                queue.append(node.right)

                # 미리 노드 값을 문자열 형식으로 변환 후 result에 추가
                result.append(str(node.val))
            else:
                result.append('#')

        # 뒤에 필요 없는 None(#)이 여러 개 붙지만 역직렬화 과정에서 딱히 문제될 일은 없음
        return ' '.join(result)


    def deserialize(self, data: str) -> TreeNode:
        # 예외 처리
        if data == '# #':
            return None

        nodes = data.split()

        root = TreeNode(int(nodes[1]))
        queue = collections.deque([root])
        index = 2

        # 자식 노드 결과를 먼저 확인 후 큐 삽입 (런너 기법 참고)
        while queue:
            node = queue.popleft()

            # != 대신 is not을 쓰면 SyntaxWarning이 출력됨
            if nodes[index] != '#':
                node.left = TreeNode(int(nodes[index]))
                queue.append(node.left)
            index += 1

            if nodes[index] != '#':
                node.right = TreeNode(int(nodes[index]))
                queue.append(node.right)
            index += 1

        return root
```

</div>
</details>

## 출처

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p406-412.
  - [도서 정보](https://www.onlybook.co.kr/entry/algorithm-interview)
  - [GitHub](https://github.com/onlybooks/algorithm-interview)
