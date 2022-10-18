
function incDec(){
const [count,setCount]=useState(0)

const changeCount = (value) => {
  if (value==='increment') {
    let incCount = count+1
    setCount(incCount)
  }
  else setCount(count-1)
   }
<button  onClick={()=>changeCount('increment')}>   +   </button> 
{count}
      <button  onClick={()=>changeCount('decrement')}>   -   </button>
}
export default incDec;