---
title: Nuxt에서 SCSS 사용하는 방법
description: TIL 210424
tags: TIL, frontend, vue, nuxt, scss
---

### 개요

운영 중인 블로그는 Nuxt로 만들었는데, 기존에 사용하던 CSS 대신 SCSS로 스타일링을 하고자 교체 작업을 수행했다. CSS로도 충분히 스타일링은 가능하지만, 개인 프로젝트에 SCSS를 적용하고 나서 CSS 전처리기의 참맛(?)을 알아버렸기 때문에 개인 홈페이지에도 이 편리함을 누려보고 싶었다.

### 본론

1. `node-sass`와 `sass-loader`를 설치한다.
   ```bash
   # npm
   $ npm install --save-dev node-sass sass-loader

   # yarn
   $ yarn add --dev node-sass sass-loader
   ```
   > #### 주의
   > `vue@2.6.12`에서는 `sass-loader@11.0.0` 혹은 이상의 버전을 설치하면 아래와 같은 에러가 뜬다.
   >
   > <img src="/images/210424-nuxt-scss.jpg" alt="sass-loader 에러" style="max-width: 100%;" />
   > 
   > 해결하기 위해서는 `sass-loader`를 10 버전으로 다운그레이드해야 한다.
   > ```bash
   > # npm
   > $ npm install --save-dev sass-loader@10
   >
   > # yarn
   > $ yarn add --dev sass-loader@10
   > ```

2. `nuxt.config.js` 파일에서 적용할 SCSS 파일의 경로를 `css` 속성에 넣는다.
   ```js
   export default {
     ...
     css: ['~assets/scss/main.scss'],
     ...
   }
   ```

3. 전역변수나 믹스인 등을 사용하기 위해서는 `@nuxtjs/style-resources` 패키지를 설치 후 `nuxt.config.js` 파일에 다음과 같이 작성한다.
   ```js
   export default {
     css: ['~assets/scss/main.scss'],
     buildModules: ['@nuxtjs/style-resources'],
     styleResources: {
       less: '~/assets/scss/*.scss'
     }
   }
   ```

4. 적용 끝! 이제 서버를 실행하면 정상적으로 동작하는 것을 확인할 수 있다.

### 출처

- https://markettraders.kr/nuxt-js-scss-import/
- https://stackoverflow.com/questions/66082397/typeerror-this-getoptions-is-not-a-function
- https://wotres.tistory.com/entry/vue-error-%ED%95%B4%EA%B2%B0%EB%B2%95-Syntax-Error-TypeError-thisgetOptions-is-not-a-function
