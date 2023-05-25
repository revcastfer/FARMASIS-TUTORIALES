import styled from "styled-components";
import {ImputsReferidos,Formulario} from "./referidos.jsx"

export default function Upload(){
	return(
<Formulario>
<ImputsReferidos placeholder="ingrese nombre del video"/>
<ImputsReferidos type="file"/>



</Formulario>





		)
}