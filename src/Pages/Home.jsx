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

const Home = () => {

    return (
        <div className='w-full'>
            <Navbar />
            <Homeindex />
            <AboutUs />
            <Quote />
            <Program />
            <Benefit />
            <ContactUs />
            <Apply />
            <Accreditation />
            <Footer />
        </div>
    )
}

export default Home