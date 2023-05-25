import React from 'react';
import Categoria from './categoria';
import styled from "styled-components";
import {useSelector} from 'react-redux';
import fondoHex from './imgs/fondoHexagonos.jpg'
import axios from 'axios'

const Titulovideos=styled.h1`
font-size: 50px;color: #f5b041;
left:0px
`;


let Reproductor=styled.div`

@media (max-width:900px){
	display:none;}`



const Descripcionvideos=styled.div`
font-size: 20px;
color grey;
position:absolute;
right: 5%;
padding:15px
`

const ContenedorVideos=styled.div`
display:flex;
background-image:url(${fondoHex});
background-size:cover;
justify-content:space-between;
width:85%;
@media (max-width:900px){
	background-size:contain;
}
`

let data;
axios("http://localhost:3002/farmasistutorials")
.then(datos=>datos.data)
.then(datos=>data=datos)





export default function Tutoriales(){
	let titulo=useSelector((state)=>state.titulo);
let descripcion=useSelector((state)=>state.descripcion);
let url=useSelector((state)=>state.url);

return	(	
   <ContenedorVideos>
	<Categoria data={data} />
	<Reproductor>
		<Titulovideos>{titulo}</Titulovideos>
		<video style={ {width:"50vw"}} controls="controls" src={url}/>
		<Descripcionvideos>{descripcion}</Descripcionvideos>

	</Reproductor>
	</ContenedorVideos>
)
}