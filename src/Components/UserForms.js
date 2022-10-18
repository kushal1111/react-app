
const UserForms=(props)=> {
    
    return(
        <form onSubmit={(e)=>{e.preventDefault()
            props.displayName(`${document.getElementById("name").value} from ${document.getElementById("address").value}`)}}>
            <label>Name:
            <input id ="name" type = "text" placeholder = "name" ></input>
            </label><br/>
            <label>Address:
            <input id="address" type = "text" placeholder = "address"></input>
            </label><br/>
            <input type="submit" value="Submit"/>
        </form> 
    )
}

export default UserForms;