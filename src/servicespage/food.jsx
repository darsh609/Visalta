import React, { useState,useEffect } from 'react'
import food from '../data/food.json'
import { Link, Navigate, useNavigate } from 'react-router-dom';
// const myobj=JSON.parse(food);

const Food = () => {

  
  const navigate=useNavigate();
 

 
  return (
    <div className=''>

      <div className='text-center'>


         {/*  */}
      <div>

{/* EYE CATCHING LINEN */}
<h1 className='text-4xl text-center bg-orange-400'>

Welcome to food section

</h1>






       </div>
        {/*  */}
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


  


                   {/*  */}
              <div className='flex-row'>
  {/* Cards */}
  {food.map((ele,i)=>(
    <div key={i}>

    <div className=''>
      {/* IMage */}
      <img src={ele.Image}>
    </img>
    </div>


    <div>
      {/* Name */}
        {ele.Name}
        <div className='  bg-blue-500'>
          {/* arrow  for visit */}
       <a href={ele.Visit} target="_blank"> 
       {/* arrow */}
       click here
       </a>
          </div>

          <div>
            {ele.Timing}
            </div>
        
      
        </div>


    <div className=''>
      {/* tags */}
        <div className=''>
        {ele.filters + " "}
        </div>
       
     </div>


      </div>

    
  ))

  }

              </div>





      </div>

     
    </div>
  )
}
export default Food;