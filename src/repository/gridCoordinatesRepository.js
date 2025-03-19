import GridCoordinates from "../model/gridCoordinates.js";

class GridCoordinatesRepository {
  async findAll() {
    return GridCoordinates.findAll();
  }
  
  async findByGrid(nx, ny) {
    return GridCoordinates.findOne({
      where: {
        nx: nx,
        ny: ny,
      },
    });
  }
}

export default new GridCoordinatesRepository();
