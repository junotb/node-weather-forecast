import { Router } from "express";
import GridCoordinatesController from "../controller/GridCoordinatesController.js";

const router = Router();

router.get("/", GridCoordinatesController.getGridCoordinates);
router.get("/:gridX/:gridY", GridCoordinatesController.getGridCoordinatesByGrid);

export default router;
