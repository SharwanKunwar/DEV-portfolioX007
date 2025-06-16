import React from 'react'
import {CoverDemo} from './ui/CoverDemo'


function MainPage() {

  const style01 = {
    "backgroundImage" : "url(img/backgroundGrid.png)" 
  }
  return (
    <>

      <section id="home" className="w-screen h-screen flex justify-center items-center bg-[url('/img/backgroundGrid.png')] bg-cover bg-center">
        <CoverDemo />
      </section>






        <section id='about' className='bg-blue-300/30 w-screen h-screen flex justify-center items-center'>About page</section>
        <section id='blogs' className='bg-blue-200/30 w-screen h-screen flex justify-center items-center'>Blogs page</section>
        <section id='projects' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>Projects page</section>
        <section id='contact' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>Contact page</section>
        <section id='contact' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>fotter page</section>
        
    </>
  )
}

export default MainPage
