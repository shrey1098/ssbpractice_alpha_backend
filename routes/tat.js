import { getTat } from "../controllers/tat.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    getTat(req, res);
});

export { router as tatRouter };