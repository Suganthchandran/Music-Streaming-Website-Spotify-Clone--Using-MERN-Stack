import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import songRouter from './src/routes/SongRouter.js';
import connectDB from './src/config/configDB.js';
import connectCloudinary from './src/config/Cloudinary.js';
import albumRouter from './src/routes/AlbumRouter.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

app.use(express.json());

const allowedOrigins = [
  'https://music-streaming-website-spotify-clone.onrender.com',
  'http://localhost:3000',
  'http://localhost:3001'
];
app.use(cors({
    origin: allowedOrigins,
  }));
  

app.use('/api/song',songRouter);
app.use('/api/album',albumRouter);

app.listen(port,()=>{
    console.log(`Server Running on ${port}`);
})