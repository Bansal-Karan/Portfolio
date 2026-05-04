import Project from "./Project.jsx"
const projects = [
    {
        title: "Team Task Manager",
        description: "A collaborative task management system designed to streamline team workflows and improve productivity. Built using modern web technologies, it allows users to create, assign, and track tasks in real-time. Features include role-based access, task prioritization, deadline tracking, and progress monitoring. Provides an intuitive interface for efficient team collaboration, ensuring better organization, transparency, and timely project completion.",
        imageSrc: "/TaskManager.png",
        gitLink: "https://github.com/Bansal-Karan/Team_Task_Manager"
    },
    {
        title: "Driver Drowsiness Detector",
        description: "An intelligent system designed to detect driver fatigue in real-time and prevent road accidents. Built using computer vision and machine learning techniques, it monitors eye movement, blink rate, and facial features to identify signs of drowsiness. When fatigue is detected, the system triggers alerts such as alarms or notifications to wake the driver. Ensures safer driving by providing continuous monitoring, quick response, and a reliable interface suitable for real-world conditions.",
        imageSrc: "/Drowsiness_pic.png",
        gitLink: "https://github.com/Bansal-Karan/Driver_Drowsiness_Detector"
    },
    {
        title: "Disaster Management System",
        description: "A web-based platform designed to manage and respond to natural disasters efficiently. Built using modern web technologies, it enables real-time reporting of incidents, resource allocation, and communication between authorities and users. Features include location-based alerts, emergency contact integration, and data visualization for better decision-making. Ensures quick response, improved coordination, and a user-friendly interface across devices.",
        imageSrc: "/Disaster_pic.png",
        gitLink: "https://github.com/Bansal-Karan/disaster-management"
    },
    {
        title: "Amazon Clone",
        description: "A fully functional e-commerce platform built with React.js and Tailwind CSS. Features include user authentication, product browsing and shopping cart management. Provides a seamless shopping experience with real-time updates, order history tracking, and responsive design for both desktop and mobile users.",
        imageSrc: "/Amazon_pic.jpg",
        gitLink: "https://github.com/Bansal-Karan/Amazon-Clone"
    },
    {
        title: "Bag Shop",
        description: "An online shopping platform built with Node.js, Express, EJS, and MongoDB. Includes secure user and admin authentication, product listings with detailed descriptions, and a cart feature for managing purchases. Admins can add, update, or remove products, while users can browse and buy bags seamlessly. Provides a smooth shopping experience with organized product management and responsive design.",
        imageSrc: "/BagShop.jpeg",
        gitLink: "https://github.com/Bansal-Karan/Bag-Shop"
    },
    {
        title: "Social Media Backend",
        description: "A RESTful API backend built with Node.js, Express, and MongoDB for a social media platform. Supports user authentication, profile management, post creation, likes, comments, and follow/unfollow functionality. Includes secure JWT-based authentication, structured data modeling, and scalable endpoints to handle user interactions efficiently.",
        imageSrc: "/social_media_img.jpeg",
        gitLink: "https://github.com/Bansal-Karan/social_media_backend"
    }
]
const Projects = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center sm:mt-30 mt-25 gap-10 pb-20'>
            <div className='flex flex-col gap-4 text-center w-full'>
                <h1 className="text-3xl sm:text-4xl font-bold">My Recent <span className='text-purple-500'>Work</span></h1>
                <p className="text-base sm:text-lg font-semibold text-slate-200">Here are few projects i've worked on recently.</p>
            </div>

            <div>
                <div className='grid  lg:grid-cols-3 sm:grid-cols-2 gap-10 sm:px-20 px-10'>
                    {projects.map((project, index) => <Project key={index} {...project} />)}
                </div>
            </div>
        </div>
    )
}

export default Projects
