import React from 'react'
import Navbar from "../Components/Navbar";
import Homeindex from '../Components/Homeindex'
import Footer from "../Components/Footer";
import ContactUs from '../Components/ContactUs';
import Benefit from '../Components/Benefits';
import AboutUs from '../Components/AboutUs';
import Apply from "../Components/Apply";
import Program from '../Components/Program';
import Quote from '../Components/Quote';
import Accreditation from '../Components/Accreditation';
import Testimonial from '../Components/Testimonial';

const Home = () => {

    return (
        <div className='w-full'>
            <Navbar />          {/* Done */}
            <Homeindex />       {/* apply */}
            <AboutUs />         {/* Done */}
            <Quote />           {/* Done */}
            <Program />         {/* Currency */}
            <Benefit />         {/* Done */}
            <Testimonial />     {/* Done */}
            <Apply />           {/* side text */}
            <ContactUs />       {/* Done */}
            <Accreditation />   {/* Done */}
            <Footer />          {/* Done */}
        </div>
    )
}

export default Home