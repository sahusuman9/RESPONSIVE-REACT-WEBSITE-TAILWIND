import React from 'react'
import  '../index.css'

const newsletter = () => {
  return (
    <section className='justify center py-14 bg-green-500'>
        <div className='mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 w-3/5'>
          <div className=''>
            <p className='text-3xl text-white'>Newsletter - Stay tune and get the latest update</p>
            <p className='text-gray-600'>Far far away, behind the word mountains</p>
          </div>

          <div className='box flex items-center px-6'>
            <input className='text-white border-b outline-none border-white bg-transparent w-full' type="text" placeholder='Enter Email Address'/>
            <i class="fa-solid fa-paper-plane"></i>
          </div>
        </div>
        
    </section>
  )
}

export default newsletter