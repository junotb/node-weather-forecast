import { Router } from "express";
import VilageFcstController from "../controller/VilageFcstController.js";

const router = Router();

router.get("/:gridX/:gridY", VilageFcstController.getVilageFcstByGrid);

export default router;
