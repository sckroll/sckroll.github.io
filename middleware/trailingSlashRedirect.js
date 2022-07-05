/**
 * URL 뒤에 자동으로 붙는 슬래시(/)를 제거하는 라우트 미들웨어
 *
 * 출처: https://stackoverflow.com/questions/58688604/how-to-remove-trailing-slash-from-url-in-nuxt-js
 */
export default function ({ route, redirect }) {
  if (route.path !== '/' && route.path.endsWith('/')) {
    const { path, query, hash } = route
    const nextPath = path.replace(/\/+$/, '') || '/'
    const nextRoute = { path: nextPath, query, hash }

    redirect(nextRoute)
  }
}
