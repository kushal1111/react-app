import './App.css'
import Box from "./Components/Box";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove} from '@fortawesome/free-solid-svg-icons'



const App=(props)=> {

  const [newCount,setCount]= useState(0)
  const [cartItems,setCartItems]=useState([])
  const [displayObj,setDisplayObj]=useState({})
  
  
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
 useEffect(()=>{cartItemsObj()},[cartItems])
  
  const dbArr  = [{
    name: 'nestle coffee',
    price: '500',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_gcOE8tjHRpPDjPkNw4quvB096PHVNG6bmhJ3mGPnA&s",
    currency: '$'
 },{
    name: 'starsbucks',
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
    price: '450',
    currency: '$'
 },{
    name: 'kitkat',
    price: '900',
    image:"https://m.media-amazon.com/images/I/61y6Fnw5hKL._SL1000_.jpg",
    currency: '$'
 }] 
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

export default App;