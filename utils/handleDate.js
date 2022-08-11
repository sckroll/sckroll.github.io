/**
 * 날짜를 `YY/MM/DD` 형식으로 변환하는 메소드
 * @param {Date} date 현재 날짜
 * @returns `YY/MM/DD` 형식의 날짜 문자열
 */
export const formatDate = date => {
  const options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }
  return new Date(date).toLocaleDateString('kr', options)
}

/**
 * 수정된 날짜와 생성된 날짜의 차이를 구하는 메소드 (시간 생략)
 * @param {String} createdAtString 생성된 날짜 문자열
 * @param {String} updatedAtString 수정된 날짜 문자열
 * @returns 수정된 날짜와 생성된 날짜의 차이
 */
export const diffDate = (createdAtString, updatedAtString) => {
  const createdAt = new Date(createdAtString)
  const updatedAt = new Date(updatedAtString)

  // 시간 단위 삭제
  const createdDate = new Date(
    createdAt.getYear(),
    createdAt.getMonth(),
    createdAt.getDate(),
  )
  const updatedDate = new Date(
    updatedAt.getYear(),
    updatedAt.getMonth(),
    updatedAt.getDate(),
  )

  return updatedDate - createdDate
}
