export const formatDate = date => {
  const options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }
  const formattedTime = new Date(date).toLocaleDateString('kr', options)
  return formattedTime.replace(/. /g, '/').slice(0, -1)
}
