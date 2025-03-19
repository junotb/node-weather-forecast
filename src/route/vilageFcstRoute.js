import { Router } from "express";
import { getVilageFcstByGrid } from "../controller/vilageFcstController.js";

const VilageFcstRoute = Router();

VilageFcstRoute.get("/:nx/:ny", getVilageFcstByGrid);

export default VilageFcstRoute;
