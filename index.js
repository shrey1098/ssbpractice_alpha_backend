import dotenv from 'dotenv';
dotenv.config()
import path from 'path';
//express imports
import express from 'express';
import session from 'express-session';
//middleware imports
import morgan from 'morgan';
import cors from 'cors';
//import db connection
import { connectDB } from './db/connect.js';
//router imports
import { watRouter } from './routes/wat.js';
import { srtRouter } from './routes/srt.js';
import { blogRouter } from './routes/blog.js';
import { blogAdminRouter } from './routes/blogAdmin.js';


const app = express();
const __dirname = path.resolve();
//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


//routes
app.get('/', (req, res) => {
    // render html page 
    res.sendFile(__dirname + '/views/doc.html');
})
app.use('/blogAdmin', blogAdminRouter);
app.use('/wat', watRouter);
app.use('/srt', srtRouter);
app.use('/blog', blogRouter);



//connect to db and start server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();
