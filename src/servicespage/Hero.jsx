import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, StarsCanvas } from "./canvas";
import Contact from "./Contact";
import Contact2 from "./Contact2";
import Navbar from "../Navbar";

const Hero = () => {
  return (

    <div className=" w-[1800px]">

      {/* <Navbar/> */}
   <div className={`relative w-full -z-1`}>

    <div className=" mx-auto">

    <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-rgb[(226,124,54)] bg-orange-400' />
          <div className='w-1 sm:h-80 h-40 violet-gradient  ' />
        </div>

        <div>
          <h3 className={`${styles.heroHeadText} text-white`}>
            Hi, <span className=' text-rgb[(226,124,54)] text-orange-400'>Ashish</span>
          </h3>
          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            Fill the formm<br className='sm:block hidden' />
            and sell your items
          </div>
        </div>
      </div>



      <div className="  mt-80  ml-14 z-1">
      <Contact2/>
      </div>
    </div>
      
     
      <StarsCanvas/>
    </div>

    </div>
   
  );
};

export default Hero;
