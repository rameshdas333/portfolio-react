import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";

export default function About() {
  return (
      <>
     <Container>
       <Navbar/>
              <div className="bg-white py-10 md:py-35 flex items-center">
      <div className="max-w-[1000px] rounded-xl px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-14 md:py-20 bg-[#FFF8F3] mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl text-secondary1 md:text-4xl font-semibold mb-6">
          About Me
        </h2>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-thirdcolor75 leading-relaxed mb-10">
          I&apos;m a designer & developer with a passion for web design. 
          I enjoy developing simple, clean and slick websites that provide real value to the end user. 
          Thousands of clients have procured exceptional results while working with me. 
          Delivering work within time and budget which meets clients requirements in our mata.
        </p>

        {/* Info Section */}
        <div className="grid grid-cols-2  md:grid-cols-4 gap-6 text-left">
          <div>
            <p className="text-gray-600 font-medium">Name:</p>
            <p className="font-semibold text-black text-sm sm:text-base">Ramesh Das</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Email:</p>
            <p className="font-semibold text-black md:text-sm text-[12px]">
              rameshdascse@gmail.com
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Date of birth:</p>
            <p className="font-semibold text-black text-sm sm:text-base">31 March 2001</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">From:</p>
            <p className="font-semibold text-black text-sm sm:text-base">
              Dhaka, Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
     </Container>
     

  
      </>
   
  );
}

