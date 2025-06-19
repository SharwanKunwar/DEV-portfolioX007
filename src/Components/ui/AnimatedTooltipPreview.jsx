
import React from "react";
import { AnimatedTooltip } from "../ui/Animated-tooltip";
import {
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiFramer,
  SiTailwindcss,
} from "react-icons/si";


const people = [
  {
    id: 1,
    name: "JavaScript",
    designation: "Logic",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    id: 2,
    name: "React js",
    designation: "Frontend",
    icon: <FaReact className="text-sky-400" />,
  },
  {
    id: 3,
    name: "Motion",
    designation: "Animation",
    icon: <SiFramer className="text-pink-500" />,
  },
  {
    id: 4,
    name: "Tailwindcss",
    designation: "Designing",
    icon: <SiTailwindcss className="text-blue-400" />,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-end justify-center md:mb-3 pr-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
