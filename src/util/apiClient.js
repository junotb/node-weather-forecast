
import dotenv from "dotenv";
import axios from 'axios';
import { getKSTNow, formatDate } from './helper.js';

// 환경변수 설정
dotenv.config();
const { API_KEY_DEC } = process.env;

/**
 * 중복 예보 아이템을 제거하기 위한 키 조합
 * @param {Array} items - 예보 아이템 배열
 * @returns {Array} - 중복 제거된 예보 아이템 배열
 */
const deduplicateForecastItems = (items) => {
  const instanceMap = new Map();
  items.forEach((item) => {
    const key = `${item.nx}_${item.ny}_${item.fcstDate}_${item.fcstTime}_${item.category}`;
    if (!instanceMap.has(key)) {
      instanceMap.set(key, { 
        nx: item.nx,
        ny: item.ny,
        base_date: item.baseDate,
        base_time: item.baseTime,
        fcst_date: item.fcstDate,
        fcst_time: item.fcstTime,
        category: item.category,
        fcst_value: typeof item.fcstValue === 'number' ? item.fcstValue : 0 
      });
    }
  });
  return Array.from(instanceMap.values());
};

/**
 * 단기 예보 데이터를 요청
 * @returns 인스턴스 배열
 */
export const requestVilageFcst = async (gridX, gridY) => {
  const kstNow = getKSTNow();
  const startDate = new Date(kstNow); // 현재 시간 +1시간 후부터 48시간 뒤까지 필터링 기준 설정
  const endDate = new Date(startDate).setUTCHours(startDate.getUTCHours() + 48); // 현재 시간 +48시간 뒤까지 필터링 기준 설정

  try {
    // 기준 날짜 설정
    const baseDate = kstNow.getUTCHours() < 5
      ? formatDate(new Date(kstNow.getTime() - 1 * 24 * 60 * 60 * 1000))
      : formatDate(kstNow);

    // 일기예보 데이터 요청
    const response = await axios.get('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst', {
      params: {
        ServiceKey: API_KEY_DEC,
        pageNo: 1,
        numOfRows: 864,
        dataType: 'JSON',
        base_date: baseDate,
        base_time: '0500',
        nx: gridX,
        ny: gridY,
      },
    });

    const { header, body } = response.data.response;

    if (header.resultCode !== '00') {
      throw new Error(`API 호출 실패: ${header.resultMsg}`);
    }

    const { item } = body.items;
    const filteredItems = item.filter((fcstItem) => {
      const fcstDateTime = new Date(Date.UTC(
        parseInt(fcstItem.fcstDate.substring(0, 4)), // 연도
        parseInt(fcstItem.fcstDate.substring(4, 6)) - 1, // 월 (0-based index)
        parseInt(fcstItem.fcstDate.substring(6, 8)), // 일
        parseInt(fcstItem.fcstTime.substring(0, 2)) // 시간
      ));

      // 현재 시간 +1시간로부터 48시간 뒤까지만 필터링
      return fcstDateTime >= startDate && fcstDateTime <= endDate;
    });

    // 중복 예보 아이템을 제거
    return deduplicateForecastItems(filteredItems);
  } catch (error) {
    console.error('일기예보 API 호출 실패:', error);
    throw new Error('일기예보 API 호출 실패');
  }
};
