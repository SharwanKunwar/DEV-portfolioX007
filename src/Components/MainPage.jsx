import { AnimatedTooltipPreview } from './ui/AnimatedTooltipPreview';
import { ShootingStarsAndStarsBackgroundDemo } from './ui/ShootingStarsAndStarsBackgroundDemo';
import { StarsBackground } from './ui/stars-background';
import { ShootingStars } from './ui/shooting-stars';
import { PointerHighlightDemo } from './ui/PointerHighlightDemo';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import {  X } from 'lucide-react';


function MainPage() {
  const [xDistance, setXDistance] = useState(-1500);
  const [LearnMore, setLearnMore] = useState(false);

  useEffect(() => {
    const updateXDistance = () => {
      if (window.innerWidth <= 768) {
        setXDistance(-350); // smaller movement for phones
      } else {
        setXDistance(-1500); // default for desktops
      }
    };

    updateXDistance();
    window.addEventListener('resize', updateXDistance);
    return () => window.removeEventListener('resize', updateXDistance);
  }, []);

  return (
    <>
      {/* Homepage Section */}
      <section
        id="home"
        className="w-screen flex md:justify-center p-5 md:pt-0 pt-15 items-center flex-col relative"
      >
        <ShootingStarsAndStarsBackgroundDemo />
        <motion.div
          initial={{ y: 100, scale: 0.98, opacity: 0, filter: 'blur(10px)' }}
          animate={{ y: 0, scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.7 }}
          className="w-full h-[13rem] flex md:items-end items-center md:pb-15 md:pt-0 pt-7"
        >
          <AnimatedTooltipPreview />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-screen h-screen flex flex-col justify-center items-center relative"
      >
        <StarsBackground />
        <ShootingStars />

        <div className="w-full h-1/4 md:pt-0 pt-10 flex justify-center  relative">
          <PointerHighlightDemo />
          <motion.div
            animate={{ x: xDistance }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              
            }}
            
          >
          
          </motion.div>
        </div>

        {/* Content */}
        <div className="w-full h-screen flex p-5 relative md:flex-row flex-col">
          <div className="md:w-6/12 w-full md:h-full h-6/12 flex justify-center items-center bg-black">
            {/* Scroll-animated box */}
            <motion.div
              initial={{ x: -200, opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="md:w-full w-[90%] md:h-full h-[90%] flex justify-center items-center object-cover relative"
            >
              <img
                className="rounded-md object-cover md:w-[80%] w-full md:h-[90%] h-full object-center"
                src="/img/sharwanjungkunwar0007.jpg"
                alt="Sharwan Jung Kunwar"
              />
            </motion.div>
          </div>

          <div className="md:w-6/12 w-full md:h-full flex-1 flex justify-center items-center">
            <motion.div
              initial={{ x: 200, opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-[90%] h-[90%] relative "
            >
              <h1 className="text-2xl font-bold text-neutral-300">
                Full Stack Developer
              </h1>
              <p className="text-[18px] pt-5 text-neutral-400">
                I build smooth, responsive UIs with React, Tailwind, and Motion.
                Soon diving into backend with Java Spring Boot and PostgreSQL to
                deliver full-stack solutions with style and structure.
              </p>
              <section className="flex justify-start">
                <button
                onClick={(e)=>setLearnMore(!LearnMore)}
                  type="button"
                  className=" w-[150px] h-[40px] rounded-sm text-sky-400 text-start md:hidden"
                >
                  Learn More
                </button>
                <br />
               {LearnMore && (
                  <div className='bg-black/80 fixed inset-0 mt-13 z-50 flex justify-center items-center md:hidden'>
                    <div className='bg-white w-[100%] h-[100%] rounded-xl p-5 overflow-y-auto'>
                      <section className='justify-end flex'>
                        <X onClick={() => setLearnMore(false)}
                        className='text-sm text-black underline ' size={30}/>
                     
                      </section>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-y-4">
                          {/* Full Name */}
                          <div>
                            <p className="text-gray-500">Full Name</p>
                            <p className="font-semibold text-lg">Sharwan jung kunwar</p>
                          </div>

                          {/* Phone */}
                          <div>
                            <p className="text-gray-500">Phone</p>
                            <p className="font-semibold text-blue-700">+9779763290022</p>
                          </div>

                          {/* Age */}
                          <div>
                            <p className="text-gray-500">Age</p>
                            <p className="font-semibold text-lg">21 Years</p>
                          </div>

                          {/* Email */}
                          <div>
                            <p className="text-gray-500">Email</p>
                            <p className="font-semibold text-lg break-words">sharwankunwar07@gmail.com</p>
                          </div>

                          {/* Occupation */}
                          <div>
                            <p className="text-gray-500">Occupation</p>
                            <p className="font-semibold text-lg">Software Developer</p>
                          </div>

                          {/* Nationality */}
                          <div>
                            <p className="text-gray-500">Nationality</p>
                            <p className="font-semibold text-lg">Nepali</p>
                          </div>
                          {/* address */}
                          <div>
                            <p className="text-gray-500">Address</p>
                            <p className="font-semibold text-lg">Attraiya-Kailali</p>
                          </div>
                          {/* Stack */}
                          <div>
                            <p className="text-gray-500">Tack stack</p>
                            <ul>
                              <li>React js</li>
                              <li>Tailwindcss</li>
                              <li>Motion</li>
                              <li>Spring Boot</li>
                              <li>Postgresql</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


              </section>
                <br />
                <p className='md:flex hidden text-start text-gray-50'>🚀 "From interactive frontends to robust backends—crafting full-stack experiences that inspire."</p>
              <section className=' md:flex hidden w-full h-[50%] justify-start items-center'>
                  <div className=' w-[100%] h-[90%] flex justify-center items-center'>
                    <div class="w-full mx-auto bg-white shadow-md rounded-xl p-6 md:p-8 space-y-6">
                          <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 ">
                            
                            {/* <!-- Full Name --> */}
                            <div>
                              <p class="text-gray-500">Full Name</p>
                              <p class="font-semibold text-lg">Sharwan jung kunwar</p>
                            </div>

                            {/* <!-- Phone --> */}
                            <div>
                              <p class="text-gray-500">Phone</p>
                              <p class="font-semibold text-blue-700">+9779763290022</p>
                            </div>

                            {/* <!-- Age --> */}
                            <div>
                              <p class="text-gray-500">Age</p>
                              <p class="font-semibold text-lg">21 Years</p>
                            </div>

                            {/* <!-- Email --> */}
                            <div>
                              <p class="text-gray-500">Email</p>
                              <p class="font-semibold text-lg">sharwankunwar07@gmail.com</p>
                            </div>

                            {/* <!-- Occupation --> */}
                            <div>
                              <p class="text-gray-500">Occupation</p>
                              <p class="font-semibold text-lg">Software Developer</p>
                            </div>

                            {/* <!-- Nationality --> */}
                            <div>
                              <p class="text-gray-500">Nationality</p>
                              <p class="font-semibold text-lg">Nepali</p>
                            </div>

                          </div>
                        </div>

                  </div>
              </section>
              <section className=' w-full h-[10%] text-gray-50 md:flex hidden'>
                <h1>Sharwan jung kunwar</h1>
                <p>Currently live in Bhaktapur-Bode, from Far west side</p>
              </section>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section
        id="blogs"
        className="w-screen h-screen flex justify-center items-center relative"
      >
        <StarsBackground />
        <ShootingStars />
      </section>

      <section
        id="projects"
        className="bg-blue-400/30 w-screen h-screen flex justify-center items-center"
      >
        Projects page
      </section>

      <section
        id="contact"
        className="bg-blue-400/30 w-screen h-screen flex justify-center items-center"
      >
        Contact page
      </section>

      <section
        id="footer"
        className="bg-blue-400/30 w-screen h-screen flex justify-center items-center"
      >
        {/* <BackgroundBoxesDemo /> */}
      </section>
    </>
  );
}

export default MainPage;
