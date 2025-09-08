import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full sm:px-20 px-6 bg-transparent backdrop-blur-md shadow-md justify-between flex  py-4 z-50">

      <div className=''>
        <NavLink to='/' className="text-purple-500 hover:!text-purple-500 font-bold text-4xl">Kb.</NavLink>
      </div>

      <div className='flex gap-8  sm:gap-12 '>
        <NavLink to='/' className="flex items-center gap-2">
          <AiFillHome size={22} /> <span className='hidden sm:inline'>Home</span>
        </NavLink>
        <NavLink to='/about' className="flex items-center gap-2">
          <FaUser size={22} /> <span className='hidden sm:inline'>About</span>
        </NavLink>
        <NavLink className="flex items-center gap-2">
          <FaProjectDiagram size={22} /><span className='hidden sm:inline'>Projects</span>
        </NavLink>
        <NavLink className="flex items-center gap-2">
          <FaFileAlt size={22} /><span className='hidden sm:inline'>Resume</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
