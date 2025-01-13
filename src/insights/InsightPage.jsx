// InsightPage.js
import React from "react";
import { motion } from "framer-motion";

const InsightPage = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen p-6">
      {/* About Visalta Section */}
      <section className="text-center py-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          About Visalta
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-lg max-w-2xl mx-auto"
        >
          Visalta is a project aimed at empowering individuals and organizations with tailored insights
          and innovative solutions. Our mission is to bridge technology and creativity for impactful results.
        </motion.p>
      </section>

      {/* Team Section */}
      <section className="py-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Meet the Team
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Lead Developer */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 rounded-lg p-6 text-center shadow-lg"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Lead Developer"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Aarav Kumar</h3>
            <p className="text-gray-400">Lead Developer</p>
          </motion.div>

          {/* Frontend Developer */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 rounded-lg p-6 text-center shadow-lg"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Frontend Developer"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Ishita Verma</h3>
            <p className="text-gray-400">Frontend Developer</p>
          </motion.div>

          {/* JSON Specialist */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 rounded-lg p-6 text-center shadow-lg"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="JSON Specialist"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Rohan Singh</h3>
            <p className="text-gray-400">Information Specialist</p>
          </motion.div>

          {/* Asset Collector */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 rounded-lg p-6 text-center shadow-lg"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Asset Collector"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Priya Sharma</h3>
            <p className="text-gray-400">Asset Collector</p>
          </motion.div>
        </div>
      </section>

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