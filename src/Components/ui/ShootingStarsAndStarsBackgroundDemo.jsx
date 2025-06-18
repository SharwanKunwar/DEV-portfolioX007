"use client";
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './ShootingStarsAndStarsBackgroundDemo.css';
import { ShootingStars } from "@/Components/ui/shooting-stars";
import { StarsBackground } from "@/Components/ui/stars-background";
import { CoverDemo } from "./CoverDemo";
import {motion} from 'motion/react';



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
              <section className='flex md:gap-5 md:flex-row flex-col gap-5 md:mt-1 mt-10'>
                <a href="https://www.facebook.com/sravana.kumvara">
                  <motion.button 
                initial={{opacity:0,scale:0.98,filter:"blur(10px)",x:-500,}}
                animate={{opacity:1,scale:1,filter:"blur(0px)",x:0,}}
                transition={{delay: 0.2,type:"tween"}}
                className='btn-grad md:w-[200px] w-[300px]'>Let's connect</motion.button>
                </a>
              <a href="https://github.com/SharwanKunwar">
                <motion.button 
              initial={{opacity:0,scale:0.98,filter:"blur(10px)",x:500,}}
                animate={{opacity:1,scale:1,filter:"blur(0px)",x:0,}}
                transition={{delay: 0.2,type:"tween"}}
              className='btn-grad md:w-[200px] w-[300px]'>View My Work</motion.button>
              </a>
              </section>
              <motion.section 
              initial={{opacity:0,filter:"blur(10px)",scale:0.98}}
              animate={{opacity:1,filter:"blur(0px)",scale:1}}
              transition={{delay:0.5}}
              className=' w-full mt-5 flex justify-center gap-7'>
                <a className=' rounded-full hover:bg-white' href="#facebook"><FaFacebook size={25} color="#1877F2" /></a>
                <a className=' rounded-lg hover:bg-white' href="#instagram"><FaInstagram size={25} color="#E1306C" /></a>
                <a className=' rounded-full hover:bg-white' href="https://github.com/SharwanKunwar"><FaGithub size={25} color="#333" /></a>
              </motion.section>
              </div>
                <ShootingStars />
            <StarsBackground />  
            
    </>
  );
}
