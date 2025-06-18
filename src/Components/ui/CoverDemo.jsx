import React from "react";
import { Cover } from './Cover'
import {motion} from 'motion/react';



export function CoverDemo() {
  return (
    <div>
      <h1
        className="text-[1.7rem] md:text-3xl text-gray-50 lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text ">
        <motion.span 
        initial={{opacity: 0,scale:0,filter:"blur(10px)",y: -100,}}
        animate={{opacity: 1,scale:1,filter:"blur(0)",y: 0,}}
        transition={{duration: 0.5,delay: 0.2,ease:"easeInOut"}}
        className="text-4xl">Hi, I'm</motion.span> <br />
        <motion.div 
        initial={{opacity: 0,scale:1,filter:"blur(10px)",y: -10,}}
        animate={{opacity: 1,scale:1,filter:"blur(0)",y: 5,}}
        transition={{duration: 0.7,delay: 0.2,ease:"easeInOut"}}
        className="pt-2"> <Cover>Sharwan jung kunwar</Cover></motion.div>
      </h1>
        <motion.h3 
        initial={{opacity: 0,scale:0.98,filter:"blur(10px)",y: -10,}}
        animate={{opacity: 1,scale:1,filter:"blur(0)",y: 0,}}
        transition={{duration: 0.8,delay: 0.2,ease:"easeInOut"}}
        className="text-[25px] text-white text-center"><span>AKA </span> Spider man</motion.h3>
        <motion.p 
        initial={{opacity: 0,scale:1,filter:"blur(10px)",y: -9,}}
        animate={{opacity: 1,scale:1,filter:"blur(0)",y: 0,}}
        transition={{duration: 0.9,delay: 0.2,ease:"easeInOut"}}
        className="text-[15px] mt-1 px-3 mb-5 text-neutral-400 text-center">Full-stack dev | Java & React | Passionate coder | Guitarist | Dreamer chasing growth & goals 🎯💻🎸</motion.p>
    </div>
  );
}
