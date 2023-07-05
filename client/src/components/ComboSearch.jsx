import React from 'react';
import Select from 'react-select';



const demo=[
	{label:"CFC SYSTEMS",value:"0"},
	{label:"Administrador",value:"1"},
	];





	 

export default function ComboSearch(){


return(<div  style={{display:"flex",justifyContent:"center"}} >
	<Select style={{width:"20%"}} defaultValue={{label:"--seleccionar--", value:"null"}}
	options ={demo} 
	 />



</div>


	)

}