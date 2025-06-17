import React from "react";
import { Cover } from './Cover'



export function CoverDemo() {
  return (
    <div>
      <h1
        className="text-3xl md:text-3xl text-gray-400 lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text ">
        <span>Hi, I'm</span> <br />
        <span>Sharwan Jung Kunwar</span>
        <div className="pt-5"> <span>AKA </span><Cover>SPIDER MAN</Cover></div>
        <p className="text-[13px] mt-7 px-3 text-center">Full-stack dev | Java & React | Passionate coder | Guitarist | Dreamer chasing growth & goals 🎯💻🎸</p>
      </h1>
    </div>
  );
}
