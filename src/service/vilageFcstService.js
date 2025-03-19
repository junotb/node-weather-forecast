import VilageFcstRepository from "../repository/vilageFcstRepository.js";

class VilageFcstRepositoryService {
  async getVilageFcstByGrid(nx, ny) {
    if (nx === undefined || ny === undefined || nx === null || ny === null) {
      throw new Error("nx와 ny가 필요합니다.");
    }
    return VilageFcstRepository.findByGrid(nx, ny);
  }
}

export default new VilageFcstRepositoryService();
