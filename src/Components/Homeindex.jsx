import { React, useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Background1 from "../Images/background2.jpg";
import { RiArrowUpWideLine } from "react-icons/ri";
import Background2 from "../Images/BG1.jpg";
import Background3 from "../Images/BG2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homeindex = () => {


    const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY > 400) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)


    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic"
        });
    }, []);


    var settings = {
        infinite: true,
        fade: true,
        speed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5700,
    };


    return (
        <div className='w-full h-[100%] bg-blue-600 outline-none border-none'>
            <div>
                <Slider {...settings} >
                    <img src={Background1} alt='' className='w-full max-h-dvh min-h-[60dvh] object-cover opacity-50' />
                    <img src={Background2} alt='' className='w-full max-h-dvh min-h-[60dvh] object-cover opacity-50' />
                    <img src={Background3} alt='' className='w-full max-h-dvh min-h-[60dvh] object-cover opacity-50' />
                </Slider>
            </div>
            <div data-aos="fade-down" data-aos-delay="200" className='aos-init absolute top-[22%] flex flex-col  justify-center sp:top-[33%] mr:top-[50%] left-[4%]'>
                <h1 className='xl:text-[65px] lg:text-[60px] md:text-[55px] leading-[50px] sv:text-[49px] text-[48px] se:text-[57px] sp:text-[47px] font-bold text-white'>
                    Accelerate <br className='sp:hidden block' /> Your Future.
                </h1>
                <p className='xl:text-[28px] pt-8 lg:text-[26px] sm:text-[23px] sv:text-[21px] text-[19px] xl:mr-[550px] 2la:mr-[450px] ms:mr-[400px] md:mr-[250px] sm:mr-[120px] sx:mr-[80px] font-semibold text-white'>
                    Earn globally recognized degrees, diplomas and certificates with unbeatable scholarship.
                </p>
                <a href='#programs'>
                    <button data-aos="fade-up" data-aos-delay="600" className='aos-init bg-blue-400 mt-9 active:scale-95 text-white py-3 px-6 rounded-lg outline-none active:bg-blue-300'>
                        Start your Journey
                    </button>
                </a>
            </div>
            <button onClick={() => window.scrollTo(0, 0)} title='Scroll To Top' data-aos="slide-right" data-aos-delay="100" className={fix ? 'bg-gray-500  p-1 fixed rounded-full text-white top-[90%] left-[-2%] z-40 mx-11' : 'hidden'}>
                <RiArrowUpWideLine size={40} className='' />
            </button>

            <div className='bg-gradient-to-r from-blue-500 from-50% to-orange-400 lg:py-[57px] mr:py-[50px] md:py-[42px] sa:py-[35px] py-[14px] text-center justify-center flex'>
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