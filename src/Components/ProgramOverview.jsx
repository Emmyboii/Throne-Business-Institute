import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRightLong } from "react-icons/fa6";
import PC from '../Images/PC.jpg';
import EAD from '../Images/EAD.jpg';
import EAD2 from '../Images/EAD2.jpg';
import ED from '../Images/ED.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProgramOverview = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic"
        });
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 4000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    autoplaySpeed: 4000,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (

        <div className='py-[50px] w-full px-[20px] bg-white text-orange-400'>
            <div className='flex flex-col xl:pr-[300px] xl:pl-[80px]'>
                <h1 data-aos="fade-down" data-aos-delay="200" className='aos-init md:text-[40px] sm:text-[34px] se:text-[29px] text-[23px] font-medium font-serif'>Program Overview</h1>
                <p data-aos="fade-up" data-aos-delay="400" className='aos-init mt-5 text-black/80'>
                    Throne Management and Business Intitute aims at offering all our students a broad and balanced curriculum that provides
                    rewarding and stimulating activities to prepare them for the best social and cultural life.
                </p>
            </div>

            <div className='mx-1 pt-10'>
                <Slider {...settings} >
                    <div className='border shadow-lg rounded-lg'>
                        <img className='max-h-[50dvh] min-h-[50dvh] w-full  object-fill hover:scale-y-105 rounded-t-lg duration-300' src={PC} alt="" />
                        <div className='pt-[20px] px-3 sx:px-7'>
                            <h1 className='text-center md:text-[20px] text-[19px] font-medium'>Professional Courses</h1>
                            <p className='pt-7 text-black/80'>Duration: 14 days</p>
                            <p className='pt-3 text-black/80'>
                                Our Professional Courses are focused on the attributes of talented experts in various industries
                                who shared their understanding on concepts of various in demand skills that can sky rocket your career from where
                                it is to where it should be.
                            </p>
                            <a target='_blank' rel="noreferrer" href='https://wa.me/p/4197348707047390/2349012104873'>
                                <button data-aos="fade-up" data-aos-delay="200" className='text-orange-400 flex gap-3 sm:hidden st:mt-[128px] sp:mt-[104px] sd:mt-[104px] mt-[149px] mb-[35px] st:mb-10 hover:scale-90 duration-500'>
                                    Learn More <FaArrowRightLong className='mt-[6px]' />
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://wa.link/01wlzw'>
                                <button data-aos="fade-up" data-aos-delay="200" className='text-orange-400 sm:mt-[114px] md:mt-[124px] ma:mt-[124px] mp:mt-[160px] mr:mt-[123px] mv:mt-[123px] lg:mt-[130px] xl:mt-[124px] 2lq:mt-[100px] mb-7 hidden sm:flex gap-3 hover:scale-90 duration-500'>
                                    Learn More <FaArrowRightLong className='mt-[6px]' />
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className='border shadow-lg rounded-lg'>
                        <img className='min-h-[50dvh] max-h-[50dvh] w-full hover:scale-y-105 rounded-t-lg duration-300 object-cover lg:object-cover xl:object-fill' src={EAD} alt="" />
                        <div className='pt-[20px] px-3 sx:px-7'>
                            <h1 className='text-center md:text-[20px] text-[19px] font-medium'>Executive Advance Diploma</h1>
                            <p className='pt-7 text-black/80'>Duration: One Month</p>
                            <p className='pt-3 text-black/80'>
                                Our Advance Executive Diploma Program is strongly focused on the application of knowledge, as well as developing
                                independent cognitive ability and practical research skills. Students are exposed to challenges within the
                                broader field of management that stimulates and develops critical thinking and creatvie problem-solving.
                            </p>
                            <a target='_blank' rel="noreferrer" href='https://wa.me/p/4197348707047390/2349012104873'>
                                <button data-aos="fade-up" data-aos-delay="200" className='text-orange-400 flex gap-3 md:hidden st:mt-[80px] mt-[72px] mb-[40px] sa:mt-[56px] sv:mt-[80px] st:mb-10 hover:scale-90 duration-500'>
                                    Learn More <FaArrowRightLong className='mt-[6px]' />
                                </button>
                            </a>
                            <a target='_blank' rel="noreferrer" href='https://wa.link/01wlzw'>
                                <button data-aos="fade-up" data-aos-delay="200" className='text-orange-400 hidden 2lq:mt-[52px] lg:mt-[82px] mv:mt-[75px] md:mt-[52px] xl:mt-[75px] mb-7 md:flex gap-3 hover:scale-90 duration-500'>
                                    Learn More <FaArrowRightLong className='mt-[6px]' />
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className='border shadow-lg rounded-lg'>
                        <img className=' max-h-[50dvh] min-h-[50dvh] w-full hover:scale-y-105 rounded-t-lg duration-300 lg:object-cover xl:object-fill' src={ED} alt="" />
                        <div className='pt-[20px] px-3 sx:px-7'>
                            <h1 className='text-center md:text-[20px] text-[19px] font-medium'>Associate Bachelor's Degree</h1>
                            <p className='pt-7 text-black/80'>Duration: Two Years</p>
                            <p className='pt-3 text-black/80'>
                                Our Associate Degree Bachelor's Program is designed to enable you understand what it takes to be ever prepared
                                in a ever changing world. With our world class professors and lecturers, the program is expected to imbibe key
                                values and effective strategies that can only foster progress in the latest management issues and challenges
                            </p>
                            <a target='_blank' rel="noreferrer" href='https://wa.me/p/4197348707047390/2349012104873'>
                                <button data-aos="fade-up" data-aos-delay="200" className='text-orange-400 flex gap-3 md:hidden st:mt-[80px] mt-[43px] mb-[40px] sa:mt-[56px] sv:mt-[80px] st:mb-10 hover:scale-90 duration-500'>
                                    Learn More <FaArrowRightLong className='mt-[6px]' />
                                </button>
                            </a>
                            <a target='_blank' rel="noreferrer" href='https://wa.link/01wlzw'>
                                <button data-aos="fade-up" data-aos-delay="200" className='text-orange-400 hidden md:flex gap-3 2lq:mt-[52px] mv:mt-[75px] md:mt-[52px] lg:mt-[82px] xl:mt-[75px] mb-7 hover:scale-90 duration-500'>
                                    Learn More <FaArrowRightLong className='mt-[6px]' />
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className='border md:mx-0 shadow-lg rounded-lg'>
                        <img className='max-h-[50dvh] min-h-[50dvh] w-full object-cover lg:object-cover xl:object-fill hover:scale-y-105 rounded-t-lg duration-300' src={EAD2} alt="" />
                        <div className='pt-[20px] px-3 sx:px-7'>
                            <h1 className='text-center md:text-[20px] text-[19px] font-medium'>Executive MBA Program</h1>
                            <p className='pt-7 text-black/80'>Duration: 6 Months - 2 Years</p>
                            <p className='pt-3 text-black/80'>
                                The Masters of Administration Programs (MBA) are internationally-recognized programs designed to develop the skills required for careers in
                                business and management. The value of MBA, however, is not limited strictly to the business world. an MBA can also be useful for those pursuing
                                a managerial career in the public section, government, private industry, amd other areas.
                            </p>
                            <a target='_blank' rel="noreferrer" href='https://wa.me/p/4197348707047390/2349012104873'>
                                <button data-aos="fade-up" data-aos-delay="200" className='text-orange-400 flex gap-3 sm:hidden my-8 sd:mt-[60px] st:my-9 sp:my-12 hover:scale-90 duration-500'>
                                    Learn More <FaArrowRightLong className='mt-[6px]' />
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://wa.link/01wlzw'>
                                <button data-aos="fade-up" data-aos-delay="200" className='text-orange-400 hidden sm:flex gap-3 xl:my-7 sm:my-[47px] mv:my-[40px] lg:my-[43px] my-7 hover:scale-90 duration-500'>
                                    Learn More <FaArrowRightLong className='mt-[6px]' />
                                </button>
                            </a>
                        </div>
                    </div>
                </Slider >
            </div>
        </div>
    )
}

export default ProgramOverview