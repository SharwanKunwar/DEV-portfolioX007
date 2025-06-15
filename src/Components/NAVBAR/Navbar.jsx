import { Menu } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';



function Navbar({scroll}) {

    const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(`#${targetId}`);
    if (scroll && target) {
      scroll.scrollTo(target);
    }
  };

  return (

    <div className='absolute bg-gray-50/30 backdrop-blur-2xl w-screen md:h-[15%] h-[90px] flex justify-center items-center z-50'>

      <nav className='md:bg-white/30 md:backdrop-blur-2xl md:w-[90%] w-full md:h-[65%] h-[90%] md:rounded-full flex justify-center items-center gap-5'>
      
        <div className=' md:w-[15%] w-[50%] h-full flex justify-start items-center'>
            <img className=' pl-4 w-[70px]' src="icons/logo01.png" alt="logo" />
            <h1 className='text-2xl pl-2'>EV</h1>
        </div>

        <div className=' w-full h-full flex justify-start items-center'>
            <ul className='md:flex justify-start items-center gap-5 text-[18px] hidden'>
                <a href="#home" onClick={(e) => handleScroll(e, 'home')}>
                    <li>Home</li>
                </a>
                <a href="#about" onClick={(e) => handleScroll(e, 'about')}>
                    <li>About</li>
                </a>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                    <li>Contact</li>
                </a>
            </ul>
        </div>

        <div className=' md:w-[20%] w-[50%] h-full flex justify-center items-center gap-5'>
            <section className=' w-[20%] h-full md:flex md:justify-center md:items-center gap-5 hidden'>
                <a className="hover:border-b py-2 cursor-pointer" href="#facebook" aria-label="Facebook"><FaFacebook size={23} color="#1877F2" /></a>
                <a className="hover:border-b py-2 cursor-pointer" href="#instagram" aria-label="Instagram"><FaInstagram size={23} color="#E1306C" /></a>
                <a className="hover:border-b py-2 cursor-pointer" href="#github" aria-label="GitHub"><FaGithub size={23} color="#333" /></a>
            </section>
            <section className='md:hidden w-full h-full flex justify-center items-center'>
                <Menu size={40}/>
            </section>
        </div>
    </nav>

</div>
)}

export default Navbar
