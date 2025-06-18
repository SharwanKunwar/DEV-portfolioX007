import React from "react";
import { Cover } from './Cover'



export function CoverDemo() {
  return (
    <div>
      <h1
        className="text-2xl md:text-3xl text-gray-50 lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text ">
        <span className="text-4xl">Hi, I'm</span> <br />
        <div className="pt-2"> <Cover>Sharwan jung kunwar</Cover></div>
      </h1>
        <h3 className="text-[25px] text-white text-center"><span>AKA </span> Spider man</h3>
        <p className="text-[15px] mt-1 px-3 mb-5 text-neutral-400 text-center">Full-stack dev | Java & React | Passionate coder | Guitarist | Dreamer chasing growth & goals 🎯💻🎸</p>
    </div>
  );
}
