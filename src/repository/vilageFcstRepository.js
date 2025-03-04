import VilageFcst from "../model/VilageFcst.js";

class VilageFcstRepository {
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
