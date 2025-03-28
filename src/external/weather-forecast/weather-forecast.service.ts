import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { getCurrentKSTTime, formatDateToYYYYMMDD } from 'src/common/util';
import { VilageFcstItem, VilageFcstResponse } from 'src/external/weather-forecast/interface/vilage-fcst.interface';
  
@Injectable()
export class WeatherForecastService {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.apiUrl = this.configService.getOrThrow<string>(
      'API_GET_VILAGE_FCST_URL',
    );
    this.apiKey = this.configService.getOrThrow<string>('API_KEY_DEC');
  }

  /**
   * 일기예보 데이터 요청
   * @param gridX 격자 X 좌표
   * @param gridY 격자 Y 좌표
   * @returns 일기예보 데이터
   */
  async fetch(gridX: number, gridY: number): Promise<VilageFcstItem[]> {
    const kstNow = getCurrentKSTTime();
    const startDate = new Date(kstNow); // 현재 시간 +1시간 후부터 48시간 뒤까지 필터링 기준 설정
    const endDate = new Date(startDate.getTime() + 48 * 60 * 60 * 1000); // 현재 시간 +48시간 뒤까지 필터링 기준 설정

    // 기준 날짜 설정
    const baseDate =
      kstNow.getUTCHours() < 5
        ? formatDateToYYYYMMDD(
            new Date(kstNow.getTime() - 1 * 24 * 60 * 60 * 1000),
          )
        : formatDateToYYYYMMDD(kstNow);

    // 일기예보 데이터 요청
    const response$ = this.httpService.get<VilageFcstResponse>(this.apiUrl, {
      params: {
        ServiceKey: this.apiKey,
        pageNo: 1,
        numOfRows: 864,
        dataType: 'JSON',
        base_date: baseDate,
        base_time: '0500',
        nx: gridX,
        ny: gridY,
      },
    });

    const response = await lastValueFrom(response$);
    const { header, body } = response.data.response;

    if (header.resultCode !== '00') {
      throw new Error(`API 호출 실패: ${header.resultMsg}`);
    }

    // 중복 예보 아이템을 제거하기 위한 맵 생성
    const map = new Map<string, VilageFcstItem>();

    for (const item of body.items.item) {
      const fcstDateTime = new Date(
        Date.UTC(
          +item.fcstDate.substring(0, 4), // 연도
          +item.fcstDate.substring(4, 6) - 1, // 월 (0-based index)
          +item.fcstDate.substring(6, 8), // 일
          +item.fcstTime.substring(0, 2), // 시간
        ),
      );

      // 현재 시간 +1시간로부터 48시간 뒤까지만 필터링
      if (fcstDateTime < startDate || fcstDateTime > endDate) {
        continue;
      }

      // 중복 예보 아이템을 제거하기 위한 키 생성
      const key = `${item.nx}_${item.ny}_${item.fcstDate}_${item.fcstTime}_${item.category}`;
      if (!map.has(key)) {
        map.set(key, {
          nx: item.nx,
          ny: item.ny,
          base_date: item.baseDate,
          base_time: item.baseTime,
          fcst_date: item.fcstDate,
          fcst_time: item.fcstTime,
          category: item.category,
          fcst_value: typeof item.fcstValue === 'number' ? item.fcstValue : 0,
        });
      }
    }

    // 중복 예보 아이템을 제거한 데이터 반환
    return Array.from(map.values());
  }
}
