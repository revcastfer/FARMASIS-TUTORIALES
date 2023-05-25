import React from 'react';
import styled from "styled-components";
import RefeImagen from './imgs/referidos.jpeg'
import RefeImagencompleta from './imgs/referidosCompleto.jpeg'
import fondoHex from './imgs/fondoHexagonos.jpg'
import axios from 'axios'





const ErrorValidacion=styled.span`color:red;font-size:13px;display:inline;visibility:hidden`;
>>>>>>> c284003 (habilitacion de ruta para catagorias , ordenamineto de carpeta redux, creacion de ruta front upload)

const Formulario=styled.form`
width:50%;
position:relative;
background-image:url(${fondoHex});
background-size:contain`;

const ImputsReferidos=styled.input`
display:inline;
margin:15px;
height:30px;
width:50%;
border-radius:10px;
border: 1px solid grey`;

const TipoDatos=styled.div`
color:#09b5c1;
font-size:20px`; 

const butonStyle={width: "80px", padding:"8px", borderRadius:"8px",
border:"none", backgroundColor:"#09b5c1",display:"block"};


const Contenedor=styled.div`
display:flex;
min-height:600px;
`



const ImagenesDerecha=styled.div`
display:flex;
background-size:cover;
background-repeat:no-repeat;
width:50%;
height:0px

justify-content:center;
background-image:url(${RefeImagencompleta});
@media (max-width:900px){
background-image:url(${RefeImagen});
right:0px}
`

const formCentrar={position:"absolute",left:"8%", top:"7%",
width:"100%"}









  export default function Referidos(){


let readyForSend=[0,0,0,0,0,0,0]
let ValidateReadyForSend=()=>{
	const suma = readyForSend.reduce((anterior, actual) => anterior + actual, 0);
     if(suma===7){return true} else return false};


>>>>>>> c284003 (habilitacion de ruta para catagorias , ordenamineto de carpeta redux, creacion de ruta front upload)
let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let numero=document.getElementById("numero");
let relacion=document.getElementById("relacion");
let nombreReferido=document.getElementById("nombreReferido");
let apellidoReferido=document.getElementById("apellidoReferido");
let numeroReferido=document.getElementById("numeroReferido");



let validate=(e)=>{
let validarNoNumeros=new RegExp('[0-9]');
let nombreVal=document.getElementById("nombreVal");
let apellidoVal=document.getElementById("apellidoVal");
let numeroVal=document.getElementById("numeroVal");
let relacionVal=document.getElementById("relacionVal");
let nombreReferidoVal=document.getElementById("nombreReferidoVal");
let apellidoReferidoVal=document.getElementById("apellidoReferidoVal");
let numeroReferidoVal=document.getElementById("numeroReferidoVal");


let valor=e.target.value;
let id=e.target.id;

switch(id){
case "nombre":
if(validarNoNumeros.test(valor)){nombreVal.style.visibility="visible"}else{nombreVal.style.visibility="hidden"};
break;
case "apellido":
if(validarNoNumeros.test(valor)){apellidoVal.style.visibility="visible"}else{apellidoVal.style.visibility="hidden"};
break;
case "relacion":
if(validarNoNumeros.test(valor)){relacionVal.style.visibility="visible"}else{relacionVal.style.visibility="hidden"};
break;
case "nombreReferido":
if(validarNoNumeros.test(valor)){nombreReferidoVal.style.visibility="visible"}else{nombreReferidoVal.style.visibility="hidden"};
break;
case "apellidoReferido":
if(validarNoNumeros.test(valor)){apellidoReferidoVal.style.visibility="visible"}else{apellidoReferidoVal.style.visibility="hidden"};
break;
case "numero":
if(validarNoNumeros.test(valor)){numeroVal.style.visibility="hidden"}else{numeroVal.style.visibility="visible"};
break;
case "numeroReferido":
if(validarNoNumeros.test(valor)){numeroReferidoVal.style.visibility="hidden"}else{numeroReferidoVal.style.visibility="visible"};
break;



}

}




let handleSubmit=(e)=>{
e.preventDefault();
axios.post("http://localhost:3002/referidos",{nombre:nombre.value,
	                                         apellido:apellido.value,
	                                         numero:numero.value,
	                                         relacion:relacion.value,
	                                         nombreReferido:nombreReferido.value,
	                                         apellidoReferido:apellidoReferido.value,
	                                         numeroReferido:numeroReferido.value})
	.then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  alert("DATOS ENVIADOS");

nombre.value="";
apellido.value="";
numero.value="";
relacion.value="";
nombreReferido.value="";
apellidoReferido.value="";
numeroReferido.value="";
}

	

return(
		

		<Contenedor>
		<Formulario  onSubmit={handleSubmit}>
		<div style={formCentrar}>
		<TipoDatos>tus datos:</TipoDatos>
	    <ImputsReferidos id="nombre" onChange={validate} placeholder="Tus nombres: " type="text"/><ErrorValidacion id="nombreVal">sin numeros</ErrorValidacion>
		<ImputsReferidos id="apellido" onChange={validate} placeholder="Tus apellidos:" type="text"/><ErrorValidacion id="apellidoVal">verificar apellido</ErrorValidacion>
		<ImputsReferidos id="numero" onChange={validate} placeholder="Tu numero de contacto:" type="tel"/><ErrorValidacion id="numeroVal">solo numeros</ErrorValidacion>
		<ImputsReferidos id="relacion" onChange={validate} placeholder="Tu relacion con el referido:" type="text"/><ErrorValidacion id="relacionVal">verificar relacion</ErrorValidacion>
		<TipoDatos>datos del referido:</TipoDatos>
		<ImputsReferidos id="nombreReferido" onChange={validate} placeholder="Nombre del referido:" type="text"/><ErrorValidacion id="nombreReferidoVal">verificar nombre</ErrorValidacion>
		<ImputsReferidos id="apellidoReferido" onChange={validate} placeholder="Apellido del referido" type="text"/><ErrorValidacion id="apellidoReferidoVal">verificar apellido</ErrorValidacion>
		<ImputsReferidos id="numeroReferido" onChange={validate} placeholder="Numero de contacto del referido" type="phone"/><ErrorValidacion id="numeroReferidoVal">solo numeros</ErrorValidacion>
		<button style={butonStyle}>enviar</button>
		</div>

		</Formulario>

		<ImagenesDerecha>
		
		</ImagenesDerecha>



		</Contenedor>


		
		)
}

export {Referidos,ImputsReferidos,Formulario}