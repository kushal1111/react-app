import { useState } from "react";

const Login =()=>{
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
   
    
    const handleSubmit =()=>{
        const requestOptions={
        method:'POST',   
        body:JSON.stringify({name,address,email,password}),
        headers:{'content-Type':'application/json'}
        }
        
        fetch('http://localhost:3001/register',requestOptions)
        }
      
    return (
        <div>
            
            <label>Name:
            <input id ="name" type = "text" placeholder = "name" onKeyUp={(e)=>{setName(e.target.value)}} ></input>
            </label><br/>
            <label>Address:
            <input id="address" type = "text" placeholder = "address" onKeyUp={(e)=>{setAddress(e.target.value)}}></input>
            </label><br/>
            <label>Email-id:
            <input id="email" type = "mail" placeholder = "email-id" onKeyUp={(e)=>{setEmail(e.target.value)}}></input>
            </label><br/>
            <label>Password:
            <input id="password" type = "password" placeholder = "password" onKeyUp={(e)=>{setPassword(e.target.value)}}></input>
            </label><br/>
            <button onClick={()=>{handleSubmit()}} >Submit</button>
       
        {name} {address} {email} {password}
       
        </div>
    )
}
export default Login;