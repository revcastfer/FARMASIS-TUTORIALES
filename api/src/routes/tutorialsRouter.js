const express = require('express');
const {Router} = express;
const multer  = require('multer')
const storage=multer.diskStorage({
destination:"./src/videos",
filename: (req,file,cb)=>{cb(null,file.originalname)}
});
const upload = multer({ storage:storage,dest: './src/videos' })



const {tutorialsHandler,postTutorials,getVideo}=require ("../handlers/tutorialsHandler.js")



tutorialsRouter=Router();

tutorialsRouter.get("/",tutorialsHandler);

tutorialsRouter.post("/",upload.single('TUTORIAL'),postTutorials);
tutorialsRouter.get("/:name",getVideo);


module.exports=tutorialsRouter