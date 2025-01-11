import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#1E2021]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
          <motion.h1 
           initial={{ translateX: 0 }}
           animate={{ translateX: "-100%" }}
           transition={{
             duration: 10,
             repeat: Infinity,
             ease: "linear",
           }}
          className='text-[24vw] text-[#F6F5F4] leading-none font-["Founders_Grotesk_Condensed"] font-semibold -mt-[5vw] -mb-[2vw] pr-20'>
            We are Visalta
          </motion.h1>
          <motion.h1 
           initial={{ translateX: 0 }}
           animate={{ translateX: "-100%" }}
           transition={{
             duration: 10,
             repeat: Infinity,
             ease: "linear",
           }}
          className='text-[24vw] text-[#F6F5F4] leading-none font-["Founders_Grotesk_Condensed"] font-semibold -mt-[5vw] -mb-[2vw] pr-20'>
            We are Visalta
          </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;














// import { motion } from 'framer-motion';
// import React from 'react';

// const Marquee = () => {
//   return (
//     <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#1E2021]">
//       <div className="border-t-2 border-b-2 border-zinc-300 overflow-hidden ">
//         <motion.div
//           className="flex whitespace-nowrap"
//           animate={{
//             x: ["0%", "-100%"]
//           }}
//           transition={{
//             duration: 10,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         >
//           <h1 className='text-[24vw] text-[#F6F5F4] leading-none font-["Founders_Grotesk_Condensed"] font-semibold -mt-[5vw] -mb-[2vw] pr-20'>
//             We are Visalta
//           </h1>
//           <h1 className='text-[24vw] text-[#F6F5F4] leading-none font-["Founders_Grotesk_Condensed"] font-semibold -mt-[5vw] -mb-[2vw] pr-20'>
//             We are Visalta
//           </h1>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Marquee;


// import { motion } from 'framer-motion'
// import React from 'react'


// const Marquee = () => {
   
//   return (
//     <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#1E2021] '>
//         <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
//             <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: "Infinity" ,ease: "linear", duration: 5}} className='text-[24vw] text-[#F6F5F4] leading-none font-["Founders_Grotesk_Condensed"] font-semibold -mt-[5vw] -mb-[2vw]'>
//                 We are Visalta
//             </motion.h1>
//             <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: "Infinity", ease: "linear", duration: 5}} className='text-[24vw] text-[#F6F5F4] leading-none font-["Founders_Grotesk_Condensed"] font-semibold -mt-[5vw] -mb-[2vw] '>
//                 We are Visalta
//             </motion.h1>
//         </div>
//     </div>
//   )
// }

// export default Marquee

