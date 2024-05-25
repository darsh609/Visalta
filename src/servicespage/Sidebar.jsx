import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
export const Sidebar = (props) => {
    let restaurants=props.restaurants
    let allfilt=props.allfilt
    let filterData=props.filterData
    let setfilt=props.setfilt
    let setrest=props.setrest
    const [clicked,setclicked]=useState([]);
    const[rough,setrough]=useState(false);




       const emptythis=(()=>{
        let u=rough
        setrough(!u)
        const arr=[]
        setfilt(arr);

    })

    const filterHandler=((ele)=>{
        if(allfilt.includes(ele)){
            alert("all ready included");

            //NEED TO ADD TOAST
        }
        else{
            let out=allfilt;

        out.push(ele);
        setfilt(out)
        console.log("filters=====>",allfilt)

        let out2=clicked
const v=ele
console.log(v)
        out2.push({[v]:"true"});
        setclicked(out2)
        console.log("testing==>",clicked)

        }
        
    

    })
    const remove=((ele)=>{
        let out2=clicked
        out2.push({ele:"false"});
        setclicked(out2)
        

    })

    useEffect=(()=>{
        const save=(()=>{
            let x=[]
            filterData.map((ele)=>(
            
                x.push({[ele.title]:"false"})
      
            ))
      
        }) 
        
      
 
     },[])

     const checkcolor=((elem)=>{
       return allfilt.includes(elem)?true:false;

 
     })
 


  return (
    <div className='w-full' >
        <div className='w-full text-center'>
            <button
             className={`text-lg px-2 py-1 rounded-md font-medium 
             text-white text-center bg-amber-300 hover:bg-opacity-50 border-2 transition-all duration-300 mx-auto
             ${allfilt.length>0 ? 
                "bg-opacity-60 border-transparent" :
                "bg-opacity-40  border-black "}
    
             `}
             onClick={()=>emptythis()}>
                ALL
            </button>
        </div>
        <div className=' w-full'>
            <h1 className=' text-4xl text-center  border-l-emerald-400 text-fuchsia-900 mx-auto
            '>
                Filters
            </h1>
            <div>
            {
        filterData.map( (data) => (
            <div key={data.id} className='flex '>
                <button
            className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-30 border-2 transition-all duration-300


            ${allfilt.includes(data.title)? 
            "bg-opacity-60  border-white" :
            "bg-opacity-40 border-transparent "}
            `}
             
             onClick ={()=>filterHandler(data.title)}
             >{data.title}</button>

             <button
              className={`text-lg px-2 py-1 rounded-md font-medium 
              text-white bg-black hover:bg-opacity-30 border-2 transition-all duration-300
              ${allfilt.includes(data.title) ? 
              "bg-opacity-60 border-white" :
              "bg-opacity-40 border-transparent "}
              `}
              onClick={()=>remove(data.title)}
   >
             <RxCross1/>

             </button>
             
             
                </div>
            

        ))
      }
      

            </div>
        </div>


    </div>
  )
}
