import React from 'react'
import '../index.css'

import Navbar from '../components/navbar'
import Pricing from '../components/pricing'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'

const PricingPage = () => {
  return (
    <>
      <section>
          <Navbar/>

          <div className='flex justify-center mx-auto pt-44'>
                    <a className='text-white font-bold text-xs' href="/">HOME &gt;</a>
                    <p className='text-white font-bold text-xs px-4'>PRICING &gt;</p>
                    
          </div>

          <div className=' mx-auto pt-10 pb-44 text-center'>
            <p className='text-7xl text-white'>Choose The Right Plan</p>
          </div>

          <Pricing/>

          <div className="text-center pt-32 bg-gray-900">
            <p className="text-green-500 font-semibold">COURSES</p>
            <p className="text-white text-5xl mt-4 mx-auto w-3/4 md:w-full lg:w-full">
              Browse Our Online Courses
            </p>
          </div>

          <div className='bg-gray-900 pt-12 pb-24'>
            <div className="mx-auto mt-8 grid divide-y divide-neutral-200 w-3/4 bg-black rounded-md">
            <div class="py-5">
                  <details class="group">
                      <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span className='text-white pl-4'> How to Enroll This Online Course?</span>
                          <span class="transition group-open:rotate-180">
                                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                      <path d="M6 9l6 6 6-6"></path>
                                  </svg>
                              </span>
                      </summary>
                      <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                          billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                          pricing for certain services. Payment is typically made through a credit card or other
                          secure online payment method.
                      </p>
                  </details>
              </div>

              <div class="py-5">
                  <details class="group">
                      <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span className='text-white pl-4'> How to Enroll This Online Course?</span>
                          <span class="transition group-open:rotate-180">
                                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                      <path d="M6 9l6 6 6-6"></path>
                                  </svg>
                              </span>
                      </summary>
                      <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                          billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                          pricing for certain services. Payment is typically made through a credit card or other
                          secure online payment method.
                      </p>
                  </details>
              </div>


              <div class="py-5">
                  <details class="group">
                      <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span className='text-white pl-4'> How to Enroll This Online Course?</span>
                          <span class="transition group-open:rotate-180">
                                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                      <path d="M6 9l6 6 6-6"></path>
                                  </svg>
                              </span>
                      </summary>
                      <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                          billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                          pricing for certain services. Payment is typically made through a credit card or other
                          secure online payment method.
                      </p>
                  </details>
              </div>

            </div>
          </div>
          
          <Newsletter/>
          <Footer/>

      </section>
    </>
  )
}

export default PricingPage;