import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate()
    const [formdata, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })


    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event) {
        setFormData( (prevData) =>(
            {
                ...prevData, [event.target.name]:event.target.value
            }
        ) )
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formdata.password != formdata.confirmPassword) {
            toast.error("passwords do not match");

        }
        setIsLoggedIn(true);
        toast.success("account created")
        const accountData ={
            ...formdata

        };
        
          
    }
  return (
    <div>
        {/* student instructor tab */}
        <div>
            <button>
                Student 
            </button>
            <button>
                Admin
            </button>
        </div>

        <form onSubmit={submitHandler}>
            {/* //fist name and last name */}
            <div>
            <label>
                <p>First Name<sup>*</sup></p>
            <input
                required
                type='text'
                name='firstName'
                onChange={changeHandler}
                placeholder='enter first Name'
                value={formdata.firstName}
            />
            </label>

            <label>
                <p>Last Name<sup>*</sup></p>
            <input
                required
                type='text'
                name='lastName'
                onChange={changeHandler}
                placeholder='enter last Name'
                value={formdata.lastName}
            />
            </label>
            </div>
         {/* email add */}
            <label>
                 <p>Email Address<sub>*</sub></p>
                 <input
                     required
                     type='email'
                     name='email'
                     onChange={changeHandler}
                     placeholder='Enter Email Address'
                     value={formdata.email}
                />
            </label>

            {/* create pas and confirm pass */}
            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='enter password'
                    value={formdata.password}
                />
                  <span onClick={() => setShowPassword((prev) => !prev)}>
                     {showPassword ? (<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                  </span>
                </label>

                <label>
                    <p>confirm Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='confirmPassword'
                    onChange={changeHandler}
                    placeholder='confirm password'
                    value={formdata.confirmPassword}
                />
                 <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)  }
                </span>
            </label>
        </div>
        <button>
            Create Account
        </button>
            
        </form>
    </div>
  )
}

export default SignupForm