const express = require('express');
const {Router} = express;

const {tutorialsHandler,postTutorials,getVideo}=require ("../handlers/tutorialsHandler.js")



tutorialsRouter=Router();

tutorialsRouter.get("/",tutorialsHandler);

tutorialsRouter.post("/",postTutorials);
tutorialsRouter.get("/:name",getVideo);


module.exports=tutorialsRouter