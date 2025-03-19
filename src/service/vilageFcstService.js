import VilageFcstRepository from "../repository/vilageFcstRepository.js";

class VilageFcstRepositoryService {
  async getVilageFcstByGrid(nx, ny) {
    if (!nx || !ny) throw new Error("nx와 ny가 필요합니다.");
    return VilageFcstRepository.findByGrid(nx, ny);
  }
}

export default new VilageFcstRepositoryService();
