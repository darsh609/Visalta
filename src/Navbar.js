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
            <div>
            VISALTA
            </div>
            <div>
                nitw
            </div>
            <div>
              Navigating students life
            </div>
            
        </div>
        <div className='flex flex-row gap-16 ' >
            <div>
                Home
            </div>
            <div>
                Explore
            </div>
            <div>
                About
            </div>
        </div>
        <div className='mr-24' onClick={handleclick}>
            Login
        </div>
      </div>
      </div>
    )
  }


export default Navbar