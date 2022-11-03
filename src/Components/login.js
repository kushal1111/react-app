import { useEffect,useState } from "react";

const Login =()=>{
    const [backName,setBackName]=useState('')
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    useEffect(()=>{
        fetch('http://localhost:3001/me').then((res)=>res.json())
        .then((data)=>setBackName(data.name))
    },[])
    const handleSubmit =()=>{
        const requestOptions={
        method:'POST',   
        body:JSON.stringify({name,address,password}),
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
        {backName}
        </div>
    )
}
export default Login;