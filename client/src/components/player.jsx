import Categoria from "./categoria.jsx"
import {Outlet,useParams,useNavigate} from "react-router-dom"
import axios from 'axios';
import styled from "styled-components"
import {useDispatch} from 'react-redux';
import {playerChange} from "./redux/actions"

const Cerrar=styled.div`
position:absolute;
top:0px;
right:0px;
padding:2%;
background-color:#737272;
opacity:0.6;
border-radius:2px
`;
const Titulo=styled.div`
font-size:20px;
color:#f5b041;
text-align:center
`

const ContenedorVideo=styled.div`
display:flex;
justify-content:center;
background-color:black`;

export default function Player(){
let titulo=useParams().name;
let url=useParams().url;
let navigate=useNavigate();
let dispatch=useDispatch()

let retornar=()=>{dispatch(playerChange(false)); navigate("/home/Tutoriales")}

 let videoStyle={height:"10%",width:"100%",overflow:"visible",position:"relative",top:"0px",maxWidth:"550px"};

return(
	<div  >
	
	<ContenedorVideo ><video style={videoStyle} controls="controls" autoPlay="true" src={axios.defaults.baseURL+"/videos/"+url}/></ContenedorVideo>
	<Cerrar onClick={retornar}>X</Cerrar>
	<Titulo >{titulo}</Titulo>



<Outlet/>
	</div>

	)}