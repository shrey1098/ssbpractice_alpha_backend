import path from 'path';
import express from 'express';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/blogAdmin.html');
})

router.get('/newPost', (req, res) => {
    res.sendFile(__dirname + '/views/newPost.html');
})

export { router as blogAdminRouter };