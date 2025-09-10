import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Project = ({ title, description, imageSrc, gitLink }) => {
    return (
        <div>
            <div className="flex flex-col items-center border border-slate-700/40 h-full rounded-xl z-50 shadow-md hover:shadow-purple-500 transition duration-300">
                <div className='h-50 rounded-t-xl w-full'>
                    <img className='w-full rounded-t-xl h-full object-cover' src={imageSrc} alt="" />
                </div>
                <div className="flex-1 rounded-b-xl">
                    <div className="flex justify-between flex-col h-full w-full py-4 gap-5 bg-gradient-to-br px-5 rounded-b-xl from-slate-800/45 to-black/30">
                        <div className='text-center   gap-5 flex flex-col'>
                            <span className='font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-br from-slate-300 '>{title}</span>
                            <p className='text-slate-300 font-semibold'>{description}</p>
                        </div>

                        <div className='flex justify-center '>
                            <a href={gitLink} className='flex justify-center items-center gap-2 hover:!text-purple-500 cursor-pointer'><BsGithub />GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
