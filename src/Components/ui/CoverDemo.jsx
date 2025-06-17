import React from "react";
import { Cover } from './Cover'



export function CoverDemo() {
  return (
    <div>
      <h1
        className="text-3xl md:text-3xl text-gray-400 lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text ">
        <span>Hi, I'm</span> <br />
        <div className="pt-2"> <Cover>Sharwan jung kunwar</Cover></div>
        <h3 className="text-[20px] mt-3"><span>AKA </span> Spider man</h3>
        <p className="text-[13px] mt-5 px-3 mb-5 text-center">Full-stack dev | Java & React | Passionate coder | Guitarist | Dreamer chasing growth & goals 🎯💻🎸</p>
      </h1>
    </div>
  );
}
