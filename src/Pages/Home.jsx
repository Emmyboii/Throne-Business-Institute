import React from 'react'
import Homeindex from '../Components/Homeindex'
// import Analytics from '../Components/Analytics'
// import Quote from '../Components/Quote';
// import Whatsapp from '../Components/Whatsapp';
import Benefits from '../Components/Benefits';
import ContactUs from '../Components/ContactUs';
import AboutUs from '../Components/AboutUs';
import Newsletter from "../Components/Newsletter";
import ProgramOverview from '../Components/ProgramOverview';

const Home = () => {
    return (
        <div>
            <Homeindex />
            {/* <Analytics /> */}
            {/* <Quote /> */}
            <ProgramOverview />
            <AboutUs />
            <Benefits />
            <Newsletter />
            {/* <Whatsapp /> */}
            <ContactUs />
        </div>
    )
}

export default Home