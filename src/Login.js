import React from 'react'
import Template from './components/Template'


const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title = "Welcome to Visalta" 
    desc1 = "Build skill for Today, Tomorrow and Beyond"
    desc2 = "Education to future-proof your career"
    formtype = "login"
    setIsLoggedIn = {setIsLoggedIn}
    />
  )
}

export default Login
