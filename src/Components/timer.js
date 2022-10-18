import { useState, useEffect } from "react"

const Timer=()=> {
  const [counter,setCounter] = useState(5)
  let count = counter
useEffect(()=>{
  setInterval(()=>{
    count = count + 1
    setCounter(count)
          },2000)
  })


return(
  <div>{counter}</div>
    )
}

export default Timer;