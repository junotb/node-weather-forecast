import GridCoordinatesRepository from "../repository/gridCoordinatesRepository.js";

class GridCoordinatesRepositoryService {
  async getGridCoordinates() {
    return GridCoordinatesRepository.findAll();
  }

  async getGridCoordinatesByGrid(nx, ny) {
    if (!nx || !ny) throw new Error("nx와 ny가 필요합니다.");
    return GridCoordinatesRepository.findByGrid(nx, ny);
  }
}

export default new GridCoordinatesRepositoryService();