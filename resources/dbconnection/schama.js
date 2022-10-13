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
    },
    password:{
        type:String,
        require:true,
    }
    });
    
    const playlist = new mongoose.model('Playlishdata',playlistSchema);
    module.exports =  playlist;