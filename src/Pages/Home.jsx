import React from 'react'
import Homeindex from '../Components/Homeindex'
import Benefits from '../Components/Benefits';
import ContactUs from '../Components/ContactUs';
import AboutUs from '../Components/AboutUs';
import Newsletter from "../Components/Newsletter";
import ProgramOverview from '../Components/ProgramOverview';

const Home = () => {
    return (
        <div className='w-full overflow-auto'>
            <Homeindex />
            <ProgramOverview />
            <AboutUs />
            <Benefits />
            <ContactUs />
            <Newsletter />
        </div>
    )
}

export default Home