export const trimTags = (tagStr, maxLength) => {
  const tags = tagStr.split(', ')
  if (tags.length > maxLength) {
    return tags.slice(0, maxLength)
  }
  return tags
}
