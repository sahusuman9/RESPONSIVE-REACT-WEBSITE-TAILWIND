import React from 'react'
import '../index.css'

import Navbar from '../components/navbar'
import Numbers from '../components/numbers.jsx'
import Newsletter from '../components/newsletter.jsx'
import Footer from '../components/footer.jsx'

import { ImgSeven, ImgEight, ImgNine, ImgTen } from '../index.js'

const Team = () => {
  return (
    <>

      
      <section>
      <Navbar/>

        <div className='flex justify-center mx-auto py-44'>
                    <a className='text-white font-bold text-xs' href="/">HOME &gt;</a>
                    <p className='text-white font-bold text-xs px-4'>TEAM &gt;</p>
        </div>

        <div className='bg-gray-900 py-44'>
          <div className='mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center w-3/4 justify-center'>
              <div className='g1'>

                <div className='flex-col mx-auto'>
                  <div>
                    <img className='object-cover w-full h-[450px]' src={ImgSeven} />
                  </div>
                  <div className='hover:bg-green-500 hover:duration-500 pb-4 rounded-b-md'>
                    <p className='text-white font-bold text-xl pt-3'>Ph.D Adrian Molises</p>
                    <p className='text-gray-600 text-xs pt-3 font-bold'>DEVELOPER AND LEAD INSTRUCTOR</p>
                  </div>
                </div>
                
              </div>

              <div className='g2'>

                <div className='flex-col mx-auto'>
                  <div>
                    <img className='object-cover w-full h-[450px]' src={ImgEight} />
                  </div>
                  <div className='hover:bg-green-500 hover:duration-500 pb-4 rounded-b-md'>
                    <p className='text-white font-bold text-xl pt-3'>Ph.D Adrian Molises</p>
                    <p className='text-gray-600 text-xs pt-3 font-bold'>DEVELOPER AND LEAD INSTRUCTOR</p>
                  </div>
                </div>

              </div>

              <div className='g3'>

              <div className='flex-col mx-auto'>
                <div>
                  <img className='object-cover w-full h-[450px]' src={ImgNine} />
                </div>
                <div className='hover:bg-green-500 hover:duration-500 pb-4 rounded-b-md'>
                  <p className='text-white font-bold text-xl pt-3'>Ph.D Adrian Molises</p>
                  <p className='text-gray-600 text-xs pt-3 font-bold'>DEVELOPER AND LEAD INSTRUCTOR</p>
                </div>
              </div>

              </div>

              <div className='g4'>

              <div className='flex-col mx-auto'>
                <div>
                  <img className='object-cover w-full h-[450px]' src={ImgTen} />
                </div>
                <div className='hover:bg-green-500 hover:duration-500 pb-4 rounded-b-md'>
                  <p className='text-white font-bold text-xl pt-3'>Ph.D Adrian Molises</p>
                  <p className='text-gray-600 text-xs pt-3 font-bold'>DEVELOPER AND LEAD INSTRUCTOR</p>
                </div>
              </div>

              </div>

              <div className='g5'>

              <div className='flex-col mx-auto'>
                <div>
                  <img className='object-cover w-full h-[450px]' src={ImgNine} />
                </div>
                <div className='hover:bg-green-500 hover:duration-500 pb-4 rounded-b-md'>
                  <p className='text-white font-bold text-xl pt-3'>Ph.D Adrian Molises</p>
                  <p className='text-gray-600 text-xs pt-3 font-bold'>DEVELOPER AND LEAD INSTRUCTOR</p>
                </div>
              </div>

              </div>

              <div className='g6'>

              <div className='flex-col mx-auto'>
                <div>
                  <img className='object-cover w-full h-[450px]' src={ImgSeven} />
                </div>
                <div className='hover:bg-green-500 hover:duration-500 pb-4 rounded-b-md'>
                  <p className='text-white font-bold text-xl pt-3'>Ph.D Adrian Molises</p>
                  <p className='text-gray-600 text-xs pt-3 font-bold'>DEVELOPER AND LEAD INSTRUCTOR</p>
                </div>
              </div>

              </div>

              <div className='g7'>

              <div className='flex-col mx-auto'>
                <div>
                  <img className='object-cover w-full h-[450px]' src={ImgTen} />
                </div>
                <div className='hover:bg-green-500 hover:duration-500 pb-4 rounded-b-md'>
                  <p className='text-white font-bold text-xl pt-3'>Ph.D Adrian Molises</p>
                  <p className='text-gray-600 text-xs pt-3 font-bold'>DEVELOPER AND LEAD INSTRUCTOR</p>
                </div>
              </div>

              </div>

              <div className='g8'>

              <div className='flex-col mx-auto'>
                <div>
                  <img className='object-cover w-full h-[450px]' src={ImgEight} />
                </div>
                <div className='hover:bg-green-500 hover:duration-500 pb-4 rounded-b-md'>
                  <p className='text-white font-bold text-xl pt-3'>Ph.D Adrian Molises</p>
                  <p className='text-gray-600 text-xs pt-3 font-bold'>DEVELOPER AND LEAD INSTRUCTOR</p>
                </div>
              </div>

              </div>


              
          </div>
        </div>

        <Numbers/>
        <Newsletter/>
        <Footer/>


       
      </section>
    </>
  )
}

export default Team