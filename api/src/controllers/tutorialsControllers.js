const server=require( "../app.js");
const express = require('express');
const path = require('path');
const { Tutorial,Category }=require("../db.js")



let getTutorials=async()=>{

let allCategorias=await Category.findAll();
let allTutorials = await Tutorial.findAll({ include: Category });


let data=allCategorias.map(cate=>{let descrip=cate.descrip; 
	return{[descrip]:allTutorials.filter(tuto=>tuto.CategoryId==cate.id).sort( (a,b)=>a.name[0]-b.name[0] ) }});



return data

}


let controllerPost=async(name,descrip,video,categori)=>{

try{	const basico = await Tutorial.create({name: name,descrip:descrip,video:video,categori:categori} ) 
 	}
catch(error){throw new Error (error)}

}


module.exports={getTutorials,controllerPost}