import { state } from '@/store'

export const trimTags = (tagStr, maxLength) => {
  const tags = tagStr.split(', ')
  if (tags.length > maxLength) {
    return tags.slice(0, maxLength)
  }
  return tags
}

export const getLastPage = totalPostCount => {
  // 한 페이지당 포스트 개수
  const { perPage } = state()

  return Math.ceil(totalPostCount / perPage)
}

export const skipPost = (currPage, totalPostCount) => {
  // 한 페이지당 포스트 개수
  const { perPage } = state()

  if (parseInt(currPage) === 1) return 0
  else if (parseInt(currPage) === getLastPage(totalPostCount))
    return totalPostCount - (totalPostCount % perPage)
  return (parseInt(currPage) - 1) * perPage
}
