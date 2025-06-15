import React from 'react'

function MainPage() {

  const style01 = {
    "backgroundImage" : "url(img/backgroundGrid.png)" 
  }
  return (
    <>
        <section id='home' style={style01} className='w-screen h-screen flex justify-center items-center'>
            Home page
            {/* here */}
            {/* <div className='bg-red-400 w-[300px] h-[300px]'></div> */}
        </section>
        <section id='about' className='bg-blue-300/30 w-screen h-screen flex justify-center items-center'>
            About page
        </section>
        <section id='blogs' className='bg-blue-200/30 w-screen h-screen flex justify-center items-center'>Blogs page</section>
        <section id='projects' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>Projects page</section>
        <section id='contact' className='bg-green-400/30 w-screen h-screen flex justify-center items-center'>
            Contact page
        </section>
    </>
  )
}

export default MainPage
