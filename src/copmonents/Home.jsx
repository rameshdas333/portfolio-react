import React from "react";
import Container from "./Container";
import ImgBackground from "../assets/ImgBackground.png"
import RameshTmg from "../assets/Ramesh.png"
import Developer from "../assets/Developer.png"
import { GoDownload } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";

import Navbar from "./Navbar";
import Skills from "./Skills";

export default function Home() {
  return (
 
  <div>
        <div className="bg-[#FFF8F3]  relative">
          
        <Container>


     <img className="absolute h-[250px] md:h-[600px] left-0 top-36 pl-2 md:pl-5 md:top-10" src={Developer} alt="" />
 
     {/* Navbar */}

  <Navbar/>

      

{/* =================================== */}

{/* Hi I am section  */}
  <div className="flex flex-col lg:flex-row items-center gap-2 pl-5 md:pl-0">

  <div className=" md:pt-[200px]  pb-80 md:pb-20 pt-10">
      <div className="border-hidden relative  md:border-dashed border-2  border-[#9747FF] p-2 md:p-5">
        {/* bobble animation  */}
             <span class="absolute right-4 md:-right-5 md:-top-5 flex items-center justify-center size-10">
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex size-6 rounded-full bg-sky-500"></span>
</span>
        {/*  */}
        <h2 className="pb-2  font-semibold text-4xl text-[#474747]  w-[140px]">Hi, I  am</h2>
        <h1 className="overflow-hidden pb-3 font-bold text-[#181818] w-auto md:w-[498px] text-start text-[36px] md:text-[70px] animate-bounce text-3xl  ">Ramesh Das</h1>
         <p className="pb-5 text-base w-[300px] text-[#757575] md:w-[520px] text-start">Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
         <div className="flex items-center gap-2">
            <a download="Ramesh_Das_CV.pdf" href="/cv.pdf" className="bg-primary1 hover:bg-blue-700 flex items-center gap-1 rounded-xl text-white text-sm md:text-xl  md:rounded-xl px-4 py-2 md:px-7 md:py-[16px]"><GoDownload /> Download CV</a>
            <a href=" https://wa.me/8801705032008" className="flex items-center gap-1 border-2 hover:bg-primary1 hover:text-white  border-primary1 rounded-xl text-primary1 text-sm md:text-xl  md:rounded-xl px-4 py-2 md:px-7 md:py-[16px]"> <IoCallOutline />Contact</a>
         </div>
    </div>
  </div>
  <div className=" md:pt-[205px]">
      <div className="">
      <img className="absolute h-[200px]  md:h-[400px] right-5 md:-right-0 bottom-0" src={ImgBackground} alt="" />
      <img className="absolute h-[300px] md:h-[550px] right-7 md:right-16 bottom-0" src={RameshTmg} alt="" />
    </div>
  </div>
  </div>
 
{/* ============== About section =========== */}
         
        </Container>

         
    </div>

   
    <Skills/>
  </div>

 

  );
}