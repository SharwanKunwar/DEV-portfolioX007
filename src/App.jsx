import './App.css'
import Navbar from './Components/NAVBAR/Navbar'
import Home from './Components/Home'
import LocomotiveScroll from 'locomotive-scroll'
import { useEffect, useRef } from 'react'


function App() {

  const scrollRef = useRef(null);

  useEffect(()=>{
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone:{
        smooth: false
      }
    });
    return()=>{
      if(scroll) scroll.destroy();
    }
  },[]);


  return (
    <>
    <Navbar/>
    <div className='bg-red-400/30 drop-shadow-2xl md:h-[115px] h-[100px] w-full'></div>

    <div id='main' ref={scrollRef} data-scroll-container className='relative '>
      <Home/>
    <Home/>
    </div>
    
    </>
  )
}

export default App
