const Login =()=>{
    return (
        <div>
            <form>
            <label>Name:
            <input id ="name" type = "text" placeholder = "name" ></input>
            </label><br/>
            <label>Password:
            <input id="password" type = "password" placeholder = "password"></input>
            </label><br/>
            <input type="submit" value="Submit"/>
        </form> 
        </div>
    )
}
export default Login;