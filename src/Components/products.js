import { useState } from "react"

const Products =()=>{
    const [price,setPrice]=useState(0)
    const [name,setName]=useState('')
    const [image,setImage]=useState('')
    const handleSubmit =()=>{
        const requestOptions={
        method:'POST',   
        body:JSON.stringify({name,price,image}),
        headers:{'content-Type':'application/json'}
        }        
        fetch('http://localhost:3001/products',requestOptions)
    }
    return(
        <form>
             <label>Product Name:
            <input id ="name" type = "text" placeholder = "product name" onKeyUp={(e)=>{setName(e.target.value)}} ></input>
            </label><br/>
            <label>Price:
            <input id="price" type = "text" placeholder = "price" onKeyUp={(e)=>{setPrice(e.target.value)}}></input>
            </label><br/>
            <label>Image:
            <input id="image" type = "text" placeholder = "image" onKeyUp={(e)=>{setImage(e.target.value)}}></input>
            </label><br/>
            <input type='submit' onClick={()=>{handleSubmit()}}></input>
        </form>
    )

}
export default Products;