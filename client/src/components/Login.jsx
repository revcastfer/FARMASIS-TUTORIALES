
import React from 'react';
import styled from "styled-components";
import {Navigate} from 'react-router-dom'
import logo from './imgs/logosinfondo.png';
import fondo from './imgs/fondoLog.jpg';
import ComboSearch from './ComboSearch'
import {useDispatch,useSelector} from 'react-redux';
import {loguin} from './redux/actions.js';
import logoPie from './imgs/logoPie.png';

const Pie=styled.div`
background-color:grey;
height: 65px;
width: 100%;
position:absolute;
bottom:0px;
opacity: 0.5;
display:flex;
justify-content:center;
align-items:center;
bottom:0px

`



const PanInicial=styled.div`
background-image:url(${fondo});
position:relative;
display:flex;
justify-content:center;
background-size:cover;
background-repeat: no-repeat;
min-width: auto;
width: 100%;
height:100vh;
`


const Ingreso=styled.div`
background-color:#F6FDFB;
border: 3px solid #09b5c1;
width: 380px;
Min-Height: 40%; 
border-radius:25px;
font-size:30px;
position:absolute;
color: #033953;
top:35%;
text-align:center;
padding:15px;
`
const imgStyle={width: "auto",
maxHeight: "18%" ,
position:"absolute",
top:"0px",left:"0px"
};

const imgPie={width: "auto",
height: "50px" ,


};

const inputs={width: "80%", padding:"8px", borderRadius:"8px",border:"1px solid grey"};
const buton={width: "80%", padding:"8px", borderRadius:"8px",border:"none", backgroundColor:"#09b5c1"};


 



export default function Login(){

let dispatch=useDispatch();
let usuario="";
let isLogin=useSelector(state=>state.isloguin);

window.onload=function(){usuario=document.querySelector("#usuario").value};

let handleChangeUserImput=(e)=>{ usuario= e.target.value  };
let handleSubmit=(e)=>{;dispatch(loguin(usuario))};

if(isLogin==="true"){
	return <Navigate to="./Home/Tutoriales" /> }

return(
<PanInicial> 

<img src={logo} style={imgStyle} alt="logo farmasis"/>
    <Ingreso>
	<span><h4>acceso a usuarios</h4></span> 
	
	<form onSubmit={handleSubmit}>
	<ComboSearch />
		<div>
		<input style={inputs} placeholder="usuario" type="text" id="usuario" onChange={handleChangeUserImput} />
	</div>
	<div>
		<input style={inputs} placeholder="Contraseña" type="password" id="contraseña"/>
	</div> 
	<button style={buton}>ingresar</button>
	</form>
	</Ingreso>
	<Pie><img src={logoPie} style={imgPie} alt="logo cfc"/> </Pie>
</PanInicial>)

}