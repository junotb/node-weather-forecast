import VilageFcst from "../model/vilageFcst.js";

class VilageFcstRepository {
  async findByGrid(nx, ny) {
    return VilageFcst.findAll({
      where: {
        nx: nx,
        ny: ny,
      },
    });
  }
}

export default new VilageFcstRepository();
