import '../App.css'
import Box from "./Box";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove} from '@fortawesome/free-solid-svg-icons'



const Home=(props)=> {

  const [newCount,setCount]= useState(0)
  const [cartItems,setCartItems]=useState([])
  const [displayObj,setDisplayObj]=useState({})
  const [product,setProduct]=useState([])
  
  
  const cartItemsObj=()=>{  //make object from array counting the number of items
    const cartObj = {}
    cartItems.forEach(element => {
      cartObj[element] = (cartObj[element] || 0) + 1
    })
    setDisplayObj(cartObj)
  }

  const displayCount = (count)=>{  //counter for favourites
    setCount(count+newCount)
    }
    
  const displayCart = (items)=>{    //display cart items
  setCartItems(state => [...state, items])
  }
 useEffect(cartItemsObj,[cartItems])

 useEffect(()=>{
  console.log('hi')
  fetch('http://localhost:3001/products').then((res)=>res.json())
  .then((data)=>setProduct(data.productList))
  
},[])
  
  const dbArr  = [...product] 
 const itemKeys=Object.keys(displayObj)
 const itemValues=Object.values(displayObj)
 
const remove=(x)=>{
  const tempArr=[...cartItems] 
  for( var i = 0; i < tempArr.length; i++){ 
      if ( tempArr[i] === x) { 
        tempArr.splice(i, 1); 
      break;
    }
}
setCartItems(tempArr)
}

const cart=()=>{
  if (cartItems.length===0) return 'none'
  else return 'block'
}
return(
  <div className="parent">
    {dbArr.map((item,id)=>{
      return(<Box item ={item} displayCount={displayCount} displayCart={displayCart}/>)
    })}
    <button>Favourite</button>
    <button>{newCount}</button><br/>
    <div style={{display:cart()}}><table>
      <thead>
   <tr>
    <th colSpan={3}>CartItems</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    {itemKeys.map((item,id)=>{
 return <td>{item}</td>
    })}
  </tr>
  <tr>
  {itemValues.map((item,id)=>{
    return (<td>{item}<FontAwesomeIcon icon ={faRemove} color= {'red'}  onClick={()=>{remove(itemKeys[id])}}/></td>)
  })}
  </tr>
  </tbody>
   </table></div>
    
</div>

    )
}

export default Home;