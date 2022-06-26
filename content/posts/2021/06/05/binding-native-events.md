---
title: Vue 상위 컴포넌트 이벤트를 하위 컴포넌트에 바인딩하기
description: <router-link>나 <nuxt-link>에 클릭 이벤트를 연결하는 법
tags: frontend, nuxt, vue, router-link, nuxt-link
---

블로그의 모바일 환경에서는 상단 메뉴가 숨겨지고, 메뉴 아이콘을 누르면 아래 예시처럼 내비게이션 드로어 메뉴가 나타난다.

![내비게이션 드로어 메뉴](/images/210605-nav-drawer.png)

메뉴 아이템을 클릭하면 해당 라우트로 이동하면서 내비게이션 드로어가 사라져야 하지만, 사라지지 않고 남아있었다. 그렇기 때문에 각 아이템의 링크(`<nuxt-link>`)에 클릭 이벤트를 연결하여 내비게이션 드로어를 끄는 작업이 필요했다. 하지만, 클릭 이벤트를 연결하기 위해 단순히 `@click`으로 바인딩하면 정상적으로 동작하지 않는데, 이는 뒤에 `native` 수식어를 붙임으로써 해결할 수 있다.

```html
<!-- 클릭했을 때 이벤트가 발생하지 않음 -->
<li v-for="item in menu" :key="item.name">
  <nuxt-link :to="item.path" @click="closeDrawer">
    {{ item.name }}
  </nuxt-link>
</li>
```
```html
<!-- 클릭했을 때 이벤트가 정상적으로 발생 -->
<li v-for="item in menu" :key="item.name">
  <nuxt-link :to="item.path" @click.native="closeDrawer">
    {{ item.name }}
  </nuxt-link>
</li>
```

블로그가 Nuxt 기반이라 라우트 링크를 `<nuxt-link>`로 처리하지만, Nuxt뿐만 아니라 Vue의 `<router-link>`에도 이 방법을 사용함으로써 이벤트를 바인딩할 수 있다.

```html
<router-link
    :to="to"
    @click.native="InlineButtonClickHandler"
>
    {{name}}
</router-link>
```

굳이 클릭(`@click`) 이벤트가 아니여도 `.native` 테크닉을 사용할 수 있다. 즉, 지금까지 구현한 과정은 현재 사용 중인 하위 컴포넌트의 이벤트 대신 상위 컴포넌트(루트 엘리먼트)의 이벤트를 호출하는 방법인 것이다.

이 과정을 Vue 공식 웹 사이트에서는 네이티브 이벤트를 컴포넌트에 바인딩한다고 표현한다. 여기서 **네이티브 이벤트**란 `click`, `mouseover`와 같은 HTML의 Native DOM event를 의미한다.

## 출처

- https://github.com/nuxt/nuxt.js/issues/1786
- https://stackoverflow.com/questions/42091805/add-event-listener-to-router-link-component-using-v-on-directive-vuejs
- https://kr.vuejs.org/v2/guide/components-custom-events.html#%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90-%EB%B0%94%EC%9D%B8%EB%94%A9-%ED%95%98%EA%B8%B0
- https://hj-tilblog.tistory.com/88
