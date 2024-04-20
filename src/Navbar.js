import React, { Component } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';



export const Navbar=()=> {
  const navigate=useNavigate();
  function handleclick(){
    navigate("/signup")
  }
  
    return (
      <div className="bg-[#891F49]">

      
      <div className=" flex flex-row justify-between mt-8">
        <div className='ml-16'>
            <div className="font-sans text-4xl">
            VISALTA
            </div>
            <div class="font-sans text-s">
                nitw
            </div>
            <div>
             
            </div>
            
        </div>
        <div className=' flex flex-row gap-16 ' >
            <button className='mb-10 text-xl'>
                Home
            </button>
            <button className='mb-10 text-xl'>
                Explore
            </button>
            <button className='mb-10 text-xl'>
                About
            </button>
        </div>
        <button className='mr-24 mb-10 text-s border-black border rounded' onClick={handleclick}>
            Login
        </button>
      </div>
      </div>
    )
  }


export default Navbar