import vilageFcstService from "../service/vilageFcstService.js";

const getVilageFcstByGrid = async (req, res) => {
  try {
    const { gridX, gridY } = req.params;
    const vilageFcst = await vilageFcstService.getVilageFcstByGrid(gridX, gridY);
    res.json(vilageFcst);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getVilageFcstByGrid };
