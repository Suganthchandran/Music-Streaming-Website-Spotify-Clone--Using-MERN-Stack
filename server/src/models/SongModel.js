import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    name : {type: String,required:true},
    desc : {type: String,required:true},
    album : {type: String,required:true},
    artist : {type: String,required:true},
    image : {type: String,required:true},
    file : {type: String,required:true},
    duration : {type: String,required:true}
})

const songModel = mongoose.models.song || mongoose.model("song",songSchema);
// It will take the database named song , if it is not there it will create one

export default songModel;