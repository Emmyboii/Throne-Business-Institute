import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from "react-typed";
import Background from "../Images/background2.jpg";
// import Graduate from '../Images/graduate.jpg';

const Homeindex = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic"
        });
    }, []);

    return (
        <div>
            <div className='flex h-[100vh] text-center justify-center bg-black'>
                <img src={Background} alt="" className='w-full object-cover opacity-50' />
                <div className='absolute sm:pt-[90px] pt-[53px]'>
                    <h1 className='lg:text-[70px] md:text-[64px] sm:text-[55px] sv:text-[47px] text-[38px] font-bold text-blue-500'>
                        <ReactTyped
                            strings={[
                                'Your Future, Accelerated',
                            ]}
                            typeSpeed={80}
                            backSpeed={90}
                            startDelay={400}
                            showCursor={false}
                            loop
                        />
                    </h1>
                </div>
                <div className='absolute text-center items-center lg:top-[300px] sm:top-[260px] md:mx-[60px] sv:mx-[30px] mx-[18px] sv:top-[260px] top-[240px]'>
                    <p className='lg:text-[30px] md:text-[26px] sm:text-[23px] sv:text-[21px] text-[19px] font-semibold text-white'>
                        Earn a globally recognized degree in Diplomas and MBA tutored by world-class professors with unbeatable scholarships.
                    </p>
                    <p className='lg:text-[23px] md:text-[21px] sm:text-[20px] sv:text-[18px] text-[17px] se:pt-[120px] sv:pt-[70px] pt-[60px] drop-shadow-md font-semibold text-white'>
                        Unlock your potential with our innovative online programs.
                        We offer a unique pathway to academic excellence. With our flexible online platform and world-class faculty,
                        you can achieve your educational goals without compromising your commitments.
                    </p>

                    <a href='/programs'>
                        <button data-aos="fade-up" data-aos-delay="200" className='aos-init bg-red-500 st:mt-9 active:scale-95 text-white py-3 px-6 rounded-lg outline-none active:bg-red-400'>
                            Start your Journey
                        </button>
                    </a><br /><br />
                </div>
            </div>
            <div className='bg-gradient-to-r from-blue-900 from-50% to-orange-400 lg:py-[57px] mr:py-[50px] md:py-[42px] sa:py-[35px] py-[6px] text-center justify-center flex'>
                <p className='lg:text-[25px] mr:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] font-semibold sm:mx-[60px] md:mx-[100px] mx-[2px] sa:mx-[10px] text-white'>
                    High-quality education at a fraction of the cost.
                    Learn at your own pace, from anywhere in the world.
                    Earn a degree valued worldwide.
                    Enroll with just your SSCE.
                    Get an NYSC certificate after.
                </p>
            </div>
        </div>

    )
}

export default Homeindex