import { React, useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Background from "../Images/background2.jpg";
// import Graduate from '../Images/graduate.jpg';

const Homeindex = () => {

    const [menu, setMenu] = useState(
        JSON.parse(localStorage.getItem('menu')) || "program");

    useEffect(() => {
        localStorage.setItem('menu', JSON.stringify(menu));
    }, [menu]);


    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic"
        });
    }, []);

    return (
        <div className='w-full'>
            <div className='flex h-[100vh] justify-center bg-blue-400'>
                <img src={Background} alt="" className='w-full ma:object-fill object-cover opacity-50' />
                <div data-aos="fade-down" data-aos-delay="200" className='aos-init absolute top-[40%] sp:top-[50%] left-[4%]'>
                    <h1 className='xl:text-[65px] lg:text-[60px] md:text-[55px] sv:text-[49px] text-[48px] se:text-[57px] sp:text-[47px] font-bold text-white'>
                        Accelerate Your Future.
                    </h1>
                </div>
                <div className='absolute top-[67%] sp:top-[65%] xl:mr-[550px] 2la:mr-[450px] ms:mr-[400px] md:mr-[250px] sm:mr-[120px] sx:mr-[80px] left-[4%]'>
                    <p className='xl:text-[28px] lg:text-[26px] sm:text-[23px] sv:text-[21px] text-[19px] font-semibold text-white'>
                        Earn globally recognized degrees, diplomas and certificates with unbeatable scholarship.
                    </p>
                    <a href='/programs'>
                        <button onClick={() => setMenu('program')} data-aos="fade-up" data-aos-delay="600" className='aos-init bg-blue-400 st:mt-9 active:scale-95 text-white py-3 px-6 rounded-lg outline-none active:bg-blue-300'>
                            Start your Journey
                        </button>
                    </a>
                </div>
            </div>
            <div className='bg-gradient-to-r from-blue-900 from-50% to-orange-400 lg:py-[57px] mr:py-[50px] md:py-[42px] sa:py-[35px] py-[14px] text-center justify-center flex'>
                <p className='lg:text-[25px] mr:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] font-semibold sm:mx-[40px] md:mx-[55px] mx-[2px] sa:mx-[10px] text-white'>
                    Unlock your potential with our innovative online programs.
                    We offer a unique pathway to academic excellence. With our flexible online platform and world-class faculty,
                    you can achieve your educational goals without compromising your commitments.
                </p>
            </div>
        </div>

    )
}

export default Homeindex