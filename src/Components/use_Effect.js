import { useState, useEffect } from "react"

const AppEffect=()=> {
  const [buttonColor,setColor] = useState('#ff0000')
useEffect(()=>{
  console.log('hello')
},[buttonColor])


const changeColor =()=>{
setColor('#0ab000')
}
return(
  
  <button onClick={()=>{changeColor()}} style={{backgroundColor:buttonColor}}>Click Me</button>
)
}

export default AppEffect;