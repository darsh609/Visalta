import React, { useState,useEffect } from 'react'
import food from '../datas/food.json'
// import nitw from '../assets/pics/IMG_0636.jpg'
// import jhg from './assets/pics/fooddp/icon1.png'
// import {jh}  from "./assets/IMG_0636.jpg"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Foodcompo } from './Foodcompo';
// const myobj=JSON.parse(food);

const Food = () => {
  
  const navigate=useNavigate();
  return (
    <div className=''>
      <div className='text-center'>
      <div>
                                    {/* EYE CATCHING LINEN */}
       <h1 className='text-4xl text-center bg-orange-400'>
         Welcome to food sectionmnn
</h1>
  </div>
   <div>
  {/* EYE CATCHING BANANA HAI USKE*/}
<h2 className='mx-auto'>
  KAZIPET ---------------------------------WARANGAL
  {/* ISKE NEECHE CHOTA S LIKHENGE KM ME  */}
           </h2>
             </div>
             {/*  */}
               <div onClick={()=>navigate("/food/filters")} className=' cursor-pointer bg-red-500'>
  EXPLORE WITH FILTERS

          </div>
              
<Foodcompo food={food}/>

      </div>

     
    </div>
  )
}
export default Food;