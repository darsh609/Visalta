import React from 'react'

export const Foodcompo = (props) => {

    let required=props.food
  return (
    <div>
             <div className='flex-row'>
  {/* Cards */}
  <h1>I M COMPONENET </h1>
  {required.map((ele,i)=>(
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


    </div>
  )
}
