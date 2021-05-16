---
title: Vue에서 props로 객체를 받을 때 default 값 정의
description: TIL 210323
tags: TIL, frontend, vue, vue-router, javascript, js
---

`props`로 객체를 받을 경우 기본값은 반드시 **기본값을 반환하는 팩토리 함수**의 형태로 사용해야 한다.

```js
props: {
  club: {
    type:Object,
    // (X)
    // 
    // default: {
    //   name: 'test',
    //   description: 'club test',
    // },

    // (O)
    default: () => {
      return {
        name: 'test',
        description: 'club test',
      }
    },
  }
}
```

## 출처

- https://yunzema.tistory.com/324
- https://kr.vuejs.org/v2/guide/components-props.html#Prop-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
- https://stackoverflow.com/questions/53143723/vue-how-set-default-props-for-nested-object
