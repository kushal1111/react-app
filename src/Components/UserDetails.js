import UserForms from "./UserForms"
import { useState } from "react";



const UserDetails=(props)=> {
    const [name,setName]= useState('')
   
    const displayName = (name)=>{
        setName(name)
    
    }
    
    return(
  <div>
    <h1 style={{color:props.color}}>Hello {name} </h1>
    <UserForms displayName ={displayName}/>
  </div>
    )
}

export default UserDetails;