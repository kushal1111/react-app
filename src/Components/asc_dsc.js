import { useState } from "react"
import './App.css';

const AppSort=()=> {
const  newArr = [55,221,555,4,32]
const [typedNo,setTypedNo]=useState(0)
const [arr,setArr]=useState(newArr)

const remove =() => {
    const tempArr =  newArr.filter((item,id)=>{
      if(item.toString() !== typedNo){
    return item
    }
    })
    setArr(tempArr)
  }

const ascending = () =>{
  const tempArr=[...arr]
 tempArr.sort((a, b)=>{
    return a-b;
});
setArr(tempArr)
}

const descending = () =>{
  const tempArr=[...arr]
  tempArr.sort((a, b)=>{
    return b-a;
});
setArr(tempArr)
}

return(
  <div>
    {arr.map((item,id)=>{return <li>{item}</li>})}
      <input class="inputfield" id="number" placeholder="enter a number" onKeyUp={(e)=>{setTypedNo(e.target.value)}}></input>
    <button  onClick={remove}>Delete</button>
    <button  onClick={ascending}>Asc</button>
    <button  onClick={descending}>Dsc</button>
      
  </div>
)

}

export default AppSort;