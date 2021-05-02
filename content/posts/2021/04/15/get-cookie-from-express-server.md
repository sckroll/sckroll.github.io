---
title: Express 서버에서 저장한 쿠키를 브라우저에서 보는 방법
description: TIL 210318
tags: [TIL, backend, cors, express, javascript, js, axios, cookie]
---

### 개요

- 백엔드와 프론트엔드의 도메인 주소가 다르면 서버로부터 쿠키를 전달받을 수 없다.
- 따라서 요청/응답 헤더를 설정할 필요가 있다.
- 프론트엔드에서는 AJAX 요청을 할 때 요청 헤더를 설정해야 한다.
- 백엔드에서는 CORS 설정을 통해 응답 헤더를 설정해야 한다.

### 프론트에서 AJAX 요청 시 옵션 추가

프론트에서 AJAX(`axios` 등)로 요청을 보낼 때 `{ withCredentials: true }` 옵션 추가하여 요청 헤더를 설정한다.  
(Vue의 `axios` 플러그인을 사용한다면 `axios.create()`에 `{ withCredentials: true }` 옵션을 인수로 추가할 수 있다.)

### 서버에서 CORS 설정

응답 헤더의 `Access-Control-Allow-Credentials`, `Access-Control-Allow-Origin` 옵션 설정해야 한다.
- 방법 1: Express의 `cors` 미들웨어 사용
  - `Access-Control-Allow-Credentials` 옵션 설정 방법: `cors` 미들웨어에 `{ credentials: true }` 옵션 추가
  - `Access-Control-Allow-Origin` 옵션 설정 방법: `cors` 미들웨어에 `{ origin: 요청 오리진(출처 도메인) }` 옵션 추가
    - 값을 `*`으로 주면 **모든 오리진을 허용**하므로 주의할 것
    - 특정 오리진 대신 `true` 값을 주면 현재 프론트 도메인 주소가 자동으로 `Access-Control-Allow-Origin`에 들어간다. 만약 프론트의 도메인 주소가 `localhost:8080`이라면, `Access-Control-Allow-Origin`의 값은 자동으로 `localhost:8080`이 된다.
- 방법 2: 라우터에서 응답 헤더를 직접 넣는 방법
  - 위의 방법처럼 `cors` 미들웨어에 옵션을 넣는 대신 라우터의 응답 객체 `res`의 `setHeader()` 메소드를 사용하여 응답 헤더를 설정할 수 있다.
  ```js
  res.setHeader('Access-Control-Allow-Origin', 'localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); 
  ```

### 쿠키 저장 및 조회

이제 `res.cookie(쿠키_이름, 값, 옵션)`로 쿠키를 저장하면 브라우저에서 `document.cookie`로 볼 수 있다.
- `document.cookie()`가 아님에 주의하자. 메소드가 아니라 속성이다.

### 주의사항

`res.cookie()`에 옵션으로 `{ httpOnly: true }` 값을 주면 `document.cookie`로 볼 수 없다. 이 옵션을 설정하면 HTTP로 통신하는 경우에만 쿠키를 사용하게 된다.

### 출처

- https://www.zerocho.com/category/NodeJS/post/5a6c347382ee09001b91fb6a
- https://www.zerocho.com/category/NodeJS/post/5e9bf5b18dcb9c001f36b275
- https://ko.javascript.info/cookie
- https://opentutorials.org/course/3387/21744
