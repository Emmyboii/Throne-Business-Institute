import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Blackbg from '../Images/Blackbg.JPG';
import graduate from '../Images/graduate.jpg';
import { FaArrowRightLong } from "react-icons/fa6";

const AboutUs = () => {

    useEffect(() => {
        AOS.init({
            duration: 1100,
            easing: "ease-out-cubic"
        });
        AOS.refresh();
    }, []);

    return (
        <div className='w-full text-white bg-blue-600 py-[50px] flex flex-col items-center justify-center'>
            <h1 className='text-orange-400 lg:text-[65px] md:text-[45px] st:text-[36px] text-[30px] font-semibold'>
                About Us
            </h1>
            <div className='md:grid md:grid-cols-2 flex flex-col-reverse'>
                <div className='xl:px-[50px] md:pl-[30px]'>
                    <p data-aos="fade-down" data-aos-delay="200" className='aos-init sm:text-[30px] st:text-[26px] text-[22px] text-center md:text-left mt-0 st:mt-5 lg:mt-1 font-medium'>
                        What We Represent
                    </p>
                    <p data-aos="fade-up" data-aos-delay="200" className='aos-init lg:text-[21px] st:text-[17px] sm:text-[18px] text-[17px] mx-6 md:mx-0 mt-4 font-medium leading-6 st:leading-7'>
                        Throne Management and Business Institute Switzerland (TMBI) is a pioneering educational
                        institution dedicated to empowering individuals with the knowledge and skills necessary to
                        succeed in the dynamic global landscape. Founded in 2018, TMBI is the first WhatsApp-based
                        peer-to-peer educational institute in Nigeria, offering a unique and accessible approach to
                        learning.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="300" className='aos-init lg:text-[21px] st:text-[17px] sm:text-[18px] mx-6 md:mx-0 se:pt-8 pt-4 font-medium leading-6 st:leading-7'>
                        Our values include innovation, accessibility, excellence, integrity, and impact. We believe in
                        embracing innovation to deliver engaging and effective learning experiences, making education
                        accessible to all, providing the highest quality education, upholding the highest ethical standards,
                        and making a positive impact on society.
                    </p><br />
                    <a rel="noreferrer" href='/about'>
                        <p data-aos="fade-up" className=' text-orange-500 st:text-[20px] flex gap-3 hover:scale-90 duration-500'>
                            Learn More <FaArrowRightLong className='mt-[6px]' />
                        </p>
                    </a>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='rounded-lg sm:scale-105 st:scale-75 scale-75 st:mt-[45px] mt-[30px] sm:mt-[80px] md:mt-[100px] md:scale-90 lg:scale-95 xl:scale-100 object-cover' src={graduate} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs