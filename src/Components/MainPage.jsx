import React from 'react'

function MainPage() {
  return (
    <>
        <div id='home' className='bg-red-400 w-screen h-screen flex justify-center items-center'>
            page01
        </div>
        <div id='about' className='bg-blue-400 w-screen h-screen flex justify-center items-center'>
            {/* <div className='bg-red-400/30 backdrop-blur-3xl md:h-[115px] h-[100px] w-full'></div> */}
            page02
        </div>
        <div id='contact' className='bg-green-400 w-screen h-screen flex justify-center items-center'>
            page03
        </div>
    </>
  )
}

export default MainPage
