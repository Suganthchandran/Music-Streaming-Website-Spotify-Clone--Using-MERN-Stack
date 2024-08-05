import { addSong,listSong, removeSong,updateSong ,findByIdSong} from "../controllers/SongController.js";
import express from 'express';
import upload from "../middleware/Multer.js";

const songRouter = express.Router();

songRouter.post('/add', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), addSong);
songRouter.get('/list',listSong);
songRouter.post('/delete',removeSong);
songRouter.get('/findsong/:id',findByIdSong);
songRouter.put('/updatesong/:id',upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]),updateSong);

export default songRouter;