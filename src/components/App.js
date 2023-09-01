import React from "react";
import { Routes , Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";



const App = () => {


    return (
         <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </div> );
}
 
export default App;
