import '../App.css'
import './Box.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart} from '@fortawesome/free-solid-svg-icons'
import {  useState } from 'react'
const Box = (props) =>{
   const [colorHeart, setColorHeart] = useState('black')
   const [tester,setTester]=useState(true)

const changeColorCart = () =>{

props.displayCart(props.item.name)
}

const changeColorHeart = () =>{
   if(tester===false){
      props.displayCount(-1)
      setTester(!tester)
      setColorHeart('black')
      return
   }
   setColorHeart('red')
   props.displayCount(1)
   setTester(!tester)
}
    return(<div className ="box" >
      
      <img alt={props.item.name} src={props.item.image} width='200px' height='400px'/>
      {props.item.name}
      <FontAwesomeIcon icon ={faShoppingCart} color={'black'} onClick={()=>{changeColorCart()}} />
      {props.item.price}
      <FontAwesomeIcon icon ={faHeart} color= {colorHeart} onClick={()=>{changeColorHeart()}} />
      
      </div>)
}

export default Box;