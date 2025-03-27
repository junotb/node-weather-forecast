import VilageFcstRepository from "../repository/vilageFcstRepository.js";
import { requestVilageFcst } from "../util/apiClient.js";

class VilageFcstRepositoryService {
  async getVilageFcstByGrid(gridX, gridY) {
    if (gridX === undefined || gridY === undefined || gridX === null || gridY === null) {
      throw new Error("gridX와 gridY가 필요합니다.");
    }

    try {
      const vilageFcsts = await requestVilageFcst(gridX, gridY);
      await VilageFcstRepository.bulkCreate(vilageFcsts);
    } catch (error) {
      console.error(error);
      throw new Error("일기예보 데이터 가져오기 실패");
    }
  }
}

export default new VilageFcstRepositoryService();
