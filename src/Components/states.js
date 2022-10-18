import { useState } from "react";

const States=()=> {
  const [horizontalPosition,setHorizontalposition]=useState(50)
  const [verticalposition,setVerticalposition]=useState(50)
  const [length,setLength]=useState(50)
  const [breadth,setBreadth]=useState(50)
  const [angle,setAngle]=useState(0)
  const [radius,setRadius]=useState(0)
  const [color,setColor]=useState('#ff0000')
  const changeDir = (direction) => {
    if(direction === 'left'){
      const newposition = horizontalPosition-30
      setVerticalposition(50)
      setHorizontalposition(newposition)
    }
    else if(direction === 'right'){
      const newposition = horizontalPosition+30
      setVerticalposition(50)
      setHorizontalposition(newposition)
    }
    else if(direction === 'top'){
      const newposition = verticalposition-30
      setHorizontalposition(50)
      setVerticalposition(newposition)
    }
    else if(direction === 'bottom'){
      const newposition = verticalposition+30
      setHorizontalposition(50)
      setVerticalposition(newposition)
    }
    else if(direction === 'height'){
      setHorizontalposition(50)
      setVerticalposition(50)
      const newLength = length+2
      setLength(newLength)
    }
    else if(direction === 'width'){
      setHorizontalposition(50)
      setVerticalposition(50)
      const newBreadth = breadth+2
      setBreadth(newBreadth)
    }
  }
   
    return (
        <div className="App">
        <h1>This is new app</h1>
        
              <div onClick={()=>{setColor('#abf600');  setRadius(length) }} style ={{height:length+'px',width:breadth+'px',backgroundColor:color,marginLeft:(horizontalPosition+'px'), marginTop:(verticalposition+'px'),transform:`rotate(${angle}deg)`,borderRadius:radius}}/>
              <label>Height:
              <input type="number" placeholder="height" onKeyUp={(event)=>setLength(event.target.value)}/>
              </label>
              <label>Width:
              <input type="number" placeholder="width" onKeyUp={(event)=>setBreadth(event.target.value) }/>
              </label>
              <label>Rotate:
              <input type="number" placeholder="rotate" onKeyUp={(event)=>setAngle(event.target.value)}/>
              </label>
              <button  onClick={()=>changeDir('left')}>   left   </button> 
              <button  onClick={()=>changeDir('right')}>   right   </button>
              <button  onClick={()=>changeDir('top')}>   top   </button> 
              <button  onClick={()=>changeDir('bottom')}>   bottom   </button>
              <button  onClick={()=>changeDir('height')}>   height   </button> 
              <button  onClick={()=>changeDir('width')}>   width   </button>
              <button  onClick={()=>setRadius(length)}>   Make it Circle   </button>
  
          </div>
    );
  }
    export default States;