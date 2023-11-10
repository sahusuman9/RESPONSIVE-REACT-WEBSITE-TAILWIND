import React from 'react'
import '../index.css'

import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'

const Contact = () => {
    return(
        <>
            <section>
                <Navbar/>

                <div className='flex justify-center mx-auto pt-44'>
                    <a className='text-white font-bold text-xs' href="/">HOME &gt;</a>
                    <p className='text-white font-bold text-xs px-4'>CONTACT &gt;</p>
                </div>

                <div className=' mx-auto pt-10 pb-44 text-center'>
                    <p className='text-7xl text-white'>Contact Us</p>
                </div>


                <div className='py-24 bg-gray-900 '>
                    <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-3/4  justify-center'>

                        <div className='px-8 py-8 bg-gray-700 mx-auto '>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.599055665489!2d77.6994166!3d12.9942387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0d3f52ee8c2b%3A0xba7d1cb4d983403a!2sDiginnovators%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1699533997127!5m2!1sen!2sin" style={{width:"600px", maxWidth:"100%", height:"750px", border:"border:0;"}} ></iframe>
                        </div>

                        <div className='px-10 py-10 bg-black md:-ml-6 lg:-ml-6 w-full md:w-full lg:w-full '>

                            <div className='flex-col'>
                                <p className='text-3xl text-white'>Contact Us</p>
                                <p className='text-white'>We're open for any suggestion or just to have a chat</p>
                            </div>

                            <div className='pt-6 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-3/4 justify-center'>

                                <div className='px-2 py-2'>
                                    <p className='text-xs text-white font-bold'>ADDRESSES: </p>
                                    <p className='text-gray-400 pt-1'>198 West 21th Street, Suite 721 New York NY 10016</p>
                                </div>

                                <div className='px-2 py-2'>
                                    <p className='text-xs text-white font-bold'>EMAIL: </p>
                                    <p className='text-gray-400 pt-1'>info@yoursite.com</p>
                                </div>

                                <div className='px-2 py-2'>
                                    <p className='text-xs text-white font-bold'>PHONE: </p>
                                    <p className='text-gray-400 pt-1'>+ 1235 2355 98</p>
                                </div>
                            </div>

                            <form>

                                <div>
                                    <div className='px-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full justify-center pt-4'>
                                        <div className=''>
                                            <input className='w-full bg-black px-2 py-2 outline-none border border-gray-900 rounded-sm items-center text-white' type="text" placeholder='Name' />
                                        </div>
                                        <div className=''>
                                        <input className='w-full bg-black px-2 py-2 outline-none border border-gray-900 rounded-sm items-center text-white' type="email" placeholder='Email' />
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className='w-full grid m:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 px-3 pt-4'>
                                    <input className=' bg-black px-2 py-2 outline-none border border-gray-900 rounded-sm items-center text-white' type="text" placeholder='Subject' />
                                </div>
                                <div className='w-full grid m:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 px-3 pt-4'>
                                    <textarea className='bg-black text-white border border-gray-900 rounded-md outline-none px-2 py-8' placeholder='Message'></textarea>
                                </div>
                                <div className='px-3 pt-4'>
                                    <button className='text-white text-xs text-center rounded-sm py-3 bg-green-500 grid m:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 px-6 font-bold'>SEND MESSAGE</button>
                                </div>
                                
                            </form>

                            <div className='flex-col pt-16 md:pt-32 lg:pt-32 px-4'>
                                <p className='text-xl text-white'>Follow Us Here</p>
                                <div className='text-white text-[8px] md:text-xs lg:text-xs pt-4 md:pt-6 lg:pt-6 flex'>
                                    <p className=' hover:text-green-500 duration-500 cursor-pointer'>FACEBOOK</p>
                                    <p className='pl-4 hover:text-green-500 duration-500 cursor-pointer'>TWITTER</p>
                                    <p className='pl-4 hover:text-green-500 duration-500 cursor-pointer'>INSTAGRAM</p>
                                    <p className='pl-4 hover:text-green-500 duration-500 cursor-pointer'>DRIBBLE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Newsletter/>
                <Footer/>
            </section>
        </>
    )
}

export default Contact;