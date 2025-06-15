import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import {motion} from 'motion/react'
import { div } from 'motion/react-client';

function Navbar({ scroll }) {
    const [isOpen, setIsOpen] = useState(false);
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
          animate={{opacity:1,x:[0,20,0],rotate:[0,30,30,0]}}
          transition={{delay:0.1}}
          className="text-2xl pl-1 font-bold">EV</motion.h1>
        </div>

        {/* Menu */}
        <div className="w-full h-full flex justify-end items-center ">
          <ul className="md:flex justify-start items-center gap-5 hidden mr-10">
            {MenuList.map((item, index) => (
              <motion.li 
              initial={{y:-10,opacity:0}}
              animate={{y:0,opacity:1}}
              className='py-3 px-2' key={index}>
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
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="md:w-[20%] w-[50%] h-full flex justify-center items-center gap-5">
          <section className="w-[20%] h-full md:flex md:justify-center md:items-center gap-5 hidden pr-10">
            <motion.a 
            initial={{x:300}}
            animate={{x:0}}
            transition={{delay:0.2}}
            href="#facebook" aria-label="Facebook">
              <FaFacebook size={23} color="#1877F2" />
            </motion.a>
            <motion.a 
            initial={{x:300}}
            animate={{x:0}}
            transition={{delay:0.3}}
            href="#instagram" aria-label="Instagram">
              <FaInstagram size={23} color="#E1306C" />
            </motion.a>
            <motion.a 
            initial={{x:300}}
            animate={{x:0}}
            transition={{delay:0.4}}
            href="#github" aria-label="GitHub">
              <FaGithub size={23} color="#333" />
            </motion.a>
          </section>
          <section className="md:hidden w-full h-full flex justify-center items-center">
            <button onClick={(e)=>setIsOpen(!isOpen)}><Menu size={40} /></button>
          </section>
        </div>
      </nav>

            {/* phone nav */}
            {isOpen? (
                <div className='bg-black/30 backdrop-blur-2xl absolute top-0 left-0 w-screen h-screen flex justify-center items-center'>
                    <div className='bg-white w-[90%] h-[73%] rounded-lg shadow-lg flex gap-3 flex-col'>
                        <div className=' w-full h-[15%] flex justify-between items-center px-5'>
                            <h1 className='text-2xl'>Menu</h1>
                            <button onClick={(e)=>setIsOpen(!isOpen)} className='text-2xl'><X size={30}/></button>
                        </div>
                        <div className='bg-yellow-400 w-full h-[70%] '>middle</div>
                        <div className='bg-yellow-400 w-full h-[15%] '>bottom</div>
                    </div>
                </div>
            ): ''}




    </div>
  );
}

export default Navbar;
