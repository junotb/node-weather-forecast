import { Router } from "express";
import { getVilageFcstByGrid } from "../controller/vilageFcstController.js";

const VilageFcstRoute = Router();

VilageFcstRoute.get("/:gridX/:gridY", getVilageFcstByGrid);

export default VilageFcstRoute;
