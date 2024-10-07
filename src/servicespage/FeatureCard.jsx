import React from 'react'
import Eatables_Card from "../assets/Eatables_Card.png";
import Travel_Card from "../assets/Travel_Card.png";

const FeatureCard = () => {
  return (
    <div className='w-full py-20 bg-[#D3D3CB] rounded-tl-3xl rounded-tr-3xl text-black'>
        <div className='w-full px-20 border-b-[1px] border-[#a1b562] pb-20'>
            <h1 className="text-7xl text-[3vw] leading-[3.5vw] ">
            Featured Project
            </h1>
        </div> 

      <div className='px-20'>
      <div className="cards w-full flex gap-10 mt-10">
                <div className="cardcontainer  relative w-1/2 h-[75vh] ">
                    <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#7A871E] z-[10] font-["Founders_Grotesk_Condensed"] font-semibold text-8xl leading-none uppercase'>VenueSmart</h1>
                    {"venueSmart".split('').map((item, index)=> <span>{item}</span>)}
                    <div className='card w-full h-full rounded-xl card overflow-hidden'>
                        <img className='w-full h-full bg-cover' src={Eatables_Card} alt=""  />
                    </div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[75vh]">
                <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#7A871E] z-[10] font-["Founders_Grotesk_Condensed"] font-semibold text-8xl leading-none uppercase'>Visit</h1>
                {"visit".split('').map((item, index)=> <span>{item}</span>)}
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src={Travel_Card} alt="" />
                    </div>
                </div>
            </div>
      </div>
       
  </div>
  )
}

export default FeatureCard