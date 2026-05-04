import react from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center pb-20">
            <div className="flex items-center min-h-screen justify-center w-full">
                <div className="max-sm:my-20 mx-auto max-w-7xl px-6 sm:px-10 grid gap-10 sm:grid-cols-2 sm:items-center">
                    <div className="flex flex-col justify-center gap-4 sm:max-w-xl">
                        <h1 className="text-3xl sm:text-4xl">
                            Hi There!{" "}
                            <motion.span
                                className="inline-block"
                                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                👋🏻
                            </motion.span>
                        </h1>
                        <h2 className="text-4xl sm:text-5xl leading-tight">
                            I'M <span className="text-purple-500 font-bold">KARAN BANSAL</span>
                        </h2>

                        <TypeAnimation
                            sequence={[
                                "MERN Stack Developer", 3000,
                                "Software Developer", 3000,
                                "Full Stack Engineer", 3000,
                            ]}
                            wrapper="span"
                            speed={70}
                            repeat={Infinity}
                            className="text-xl sm:text-2xl text-purple-400"
                        />
                    </div>

                    <div className="flex items-center justify-center sm:justify-end">
                        <img
                            src="/undraw_programming_65t2.svg"
                            alt="Developer at desk"
                            className="w-full max-w-[400px]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between sm:flex-row flex-col sm:px-20 px-6">
                <div className="font-serif">
                    <h1 className="text-3xl sm:text-4xl ">
                        LET ME <span className="text-purple-500"> INTRODUCE </span> MY SELF
                    </h1>
                    <p className="text-base sm:text-lg mt-4 text-justify sm:w-3/5">
                        I fell in love with programming and I have at least learnt
                        something, I think… 🤷‍♂️
                        <br /><br />
                        I am fluent in classics like <span className="text-purple-500 font-bold italic">C, C++, Python and PHP</span>.
                        <br /><br />
                        My field of Interest's are building new &nbsp;
                        <span className="text-purple-500 font-bold italic">Web Technologies and Products</span> and also in areas related to{" "}
                        <span className="text-purple-500 font-bold italic">Deep Learning and Natural Launguage Processing.</span>
                        <br /><br />
                        Whenever possible, I also apply my passion for developing products
                        with
                        Modern Javascript Library and Frameworks like 
                        <span className="text-purple-500 font-bold italic"> React.js</span>
                    </p>
                </div>
                <div>
                    <div className="mt-10 flex items-center justify-center">
                        <img
                            src="/undraw_developer-avatar_f6ac.svg"
                            alt="Developer at desk"
                            className="sm:w-[400px] w-[300px]"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center mt-20">
                <h1>FIND ME ON</h1>
                <p>Feel free to <span className="text-purple-500 font-bold">connect</span> with me</p>
                <ul className='flex gap-8 justify-center mt-4'>
                    <li>
                        <a href="https://github.com/Bansal-Karan" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={40} />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={40} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/karan-bansal-136452292" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={40} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/karan_bansal_946?igsh=dWkyaWx6MXgwMWI1" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={40} />
                        </a>
                    </li>
                </ul>
            </div>

        </section>
    );
}

export default Hero;