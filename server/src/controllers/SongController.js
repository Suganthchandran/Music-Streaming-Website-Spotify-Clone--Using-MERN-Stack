import {v2 as cloudinary} from 'cloudinary';
import songModel from '../models/SongModel.js';

const addSong = async (req,res)=>{
    try{
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const artist = req.body.artist;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'});
        const audioUpload = await cloudinary.uploader.upload(audioFile.path,{resource_type:'video'});
        const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`;

        const songData = {
            name,
            desc,
            album,
            artist,
            image : imageUpload.secure_url,
            file : audioUpload.secure_url,
            duration
        }

        console.log(songData);

        const song = songModel(songData);
        await song.save();

        res.json({success:true,message:'Song Added'});
    }
    catch(error){
        res.json({success:false});
    }
}

const listSong = async (req,res)=>{
    try{
        const list = await songModel.find({});

        res.json({success:true,songs:list});
    }
    catch(error)
    {
        res.json({success:false});
    }
}

const removeSong = async (req,res)=>{
    try{
        await songModel.findByIdAndDelete(req.body.id);

        res.json({success:true,message:'Song Deleted'});
    }
    catch(error)
    {
        res.json({success:false});
    }
}

// const updateSong = async (req,res)=>{
//     try{
//         const {id} = req.params;

//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.json({ success: false, message: 'Invalid song ID' });
//         }

//         const name = req.body.name;
//         const desc = req.body.desc;
//         const album = req.body.album;
//         const artist = req.body.artist;
//         const audioFile = req.files.audio[0];
//         const imageFile = req.files.image[0];
//         const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'});
//         const audioUpload = await cloudinary.uploader.upload(audioFile.path,{resource_type:'video'});
//         const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`;

//         const updatedSongData = {
//             name,
//             desc,
//             album,
//             artist,
//             image : imageUpload.secure_url,
//             file : audioUpload.secure_url,
//             duration
//         }


//         await songModel.findByIdAndUpdate(id,updatedSongData);

//         res.json({success:true,message:'Song Updated'});
//     }
//     catch(error)
//     {
//         console.error("Error updating song:", error);
//         res.json({success:false});
//     }
// }

export {addSong,listSong,removeSong}