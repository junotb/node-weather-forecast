// 현재 시간을 KST로 변환
const getKSTNow = () => {
  const now = new Date();
  return new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours() + 9, // convert to KST
    now.getUTCMinutes(),
    now.getUTCSeconds()
  ));
};

// 날짜를 YYYYMMDD 포맷으로 변환
const formatDate = (date) => {
  return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}${String(date.getUTCDate()).padStart(2, '0')}`;
};

export { getKSTNow, formatDate };