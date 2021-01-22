---
title: 홈페이지 리뉴얼
description: 이전의 모습은 잊어주세요...
img: https://picsum.photos/id/1/300/200
alt: 리뉴얼된 홈페이지 모습
tags: [tag, 태그]
---

Empower your NuxtJS application with `@nuxtjs/content` module: write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

## Writing content

Learn how to write your `content/`, supporting Markdown, YAML, CSV and JSON: https://content.nuxtjs.org/writing.

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

## Displaying content

Learn how to display your Markdown content with the `<nuxt-content>` component directly in your template: https://content.nuxtjs.org/displaying.

```js{3,5-7}[file-name.js]
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return { post }
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      }
      return new Date(date).toLocaleDateString('kr', options)
    },
  },
}
```

## 제목 테스트
### 제목 1
#### 제목 1-1
- ㅇㅇ
### 제목 2
#### 제목 2-1
- ㅇㅇㅇㅇ
#### 제목 2-2
- ㅇㅇㅇㅇ
