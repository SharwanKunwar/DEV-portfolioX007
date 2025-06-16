import { useEffect, useState } from 'react';
import { LayoutDashboard, Menu, X } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import {motion} from 'motion/react'

function Navbar({ scroll }) {
  const [isOpen, setIsOpen] = useState(false);
  const MenuList = ['Home', 'About', 'Blogs', 'Projects', 'Contact'];
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(`#${targetId}`);
    if (!target) return;

    const isDesktop = window.innerWidth > 768;
    if (scroll && isDesktop) {
      scroll.scrollTo(target);
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setIsOpen(false); // Close mobile menu
  };

  useEffect(() => {
    const isPhone = window.innerWidth <= 768;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: isPhone ? '0px 0px -40% 0px' : '0px',
      }
    );

    const sectionRefs = MenuList.map((item) =>
      document.getElementById(item.toLowerCase())
    ).filter(Boolean);
    sectionRefs.forEach((section) => observer.observe(section));

    // ✅ Manual scroll check for bottom edge case (especially on phones)
    const handleManualScrollToBottom = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (Math.abs(scrollPos - docHeight) < 100) {
        setActiveSection('contact');
      }
    };



    window.addEventListener('scroll', handleManualScrollToBottom);

    return () => {
      sectionRefs.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener('scroll', handleManualScrollToBottom);
    };
  }, []);



  return (
    <div className="absolute bg-gray-50/30 backdrop-blur-2xl w-screen md:h-[115px] h-[90px] flex justify-center items-center z-50">
      <nav className="md:bg-white/30 md:backdrop-blur-2xl md:w-[90%] w-full md:h-[60%] h-[90%] md:rounded-full flex justify-center items-center gap-5 md:border-1 md:border-white/70">
        
        {/* Logo */}
        <div className="md:w-[15%] w-[50%] h-full flex justify-start items-center pl-4">
          <a href="/">
            <motion.img
              initial={{ x: -100, opacity: 0, scale: 0.8, rotate: 50 }}
              animate={{ x: 0, scale: 1, opacity: 1, rotate: 720 }}
              whileHover={{ scale: 1.05, rotate: 360 }}
              className="w-[50px]"
              src="icons/logo01.png"
              alt="logo"
            />
          </a>
          <motion.h1
            initial={{ opacity: 1, x: 0, rotate: 0 }}
            animate={{ opacity: 1, x: [0, 20, 0], rotate: [0, 30, 30, 0] }}
            transition={{ delay: 0.1 }}
            className="text-2xl pl-1 font-bold"
          >
            EV
          </motion.h1>
        </div>

        {/* Menu */}
        <div className="w-full h-full flex justify-end items-center">
          <ul className="md:flex justify-start items-center gap-5 hidden mr-10">
            {MenuList.map((item, index) => (
              <li
                
                className="py-3 px-2"
                key={index}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className={`cursor-pointer py-2 px-5 ${
                    activeSection === item.toLowerCase()
                      ? 'text-white border-b-1 border-black/30 transition-all duration-300 ease-in-out'
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
            <a href="#facebook"><FaFacebook size={23} color="#1877F2" /></a>
            <a href="#instagram"><FaInstagram size={23} color="#E1306C" /></a>
            <a href="#github"><FaGithub size={23} color="#333" /></a>
          </section>
          <section className="md:hidden w-full h-full flex justify-center items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
             {isOpen?  <LayoutDashboard size={40} />:  <Menu size={40} />}
            </button>
          </section>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-black/30 backdrop-blur-2xl fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-999">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white w-[90%] h-[73%] rounded-lg shadow-lg flex gap-3 flex-col"
          >
            <div className="w-full h-[15%] flex justify-between items-center px-10">
              <h1 className="text-2xl font-bold">Menu</h1>
              <button onClick={() => setIsOpen(false)}>
                <X size={40} />
              </button>
            </div>

            <div className="w-full h-[70%] flex justify-center items-center text-center ">
              <ul className=' w-full h-full flex flex-col gap-2 justify-center items-center text-lg'>
                {MenuList.map((item, index) => (
                  <li className="py-3 px-2" key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleScroll(e, item.toLowerCase())}
                      className={`cursor-pointer py-2 px-5 ${
                        activeSection === item.toLowerCase()
                          ? 'text-blue-400 border-b-1 border-black/30 transition-all duration-300 ease-in-out'
                          : 'text-gray-500'
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-[15%] flex justify-center items-center gap-15">
              <a href="#facebook"><FaFacebook size={23} color="#1877F2" /></a>
            <a href="#instagram"><FaInstagram size={23} color="#E1306C" /></a>
            <a href="#github"><FaGithub size={23} color="#333" /></a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
