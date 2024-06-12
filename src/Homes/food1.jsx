import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
 const Food1 = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className='mx-auto text-center text-4xl'>
        Image lagana hai
      </div>
      <div className='mx-auto text-center text-4xl cursor-pointer mt-96'>
        
        <div onClick={()=>navigate("/Order")}> 
          Order Now
        </div>
        <div onClick={()=>navigate("/food")}>
          Dine in
        </div>
      </div>
    </div>
  )
}
export default Food1