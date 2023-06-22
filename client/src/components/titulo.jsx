import {useDispatch} from 'react-redux';
import {selectVideo} from './redux/actions';
import {useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import {useNavigate} from "react-router-dom"


//videos debajo titulo a menos de 900px
const VideoDiv=styled.div`
display:block;
position:relative;

@media (min-width:900px){
	display:none;
}

`
//menu a mas de 900px
const MenuStyle=styled.li`
display:flex;
font-size:24px;
color:grey;
padding:5px;
cursor: pointer;
@media screen and (max-width:900px){
	display:none;
}

 `
//menu a menos de 900px
const MenuStyle2=styled.li`

display:flex;
font-size:45px;
padding:0px 0px 30px 25px;

@media (max-width:500px){
    font-size:20px;}

color:grey;
cursor: default;
@media screen and (min-width:900px){
	display:none
}

 `




export default function Titulo(props){


let [videoSelected,setVideoSelected]=useState("")
let dispatch=useDispatch();
let navigate=useNavigate()	
let nameObjs=[];
for (let obj in props.objeto){nameObjs.push(props.objeto[obj].name)};



let search=(titulo)=>{
for (let obj in props.objeto){if(props.objeto[obj].name===titulo ){
	return props.objeto[obj]}
}
}

function handleClick(name){dispatch(selectVideo(search(name)));
let collection=document.getElementsByClassName(null);

for (let i = 0; i < collection.length; i++) {
            collection[i].style.color="grey";
            collection[i].style.fontWeight='normal'};

 let selected=document.getElementById(name).style;
 selected.color="orange";
 selected.fontWeight='bold' }


let onClick=(e)=>{
	let videoParams= e.target.src.split("/")[4];
	navigate("/player/"+videoParams)
	//console.log(document.getElementById(e.target.id));
	//console.log(this);

}



	return(
		<div >
		{  nameObjs.map(  name=><div key={name}>

			<MenuStyle id={name} className="null" onClick={()=>handleClick(name)} > {name} </MenuStyle>
			<VideoDiv> <video id={"Video"+name}  onClick={onClick} style={ {width:"100vw"}}  src={axios.defaults.baseURL+search(name).video}/></VideoDiv> 
            <MenuStyle2 id={name} className="null" > {name} </MenuStyle2>
			</div>  )  }
	   </div>)

}