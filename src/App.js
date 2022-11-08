import { BrowserRouter as Router, Route, Routes} 
        from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/login";
import Products from "./Components/products";
import Evalidation from "./Components/formik";
  

const App=()=> {

return(
<Router>
  <div>
    <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/formik" element={<Evalidation/>}/>
     <Route path ="/login" element={<Login/>}/>
     <Route path ="/products" element={<Products/>}/>
    </Routes>
  </div>
</Router>

    )
}

export default App;