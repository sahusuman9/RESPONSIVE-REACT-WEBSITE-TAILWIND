import React from 'react'
import '../index.css'
import Navbar from '../components/navbar';
import Home from '../components/home';
import Info from '../components/info'
import Numbers from '../components/numbers'
import Courses from '../components/courses.jsx';
import Testimonials from "../components/testimonials.jsx";
import Blog from '../components/blog.jsx'
import Pricing from "../components/pricing.jsx";
import Newsletter from "../components/newsletter.jsx";
import Footer from "../components/footer.jsx";

const Homepage = () => {
    return(
        <>
            
            <Navbar/>
            <Home/>
            <Info />
            <Numbers />
            <Courses />
            <Testimonials />
            <Blog />
            <Pricing />
            <Newsletter />
            <Footer />
            



        </>
    )
}

export default Homepage;