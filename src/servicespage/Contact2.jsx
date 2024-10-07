import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import StarsCanvas from "./Stars";
const Contact2 = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative z-0 w-full">
        <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
              </motion.div> */}

      
       <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75]  rounded-2xl'
      >
        <p className={styles.sectionSubText}>Sell Your Items</p>
        <h3 className={styles.sectionHeadText}>Here.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 w-full flex flex-col gap-8 opacity-100'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            
           
             <div className="border-b-2  cursor-pointer border-white hover:border-[rgb(226,124,54)]">
             <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name"
              className=' w-full py-4 px-6  bg-zinc-900 opacity-80 placeholder:text-secondary text-white rounded-lg outline-none  font-medium'
            />

</div>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
          
            <div className=" border-b-2 w-full cursor-pointer border-white hover:border-[rgb(226,124,54)]">
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className=' hover:border-[rgb(226,124,54)] w-full bg-zinc-900 opacity-80 py-4 px-6  text-white rounded-lg outline-none border-none font-medium'
            />
            </div>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
          
             <div className="border-b-2  cursor-pointer border-white hover:border-[rgb(226,124,54)]">
             <textarea
              rows={2}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='  py-4 px-6 bg-zinc-900 opacity-80 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
</div>
          </label>

          <button
            type='submit'
            className=' py-3 px-8 rounded-xl outline-none w-fit text-white font-bold 
            hover:bg-[rgb(226,124,54)] hover:text-white  transition-all duration-500'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>


    </div>
{/* <StarsCanvas/> */}
    </div>
    
  );
};

export default SectionWrapper(Contact2, "contact2");
