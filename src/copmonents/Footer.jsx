import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#FFF8F3] min-h-screen flex items-center">
      <div className="max-w-[1140px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        
        {/* Left Side */}
        <div>
          <h2 className="text-2xl text-secondary1 md:text-3xl font-semibold mb-4">
            Lets Connect
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Please fill out the form on this section to contact with me or call 
            between 9:00 A.M and 8:00 P.M ET, Monday through Friday.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl text-primary1">
            <a href="https://www.facebook.com/Rameshdas150" className="hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="https://x.com" className="hover:text-orange-500">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/rameshdascse" className="hover:text-orange-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-2xl text-secondary1 md:text-3xl font-semibold mb-6">
            Let’s Message me
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 bg-white border text-secondary1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white text-secondary1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 bg-white border text-secondary1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
           <Link className="flex justify-center md:justify-start">
            <button
              type="submit"
              className="bg-orange-500  text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600"
            >
              Submit
            </button>
           </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
