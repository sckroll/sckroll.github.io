---
title: Express 서버에서 저장한 쿠키를 브라우저에서 보는 방법
description: TIL 210318
img: https://picsum.photos/id/1/300/201
alt: Express 서버에서 저장한 쿠키를 브라우저에서 보는 방법
tags: [TIL, backend, cors, express, javascript, js, axios, cookie]
---

### 개요

- 백엔드와 프론트엔드의 도메인 주소가 다르면 서버로부터 쿠키를 전달받을 수 없음
- 따라서 요청/응답 헤더를 설정할 필요가 있음
- 프론트엔드에서는 AJAX 요청을 할 때 요청 헤더를 설정
- 백엔드에서는 CORS 설정을 통해 응답 헤더 설정

### 프론트에서 AJAX 요청 시 옵션 추가

프론트에서 AJAX(`axios` 등)로 요청을 보낼 때 `{ withCredentials: true }` 옵션 추가  
(Vue의 `axios` 플러그인을 사용한다면 `axios.create()`에 `{ withCredentials: true }` 옵션을 인수로 추가)

### 서버에서 CORS 설정

응답 헤더의 `Access-Control-Allow-Credentials`, `Access-Control-Allow-Origin` 옵션 설정
- 방법 1: Express의 `cors` 미들웨어 사용
  - `Access-Control-Allow-Credentials` 옵션 설정 방법: `cors` 미들웨어에 `{ credentials: true }` 옵션 추가
  - `Access-Control-Allow-Origin` 옵션 설정 방법: `cors` 미들웨어에 `{ origin: 요청 오리진(출처 도메인) }` 옵션 추가
    - 값을 `*`으로 주면 **모든 오리진을 허용**하므로 주의
    - 특정 오리진 대신 `true` 값을 주면 현재 프론트 도메인 주소가 자동으로 `Access-Control-Allow-Origin`에 들어감
- 방법 2: 라우터에서 응답 헤더를 직접 넣는 방법
  ```js
  res.setHeader('Access-Control-Allow-Origin', 'localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); 
  ```

### 쿠키 저장 및 조회

이제 `res.cookie(쿠키_이름, 값, 옵션)`로 쿠키를 저장하면 브라우저에서 `document.cookie`로 볼 수 있음
- `document.cookie()`가 아님

### 주의사항

`res.cookie()`에 옵션으로 `{ httpOnly: true }` 값을 주면 `document.cookie`로 볼 수 없음  
(개인 프로젝트 만들 때 JWT 토큰을 쿠키에 저장하면서 이를 경험함 ㅜ)

### 출처

- https://www.zerocho.com/category/NodeJS/post/5a6c347382ee09001b91fb6a
- https://www.zerocho.com/category/NodeJS/post/5e9bf5b18dcb9c001f36b275
- https://ko.javascript.info/cookie
- https://opentutorials.org/course/3387/21744
