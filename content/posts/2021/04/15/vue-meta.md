---
title: Vue-meta를 사용하여 <head> 태그에 meta 정보 추가하기
description: TIL 210413
img: https://picsum.photos/id/6/300/200
alt: Vue-meta를 사용하여 <head> 태그에 meta 정보 추가하기
tags: [TIL, frontend, vue, vue-meta, javascript, js]
---

### 개요

Vue-meta 모듈을 통해 각 페이지의 `<title>`을 바꿀 수 있다. 그리고 `<title>`뿐만 아니라 `<meta>` 정보를 변경하여 SEO에 도움을 줄 수 있다.

### 설치 및 사용법

```bash
$ npm install --save vue-meta
```

```js[main.js]
// ...
import VueMeta from 'vue-meta'

// 두 번째 인자로 전달되는 옵션 객체는 선택
Vue.use(VueMeta, {
  // 메타 데이터를 수정할 때 사용하는 속성의 키 이름
  // Nuxt에서는 기본값이 'head'로 정의되어 있다.
  keyName: 'metaInfo',
})
```

```js[App.vue]
<template>
  <div></div>
</template>

<script>
export default {
  metaInfo: {
    title: this.title,
    titleTemplate: '%s | www.example.com',	// title 뒤에 공통적으로 붙는 문자열, 사용하지 않는다면 null
    meta: [
      { charset: 'utf-8' },

      // SEO 설정
      { name: 'description', content: 'description sample', vmid: 'description' },
      { name: 'keywords', content: ['asdf', 'qwerty'] },
      { name: 'author', content: 'Sckroll' },

      // Open Graph 설정
      {
        property: 'og:title',
        content: this.title,
        template: chunk => `${chunk} | www.example.com`,
        vmid: 'og:title',
      }

      // 모바일 설정
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  }
}
</script>
```

### 부모 & 자식 컴포넌트에서의 Vue-meta

- 부모 컴포넌트와 자식 컴포넌트에 각각 `metaInfo`가 정의된 경우 자식 컴포넌트의 `metaInfo`가 부모 컴포넌트의 `metaInfo`를 덮어 씌운다.
- `metaInfo`가 지정된 자식 컴포넌트를 두 개 갖는 부모 컴포넌트가 있을 경우, 마지막으로 불러온 자식 컴포넌트의 `metaInfo`를 적용한다. 즉, 코드 순서상 더 아래에 정의된 컴포넌트의 `metaInfo`를 적용한다.
- 부모 & 자식 컴포넌트가 `metaInfo`의 같은 `vmid` 속성을 공유할 경우 두 `metaInfo`를 합치는 대신 자식 컴포넌트가 부모 컴포넌트의 `metaInfo`를 덮어 씌운다.
  
  ```js
  // 부모 컴포넌트
  export default {
    metaInfo: {
      meta: [
        { charset: 'utf-8' },
        {
          vmid: 'description',
          name: 'description',
          content: 'Parent description.'
        }
      ]
    }
  }

  // 자식 컴포넌트
  export default {
    metaInfo: {
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Child description.'
        }
      ]
    }
  }
  ```

  ```html
  <!-- 생성 결과 -->
  <meta charset="utf-8">
  <meta data-vmid="description" name="description" content="Child description.">
  ```

### 출처

- https://vue-meta.nuxtjs.org/guide/
- https://dong-queue.tistory.com/3
- https://www.digitalocean.com/community/tutorials/vuejs-vue-meta
- https://levelup.gitconnected.com/how-to-add-metadata-in-vue-using-vue-meta-55c593f4bbf5
