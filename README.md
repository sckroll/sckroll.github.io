# sckroll.github.io

## 개요

개발 블로그 겸 포트폴리오 리포지토리  

## 기술 스택

- [Nuxt v2](https://nuxtjs.org/)(Vue 2) & [Nuxt/content v1](https://content.nuxtjs.org/)
- [Sass(SCSS)](https://sass-lang.com/)로 스타일링
- [push-dir](https://github.com/L33T-KR3W/push-dir) & [GitHub Actions](https://github.com/features/actions)로 푸시할 때마다 GitHub Pages에 배포

## 설치

### Yarn을 사용한 Nuxt 명령 수행

```bash
# dependencies 설치
$ yarn install

# localhost:3000 서버 실행
$ yarn dev

# 프로덕션 빌드 & 서버 실행
$ yarn build
$ yarn start

# 정적 사이트 생성
$ yarn generate
```

### push-dir를 통한 정적 웹 페이지 배포

```bash
# push-dir 설치
$ yarn add push-dir --dev

# package.json 파일 scripts 객체에 다음 요소 추가
"deploy": "nuxt generate && push-dir --dir=dist --branch=dist --cleanup"

# git 초기화 후 커밋, 푸시
$ git init
$ git add .
$ git commit -m "init"
$ git remote add origin https://github.com/sckroll/sckroll.github.io.git
$ git push -u origin master

# 브랜치 생성
$ git checkout -b dist
$ git checkout master

# 정적 사이트 생성 및 배포
$ yarn deploy
```

### 이후 웹 사이트 배포 방법 (GitHub Actions 미사용 시)

```bash
$ yarn deploy
```

## 주의사항

- `dist` 브랜치 생성 후 배포할 것
- 배포하기 전에 변경 내용을 `master` 브랜치에 커밋 & 푸시 후 배포할 것
  - 그렇지 않으면 `aborted: git not clean` 에러가 뜨면서 배포가 중단됨
