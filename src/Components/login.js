import { useEffect,useState } from "react";

const Login =()=>{
    const [backName,setBackName]=useState('')
    useEffect(()=>{
        fetch('http://localhost:3001/me').then((res)=>res.json())
        .then((data)=>setBackName(data.name))
    },[])
    return (
        <div>
            <form>
            <label>Name:
            <input id ="name" type = "text" placeholder = "name"  ></input>
            </label><br/>
            <label>Address:
            <input id="address" type = "text" placeholder = "address"></input>
            </label><br/>
            <label>Email-id:
            <input id="email" type = "mail" placeholder = "email-id"></input>
            </label><br/>
            <label>Password:
            <input id="password" type = "password" placeholder = "password"></input>
            </label><br/>
            <input type="submit" on value="Submit"/>
        </form> 
        {backName}
        </div>
    )
}
export default Login;