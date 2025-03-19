import { Router } from "express";
import { fetchVilageFcst, getVilageFcstByGrid } from "../controller/vilageFcstController.js";

const VilageFcstRoute = Router();

VilageFcstRoute.get("/", fetchVilageFcst);
VilageFcstRoute.get("/:gridX/:gridY", getVilageFcstByGrid);

export default VilageFcstRoute;
