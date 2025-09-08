import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <div className="navbar-start pt-12 ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn text-black z-50 btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             <li><Link to='/portfolio' className="text-sm text-thirdcolor47 md:text-xl ">Portfolio</Link></li>
            <li><Link to='/blog' className="text-sm text-thirdcolor47 md:text-xl ">Blog</Link></li>
            </ul>
          </div>
          <Link to="/" className="font-semibold text-[#474747]  text-3xl md:text-5xl">Ra<span className="text-primary1">m</span>esh</Link>
        </div>
      
              <div className="navbar-end space-x-5">
      
            <div className="navbar-center  hidden  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/portfolio" className="text-sm px-4 rounded-xl py-2 md:px-7 text-[#181818] md:py-4 hover:bg-primary1 hover:text-white md:text-xl">Portfolio</Link></li>
            <li><Link to="/blog" className="text-sm px-4 rounded-xl py-2 md:px-7 md:py-4 hover:bg-primary1 text-[#181818]  hover:text-white md:text-xl">Blog</Link></li>
          </ul> 
          
        </div>
         <a href="https://www.fiverr.com/?force_buying_nav" className="bg-primary1 hover:bg-blue-700 rounded-xl text-white text-sm md:text-xl  md:rounded-2xl  px-4 mr-2 md:mr-0 py-2 md:px-7 md:py-4">Hire Me</a>
        </div>
    </div>
  )
}
