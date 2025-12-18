
import React from 'react'
import profile from '../assests/profile.jpg'

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  function clickHandler(){
    scrollToSection('projects');
  }
  function navHandler(){
    scrollToSection('contact');
  }


  return (
    <section id="home" className="bg-gradient-to-r from-blue-100 via-white to-blue-400">
      <div className='max-w-[1160px] w-11/12 mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between min-h-screen transition-all duration-300'>

        {/* basic details */}
        <div className='w-full md:w-1/2 space-y-4 text-center md:text-left mt-8 md:mt-0'>
          <p className='text-[10px] bg-slate-300 font-bold w-fit mx-auto md:mx-0 rounded-md py-1 px-2 text-black'>
            Available for work
          </p>
          
          <div>
            <h3 className='text-3xl md:text-4xl font-bold text-slate-800'>
              Hi, I am Harshit Pateriya
            </h3>
            <h3 className='text-lg md:text-xl text-slate-600'>
              Full Stack Developer
            </h3>
          </div>

          <p className='text-sm md:text-base text-slate-600 leading-6 max-w-md mx-auto md:mx-0'>
          I’m a Java Full Stack Developer with a strong focus on building secure, scalable, and high-performance web applications. I have a solid foundation in both front-end and back-end technologies, specializing in Java, Spring Boot, RESTful APIs, Hibernate/JPA, and modern front-end technologies such as HTML, CSS, JavaScript, Tailwind CSS, React, and MongoDB. <br /><br />
          Along with application development, I actively work with DevSecOps tools to automate build, test, security, and deployment processes. My experience includes Git and GitHub for version control, Maven/Gradle for build automation, Jenkins for CI/CD pipelines, Docker for containerization, Kubernetes for container orchestration, and SonarQube for code quality and security analysis. I also work with Linux, cloud platforms, and integrate security best practices throughout the development lifecycle.
          </p>

          {/* buttons */}
          <div className='flex gap-x-3 justify-center md:justify-start mt-5'>
            <button 
              onClick={clickHandler}
              className='bg-black text-white py-2 px-4 rounded-md hover:bg-zinc-900 transition cursor-pointer'
            >
              View my work
            </button>
            <button 
              onClick={navHandler}
              className='bg-white text-black py-2 px-4 rounded-md hover:bg-orange-100 border-2 border-slate-200 transition cursor-pointer'
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* profile image */}
        <div className='w-full md:w-1/3 flex justify-center mb-8 md:mb-0'>
          <div className='rounded-full w-60 h-60 md:w-72 md:h-72 bg-gray-200 relative hover:shadow-lg hover:shadow-slate-600 hover:scale-105 transition-transform duration-300'>
            <div className='rounded-full w-52 h-52 md:w-64 md:h-64 absolute left-4 top-4 bg-white'></div>
            <img 
              src={profile} 
              alt="Harshit Pateriya profile" 
              className='rounded-full w-48 h-48 md:w-60 md:h-60 absolute left-6 top-6 object-cover'
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home