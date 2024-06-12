import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
 const Services = () => {
    const navigate=useNavigate();
//   function handleclick(){
//     navigate("/food")
//    }
  return (
    <div>
        <div className="bg-amber-700 w-full h-44 text-center mt-32 text-6xl pt-20 rounded-2xl cursor-pointer" onClick={()=>navigate("/food1")}>
            Food
        </div>
        <div className="  bg-lime-300 w-full h-44 text-center mt-32 text-6xl pt-20 rounded-2xl cursor-pointer" onClick={()=>navigate("/traverse")}>
            Traverse
        </div>
        {/* <div className="bg-amber-700 w-full h-44 text-center mt-32 text-6xl pt-20 rounded-2xl cursor-pointer" onClick={()=>navigate("/worship")}>
            Worship
        </div> */}
        <div className="  bg-lime-300 w-full h-44 text-center mt-32 text-6xl pt-20 rounded-2xl cursor-pointer" onClick={()=>navigate("/medical")}>
            Medical
        </div>
    </div>
  )
}
 export default Services