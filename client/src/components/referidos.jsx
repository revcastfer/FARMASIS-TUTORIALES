import React from 'react';
import styled from "styled-components";
import RefeImagen from './imgs/referidos.jpeg'
import RefeImagencompleta from './imgs/referidosCompleto.jpeg'
import fondoHex from './imgs/fondoHexagonos.jpg'
import axios from 'axios'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'




const ErrorValidacion=styled.span`
color:red;
font-size:13px;
display:inline;
visibility:hidden;
@media (max-width:700px){
font-size:8px;
}`;


const Formulario=styled.form`
width:50vw;
position:relative;
background-image:url(${fondoHex});
background-size:contain;
@media (max-width:700px){
width:100%;
`
;


const ImputsReferidos=styled.input`
display:inline;
margin:15px;
height:30px;
width:50%;
border-radius:10px;
border: 1px solid grey;
@media (max-width:700px){
height:20px;
font-size:10px;
margin:10px;
}
`;


const TipoDatos=styled.div`
color:#09b5c1;
font-size:20px`; 

const ButonStyle=styled.button`  
width: 80px;
padding:8px;
border-radius:8px;
border:none;
background-color:#09b5c1;
display:block

`


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
right:0px};
@media (max-width:700px){
display:none
`

const formCentrar={position:"absolute",left:"8%", top:"7%",
width:"100%"}









  export default function Referidos(){

let isLogin=useSelector(state=>state.isloguin);
let navigate=useNavigate();

  	React.useEffect(()=>{        
if(isLogin==="false"||isLogin===false) {navigate("/")};  
},[ isLogin,navigate])


let readyForSend={nombre:0,apellido:0,numero:0,relacion:0,nombreReferido:0, apellidoReferido:0,numeroReferido:0}

let ValidateReadyForSend=()=>{
	const suma = Object.keys(readyForSend).reduce((anterior, actual) => anterior + readyForSend[actual], 0);
     if(suma===7){return true} else return false};




let validate=(e)=>{
let validarNoNumeros=new RegExp('[0-9]');
let validarLetras=new RegExp('[a-zA-Z]');



let changeAtError=(id,valor)=>{
document.getElementById(id+"Val").style.visibility=valor};

let etiqueta=e.target;


if(etiqueta.id==="numero"||etiqueta.id==="numeroReferido"){

	if(validarLetras.test(etiqueta.value)||etiqueta.value===""||etiqueta.value===" ")
		{changeAtError(etiqueta.id,"visible");readyForSend[etiqueta.id]=0}else{changeAtError(etiqueta.id,"hidden");readyForSend[etiqueta.id]=1};

}else{

	if(validarNoNumeros.test(etiqueta.value)|| etiqueta.value===""||etiqueta.value===" ")
		{changeAtError(etiqueta.id,"visible");readyForSend[etiqueta.id]=0}else{changeAtError(etiqueta.id,"hidden");readyForSend[etiqueta.id]=1};
}


}


let limpiar=(array)=>{array.forEach(name=>document.getElementById(name).value="")};

let handleSubmit=(e)=>{
e.preventDefault();

if(ValidateReadyForSend()){

axios.post("/referidos",{nombre:document.getElementById("nombre").value,
	                                         apellido:document.getElementById("apellido").value,
	                                         numero:document.getElementById("numero").value,
	                                         relacion:document.getElementById("relacion").value,
	                                         nombreReferido:document.getElementById("nombreReferido").value,
	                                         apellidoReferido:document.getElementById("apellidoReferido").value,
	                                         numeroReferido:document.getElementById("numeroReferido").value})
	.then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  alert("DATOS ENVIADOS");
limpiar(["nombre","apellido","numero","relacion","nombreReferido","apellidoReferido","numeroReferido"])



}else{ alert("VERIFICAR DATOS");}




}

	

return(
		

		<Contenedor>
		<Formulario  onSubmit={handleSubmit}>
		<div style={formCentrar}>
		<TipoDatos>tus datos:</TipoDatos>
	    <ImputsReferidos id="nombre" onChange={validate} placeholder="Tus nombres: " type="text"/><ErrorValidacion id="nombreVal">no vacio,sin numeros</ErrorValidacion>
		<ImputsReferidos id="apellido" onChange={validate} placeholder="Tus apellidos:" type="text"/><ErrorValidacion id="apellidoVal">no vacio,verificar apellido</ErrorValidacion>
		<ImputsReferidos id="numero" onChange={validate} placeholder="Tu numero de contacto:" type="tel"/><ErrorValidacion id="numeroVal">no vacio,solo numeros</ErrorValidacion>
		<ImputsReferidos id="relacion" onChange={validate} placeholder="Tu relacion con el referido:" type="text"/><ErrorValidacion id="relacionVal">no vacio,verificar relacion</ErrorValidacion>
		<TipoDatos>datos del referido:</TipoDatos>
		<ImputsReferidos id="nombreReferido" onChange={validate} placeholder="Nombre del referido:" type="text"/><ErrorValidacion id="nombreReferidoVal">no vacio,verificar nombre</ErrorValidacion>
		<ImputsReferidos id="apellidoReferido" onChange={validate} placeholder="Apellido del referido" type="text"/><ErrorValidacion id="apellidoReferidoVal">no vacio,verificar apellido</ErrorValidacion>
		<ImputsReferidos id="numeroReferido" onChange={validate} placeholder="Numero de contacto del referido" type="phone"/><ErrorValidacion id="numeroReferidoVal">no vacio,solo numeros</ErrorValidacion>
		<ButonStyle >enviar</ButonStyle>
		</div>

		</Formulario>

		<ImagenesDerecha/>
		
		



		</Contenedor>


		
		)
}

export {Referidos,ImputsReferidos,Formulario,ButonStyle,ErrorValidacion}