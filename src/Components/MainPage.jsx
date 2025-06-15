import React from 'react'

function MainPage() {
  return (
    <>
        <div id='home' className='bg-red-400 w-screen h-screen flex justify-center items-center'>
            page01 
            {/* here */}
        </div>
        <div id='about' className='bg-blue-400 w-screen h-screen flex justify-center items-center'>
            page02
        </div>
        <div id='contact' className='bg-green-400 w-screen h-screen flex justify-center items-center'>
            page03
        </div>
    </>
  )
}

export default MainPage
