import React from 'react'
import Homeindex from '../Components/Homeindex'
import Benefits from '../Components/Benefits';
import ContactUs from '../Components/ContactUs';
import AboutUs from '../Components/AboutUs';
import Newsletter from "../Components/Newsletter";
import Program from './Program';
import Quote from '../Components/Quote';
import Accreditation from './Accreditation';

const Home = () => {
    
    return (
        <div className='w-full'>
            <Homeindex />
            <AboutUs />
            <Quote />
            <Program />
            <Benefits />
            <ContactUs />
            <Newsletter />
            <Accreditation />

            
        </div>
    )
}

export default Home