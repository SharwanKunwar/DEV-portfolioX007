import './App.css'
import MainPage from './Components/MainPage';
import Navbar from './Components/NAVBAR/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from 'react';

function App() {
  const scrollRef = useRef(null);
  const [scrollInstance, setScrollInstance] = useState(null); 

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: {
        smooth: false,
      },
    });

  // ✅ Force scroll to top on first load
  scroll.scrollTo(0, { duration: 0, disableLerp: true });


  setScrollInstance(scroll); // ✅ save the instance
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <Navbar scroll={scrollInstance} />
      <div className="bg-[#fff]/30 md:h-[100px] h-[0px] w-full"></div>
      <div id="main" ref={scrollRef} data-scroll-container className="relative">
        <MainPage />
      </div>
    </>
  );
}

export default App;
