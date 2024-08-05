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
app.use(cors({
    origin: 'https://music-streaming-website-spotify-clone.onrender.com', // Your frontend URL without trailing slash
  }));
  

app.use('/api/song',songRouter);
app.use('/api/album',albumRouter);

app.listen(port,()=>{
    console.log(`Server Running on ${port}`);
})