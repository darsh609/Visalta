import React from 'react'

import {Navbar} from "./Navbar";
import {Home} from "./Home"

// import Signup from "./Signup"
import {Route,Routes} from "react-router-dom"
import Food from "./servicespage/food"
import Traverse from "./Homes/traverse"
import Medical from "./servicespage/medical"
import  Worship  from "./servicespage/worship"
import { useEffect,useRef } from 'react';
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
// import { Link, animateScroll as scroll } from 'react-scroll';
// import  Login   from './Login';
import UploadItemForm from './servicespage/Sell_Item';
import BuyPage from './servicespage/Buy';
import Insighthome from './insights/insighthome';
import SignUp from './Signup';
import Login from './Login';

// import DarkMode from "./components/DarkMode/DarkMode";
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/src/locomotive-scroll.scss';
// import LocomotiveScroll from "locomotive-scroll";

  //  let options = {
  //       el: currentScrollContainer,
  //       smooth: true,
  //       getSpeed: true,
  //       getDirection: true,
  //   };
  //   scroll = new LocomotiveScroll(options);

function App() {
  //  const scrollRef = useRef(null);
  
  //  const scrollRef = useRef(null);

  //  useEffect(() => {
  //    // Initialize Locomotive Scroll
  //    const locoScroll = new LocomotiveScroll({
  //      el: scrollRef.current,
  //      smooth: true,
  //      smoothMobile: true, // Enable smooth scrolling on mobile if needed
  //     //  resetNativeScroll: true,
  //    });
 
  //    return () => {
  //      if (locoScroll) locoScroll.destroy(); // Clean up on unmount
  //    };
  //  });
//   const locomotiveScroll = new LocomotiveScroll();
//  //
 
  return (
  <div   className={`relative min-h-screen z-0 overflow-x-hidden`} >
          <Routes>
            
            {/* <Route path="login" element={<Login/>} /> */}
            {/* <Route path="signup" element={<Signup setIsLoggedIn ={setIsLoggedIn}/>} /> */}
            <Route path="signup" element = {<SignUp/>}/>
            {/* <Route path="dashboard" element = {<Dashboard/>}/> */}
           <Route path="login" element={<Login/>}/>
            
            <Route path="insight" element={<Insighthome/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="sell" element={<UploadItemForm/>}/>
            <Route path="food" element={<Food/>}/>
            
            <Route path="worship" element={<Worship/>}/>
            <Route path="Traverse" element={<Traverse/>}/>
            <Route path="medical" element={<Medical/>}/>
            <Route path="food/filters" element={<Foodfilter/>}/>
            <Route path="food1" element={<Food1/>}/>
            <Route path="Order" element={<Order/>}/>
            <Route path="Travel" element={<Travel/>}/>
            <Route path="rough" element={<Rough/>}/>
            <Route path="/Buy" element={<BuyPage/>}/>
          </Routes>
  
  </div>  );
}

export default App;
