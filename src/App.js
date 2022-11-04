import { BrowserRouter as Router, Route, Routes} 
        from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/login";
  

const App=()=> {

return(
<Router>
  <div>
    <Routes>
    <Route path ="/" element={<Home/>}/>
     <Route path ="/login" element={<Login/>}/>
    </Routes>
  </div>
</Router>

    )
}

export default App;