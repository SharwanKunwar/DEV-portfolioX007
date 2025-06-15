import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import {motion} from 'motion/react'

function Navbar({ scroll }) {
  const MenuList = ['Home', 'About', 'Blogs', 'Projects', 'Contact'];
  const [activeSection, setActiveSection] = useState('home');

  // Scroll to section handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(`#${targetId}`);
    if (!target) return;
    if (scroll) {
      scroll.scrollTo(target); // desktop
    } else {
      target.scrollIntoView({ behavior: 'smooth' }); // phone
    }
  };

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% of the section should be visible
      }
    );

    // Observe each section
    MenuList.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute bg-gray-50/30 backdrop-blur-2xl w-screen md:h-[115px] h-[90px] flex justify-center items-center z-50">
      <nav className="md:bg-white/30 md:backdrop-blur-2xl md:w-[90%] w-full md:h-[60%] h-[90%] md:rounded-full flex justify-center items-center gap-5 md:border-1 md:border-white/70">
        {/* Logo */}
        <div className="md:w-[15%]  w-[50%] h-full flex justify-start items-center pl-4">
          <a href="/">
          <motion.img 
          initial={{x: -100, opacity: 0,scale:0.8,rotate:50}}
          animate={{
            x: 0,
            scale:1,
            opacity: 1,
            rotate:720
          }}
          whileHover={{
            scale:1.05,
            rotate:360,
          }}
          
          className=" w-[50px] " src="icons/logo01.png" alt="logo" />
          </a>
          <motion.h1 
          initial={{opacity:1,x:0,rotate:0}}
          animate={{opacity:1,x:[0,200,0],rotate:[0,60,60,0]}}
          transition={{delay:0.1}}
          className="text-2xl pl-1">EV</motion.h1>
        </div>

        {/* Menu */}
        <div className="w-full h-full flex justify-end items-center ">
          <ul className="md:flex justify-start items-center gap-5 hidden mr-10">
            {MenuList.map((item, index) => (
              <li className='py-3 px-2' key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className={`cursor-pointer py-2 px-5 ${
                    activeSection === item.toLowerCase()
                      ? 'text-white border-b-1 border-black/30 transition-all duration-300 ease-in-out '
                      : 'text-gray-500'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="md:w-[20%] w-[50%] h-full flex justify-center items-center gap-5">
          <section className="w-[20%] h-full md:flex md:justify-center md:items-center gap-5 hidden pr-10">
            <a href="#facebook" aria-label="Facebook">
              <FaFacebook size={23} color="#1877F2" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <FaInstagram size={23} color="#E1306C" />
            </a>
            <a href="#github" aria-label="GitHub">
              <FaGithub size={23} color="#333" />
            </a>
          </section>
          <section className="md:hidden w-full h-full flex justify-center items-center">
            <Menu size={40} />
          </section>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
