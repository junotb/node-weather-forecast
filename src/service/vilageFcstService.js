import VilageFcstRepository from "../repository/vilageFcstRepository.js";

class VilageFcstRepositoryService {
  async getVilageFcstByGrid(gridX, gridY) {
    if (gridX === undefined || gridY === undefined || gridX === null || gridY === null) {
      throw new Error("gridX와 gridY가 필요합니다.");
    }
    return VilageFcstRepository.findByGrid(gridX, gridY);
  }
}

export default new VilageFcstRepositoryService();
