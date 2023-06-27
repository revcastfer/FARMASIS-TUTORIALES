
import Lista from './lista';
import styled from "styled-components";


const IndiceStyle=styled.div`
overflow-y:scroll;
height:80vh;
width:33vw;
min-width:370px;
@media (max-width:900px){
	width:100vw;
	height:85vh;
};@media (max-width:400px){
	height:70vh;
}
`




export default function Categoria(props){


return(

<IndiceStyle>{props.data.map( grupo=><Lista  lista={grupo} /> )}</IndiceStyle>

	)


}