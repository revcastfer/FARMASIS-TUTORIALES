import Categoria from "./categoria.jsx"
import {Outlet,useParams} from "react-router-dom"
import axios from 'axios';
import styled from "styled-components"


const Titulo=styled.div`
font-size:25px;


`

export default function Player(){
let titulo=useParams().name;
let url=useParams().url;

 let videoStyle={height:"10%",width:"100%",overflow:"visible",position:"relative",top:"0px"};

return(
	<div >
	<video style={videoStyle} controls="controls" autoPlay="true" src={axios.defaults.baseURL+"/videos/"+url}/ >
	<Titulo><b>{titulo}</b></Titulo>
	<hr/>


<Outlet/>
	</div>

	)}