import { Router } from "express";
import { getGridCoordinates, getGridCoordinatesByGrid } from "../controller/gridCoordinatesController.js";

const GridCoordinatesRoute = Router();

GridCoordinatesRoute.get("/", getGridCoordinates);
GridCoordinatesRoute.get("/:gridX/:gridY", getGridCoordinatesByGrid);

export default GridCoordinatesRoute;
