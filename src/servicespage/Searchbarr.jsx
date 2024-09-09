import React, { useEffect } from 'react'
import { useState } from 'react'
import data from "../datas/food.json"

export const Searchbarr = (props) => {
const restaurants=props.restaurants
const setrest=props.setrest
let allfilt=props.allfilt
// const [rough,setro]=useState(allfilt)
    const[search, setSearch] = useState("")


    function changeHandler(event){
        setSearch( 
            event.target.value
        ) 
        console.log(search)
    }




    useEffect(() =>{
        // setrest(l=>l.filter((item)=>))
        
console.log(allfilt?.length,"---->>>>>>>>>>")

    }
,[allfilt])
      return (
    <div>
        <label>
        <input className='outline'
        type='text'
        name='searchBar'
        value={search}
        placeholder='Search Restaurants'
        onChange={changeHandler}
        />

        

        </label>

        <div>

        {
            allfilt?.length>0?(<div className=' bg-amber-500'>
                   bakchodiiiiiui

                </div>):
                (
                <div>
                    
                    
                    {
                    data.filter((item)=>{
                        const searchTerm=search.toLowerCase()
                          const ans=item.Name.toLowerCase()
                          return( searchTerm && ans.startsWith(searchTerm)&& ans!==searchTerm);
                      }
                      ).slice(0,5).map((item,i)=>(
                          <div onClick={()=>setSearch(item.Name)}
                          key={i}>

                              {item.Name}
                              </div>
  
                      ))
                    }
                    
                    </div>)
                }

        </div>
        <div>
        </div>
       
    </div>
  )
}
