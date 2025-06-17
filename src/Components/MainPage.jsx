import React from 'react'
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

import { CoverDemo } from './ui/CoverDemo'
import './MainPage.css';

function MainPage() {
  return (
    <>
      <section 
        id="home" 
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "9px 9px",
          backgroundRepeat: "repeat",
        }}
        className="w-screen h-screen flex md:justify-center md:mt-10 mt-30 items-center flex-col"
      >
        {/* top box */}
        <div className='w-full md:h-6/12 '>
          <CoverDemo/>
        </div>
        {/*  bottom box */}
        <div className=' w-full md:h-6/7 h-6/20 flex justify-start items-center flex-col gap-5  p-5'>
        <button className='btn-grad md:w-[400px] w-[350px]'>Let's connect</button>
        <button className='btn-grad w-[250px]'>View My Work</button>
        <section className=' w-full mt-10 flex justify-center gap-10'>
          <a className=' rounded-full hover:bg-white' href="#facebook"><FaFacebook size={25} color="#1877F2" /></a>
          <a className=' rounded-lg hover:bg-white' href="#instagram"><FaInstagram size={25} color="#E1306C" /></a>
          <a className=' rounded-full hover:bg-white' href="https://github.com/SharwanKunwar"><FaGithub size={25} color="#333" /></a>
        </section>
        </div>

        

      </section>

      <section id='about' className='bg-blue-300/30 w-screen h-screen flex justify-center items-center'>About page</section>
      <section id='blogs' className='bg-blue-200/30 w-screen h-screen flex justify-center items-center'>Blogs page</section>
      <section id='projects' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>Projects page</section>
      <section id='contact' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>Contact page</section>
      <section id='footer' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>Footer page</section>
    </>
  )
}

export default MainPage
