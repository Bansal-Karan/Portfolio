import Project from "./Project.jsx"
const projects = [
    {
        title: "Amazon Clone",
        description: "A fully functional e-commerce platform built with React.js and Tailwind CSS. Features include user authentication, product browsing and shopping cart management. Provides a seamless shopping experience with real-time updates, order history tracking, and responsive design for both desktop and mobile users.",
        imageSrc: "public/78eef5203160005.Y3JvcCwyMzEwLDE4MDcsMjUxLDE4OA.jpg",
        gitLink: "https://github.com/Bansal-Karan/Amazon-Clone"
    },
    {
        title: "Bag Shop",
        description: "An online shopping platform built with Node.js, Express, EJS, and MongoDB. Includes secure user and admin authentication, product listings with detailed descriptions, and a cart feature for managing purchases. Admins can add, update, or remove products, while users can browse and buy bags seamlessly. Provides a smooth shopping experience with organized product management and responsive design.",
        imageSrc: "public/download.jpeg",
        gitLink: "https://github.com/Bansal-Karan/Bag-Shop"
    },
    {
        title: "Social Media Backend",
        description: "A RESTful API backend built with Node.js, Express, and MongoDB for a social media platform. Supports user authentication, profile management, post creation, likes, comments, and follow/unfollow functionality. Includes secure JWT-based authentication, structured data modeling, and scalable endpoints to handle user interactions efficiently.",
        imageSrc: "public/social_media_img.jpeg",
        gitLink: "https://github.com/Bansal-Karan/social_media_backend"
    }
]
const Projects = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center sm:mt-30 mt-25 gap-10 pb-20'>
            <div className='flex flex-col gap-4 text-center w-full'>
                <h1 className="font-bold">My Recent <span className='text-purple-500'>Work</span></h1>
                <p className="text-lg font-semibold text-slate-200">Here are few projects i've worked on recently.</p>
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
