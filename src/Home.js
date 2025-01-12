// import React from 'react'
// import "./App.css";
// import {Navbar} from "./Navbar";
// // import nitw from "./assets/IMG_0636.jpg"
// import Service from "./services"

// export const Home = () => {
//   return (
//     <div className='home'>
//       <Navbar/>
      
//       <div > 
//         <div className="relative"  >
        
//           {/* <img src="./assets/IMG_0636.jpg" className="opacity-50"></img> */}
            
  
//         <div className="relative" >
//           {/* <img src="./assets/IMG_0636.jpg" className="opacity-50 "></img> */}
//           {/* <div className="absolute top-60  font-bold -left-3" >
//           HLOO VISALTA 
//         </div> */}

//         </div>
        
//       </div>


//       <div className="w-[1100px] mx-auto">
//         <Service/>
        

//       </div>
//       </div>
//     </div>

//   )
// }

import React, { useRef } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import maskerImg from "./assets/masker.png";
import Navbar from './Navbar';
import { Navigate, useNavigate } from 'react-router-dom';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Marquee from './servicespage/Marquee';
import FeatureCard from './servicespage/FeatureCard';
import { motion } from 'framer-motion';
import { useEffect} from 'react';
import RatingReviewForm from './servicespage/RatingReviewForm';
import FeedbackSlider from './servicespage/FeedbackSlider';


export const Home = () => {
  const scrollRef = useRef(null);
  
  const navigate = useNavigate();

  const gsapRef = useRef();

  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(gsapRef.current, {
     opacity:0,
     duration:0.3,
     delay:0.2
    })

    tl.from(gsapRef.current, {
      transform:"scaleX(0.7) scaleY(0.2)",
      borderRadius:"50px",
      duration:2,
      ease:"expo.out"
    })
  
    tl.from(".Navbar", {
    opacity:0
    })

    tl.from(" .LandingPage h1, .LandingPage p, .LandingPage span, .LandingPage .start, .LandingPage .image",  {
      opacity:0,
      duration: 0.4,
      stagger:0.2
      })
   
 })

  return (
      <div className='w-full h-screen text-white'>
      <Navbar/>
      <div  ref ={gsapRef} className='LandingPage w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
            
                {["Navigating", "Student's", "life" ].map((item,index)=>{
                    return <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (
                        <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease : [0.76, 0, 0.24, 1], duration:1}} className='image mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative -top-[0.1vw] mt-3'>
                            <img src={maskerImg} alt="" />
                        </motion.div>
                        )}
                    <h1 className='flex items-center uppercase text-[9vw] h-full leading-[7vw] font-["Founders_Grotesk_Condensed"] font-bold'>
                        {item}
                    </h1>
                    </div>
                    
            </div>
                    
                })}
               
            

        </div>
        <div className='border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["forxxxxxxx","xxxxxxxx"].map((item,index)=>(
            <p className='text-md font-light'>{item}</p>))}
            <div className='start flex items-center gap-2'>
                <div onClick={()=> navigate("sell")} className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-lighter text-md uppercase  hover:bg-white hover:text-black transition-all duration-500'>
                   sell items
                    
                </div>
                <div onClick={()=> navigate("sell")} className='w-10 h-10 border-[1px] flex items-center justify-center border-zinc-400 rounded-full  hover:bg-white hover:text-black transition-all duration-500'>
                    <span className='rotate-[50deg]'>
                    <FaArrowUpLong/>
                    </span>
                    
                </div>
            </div>
        </div>
    </div>
    
    <Marquee/>
   
   <FeatureCard/>

   <FeedbackSlider/>

   <RatingReviewForm/>

</div>
  )
}



