import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const links = [
  {
    Element: AiFillHome,
    path: '/',
    name: 'Home',
    external: false
  },
  {
    Element: FaUser,
    path: '/about',
    name: 'About',
    external: false
  },

  {
    Element: FaProjectDiagram,
    path: '/projects',
    name: 'Projects',
    external: false
  },

  {
    Element: FaFileAlt,
    path: 'public/Resume.pdf',
    name: 'Resume',
    external: true
  },


]

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full sm:px-20 px-6 bg-transparent backdrop-blur-md shadow-md justify-between flex  py-4 z-50">

      <div className=''>
        <NavLink to='/' className="text-purple-500 hover:!text-purple-500 font-bold text-4xl">Kb.</NavLink>
      </div>

      <div className="flex gap-8 sm:gap-12">
        {links.map(({ name, Element, path, external }, index) =>
          external ? (
            <a
              key={index}
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-500 transition"
            >
              <Element size={22} />
              <span className="hidden sm:inline">{name}</span>
            </a>
          ) : (
            <NavLink
              to={path}
              key={index}
              className={({ isActive }) =>
                `flex items-center gap-2 ${isActive ? 'text-purple-500' : ''}`
              }
            >
              <Element size={22} />
              <span className="hidden sm:inline">{name}</span>
            </NavLink>
          )
        )}
      </div>
    </div>
  )
}

export default Navbar
