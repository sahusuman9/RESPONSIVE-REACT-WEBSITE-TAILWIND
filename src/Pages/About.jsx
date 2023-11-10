import React from 'react'
import '../index.css'
import Navbar from '../components/navbar'
import Info from '../components/info'
import Numbers from '../components/numbers'
import Testimonials from '../components/testimonials'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'


const About = () => {
    return(
        <>
            <section>
            <Navbar/>
                <div className='flex justify-center mx-auto py-44'>
                    <a className='text-white font-bold text-xs' href="/">HOME &gt;</a>
                    <p className='text-white font-bold text-xs px-4'>ABOUT US &gt;</p>
                </div>
                
                <Info />
                <Numbers />
                <Testimonials />
                <Newsletter />
                <Footer />

            </section>
        </>
    )
}

export default About;