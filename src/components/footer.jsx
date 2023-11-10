import React from 'react'
import  '../index.css'
import { ImgTwo } from '../index.js'
import { ImgThree } from '../index.js'
import { ImgFour } from '../index.js'

const footer = () => {
  return (
    <>
    <section className='bg-gray-900'>
      <div className="py-20 mx-auto grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-5 w-3/4">
        
        
        <div className='py-4 px-4'>
          <h1 className='text-white text-3xl font-bold cursor-pointer'>ACADEMIA</h1>
          <span className='text-xs text-green-500'>ONLINE EDUCATION AND LEARNING</span>
          <p className='text-gray-400 pt-8 w-1/2 md:w-full lg:w-full'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

          <div className='pt-4'>
                <ul className='flex'>
                    <li className='border-2 w-9 h-9 rounded-full text-center pt-1 items-center bg-green-500 ml-2 cursor-pointer text-s border-transparent '><i className="fa-brands fa-facebook-f text-white"></i></li>
                    <li className='border-2 w-9 h-9 rounded-full text-center pt-1 items-center bg-green-500 ml-2 cursor-pointer text-s border-transparent '><i class="fa-brands fa-x-twitter text-white"></i></li>
                    <li className='border-2 w-9 h-9 rounded-full text-center pt-1 items-center bg-green-500 ml-2 cursor-pointer text-s border-transparent '><i class="fa-brands fa-instagram text-white"></i></li>
                    
              </ul>
          </div>

        
        </div>
        

        <div className='py-4 px-4'>

          <p className='font-bold text-white'>Explore</p>

          <div className='pt-8'>
            <ul>

              <li className='flex items-center'>
                <i class="fa-solid fa-arrow-right text-green-500 text-xs"></i>
                <a className='text-gray-400 hover:text-green-500 pl-2' href="">About Us</a>
              </li>

              <li className='flex items-center pt-2'>
                <i class="fa-solid fa-arrow-right text-green-500 text-xs"></i>
                <a className='text-gray-400 hover:text-green-500 pl-2' href="">Services</a>
              </li>

              <li className='flex items-center pt-2'>
                <i class="fa-solid fa-arrow-right text-green-500 text-xs"></i>
                <a className='text-gray-400 hover:text-green-500 pl-2' href="">Courses</a>
              </li>

              <li className='flex items-center pt-2'>
                <i class="fa-solid fa-arrow-right text-green-500 text-xs"></i>
                <a className='text-gray-400 hover:text-green-500 pl-2' href="">Blog</a>
              </li>
              
              <li className='flex items-center pt-2'>
                <i class="fa-solid fa-arrow-right text-green-500 text-xs"></i>
                <a className='text-gray-400 hover:text-green-500 pl-2' href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='py-4 px-4'>

          <p className='font-bold text-white'>Ouick Links</p>

          <div className='pt-8'>
            <ul>

              <li className='flex items-center'>
                <i class="fa-solid fa-arrow-right text-green-500 text-xs"></i>
                <a className='text-gray-400 hover:text-green-500 pl-2' href="">Contact Us</a>
              </li>

              <li className='flex items-center pt-2'>
                <i class="fa-solid fa-arrow-right text-green-500 text-xs"></i>
                <a className='text-gray-400 hover:text-green-500 pl-2' href="">Pricing</a>
              </li>

              <li className='flex items-center pt-2'>
                <i class="fa-solid fa-arrow-right text-green-500 text-xs"></i>
                <a className='text-gray-400 hover:text-green-500 pl-2' href="">Terms and Conditions</a>
              </li>

              <li className='flex items-center pt-2'>
                <i class="fa-solid fa-arrow-right text-green-500 text-xs"></i>
                <a className='text-gray-400 hover:text-green-500 pl-2' href="">Privacy</a>
              </li>
              
              <li className='flex items-center pt-2'>
                <i class="fa-solid fa-arrow-right text-green-500 text-xs"></i>
                <a className='text-gray-400 hover:text-green-500 pl-2' href="">Feedbacks</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='py-4 px-4'>
          
          <p className='font-bold text-white mx-auto'>Recent Posts</p>
          
          <div className='pl-20 md:p-0 lg:p-0 '>
          <div className='pt-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-3/5 justify-center  items-center'>

<div>
    <img className='object-cover rounded-lg h-[55px] w-[55px]' src={ImgTwo} />
</div>
 
<div className='flex-col items-center'>

  <div className='flex items-center'>
    <div className='flex items-center'>
        <i class="fa-regular fa-calendar text-green-500 text-xs"></i>
        <p className='text-xs text-green-500'>JAN.18,2023</p>
      </div>

      <div className='flex items-center pl-3'>
        <i class="fa-regular fa-user text-green-500 text-xs"></i>
        <p className='text-xs text-green-500'>ADMIN</p>
      </div>
  </div>
    
    <div className=''>
      <p className='text-sm w-96 hover:text-green-500 text-gray-400'>Creativity and Inspiration</p>
    </div>

</div>



</div>

<div className='pt-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-3/5 justify-center  items-center'>

<div>
    <img className='object-cover rounded-lg h-[55px] w-[55px]' src={ImgThree} />
</div>
 
<div className='flex-col items-center'>

  <div className='flex items-center'>
    <div className='flex items-center'>
        <i class="fa-regular fa-calendar text-green-500 text-xs"></i>
        <p className='text-xs text-green-500'>JAN.18,2023</p>
      </div>

      <div className='flex items-center pl-3'>
        <i class="fa-regular fa-user text-green-500 text-xs"></i>
        <p className='text-xs text-green-500'>ADMIN</p>
      </div>
  </div>
    
    <div className=''>
      <p className='text-sm w-96 text-gray-400 hover:text-green-500'>Creativity and Inspiration</p>
    </div>

</div>



</div>


<div className='pt-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-3/5 justify-center  items-center'>

<div>
    <img className='object-cover rounded-lg h-[55px] w-[55px]' src={ImgFour} />
</div>
 
<div className='flex-col items-center'>

  <div className='flex items-center'>
    <div className='flex items-center'>
        <i class="fa-regular fa-calendar text-green-500 text-xs"></i>
        <p className='text-xs text-green-500'>JAN.18,2023</p>
      </div>

      <div className='flex items-center pl-3'>
        <i class="fa-regular fa-user text-green-500 text-xs"></i>
        <p className='text-xs text-green-500'>ADMIN</p>
      </div>
  </div>
    
    <div className=''>
      <p className='text-xs w-96 text-gray-400 hover:text-green-500'>Creativity and Inspiration</p>
    </div>

</div>



</div>
          </div>
        
          

          
          
        </div>

        <div className='py-4 px-4'>
          <p className='font-bold text-white'>Have Questions?</p>

          <div className='flex items-center pt-6'>
            <i class="fa-solid fa-location-dot text-green-500"></i>
            <p className='text-sm text-white pl-4 w-1/2 md:w-full lg:w-full '>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>

          <div className='flex items-center pt-4'>
          <i class="fa-solid fa-phone text-green-500"></i>
          <p className='text-sm text-white pl-4'>+2 392 3929 210</p>
        </div>

        <div className='flex items-center pt-4'>
        <i class="fa-solid fa-paper-plane text-green-500"></i>
          <p className='text-sm text-white pl-4'>info@yourdomain.com</p>
        </div>

        </div>
    
    
      
    </div>
    </section>

    <section className='bg-gray-800 py-14 text-center'>
        <div className=''>
          <p className='text-gray-400'>Copyright ©2023 All rights reserved | This template is made with &hearts; by <span className='text-green-500'>Colorlib</span></p>
        </div>
    </section>
    
    
    </>
    
  )
}

export default footer