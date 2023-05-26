import styled from "styled-components";
import {useState,useEffect} from "react"
import axios from "axios"
import {ImputsReferidos,Formulario,ButonStyle,ErrorValidacion} from "./referidos.jsx"

export default function Upload(){
const [categorias,setCategorias]=useState([]);
const [validacion,setValidacion]=useState([]);

useEffect(()=>{
axios("http://localhost:3002/categorias")
.then(datos=>datos.data)
.then(datos=>setCategorias(datos));

},[]  );


let selectOnChange=(e)=>{
	let nuevaCategoria=document.getElementById("nuevaCategoria"); 
	e.target.value==0?nuevaCategoria.style.visibility = "visible": nuevaCategoria.style.visibility = "hidden"}

let handleChange=(e)=>{

let etiqueta=e.target;
console.log(etiqueta.value);
if (etiqueta.value=="") {document.getElementById("error"+ etiqueta.id).style.visibility="visible"}

};


let sendVideo=(e)=>{e.preventDefault()}


	return(
<Formulario style={{width:"500px"}}  onSubmit={sendVideo} >

<ImputsReferidos style={{Width:"100%"}} onChange={handleChange} id="nombre" placeholder="ingrese nombre del video"/><ErrorValidacion id="errornombre">revisar nombre</ErrorValidacion>





<textarea style={{margin:"15px",borderRadius:"5px"}} id="descripcion" onChange={handleChange} rows="5" cols="32"placeholder="escribir la descripcion del video"></textarea>
<ErrorValidacion  id="errordescripcion">ingresar descripcion</ErrorValidacion>
<select  style={{margin:"15px"}} id="categoria"   onChange={selectOnChange}>
<option value="" disabled selected>selecionar categoria</option>
{categorias.map( ele=><option value={ele.id}>{ele.descrip}</option> )}
<option  value={0}>nueva categoria</option>
</select>
<ErrorValidacion  id="errorcategoria">selecionar categoria</ErrorValidacion>
<ImputsReferidos  id="nuevaCategoria" onChange={handleChange} style={{visibility:"hidden"}} placeholder="ingrese nueva categoria"/><ErrorValidacion id="errornuevaCategoria">ingresar nueva categoria</ErrorValidacion>
<ImputsReferidos id="video" onChange={handleChange} type="file" style={{border:"none",borderRadius:"0px"}}/>
<ErrorValidacion id="errorvideo" >ingresar archivo de video</ErrorValidacion>
<ButonStyle style={{margin:"15px"}}>subir</ButonStyle>
</Formulario>





		)
}