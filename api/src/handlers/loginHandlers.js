const loginValidateController=require("../controllers/loginControllers.js")

 loginValidateHandler=async (req,res)=>{
 let {user,password}=req.body;

try{
let respuesta=await loginValidateController(user,password);
res.status(200).json(respuesta)
}
catch(error){res.status(500).json(error.message)}



}


module.exports=loginValidateHandler