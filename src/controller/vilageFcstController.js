import vilageFcstService from "../service/vilageFcstService.js";

const fetchVilageFcst = async (req, res) => {
  try {
    const vilageFcst = await vilageFcstService.fetchVilageFcst();
    res.json(vilageFcst);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getVilageFcstByGrid = async (req, res) => {
  try {
    const { gridX, gridY } = req.params;
    const vilageFcst = await vilageFcstService.getVilageFcstByGrid(gridX, gridY);
    res.json(vilageFcst);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { fetchVilageFcst, getVilageFcstByGrid };
