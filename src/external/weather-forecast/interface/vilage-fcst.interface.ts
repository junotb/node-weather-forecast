export interface VilageFcstItem {
  nx: number;
  ny: number;
  base_date: string;
  base_time: string;
  fcst_date: string;
  fcst_time: string;
  category: string;
  fcst_value: number;
}

export interface VilageFcstResponse {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      items: {
        item: VilageFcstItem[];
      };
    };
  };
}
