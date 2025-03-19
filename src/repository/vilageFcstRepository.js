import VilageFcst from "../model/vilageFcst.js";
import { requestVilageFcst } from "../util/apiClient.js";

class VilageFcstRepository {
  async fetchVilageFcst(gridX, gridY) {
    const vilageFcst = await requestVilageFcst(gridX, gridY);
    return vilageFcst;
  }

  async findByGrid(gridX, gridY) {
    return VilageFcst.findAll({
      where: {
        grid_x: gridX,
        grid_y: gridY,
      },
    });
  }
}

export default new VilageFcstRepository();
