import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
const Traverse = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div>

Travesre page

      </div>
      <div className='mx-auto text-center text-4xl cursor-pointer mt-96'>
        <div onClick={()=>navigate("/Travel")}>
Travel
        </div>
        <div onClick={()=>navigate("/worship")}>
Worship
        </div>
        <div>
          Enjoy
        </div>


      </div>
    </div>
  )
}
export default Traverse;



