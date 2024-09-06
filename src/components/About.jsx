import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='object-contain w-16 h-16'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='w-full h-full py-12 mt-8 overflow-x-hidden text-white bg-black sm:flex sm:justify-around about' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='px-2 sm:px-16'>
            <h2 className='mt-2 text-4xl font-extrabold sm:text-5xl'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Bhuwan Bhashkar, a 2025 graduate🎓, with a passion for designing dynamic user interfaces and developing scalable Java applications. As an experienced <a className='text-green-300 duration-300 hover:text-green-500' href='https://www.linkedin.com/in/nigamrai666/' target='_blank'>Frontend Developer and Java Developer</a>, I specialize in System Design🚀.
              <br />
              👨‍💻 Hi, I'm Bhuwan Bhashkar, a 2025 graduate🎓, with a passion for designing dynamic user interfaces and developing scalable Java applications. As an experienced Frontend Developer and Java Developer, I specialize in System Design🚀. My technical skills include:<br/>
              Languages: C, Java, Python, SQL, JavaScript<br/>
              Skills: ReactJS, TailwindCSS, HTML/CSS, Problem Solving<br/>

              ✍️ Beyond coding, I love to engage in problem-solving on LeetCode, where I delve into the intricacies of data structures and algorithms. On a different note, I'm also passionate about traveling✈️. Exploring new places, cultures, and experiences fuels my creativity and gives me a fresh perspective on life.</p>




            <ButtonLink
              url='https://drive.google.com/file/d/1MPMcdwA4ANw0cC1NxRWSiz4QufiIJcgD/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='flex flex-wrap justify-center mt-20 gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;