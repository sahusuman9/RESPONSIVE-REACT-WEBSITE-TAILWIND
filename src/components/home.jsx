import React from 'react'

const Home = () => {
  return (
    <div className='home pb-56 max-w-screen-sm'>
        <div className='w-3/5 mx-auto pt-56'>
                <p className='text-gray-200 font-bold'>WELCOME TO ACADEMIA</p>
                <p className='text-white font-bold text-5xl md:w-1/2 lg:w-1/2'>Best Online Education Expertise</p>
                <p className='text-gray-200 mt-6 md:w-1/2 lg:1/2'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

            <div className='w-4/5 md:3/5 pl-10 md:pl-32 lg:pl-48 lg:3/5 mx-auto mt-8'>
                <button className='rounded-md border border-black text-white px-6 py-2 bg-green-500'>
                    GET STARTED NOW
                    <i class="fa-solid fa-arrow-right ml-3 text-xs"></i>
                </button>
                <button className='rounded-md border border-black text-green-500 md:ml-2 lg:ml-4 mt-4 px-6 py-2 bg-black'>
                    VIEW COURSE
                    <i class="fa-solid fa-arrow-right ml-3 text-xs"></i>
                </button>
            </div>
    </div>
  )
}

export default Home