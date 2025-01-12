import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold text-yellow-400">About Visalta</h2>
            <p className="mt-4 text-gray-300">
              Visalta strives to redefine creativity and collaboration through cutting-edge technology and innovative solutions. Join us in shaping the future!
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
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Visalta. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
