import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

import { motion } from "framer-motion";

const Footer = () => {
  const socialIcons = [
    {
      platform: "Facebook",
      icon: "fab fa-facebook-f",
      color: "text-blue-500",
      href: "https://facebook.com",
    },
    {
      platform: "LinkedIn",
      icon: "fab fa-linkedin-in",
      color: "text-blue-400",
      href: "https://linkedin.com",
    },
    {
      platform: "Instagram",
      icon: "fab fa-instagram",
      color: "text-pink-500",
      href: "https://instagram.com",
    },
    {
      platform: "WhatsApp",
      icon: "fab fa-whatsapp",
      color: "text-green-500",
      href: "https://wa.me/1234567890", // Replace with your WhatsApp number
    },
    {
      platform: "Phone",
      icon: "fas fa-phone",
      color: "text-yellow-400",
      href: "tel:+1234567890", // Replace with your phone number
    },
  ];

  return (
    <footer className="bg-zinc-900 text-zinc-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold text-yellow-400">About Visalta</h2>

            <p className="mt-4 text-gray-300">
              Visalta strives to redefine creativity and collaboration through cutting-edge technology and innovative solutions. Join us in shaping the future!

            <p className="mt-4 text-zinc-400">
              Visalta strives to redefine creativity and collaboration through
              cutting-edge technology and innovative solutions. Join us in
              shaping the future!

            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-yellow-400">Quick Links</h2>
            <ul className="mt-4 space-y-2">

              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Contact
                </a>
              </li>

              {["Home", "Services", "Projects", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              Connect with Us
            </h2>

            <div className="mt-4 flex space-x-4">
              {[
                { platform: "Facebook", icon: "fab fa-facebook-f" },
                { platform: "Twitter", icon: "fab fa-twitter" },
                { platform: "LinkedIn", icon: "fab fa-linkedin-in" },
                { platform: "Instagram", icon: "fab fa-instagram" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.platform}
                  className="w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-500 transition duration-300"
                >
                  <i className={social.icon}></i>
                </a>

            <div className="mt-4 flex flex-wrap gap-4 justify-start">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-${social.color} hover:scale-110 transition duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${social.icon} text-2xl`}></i>
                </motion.a>

              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">

        <div className="mt-10 border-t border-zinc-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-400">

            &copy; 2025 Visalta. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a

              href="#"
              className="text-gray-400 hover:text-yellow-400 transition duration-300"
=======
              href="/privacy-policy"
              className="text-zinc-400 hover:text-yellow-400 transition duration-300"

            >
              Privacy Policy
            </a>
            <a

              href="#"
              className="text-gray-400 hover:text-yellow-400 transition duration-300"
=======
              href="/terms-of-service"
              className="text-zinc-400 hover:text-yellow-400 transition duration-300"

            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

=======

      {/* Responsive Media Queries */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid-cols-3 {
            grid-template-columns: 1fr;
          }

          .w-14 {
            width: 48px;
          }

          .h-14 {
            height: 48px;
          }

          .justify-start {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .flex-wrap {
            flex-direction: column;
            gap: 1rem;
          }

          .w-14 {
            width: 42px;
          }

          .h-14 {
            height: 42px;
          }
        }
      `}</style>

    </footer>
  );
};

export default Footer;
