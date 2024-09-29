import React, { Component } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import toggle_light from './Modeswitch/dark_mode.png'
import toggle_dark from './Modeswitch/light_mode.png'
import visalta_logo from './Logo/visalta_logo.png'
import {toast} from 'react-hot-toast'


export const Navbar=(props)=> {
  const navigate=useNavigate();
  function handleclick(){
    navigate("login")
  }
  let setTheme = props.setTheme;

  let theme = props.theme;

  let isLoggedIn = props.isLoggedIn;

  let setIsLoggedIn = props.setIsLoggedIn;

  const toggle_mode = ()=> {
     theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  
    return (
    <div className="navbar" >

      
      <div className="logo mt-4">
        <img src={visalta_logo} alt='' onClick={()=> navigate("/")} className= 'w-60 cursor-pointer'></img>
        </div>
          <div className='majorList flex  gap-x-14' >
            
              <button onClick={()=> navigate("/")} className='mb-10 text-xl font-semibold   hover:text-lightBlue'>
                  Homeeee
              </button>
              
            
            
              <button onClick={()=> navigate("Explore")} className='mb-10 text-xl font-semibold  hover:text-lightBlue'>
                  Explore
              </button>
              
          
            
              <button onClick={()=> navigate("About")} className='mb-10 text-xl font-semibold  hover:text-lightBlue'>
                  About
              </button>
              
             
          </div>

          {/* Login-signup-dashboard-logout*/}
          {!isLoggedIn&&
          <div className='loginBtn font-medium '>
          <button onClick={handleclick}>
              Login 
          </button>
          </div>
           }
          { !isLoggedIn &&
          <div className='signupBtn font-medium '>
          <button onClick={()=> navigate("signup")}>
              Sign Up →
          </button>
          </div>
          }
           { isLoggedIn && 
            <Link to="/">
              <button className='logoutBtn' setTheme = {setTheme}
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged out")
                }}
              >Log Out</button>
            </Link>
          }
          { isLoggedIn &&              
             <Link to="/dashboard">
              <button>Dashboard</button>
             </Link>
          }
          
          
        <div className='px-10 py-5'>
          <img onClick={()=>{toggle_mode()}} src={ theme === 'light' ? toggle_light : toggle_dark} alt=""  className='toggle_icon w-8 mt-1 right-1.5' />
        </div>
      

     
    </div>
    )
  }


export default Navbar