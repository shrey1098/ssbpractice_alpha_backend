import express from 'express';
import { getWat } from '../controllers/wat.js';

const router = express.Router();

router.get('/', (req, res) => {
    getWat(req, res);
});

export {router as watRouter};