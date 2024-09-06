
import React from "react";
import hotelMoon from '../assets/hotel_moon.png'
import tic_tac_toe_img from '../assets/tic_tac_toe_img.png'
import Footer from './Footer'

const ProjectCard = ({image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm bg-gray-900 border rounded-lg shadow sm:max-w-sm md:max-w-sm border-neutral-100 dark:bg-gray-800 dark:border-gray-700">
            {title=='Hotel Moon' && <a href="#">
                <img className="object-cover w-full h-auto rounded-t-lg " src={image} alt="" />
            </a>}
            {title=='Tic-Tac-Toe Game with AI' && <a href="#">
                <img className="object-cover w-full h-auto rounded-t-lg " src={image} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-transparent text-white sm:text-xl md:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="text-sm font-normal text-gray-300 sm:text-base md:text-lg dark:text-gray-400">{description}</p>
            </div>
            <div className='flex justify-between m-2 sm:m-4 lg:m-6'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="p-1 text-red-300 duration-300 border border-gray-200 rounded-lg shadow sm:p-2 lg:p-3 hover:text-green-500">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap items-center justify-center p-12 m-12 gap-7">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Hotel Moon',
        description: 'Hotel Moon is a fully responsive hotel booking website that offers an intuitive user interface for browsing and reserving rooms. Built with HTML and CSS, the project showcases elegant layouts and seamless navigation to enhance the user experience. The website is designed to be adaptable across various screen sizes, ensuring accessibility and ease of use on both desktop and mobile devices.',
        image: hotelMoon,
        git:'https://github.com/nigamrai666/hotel_moon',
        technologies:['HTML' , 'CSS']
    },
    {
        title:'Tic-Tac-Toe Game with AI',
        description:'Developed an interactive Tic-Tac-Toe game with AI opponent using HTML, CSS, and JavaScript, implementing the Minimax algorithm for optimal gameplay.Designed a user-friendly interface and responsive layout to ensure smooth gameplay across various devices and screen sizes.',
        image: tic_tac_toe_img,
        git:'https://github.com/nigamrai666/Tic-Tac-Toe-AI',
        technologies:[ 'HTML', 'CSS', 'JavaScript']
    }
]

export default Projects