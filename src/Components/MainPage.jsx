import { AnimatedTooltipPreview } from './ui/AnimatedTooltipPreview';
import { ShootingStarsAndStarsBackgroundDemo } from './ui/ShootingStarsAndStarsBackgroundDemo';
import { StarsBackground } from './ui/stars-background';
import { ShootingStars } from './ui/shooting-stars';
import { PointerHighlightDemo } from './ui/PointerHighlightDemo';
import { motion } from 'motion/react';


function MainPage() {


  return (
    <>
      {/* homepage */}
      <section 
        id="home" 
        className="w-screen flex md:justify-center p-5 md:pt-0 pt-15 items-center flex-col relative"
      >
        <ShootingStarsAndStarsBackgroundDemo />
        <motion.div 
          initial={{ y: 100, scale: 0.98, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.7 }}
          className='w-full h-[13rem] flex md:items-end items-center md:pb-15 md:pt-0 pt-7'
        >
          <AnimatedTooltipPreview />
        </motion.div>
      </section>



      {/* Aboutpage */}
      <section 
        id='about' 
        className='w-screen h-screen flex flex-col justify-center items-center relative bg-yellow-400'
      >
        <StarsBackground />
        <ShootingStars />

        <div className='w-full h-6/25  md:pt-0 pt-10 flex justify-center bg-black border border-white relative'>
          <PointerHighlightDemo />
          <div className='bg-red-400 absolute w-[50px] h-[50px] rounded-full top-0 right-0'>box</div>
        </div>

        {/* content */}
        <div className=' w-full h-screen flex p-5 relative md:flex-row flex-col'>

          <div className=' md:w-6/12 w-full md:h-full h-6/15 flex justify-center items-center bg-black'>
            {/* Scroll-animated box */}
            <motion.div 
              initial={{x:-200,opacity:0,filter:"blur(10px)"}}
              whileInView={{x:0, opacity:1,filter:"blur(0px)"}}
              transition={{duration:0.5, ease:"easeOut"}}
                viewport={{ once: true, amount: 0.3 }}
              className=' md:w-full w-full md:h-full h-full flex justify-center items-center bg-purple-400'
            >
              
            </motion.div>
          </div>

          <div className=' md:w-6/12 w-full md:h-full flex-1 flex justify-center items-center bg-green-400'>
             <motion.div 
              initial={{x:200,opacity:0,filter:"blur(10px)"}}
              whileInView={{x:0, opacity:1,filter:"blur(0px)"}}
              transition={{duration:0.5, ease:"easeOut"}}
                viewport={{ once: true, amount: 0.3 }}
              className=' w-[90%] h-[90%] relative bg-red-400'
            >
              This is about
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id='blogs' className=' w-screen h-screen flex justify-center items-center relative'>
        <StarsBackground />
        <ShootingStars />
      </section>

      <section id='projects' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>
        Projects page
      </section>

      <section id='contact' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>
        Contact page
      </section>

      <section id='footer' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>
        {/* <BackgroundBoxesDemo/> */}
      </section>
    </>
  );
}

export default MainPage;
