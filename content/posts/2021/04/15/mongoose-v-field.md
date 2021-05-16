---
title: Mongoose __v 필드
description: TIL 210318
tags: TIL, backend, database, db, mongodb, mongoose
---

![mongoose-v-field](/images/210415-mongoose-v-field.jpg)

Mongoose의 각 도큐먼트마다 붙는 `__v` 필드(기본값: `0`)는 **버전 키(versionKey)**라고 해서 해당 도큐먼트의 내부 수정에 대한 정보를 담고 있다. (즉, 도큐먼트 버전 관리를 해주는 필드)

오직 `.save()`로 도큐먼트를 업데이트할 때만 버전 키가 업데이트되며, `update()`나 `findOneAndUpdate()`를 사용하면 업데이트되지 않는다.

스키마를 생성할 때 옵션으로 `{ versionKey: 버전키이름 }` 값을 넣어 `__v`가 아닌 다른 이름으로 바꿀 수 있으며, `{ versionKey: false }` 옵션을 주면 자동으로 `__v` 필드가 붙지 않는다.

## 출처

- https://mongoosejs.com/docs/guide.html#versionKey
- https://intellipaat.com/community/27868/what-is-the-v-field-in-mongoose
- https://velog.io/@suseodd/TIL-20.12.22
