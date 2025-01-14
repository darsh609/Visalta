// InsightPage.js
import React from "react";
import { motion } from "framer-motion";
import TeamSlider from "./TeamSlider";
import VisaltaSection from "./VisaltaSection";

const InsightPage = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen p-6">
      {/* About Visalta Section */}
      
      <VisaltaSection/>
      {/* <section className="text-center py-20 text-white">
  <motion.h1
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, type: "spring", stiffness: 120 }}
    className="text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg"
  >
    About <span className="bg-clip-text text-transparent bg-green-400 ">Visalta</span>
  </motion.h1>
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="text-xl max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm"
  >
    Visalta is a project aimed at empowering individuals and organizations with tailored insights
    and innovative solutions. Our mission is to bridge technology and creativity for impactful results.
  </motion.p>
</section> */}


      {/* Team Section */}
      <div className="flex items-center justify-center h-screen" >
      <TeamSlider/>
      </div>
      
      {/* Contact Us Section */}
      <section className="py-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Contact Us
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 py-2 rounded-lg text-white font-bold hover:bg-indigo-700 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
};

export default InsightPage;