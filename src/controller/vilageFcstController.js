import vilageFcstService from "../service/vilageFcstService.js";

const getVilageFcstByGrid = async (req, res) => {
  try {
    const { nx, ny } = req.params;
    const vilageFcst = await vilageFcstService.getVilageFcstByGrid(nx, ny);
    res.json(vilageFcst);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getVilageFcstByGrid };
