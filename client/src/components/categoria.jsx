
import Lista from './lista';
import styled from "styled-components";


const IndiceStyle=styled.div`
@media (max-width:800px){
	width: 100%;
	
}`




export default function Categoria(props){


return(

<IndiceStyle style={{overflowY:"scroll",height:"80vh"}}>{props.data.map( grupo=><Lista  lista={grupo} /> )}</IndiceStyle>

	)


}