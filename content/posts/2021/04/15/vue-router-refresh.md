---
title: Vue-router의 현재 경로에서 새로고침하는 방법
description: TIL 210321
tags: TIL, frontend, vue, vue-router, javascript, js
---

### 개요

`$router.push()`를 통해 현재 경로에서 같은 경로로 이동하여 새로고침을 하려 했으나 `NavigationDuplicated` 에러가 떴다.  
(ex: `/club` 경로에서 `/club`로 이동)

이는 현재 페이지 주소가 이동하려는 페이지의 주소와 같기 때문에 발생하는 에러라고 한다.

### 해결책

해결하는 방법은 `this.$router.go(this.$router.currentRoute)`를 사용하는 것이다.
- 여기서 `this.$router.currentRoute`는 현재 라우트에 대한 객체를 의미하는데, 콘솔에 출력해보면 아래와 같다.
  ```js
  {name: "Home", meta: {...}, path: "/", hash: "", query: {...}, ...}
  ```

혹은 `this.$router.go(0)`를 사용하는 방법이 있다.

다른 방법으로는 컴포넌트에 `key` 속성을 넣어 새로고침할 때마다 `key` 값을 변경하는 방법을 응용하여 페이지 전체를 다시 렌더링하는 방법이 있다. (`v-for` 속성과 같이 `key` 속성을 사용하는 것처럼)

### 여담

사실 굳이 당장은 페이지를 새로고침을 할 필요가 없다고 생각하여 위 방법들을 사용하진 않았지만, `this.$router.currentRoute` 객체로 현재 라우트를 구별하여 홈 페이지가 아닐 경우 홈 페이지로 이동하는 로직을 구성할 수 있었다.

### 출처

- https://stackoverflow.com/questions/41301099/do-we-have-router-reload-in-vue-router
- https://m.blog.naver.com/ming___jee/222060921909
- https://medium.com/hackernoon/the-correct-way-to-force-vue-to-re-render-a-component-bde2caae34ad
