import GridCoordinates from "../model/GridCoordinates.js";

class GridCoordinatesRepository {
  async findAll() {
    return GridCoordinates.findAll();
  }
  
  async findByGrid(gridX, gridY) {
    return GridCoordinates.findOne({
      where: {
        grid_x: gridX,
        grid_y: gridY,
      },
    });
  }
}

export default new GridCoordinatesRepository();
