
import Lista from './lista';
import styled from "styled-components";
import {useSelector} from 'react-redux';


const IndiceStyle=styled.div`
overflow-y:scroll;
width:33vw;
min-width:370px;
@media (max-width:900px){
	width:100%;
	
}`




export default function Categoria(props){
let player=""+useSelector(state=>state.player);



return(

<IndiceStyle style={{height:player==="true"?"70vh":"94vh"}}>{props.data.map( grupo=><Lista  lista={grupo} /> )}</IndiceStyle>

	)


}