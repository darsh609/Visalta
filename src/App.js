import React from 'react'

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
// import About from "./servicespage/About";
import Contact from "./servicespage/Contact";
import StarsCanvas from "./servicespage/Stars";
// import Sell from "./servicespage/Sell";
import Hero from "./servicespage/Hero";
// import DarkMode from "./components/DarkMode/DarkMode";
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  

  // const locomotiveScroll = new LocomotiveScroll();
 
  return (
  <div  className={`relative min-h-screen z-0 overflow-x-hidden`} >
          <Routes>
            
            <Route path="login" element={<Login/>} />
            {/* <Route path="signup" element={<Signup setIsLoggedIn ={setIsLoggedIn}/>} /> */}
            <Route path="signup" element = {<Signup/>}/>
            {/* <Route path="dashboard" element = {<Dashboard/>}/> */}
           
{/*             
            <Route path="insight" element={<About/>}/> */}
            <Route path="/" element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="sell" element={<Hero/>}/>
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
  
  </div>  );
}

export default App;
