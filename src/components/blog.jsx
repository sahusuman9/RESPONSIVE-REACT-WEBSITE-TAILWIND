import React from 'react'
import  '../index.css'
import { ImgTwo } from '../index.js'
import { ImgThree } from '../index.js'
import { ImgFour } from '../index.js'



const blog = () => {
  return (
    <section className='blog bg-gray-900 pb-40'>
            <div className="text-center pt-32">
              <p className="text-green-500 font-semibold">OUR BLOG</p>
              <p className="text-white text-5xl mt-4">
                Recent from Blog
              </p>
          </div>

          <div className="py-5 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-3/4 mt-24 justify-center ">

              <div className='bg-black text-white border-transparent rounded-lg pb-6'>
                <div className=''>
                  <img className='object-cover border-transparent rounded-t-lg' src={ImgTwo} alt="" />
                </div>

                <div className='flex py-6 items-center'>

                  <div className='flex px-6 text-xs font-bold items-center'>
                    <i class="fa-solid fa-user text-green-500"></i>
                    <p className='pl-2'>ADMIN</p>
                  </div>

                  <div className='flex px-4 text-xs font-bold items-center'>
                    <i class="fa-regular fa-calendar text-green-500"></i>
                    <p className='pl-2'>JAN. 18, 2023</p>
                  </div>

                  <div className='flex px-4 text-xs font-bold items-center'>
                    <i class="fa-solid fa-comment text-green-500"></i>
                    <p className='pl-2'>3 COMMENTS</p>
                  </div>
                </div>

                <div className='px-6'>
                  <p className='text-2xl'>Build your Dream Software & Engineering Career</p>
                </div>

                <div className='px-6 py-6'>
                  <p className='text-sm w-3/4 text-gray-400'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>

              <div className='bg-black text-white border-transparent rounded-lg pb-6'>
                <div className=''>
                  <img className='object-cover border-transparent rounded-t-lg' src={ImgThree} />
                </div>

                <div className='flex py-6 items-center'>

                  <div className='flex px-6 text-xs font-bold items-center'>
                    <i class="fa-solid fa-user text-green-500"></i>
                    <p className='pl-2'>ADMIN</p>
                  </div>

                  <div className='flex px-4 text-xs font-bold items-center'>
                    <i class="fa-regular fa-calendar text-green-500"></i>
                    <p className='pl-2'>JAN. 18, 2023</p>
                  </div>

                  <div className='flex px-4 text-xs font-bold items-center'>
                    <i class="fa-solid fa-comment text-green-500"></i>
                    <p className='pl-2'>3 COMMENTS</p>
                  </div>
                </div>

                <div className='px-6'>
                  <p className='text-2xl'>Build your Dream Software & Engineering Career</p>
                </div>

                <div className='px-6 py-6'>
                  <p className='text-sm w-3/4 text-gray-400'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>

              <div className='bg-black text-white border-transparent rounded-lg pb-6'>
                <div className=''>
                  <img className='object-cover border-transparent rounded-t-lg' src={ImgFour} alt="" />
                </div>

                <div className='flex py-6 items-center'>

                  <div className='flex px-6 text-xs font-bold items-center'>
                    <i class="fa-solid fa-user text-green-500"></i>
                    <p className='pl-2'>ADMIN</p>
                  </div>

                  <div className='flex px-4 text-xs font-bold items-center'>
                    <i class="fa-regular fa-calendar text-green-500"></i>
                    <p className='pl-2'>JAN. 18, 2023</p>
                  </div>

                  <div className='flex px-4 text-xs font-bold items-center'>
                    <i class="fa-solid fa-comment text-green-500"></i>
                    <p className='pl-2'>3 COMMENTS</p>
                  </div>
                </div>

                <div className='px-6'>
                  <p className='text-2xl'>Build your Dream Software & Engineering Career</p>
                </div>

                <div className='px-6 py-6'>
                  <p className='text-sm w-3/4 text-gray-400'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
          </div>
        </section>
  )
}

export default blog