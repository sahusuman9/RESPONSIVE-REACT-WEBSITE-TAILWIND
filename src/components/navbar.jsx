import React from 'react'
import  '../index.css'
import { NavLink } from 'react-router-dom';




const Navbar = () => {

    function menuClick() {
        document.getElementById("menu").classList.toggle('hidden');
        
      }
    
      
    
   

  return (
    <>
        
        <section className='home-nav navbar pb-9'>


            <div className='topbar flex justify-around pt-4 items-center'>
                <div className='left'>
                    <h1 className='text-white text-3xl font-bold hover:text-green-400 cursor-pointer'>ACADEMIA</h1>
                    <span className='text-xs text-white'>ONLINE EDUCATION AND LEARNING</span>
                </div>
                <div className='right'>
                <ul className='flex'>
                    <li className='border-2 w-9 h-9 rounded-full text-center pt-1 items-center bg-gray-700 ml-2 cursor-pointer text-s border-transparent bg-opacity-30'><i className="fa-brands fa-facebook-f hover:text-white text-green-700"></i></li>
                    <li className='border-2 w-9 h-9 rounded-full text-center pt-1 items-center bg-gray-700 ml-2 cursor-pointer text-s border-transparent bg-opacity-30'><i class="fa-brands fa-x-twitter hover:text-white text-green-700"></i></li>
                    <li className='border-2 w-9 h-9 rounded-full text-center pt-1 items-center bg-gray-700 ml-2 cursor-pointer text-s border-transparent bg-opacity-30'><i class="fa-brands fa-instagram hover:text-white text-green-700"></i></li>
                    <li className='border-2 w-9 h-9 rounded-full text-center pt-1 items-center bg-gray-700 ml-2 cursor-pointer text-s border-transparent bg-opacity-30'><i class="fa-brands fa-linkedin hover:text-white text-green-700"></i></li>
                </ul>
                </div>
            </div>




            {/* mobile device */}

            <header className='bg-green-500 mt-14  lg:hidden mx-auto '>
                        <nav className='flex items-center justify-between pr-4 '>
                            <a className='py-4 px-4 bg-green-600 text-center text-white text-xs font-bold' href="">GET CERTIFICATE</a>

                            <div className='absolute top-[180px] left-0 bg-green-500 w-full flex-col gap-4 py-2 pl-8 hidden' id='menu'>
                                <ul className='flex flex-col gap-4 text-white pt-2'>
                                    
                                    <NavLink to="/"><li className=' font-bold text-white flex w-full p-3'>Home</li></NavLink>
                                    <NavLink to="/courses"><li className=' font-bold text-white whitespace-nowrap flex w-full p-3'>All Courses</li></NavLink>
                                    <NavLink to="/about"><li className=' font-bold text-white flex w-full p-3'>About</li></NavLink>
                                    <NavLink to="/team"><li className=' font-bold text-white flex w-full p-3'>Team</li></NavLink>
                                    <NavLink to="/pricing"><li className=' font-bold text-white flex w-full p-3'>Pricing</li></NavLink>
                                    <NavLink to="/journal"><li className=' font-bold text-white flex w-full p-3'>Journel</li></NavLink>
                                    <NavLink to="/contact"><li className=' font-bold text-white flex w-full p-3'>Contact</li></NavLink>

                                </ul>
                            </div>
                            <div  onClick={menuClick} className='flex gap-2 items-center md:flex md:gap-2 md:item-center'>
                                <i class="fa-solid fa-bars text-white fa-md"></i>
                                <p className='text-white'>Menu</p>
                            </div>
                            
                        </nav>
            </header>

            
           
    
            {/* medium and large screen devices */}
            
            <div className=' lg:flex justify-between border mt-8 rounded-md w-3/5  md:mx-auto lg:mx-auto items-center bg-gray-300 border-transparent bg-opacity-25 hidden '>
                    <div className='header '>
                        <ul className='flex'>

                            <NavLink to="/"><li className='pl-6 font-bold text-white hover:text-green-500 duration-900'>Home</li></NavLink>
                            <NavLink to="/courses"><li className='pl-10 font-bold text-white hover:text-green-500 duration-900 whitespace-nowrap'>All Courses</li></NavLink>
                            <NavLink to="/about"><li className='pl-10 font-bold text-white hover:text-green-500 duration-900'>About</li></NavLink>
                            <NavLink to="/team"><li className='pl-10 font-bold text-white hover:text-green-500 duration-900'>Team</li></NavLink>
                            <NavLink to="/journal"><li className='pl-10 font-bold text-white hover:text-green-500 duration-900'>Pricing</li></NavLink>
                            <NavLink to="/"><li className='pl-10 font-bold text-white hover:text-green-500 duration-900'>Journel</li></NavLink>
                            <NavLink to="/contact"><li className='pl-10 font-bold text-white hover:text-green-500 duration-900'>Contact</li></NavLink>
                            

                        </ul>
                    </div>
                    <div className='bg-green-500 clip'>
                        <button className='pt-6 pb-6 pr-12 pl-12 text-xs text-white font-bold'>GET CERTIFICATE</button>
                    </div>
                    
            </div>
                
                

                
                
                    
                        
               
                    
            
                        

            



        </section>

    </>
    
  )
}

export default Navbar;