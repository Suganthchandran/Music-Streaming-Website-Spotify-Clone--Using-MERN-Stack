import {v2 as cloudinary} from 'cloudinary';
import albumModel from '../models/AlbumModel.js';
import mongoose from 'mongoose';

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

const findByIdAlbum = async (req, res) => {
    try {
        const list = await albumModel.findOne({ _id: req.params.id });
        res.json({ success: true, list });
    }
    catch (error) {
        res.json({ list: 'error' });
    }
}

const updateAlbum = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.json({ success: false, message: 'Invalid Album ID' });
        }

        const { name, desc, bgColor } = req.body;
        const earli = await albumModel.findOne({ _id: id });

        if (!earli) {
            return res.json({ success: false, message: 'Album not found' });
        }

        let imageUpload = null;

        if (req.file) {
            const imageFile = req.file;
            const uploadResponse = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
            imageUpload = uploadResponse.secure_url;
        } else {
            imageUpload = earli.image;
        }

        const updatedAlbumData = {
            name,
            desc,
            bgColor,
            image: imageUpload
        };

        await albumModel.findByIdAndUpdate(id, updatedAlbumData, { new: true });

        res.json({ success: true, message: 'Album Updated' });

    } catch (error) {
        console.error("Error updating Album:", error);
        res.status(500).json({ success: false, message: 'Error updating Album' });
    }
};


export {addAlbum,listAlbum,removeAlbum,updateAlbum,findByIdAlbum};