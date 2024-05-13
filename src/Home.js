import React from 'react'
import nitw from "./assets/pics/IMG_0636.jpg"
import Service from "./services"

export const Home = () => {
  return (
    <div>
      
      <div > 
        <div className="relative"  >
        
          <img src={nitw} className="opacity-50"></img>
            <div className="h-8 bg-yellow-400 absolute bg-opacity-35 w-full top-8 text-center py-[2.8px] hover:text-center">
              Announcement
             </div>
          <button className="absolute top-90 left-1/3 font-serif right-1/3 bottom-40 border rounded-full text-2xl" >
          Navigating students life
        </button>
        <div className="relative" >
          <img src={nitw} className="opacity-50 "></img>
          <div className="absolute top-60  font-bold -left-3" >
          HLOO VISALTA 
        </div>

        </div>
        
      </div>


      <div className="w-[1100px] mx-auto">
        <Service/>
        

      </div>
      </div>
    </div>

  )
}
