import {useDispatch} from 'react-redux';
import {selectVideo} from './redux/actions';
import styled from "styled-components";
import Media from 'react-media';


//videos debajo titulo a menos de 900px
const VideoDiv=styled.div`
display:block;
width: 100%;

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
font-size:40px;
margin:20px;
color:grey;
cursor: default;
@media screen and (min-width:900px){
	display:none}

 `




export default function Titulo(props){

let dispatch=useDispatch();	
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




	return(
		<div >
		{  nameObjs.map(  name=><div key={name}>

			<MenuStyle id={name} className="null" onClick={()=>handleClick(name)} > {name} </MenuStyle>
			<MenuStyle2 id={name} className="null" > {name} </MenuStyle2>
			<VideoDiv> <video style={ {height:"48vh",width:"70vw"}} controls="controls" src={"http://localhost:3002"+search(name).video}/></VideoDiv> 

			</div>  )  }
	   </div>)

}