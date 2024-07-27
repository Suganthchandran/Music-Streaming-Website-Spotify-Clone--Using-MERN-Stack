import express from 'express';
import upload from "../middleware/Multer.js";
import { addAlbum,listAlbum, removeAlbum } from "../controllers/AlbumController.js";

const albumRouter = express.Router();

albumRouter.post('/add',upload.single('image'),addAlbum);
albumRouter.get('/list',listAlbum);
albumRouter.post('/delete',removeAlbum);

export default albumRouter;