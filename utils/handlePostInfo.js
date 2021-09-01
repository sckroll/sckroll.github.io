export const trimTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.slice(0, maxLength).concat('...')
  }
  return title
}

export const trimTags = (tagStr, maxLength) => {
  const tags = tagStr.split(', ')
  if (tags.length > maxLength) {
    return tags.slice(0, maxLength)
  }
  return tags
}

export const trimDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength).concat('...')
  }
  return description
}
