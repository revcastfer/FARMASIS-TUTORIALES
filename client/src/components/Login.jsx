
import React from 'react';
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'
import logo from './imgs/logosinfondo.png';
import fondo from './imgs/fondoLog.jpg';
import ComboSearch from './ComboSearch'
import {useDispatch,useSelector} from 'react-redux';
import {loguin} from './redux/actions.js';
import logoPie from './imgs/logoPie.png';

const Pie=styled.div`
background-color:grey;
height: 60px;
width: 100%;
position:absolute;
bottom:0px;
opacity: 0.4;
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
width: 300px;
Min-Height: 28vh; 
border-radius:25px;
font-size:30px;
position:absolute;
color: #033953;
top:32%;
text-align:center;
padding:10px;
`
const Inputs=styled.input`
width:70%;
padding:8px;
border-radius:8px;
border:1px solid grey
`;


const imgStyle={
width: "25vw",
maxWidth:"150px",
position:"absolute",
top:"1%",left:"1%"
};

const imgPie={width: "auto",
height: "45px" ,


};


const buton={width: "80%", padding:"8px", borderRadius:"8px",border:"none", backgroundColor:"#09b5c1"};


 



export default function Login(){
const navigate=useNavigate()
let dispatch=useDispatch();
let usuario="";

let isLogin=useSelector(state=>state.isloguin);

React.useEffect(()=>{ if(isLogin===true||isLogin==="true" ){ navigate("./Home/Tutoriales")}},[isLogin,navigate])





window.onload=function(){usuario=document.querySelector("#usuario").value};

let handleChangeUserImput=(e)=>{ usuario= e.target.value  };
let handleSubmit=(e)=>{dispatch(loguin(usuario));navigate("./Home/Tutoriales")};



return(
<PanInicial> 

<img src={logo} style={imgStyle} alt="logo farmasis"/>
    <Ingreso>
	<span ><h3>acceso a usuarios</h3></span>
	
	<form onSubmit={handleSubmit}>
	<ComboSearch  />
		<div>
		<Inputs  placeholder="usuario" type="text" id="usuario" onChange={handleChangeUserImput} />
	</div>
	<div>
		<Inputs  placeholder="Contraseña" type="password" id="contraseña"/>
	</div> 
	<button type="submit" style={buton}><b>ingresar</b></button>
	</form>
	</Ingreso>
	<Pie><img src={logoPie} style={imgPie} alt="logo cfc"/> </Pie>
</PanInicial>)

}