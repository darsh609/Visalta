import "./App.css";
import {Navbar} from "./Navbar";
import {Home} from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Dashboard from "./Dashboard";
import {Route,Routes} from "react-router-dom"
import Food from "./servicespage/food"
import Traverse from "./Homes/traverse"
import Medical from "./servicespage/medical"
import  Worship  from "./servicespage/worship"

import Food1 from "./Homes/food1";
import { Order } from "./servicespage/Order";
import { Travel } from "./servicespage/Travel";
import { Rough } from "./datas/Rough";
import Foodfilter from "./servicespage/foodfilter";
import { useState } from "react";
import About from "./servicespage/About";
import Explore from "./servicespage/Explore";
// import DarkMode from "./components/DarkMode/DarkMode";

function App() {

  const[theme, setTheme] = useState('light');
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inte">
    <div className={`app ${theme}`}> 
     

          {/* <DarkMode/> */}
          <Navbar theme={theme} setTheme= {setTheme} isLoggedIn={isLoggedIn} setIsLoggedIn ={setIsLoggedIn}/>
          
          <Routes>
            
          <Route path="login" element={<Login setIsLoggedIn ={setIsLoggedIn}/>} />
          {/* <Route path="signup" element={<Signup setIsLoggedIn ={setIsLoggedIn}/>} /> */}
          <Route path="signup" element = {<Signup setIsLoggedIn ={setIsLoggedIn}/>}/>
          {/* <Route path="dashboard" element = {<Dashboard/>}/> */}

          <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Explore" element={<Explore/>}/>
          <Route path="food" element={<Food/>}/>
          <Route path="worship" element={<Worship/>}/>
          <Route path="Traverse" element={<Traverse/>}/>
          <Route path="medical" element={<Medical/>}/>
          <Route path="food/filters" element={<Foodfilter/>}/>
          <Route path="food1" element={<Food1/>}/>
          <Route path="Order" element={<Order/>}/>
          <Route path="Travel" element={<Travel/>}/>
          <Route path="rough" element={<Rough/>}/>
        </Routes>

     

    </div>
  </div>  );
}

export default App;
