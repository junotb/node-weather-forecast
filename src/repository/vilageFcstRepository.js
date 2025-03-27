import VilageFcst from "../model/vilageFcst.js";

class VilageFcstRepository {
  async findByGrid(gridX, gridY) {
    return VilageFcst.findAll({
      where: {
        nx: gridX,
        ny: gridY,
      },
    });
  }

  async bulkCreate(vilageFcsts) {
    return VilageFcst.bulkCreate(vilageFcsts);
  }
}

export default new VilageFcstRepository();
