import React, { useEffect, useState } from 'react'
import { filterData } from '../datas/filters'
import { Sidebar } from './Sidebar'
import food from '../datas/food.json'
const Foodfil = () => {

    const[restaurants,setrest]=useState([]) 
    const[allfilt,setfilt]=useState([])
    const [is,setis]=useState(true)
    // const filterHandler((ele)=>{
    // })

    useEffect(() => {
      setrest([])
      food.map((ele)=>{
        // console.log(ele,"->")
        allfilt?.map((e)=>{
          // console.log(ele.filters,"->")
          // console.log(e,"(((")
          
          if(ele.filters
            .includes(e)){


          }
          else{
            
           setis(false)
           console.log(ele.Name,"(((")

          }


        })

        if(is){
          setrest(old=>[...old,ele])
          setis(true)
        }
        

      })

    },[allfilt])
    


  return (
    <div>
    <div>
       
       
       
 <div className=' bg-teal-500   w-80 text-left'>
        <Sidebar restaurants={restaurants} allfilt={allfilt} filterData={filterData}
        setfilt={setfilt} setrest={setrest}/>
        
            

 </div>
 <div>
  {
    allfilt.length>0? 
    (<div>{restaurants.map((ele,i)=>(
      <div key={i}>
  
      <div className=''>
      <img src={ele.Img}></img>
        {/* IMage */}
        {/* <img src="icon1.png"> </img>  */}
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
  
    }</div>):
    ( 
    <div>
      {food.map((ele,i)=>(
      <div key={i}>
  
      <div className=''>
      <img src={ele.Img}></img>
        {/* IMage */}
        {/* <img src="icon1.png"> </img>  */}
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
    ) 
  }

 </div>


    </div>








    </div>
  )
}
export default Foodfil