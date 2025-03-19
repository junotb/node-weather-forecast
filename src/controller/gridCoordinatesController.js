import GridCoordinatesService from "../service/gridCoordinatesService.js";

const getGridCoordinates = async (req, res) => {
  try {
    const gridCoordinates = await GridCoordinatesService.getGridCoordinates();
    res.json(gridCoordinates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGridCoordinatesByGrid = async (req, res) => {
  try {
    const { nx, ny } = req.params;
    const gridCoordinates = await GridCoordinatesService.getGridCoordinatesByGrid(nx, ny);
    res.json(gridCoordinates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getGridCoordinates, getGridCoordinatesByGrid };
