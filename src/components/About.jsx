import React from 'react'
import { FaRegHandPointRight } from "react-icons/fa";
import {
  SiCplusplus, SiJavascript, SiNodedotjs, SiReact,
  SiMongodb, SiGit, SiFirebase,
  SiPostgresql, SiPython,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import GitHubCalendar from "react-github-calendar";

const skills = [
  SiCplusplus,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiGit,
  SiFirebase,
  SiPostgresql,
  SiPython,
  SiTailwindcss
]

const tools = [
  VscVscode,
  SiPostman,
  SiVercel,
  SiFigma
]

const purpleTheme = {
  light: [
    "#d1cbcb", // empty
    "#8B5CF6", // level1
    "#7C3AED", // level2
    "#6D28D9", // level3
    "#5B21B6", // level4
  ],
  dark: [
    "#d1cbcb",
    "#8B5CF6",
    "#7C3AED",
    "#6D28D9",
    "#5B21B6",
  ],
};

const About = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center pb-20'>
      <div className='flex items-center min-h-screen justify-center w-full'>
        <div className='max-sm:my-40 px-20 grid sm:grid-cols-2 gap-20 md:gap-30 lg:gap-60'>
          <div className='flex flex-col justify-center gap-4'>
            <h1>Know Who <span className='text-purple-500 font-bold'>I'M </span></h1>
            <p className="text-lg">Hi Everyone, I am <span className='text-purple-500 font-bold'>Karan Bansal</span> from <span className='text-purple-500 font-bold'>Samana, Punjab. </span>
              I am currently persuing bachlors of technology in <span className='text-purple-500 font-bold'>Computer Science Engineering</span> from Chandigarh Engineering College Landran, Mohali.
            </p>
            <br />
            Apart from coding, some other activities that I love to do!
            <p className="flex items-center gap-2">
              <FaRegHandPointRight className="text-2xl" />
              Playing Games
            </p>
            <p className="flex items-center gap-2">
              <FaRegHandPointRight className="text-2xl" />
              Writing Tech Blogs
            </p>
            <p className="flex items-center gap-2">
              <FaRegHandPointRight className="text-2xl" />
              Travelling
            </p>
          </div>
          <div className='flex items-center justify-end'>
            <img
              src="/about.aee0f771fbfc1e7b8fa8.png"
              alt="Developer at desk"
              className="w-[400px]"
            />
          </div>
        </div>
      </div>

      <div>
        <div className='justify-center text-center'>
          <h1>Porfessional <span className='text-purple-500'>Skillset</span></h1>
          <div>
            <div className="grid lg:px-40 sm:px-20 px-10 my-20 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 sm:grid-cols-2 gap-6 text-white text-5xl">
              {skills.map((Skill, index) => (<div key={index} className="flex justify-center items-center border py-10 rounded-md shadow-md hover:shadow-purple-500/50 transition duration-300">
                <Skill className="text-5xl text-white" />
              </div>))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='justify-center text-center'>
          <h1><span className='text-purple-500'>Tools</span> I Use</h1>
          <div>
            <div className="grid lg:px-40 sm:px-20 px-10 my-20 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 text-white text-5xl">
              {tools.map((Tool, index) => (<div key={index} className="flex justify-center items-center border py-10 rounded-md shadow-md hover:shadow-purple-500/50 transition duration-300">
                <Tool className="text-5xl text-white" />
              </div>))}
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col px-5'>
        <div className="text-center my-20">
          <h1>
            Days I <span className="text-purple-500">Code</span>
          </h1>
          <div className="flex justify-center mt-10 px-10">
            <GitHubCalendar
              username="Bansal-Karan"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              theme={purpleTheme}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
