import Categoria from "./categoria.jsx"
import {Outlet,useParams,useNavigate} from "react-router-dom"
import axios from 'axios';
import styled from "styled-components"

const Cerrar=styled.div`
position:absolute;
top:0px;
right:0px;
padding:2.3%;
background-color:#ECECEC;
opacity:0.3;
border-radius:2px
`;
const Titulo=styled.div`
font-size:25px;

`

export default function Player(){
let titulo=useParams().name;
let url=useParams().url;
let navigate=useNavigate();

let retornar=()=>{navigate("/home/Tutoriales")}

 let videoStyle={height:"10%",width:"100%",overflow:"visible",position:"relative",top:"0px"};

return(
	<div >
	
	<video style={videoStyle} controls="controls" autoPlay="true" src={axios.defaults.baseURL+"/videos/"+url}/ >
	<Cerrar onClick={retornar}>X</Cerrar>
	<Titulo><b>{titulo}</b></Titulo>
	<hr/>


<Outlet/>
	</div>

	)}