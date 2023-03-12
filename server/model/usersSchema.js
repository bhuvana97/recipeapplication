const mongoose = require("mongoose");
mongoose.set('strictQuery','false')


const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    noofservings:{
        type:Number,
        required:true
    }
});


// create model

const users = new mongoose.model("recipeusers",userSchema);

module.exports = users;

