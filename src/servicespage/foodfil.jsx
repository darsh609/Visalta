import React, { useState } from 'react'
import { filterData } from '../data/filters'
import { Sidebar } from './Sidebar'
const Foodfil = () => {

    const[restaurants,setrest]=useState([]) 
    const[allfilt,setfilt]=useState([])
    // const filterHandler((ele)=>{
    // })
    


  return (
    <div>
    <div>
       
       
 <div className=' bg-teal-500   w-80 text-left'>
        <Sidebar restaurants={restaurants} allfilt={allfilt} filterData={filterData}
        setfilt={setfilt} setrest={setrest}/>
        
            

 </div>


    </div>








    </div>
  )
}
export default Foodfil