import React from 'react';
import styled from "styled-components";


const Select=styled.select`
width:75%;
height:32px;
border-radius:8px;
border:1px solid green

`
const users=[
	{label:"CFC SYSTEMS",value:"cesarin"},
	{label:"Administrador",value:"administrador"},
	];





	 

export default function ComboSearch(){


return(<div  style={{display:"flex",justifyContent:"center"}} >

	<Select id="user"  defaultValue={{label:"--seleccionar--", value:"null"}}>
      {users.map(ele=><option value={ele.value}>{ele.label}</option>)}
	</Select>



</div>


	)

}