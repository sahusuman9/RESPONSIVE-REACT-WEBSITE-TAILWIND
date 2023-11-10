import React from 'react'
import  '../index.css'
import { ImgOne } from '../index.js'


const info = () => {
  return (
    <section className='info bg-gray-900 flex mx-auto'>

        <div className='mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 w-full'>
            <div className='left w-full min-[450px]:visible max-[1024px]:hidden'>
                <img className='ml-56 w-3/4 object-cover' style={{height:"900px"}} src={ImgOne} alt="" />
            </div>

            <div className=' max-[1024px]:ml-14 max-[1024px]:w-full'>

              <div className=''>
              <p className='pt-24 text-green-700 font-bold left-0'>LEARN ANYTHING</p>
              <p className='text-5xl text-white w-3/5 font-bold pt-4'>Benefits About Online Learning Expertise</p>
              </div>
              

<div className='box-1 hover-box flex items-center mt-16 bg-black p-8 w-3/4'>

  <div className='left'>
  <i class="fa-solid fa-book-open text-4xl pb-8 text-green-600"></i>
  </div>
  <div className='right ml-6'>
    <p className='text-white font-bold text-xl'>Online Courses</p>
    <p className='text-white mt-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
  </div>

</div>

<div className='box-2 hover-box flex items-center mt-4 bg-black p-8 w-3/4'>

  <div className='left'>
  <i class="fa-solid fa-certificate text-4xl pb-8 text-green-600"></i>
  </div>
  <div className='right ml-6'>
    <p className='text-white font-bold text-xl'>Earn A Cerificate</p>
    <p className='text-white mt-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
  </div>

</div>

<div className='box-3 hover-box flex items-center mt-4 bg-black p-8 w-3/4'>

  <div className='left'>
  <i class="fa-solid fa-user-pen text-4xl pb-8 text-green-600"></i>
  </div>
  <div className='right ml-6'>
    <p className='text-white font-bold text-xl'>Learn with Expert</p>
    <p className='text-white mt-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
  </div>

</div>

            </div>

        </div>
            {/* <div className='left w-3/5'>
              <img className='ml-56 w-3/4 object-cover' style={{height:"900px"}} src={ImgOne} alt="" />
            </div> */}

            {/* <div className='right'>

              <p className='pt-16 text-green-700 font-bold'>LEARN ANYTHING</p>
              <p className='text-5xl text-white w-3/5 font-bold'>Benefits About Online Learning Expertise</p>

              <div className='box-1 hover-box flex items-center mt-16 bg-black p-8 w-3/4'>

                <div className='left'>
                <i class="fa-solid fa-book-open text-4xl pb-8 text-green-600"></i>
                </div>
                <div className='right ml-6'>
                  <p className='text-white font-bold text-xl'>Online Courses</p>
                  <p className='text-white mt-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>

              </div>

              <div className='box-2 hover-box flex items-center mt-4 bg-black p-8 w-3/4'>

                <div className='left'>
                <i class="fa-solid fa-certificate text-4xl pb-8 text-green-600"></i>
                </div>
                <div className='right ml-6'>
                  <p className='text-white font-bold text-xl'>Earn A Cerificate</p>
                  <p className='text-white mt-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>

              </div>

              <div className='box-3 hover-box flex items-center mt-4 bg-black p-8 w-3/4'>

                <div className='left'>
                <i class="fa-solid fa-user-pen text-4xl pb-8 text-green-600"></i>
                </div>
                <div className='right ml-6'>
                  <p className='text-white font-bold text-xl'>Learn with Expert</p>
                  <p className='text-white mt-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>

              </div>
          
            </div> */}
        </section>
  )
}

export default info