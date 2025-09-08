import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="w-full bg-black backdrop-blur-md shadow-md flex max-sm:flex-col justify-between py-4 sm:px-20 px-6 text-center z-50">
            <div>
                <h3>Designed and Developed by Karan Bansal</h3>
            </div>
            <div>
                <h3>Copyright © 2025 KB</h3>
            </div>
            <div>
                <ul className='flex gap-8 max-sm:my-5 justify-center'>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
