import express from 'express';
import { getSrt } from '../controllers/srt.js';

const router = express.Router();

router.get('/', (req, res) => {
    getSrt(req, res);
});

export {router as srtRouter};
