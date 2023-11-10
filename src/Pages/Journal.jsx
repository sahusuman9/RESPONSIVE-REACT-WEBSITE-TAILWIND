import React from 'react'
import '../index.css'

import Navbar from '../components/navbar'
import Blog from '../components/blog'
import Newsletter from '../components/newsletter.jsx'
import Footer from '../components/footer.jsx'

import { ImgTwo, ImgThree, ImgFour } from '../index.js'

const Journal = () => {
  return (
    <>
      <section>
        <Navbar />
        
        <div className='flex justify-center mx-auto pt-44'>
                    <a className='text-white font-bold text-xs' href="/">HOME &gt;</a>
                    <p className='text-white font-bold text-xs px-4'>BLOG &gt;</p>
        </div>

        <div className=' mx-auto pt-10 pb-44 text-center'>
            <p className='text-7xl text-white'>Blog Posts</p>
        </div>

        <Blog/>

        <div className='pb-24 bg-gray-900'>
          <div className=" mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-3/4 justify-center ">

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

          <div className='pt-14'>
                        <nav className='flex justify-center' aria-label="Page navigation example">
  <ul class="flex items-center -space-x-px h-8 text-sm">
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    <li>
    <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
                        </nav>
          </div>

        </div>
        
       <Newsletter/>
       <Footer/>
        
      </section>
    </>
  )
}

export default Journal;