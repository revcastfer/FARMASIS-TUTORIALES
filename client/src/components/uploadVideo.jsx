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


let handleChange=(e)=>{

let etiqueta=e.target;
console.log(etiqueta.value);
if (etiqueta.value=="") {document.getElementById("error"+ etiqueta.id).style.visibility="visible"}

};


let sendVideo=(e)=>{e.preventDefault()}


	return(
<Formulario onSubmit={sendVideo} >

<ImputsReferidos onChange={handleChange} id="nombre" placeholder="ingrese nombre del video"/><ErrorValidacion id="errornombre">revisar nombre</ErrorValidacion>


<select  style={{display:"block",margin:"15px"}} id="categoria">
<option value={0} disabled selected>selecionar categoria</option>
{categorias.map( ele=><option value={ele.id}>{ele.descrip}</option> )}
<option value={0}>nueva categoria</option>
</select>
<ErrorValidacion id="errorcategoria">selecionar categoria</ErrorValidacion>

<ImputsReferidos id="nuevaCategoria" onChange={handleChange} placeholder="ingrese nueva categoria"/><ErrorValidacion id="errornuevaCategoria">ingresar nueva categoria</ErrorValidacion>

<textarea id="descripcion" onChange={handleChange} rows="10" cols="40"placeholder="escribir la descripcion del video"></textarea>
<ErrorValidacion id="errordescripcion">ingresar descripcion</ErrorValidacion>

<ImputsReferidos id="video" onChange={handleChange} type="file" style={{border:"none",borderRadius:"0px"}}/>
<ErrorValidacion id="errorvideo" >ingresar archivo de video</ErrorValidacion>
<ButonStyle>subir</ButonStyle>
</Formulario>





		)
}