import {v2 as cloudinary} from 'cloudinary';
import albumModel from '../models/AlbumModel.js';

const addAlbum = async (req,res)=>{
    try{
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'});

        const albumData = {
            name,
            desc,
            bgColor,
            image : imageUpload.secure_url
        }

        console.log(albumData);
        
        const album = albumModel(albumData);
        await album.save();

        res.json({success:true,message:"Album Added"});
    }
    catch(error)
    {
        res.json({success:false});
    }
}

const listAlbum = async (req,res)=>{
    try{
        const list = await albumModel.find({});

        res.json({success:true,Album:list});
    }
    catch(error)
    {
        res.json({success:false});
    }
}

const removeAlbum = async (req,res)=>{
    try{
        await albumModel.findByIdAndDelete(req.body.id);

        res.json({success:true,message:"Album Deleted"});
    }
    catch(error)
    {
        res.json({success:false});
    }
}

export {addAlbum,listAlbum,removeAlbum};