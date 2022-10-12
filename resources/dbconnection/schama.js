var mongoose = require('mongoose');
var validator = require('validator');
const playlistSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        // unique:[true,"Email already exite"],
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new error("Invalid Email");
        //     }
        // }
    },
    password:{
        type:String,
        require:true,
    }
    });
    
    const playlist = new mongoose.model('Playlishdata',playlistSchema);
    module.exports =  playlist;