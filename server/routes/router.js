const express = require("express");
const router = new express.Router();
const multer = require("multer");
const users = require("../model/usersSchema");

// img storage path
const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`imgae-${Date.now()}. ${file.originalname}`)
    }
})


// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allowd"))
    }
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});


// user register
router.post("/register",upload.single("photo"),async(req,res)=>{

    const {filename} = req.file;

    const {fname,duration,noofservings} = req.body;
    // const {duration} = req.body;

    // const {noofservings} = req.body;


    if(!fname || !filename|| !duration || !noofservings){
        res.status(401).json({status:401,message:"fill all the data"})
    }

    try {

       

        const userdata = new users({
            fname:fname,
            imgpath:filename,
            duration:duration,
            noofservings:noofservings
        });

        const finaldata = await userdata.save();

        res.status(201).json({status:201,finaldata});
        console.log(fname+""+filename+""+duration+""+noofservings);
        console.log(finaldata)
    } catch (error) {
        res.status(401).json({status:401,error})
    }
});


// user data get
router.get("/getdata",async(req,res)=>{
    try {
        const getUser = await users.find();

        res.status(201).json({status:201,getUser})
    } catch (error) {
        res.status(401).json({status:401,error})
    }
});


// delete user data
router.delete("/:id",async(req,res)=>{

    try {
        const {id} = req.params;

        const dltUser = await users.findByIdAndDelete({_id:id});

        res.status(201).json({status:201,dltUser});

    } catch (error) {
        res.status(401).json({status:401,error})
    }

})


module.exports = router;
