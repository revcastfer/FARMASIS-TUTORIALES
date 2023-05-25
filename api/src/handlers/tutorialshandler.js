const {getTutorials, controllerPost}=require("../controllers/tutorialsControllers.js")
const path = require('path');


let tutorialsHandler=async(req,res)=>{
try {
let respuesta=await getTutorials();
res.status(200).json(respuesta)

}
catch (error){ res.status(501).send(error)}

};

let postTutorials=(req,res)=>{
  
const {name,descrip,video,categori}=req.body;

try{
	controllerPost(name,descrip,video,categori);
res.status(200).json(req.body)
}
catch(error){ res.status(501).json({msg:error})}

};


let getVideo=(req,res)=>{

const {name}=req.params;


//res.status(200).send("llegamos")
res.sendfile(path.join(__dirname,`../videos/${name}`) )
}



module.exports={tutorialsHandler,postTutorials,getVideo}