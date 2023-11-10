import React from 'react'
import  '../index.css'

const pricing = () => {
  return (
    <section className='justify-center bg-gray-900 pb-20'>

          <div className="text-center pt-12">
              <p className="text-green-500 font-semibold">OUR PRICING</p>
              <p className="text-white text-5xl mt-4 px-2 md:px-0 lg:px-0">
                Pricing & Packages
              </p>
          </div>

        <div className="py-20 mx-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-3/4 text-center">
          <div className='py-12 px-4 bg-black'>
            <div>
              <p className='text-sm text-white font-bold'>BASIC PLAN</p>
            </div>
            <div className='flex pl-1 justify-center pt-5'>
              <p className='text-gray-400'>$</p>
              <p className='text-6xl font-bold text-green-500'>49k</p>
            </div>
            <div className='w-3/4 mx-auto mt-12'>
              <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

            <button className='border border-green-500 text-xs font-bold mt-12 px-12 py-3 bg-black hover:bg-green-500 text-white'>GET STARTED</button>
          </div>

          <div className='py-12 px-4 bg-black'>
            <div>
              <p className='text-sm text-white font-bold'>BEGINNER PLAN</p>
            </div>
            <div className='flex pl-1 justify-center pt-5'>
              <p className='text-gray-400'>$</p>
              <p className='text-6xl font-bold text-green-500'>79k</p>
            </div>
            <div className='w-3/4 mx-auto mt-12'>
              <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

            <button className='border border-green-500 text-xs font-bold mt-12 px-12 py-3 bg-black hover:bg-green-500 text-white'>GET STARTED</button>
          </div>

          <div className='py-12 px-4 bg-black'>
            <div>
              <p className='text-sm text-white font-bold'>PREMIUM PLAN</p>
            </div>
            <div className='flex pl-1 justify-center pt-5'>
              <p className='text-gray-400'>$</p>
              <p className='text-6xl font-bold text-green-500'>109k</p>
            </div>
            <div className='w-3/4 mx-auto mt-12'>
              <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

            <button className='border border-green-500 text-xs font-bold mt-12 px-12 py-3 bg-black hover:bg-green-500 text-white'>GET STARTED</button>
          </div>

          <div className='py-12 px-4 bg-black'>
            <div>
              <p className='text-sm text-white font-bold'>ULTIMATE PLAN</p>
            </div>
            <div className='flex pl-1 justify-center pt-5'>
              <p className='text-gray-400'>$</p>
              <p className='text-6xl font-bold text-green-500'>149k</p>
            </div>
            <div className='w-3/4 mx-auto mt-12'>
              <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

            <button className='border border-green-500 text-xs font-bold mt-12 px-12 py-3 bg-black hover:bg-green-500 text-white'>GET STARTED</button>
          </div>
          
        </div>
    </section>
  )
}

export default pricing