import GridCoordinatesRepository from "../repository/gridCoordinatesRepository.js";

class GridCoordinatesRepositoryService {
  async getGridCoordinates() {
    return GridCoordinatesRepository.findAll();
  }

  async getGridCoordinatesByGrid(gridX, gridY) {
    if (gridX === undefined || gridY === undefined || gridX === null || gridY === null) {
      throw new Error("gridX와 gridY가 필요합니다.");
    }
    return GridCoordinatesRepository.findByGrid(gridX, gridY);
  }
}

export default new GridCoordinatesRepositoryService();