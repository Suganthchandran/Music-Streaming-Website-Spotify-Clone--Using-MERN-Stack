import express from 'express';
import upload from "../middleware/Multer.js";
import { addAlbum,findByIdAlbum,listAlbum, removeAlbum,updateAlbum } from "../controllers/AlbumController.js";

const albumRouter = express.Router();

albumRouter.post('/add',upload.single('image'),addAlbum);
albumRouter.get('/list',listAlbum);
albumRouter.post('/delete',removeAlbum);
albumRouter.get('/findalbum/:id',findByIdAlbum);
albumRouter.put('/updatealbum/:id',upload.single('image'),updateAlbum);

export default albumRouter;