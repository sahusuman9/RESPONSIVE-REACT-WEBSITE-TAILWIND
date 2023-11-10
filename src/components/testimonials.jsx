import React from 'react'
import  '../index.css'
import { ImgFive } from '../index.js'
import { ImgThree } from '../index.js';
import { ImgSix } from '../index.js';
import { ImgTwo } from '../index.js';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const testimonials = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };


  return (
    <section className='cards bg-gray-900 mx-auto pb-44'>
            <div className="text-center pt-32">
              <p className="text-green-500 font-semibold">TESTIMONIALS</p>
              <p className="text-white text-5xl mt-4">
                Our Successful Students
              </p>
            </div>

            <Slider {...settings} className="w-4/5 mx-auto mt-32">

              <div className='s1'>
                <div className='card-1 w-[500px] bg-black mx-auto pb-14'>
               <div className='flex items-center px-16 py-10'>
                  <div>
                    <img className='h-20 w-20 rounded-full' src={ImgFive} alt="" />
                  </div>

                  <div className='pl-12 flex-col'>
                    <p className='text-white text-xl font-bold'>ROGER SCOTT</p>
                    <p className='text-xs text-green-500 pt-4'>MARKETING MANAGER</p>
                  </div>
               </div>

               <div className='px-16'>
                  <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
               </div>
                </div>
              </div>

              <div className='s2'>
                <div className='card-2 w-[500px] bg-black mx-auto pb-14'>
               <div className='flex items-center px-16 py-10'>
                  <div>
                    <img className='h-20 w-20 rounded-full object-cover' src={ImgThree} alt="" />
                  </div>

                  <div className='pl-12 flex-col'>
                    <p className='text-white text-xl font-bold'>ROGER SCOTT</p>
                    <p className='text-xs text-green-500 pt-4'>MARKETING MANAGER</p>
                  </div>
               </div>

               <div className='px-16'>
                  <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
               </div>
                </div>
              </div>

              <div className='s3'>
                <div className='card-3 w-[500px] bg-black mx-auto pb-14'>
               <div className='flex items-center px-16 py-10'>
                  <div>
                    <img className='h-20 w-20 rounded-full' src={ImgSix} alt="" />
                  </div>

                  <div className='pl-12 flex-col'>
                    <p className='text-white text-xl font-bold'>ROGER SCOTT</p>
                    <p className='text-xs text-green-500 pt-4'>MARKETING MANAGER</p>
                  </div>
               </div>

               <div className='px-16'>
                  <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
               </div>
                </div>
              </div>

              <div className='s4'>
                <div className='card-4 w-[500px] bg-black mx-auto pb-14'>
               <div className='flex items-center px-16 py-10'>
                  <div>
                    <img className='h-20 w-20 object-cover rounded-full' src={ImgTwo} alt="" />
                  </div>

                  <div className='pl-12 flex-col'>
                    <p className='text-white text-xl font-bold'>ROGER SCOTT</p>
                    <p className='text-xs text-green-500 pt-4'>MARKETING MANAGER</p>
                  </div>
               </div>

               <div className='px-16'>
                  <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
               </div>
                </div>
              </div>

            </Slider>

        </section>
  )
}

export default testimonials