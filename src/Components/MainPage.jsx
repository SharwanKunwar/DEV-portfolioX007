import { AnimatedTooltipPreview } from './ui/AnimatedTooltipPreview';
import { ShootingStarsAndStarsBackgroundDemo } from './ui/ShootingStarsAndStarsBackgroundDemo';
import {StarsBackground} from './ui/stars-background'
import { ShootingStars } from './ui/shooting-stars';
import { PointerHighlightDemo } from './ui/PointerHighlightDemo';


function MainPage() {
  return (
    <>
      <section 
        id="home" 
        className="w-screen flex md:justify-center p-5 md:pt-0 pt-15 items-center flex-col relative"
      >
        <ShootingStarsAndStarsBackgroundDemo/>
        <div className='w-full h-[13rem] flex md:items-end items-center md:pb-10 md:pt-0 pt-15  '>
          <AnimatedTooltipPreview/>
        </div>
      </section>

      <section id='about' className=' w-screen h-screen flex justify-center items-center relative'>
        
        <StarsBackground /> 
        <ShootingStars />
       <div className='w-full h-full bg-black pt-15 flex justify-center'>
        <PointerHighlightDemo/>
       </div>
      
      </section>

      <section id='blogs' className='bg-blue-200/30 w-screen h-screen flex justify-center items-center'>Blogs page</section>
      <section id='projects' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>Projects page</section>
      <section id='contact' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>Contact page</section>
      <section id='footer' className='bg-blue-400/30 w-screen h-screen flex justify-center items-center'>Footer page</section>
    </>
  );
}

export default MainPage;
