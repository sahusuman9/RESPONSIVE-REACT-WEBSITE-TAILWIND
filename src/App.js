import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

// import Navbar from "./components/navbar.jsx";
// import Info from './components/info.jsx'
// import Numbers from './components/numbers.jsx'
// import Courses from './components/courses.jsx'
// import Testimonials from "./components/testimonials.jsx";
// import Blog from './components/blog.jsx'
// import Pricing from "./components/pricing.jsx";
// import Newsletter from "./components/newsletter.jsx";
// import Footer from "./components/footer.jsx";
// import Home from "./components/home.jsx";

import Homepage from "./Pages/Home";
import CoursesPage from "./Pages/Courses";
import About from "./Pages/About";
import Team from "./Pages/Team";
import PricingPage from "./Pages/Pricing";
import Journal from "./Pages/Journal";
import Contact from "./Pages/Contact";


function App() {
  return (

    <>

    
    <Router>
      <Routes>
        <Route path="/"  element={<Homepage/>}>
        </Route>

        <Route path="/courses"  element={<CoursesPage/>}>
        </Route>

        <Route path="/about"  element={<About/>}>
        </Route>

        <Route path="/team"  element={<Team/>}>
        </Route>

        <Route path="/pricing"  element={<PricingPage/>}>
        </Route>

        <Route path="/journal"  element={<Journal/>}>
        </Route>

        <Route path="/contact"  element={<Contact/>}>
        </Route>
      </Routes>
    </Router>











      {/* <Navbar />
      <Home />
      <Info />
      <Numbers />
      <Courses />
      <Testimonials />
      <Blog />
      <Pricing />
      <Newsletter />
      <Footer /> */}
      
    </>
  );
}

export default App;
