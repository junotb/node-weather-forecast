// 현재 시간을 KST로 변환
const getCurrentKSTTime = (): Date => {
  const now = new Date();
  return new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours() + 9, // convert to KST
      now.getUTCMinutes(),
      now.getUTCSeconds(),
    ),
  );
};

// 날짜를 YYYYMMDD 포맷으로 변환
const formatDateToYYYYMMDD = (date: Date): string => {
  return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}${String(date.getUTCDate()).padStart(2, '0')}`;
};

export { getCurrentKSTTime, formatDateToYYYYMMDD };
