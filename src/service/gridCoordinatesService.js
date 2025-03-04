import GridCoordinatesRepository from "../repository/GridCoordinatesRepository.js";

class GridCoordinatesRepositoryService {
  async getGridCoordinates() {
    return GridCoordinatesRepository.findAll();
  }

  async getGridCoordinatesByGrid(gridX, gridY) {
    if (!gridX || !gridY) throw new Error("gridX와 gridY가 필요합니다.");
    return GridCoordinatesRepository.findByGrid(gridX, gridY);
  }
}

export default new GridCoordinatesRepositoryService();