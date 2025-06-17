"use client";
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './ShootingStarsAndStarsBackgroundDemo.css';
import { ShootingStars } from "@/Components/ui/shooting-stars";
import { StarsBackground } from "@/Components/ui/stars-background";
import { CoverDemo } from "./CoverDemo";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <>
    <div
      className="md:h-6/9 rounded-md flex flex-col items-center md:justify-start justify-center relative w-full  md:mt-10 mt-20">
      {/* top box */}
              <div className='w-full md:h-full'>
                <CoverDemo/>
              </div>
            
      
    </div>
    {/*  bottom box */}
              <div className=' w-full md:h-6/7 h-6/20 flex justify-start items-center flex-col gap-5 py-3 z-49'>
              <button className='btn-grad md:w-[300px] w-[300px]'>Let's connect</button>
              <button className='btn-grad w-[200px]'>View My Work</button>
              <section className=' w-full mt-10 flex justify-center gap-10'>
                <a className=' rounded-full hover:bg-white' href="#facebook"><FaFacebook size={25} color="#1877F2" /></a>
                <a className=' rounded-lg hover:bg-white' href="#instagram"><FaInstagram size={25} color="#E1306C" /></a>
                <a className=' rounded-full hover:bg-white' href="https://github.com/SharwanKunwar"><FaGithub size={25} color="#333" /></a>
              </section>
              </div>
                <ShootingStars />
            <StarsBackground />  
            
    </>
  );
}
