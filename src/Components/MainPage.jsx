import React from 'react'

function MainPage() {

  const style01 = {
    "backgroundImage" : "url(img/backgroundGrid.png)" 
  }
  return (
    <>
        <div id='home' style={style01} className='w-screen h-screen flex justify-center items-center'>
            page01 
            {/* here */}
            <div className='bg-red-400 w-[300px] h-[300px]'></div>
        </div>
        <div id='about' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>
            page02
        </div>
        <div id='contact' className='bg-green-400/30 w-screen h-screen flex justify-center items-center'>
            page03
        </div>
    </>
  )
}

export default MainPage
