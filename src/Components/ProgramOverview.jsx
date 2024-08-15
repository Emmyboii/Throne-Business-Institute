import {React, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRightLong } from "react-icons/fa6";
import PC from '../Images/PC.jpg';
// import PC2 from '../Images/PC2.jpg';
// import video from '../Images/PC Vid.mp4';
import EAD from '../Images/EAD.jpg';
import ED from '../Images/ED.jpg';


const ProgramOverview = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic"
        });
    }, []);

    // let slideIndex = 0;
    // showSlides();

    // function showSlides() {
    //     let i;
    //     let slides = document.getElementsByClassName("mySlides");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) { slideIndex = 1 }
    //     slides[slideIndex - 1].style.display = "block";
    //     setTimeout(showSlides, 2000); // Change image every 2 seconds
    // }

    return (
        <div className='py-[50px] px-[30px] bg-white'>
            <div className='flex flex-col xl:pr-[350px]'>
                <h1 data-aos="fade-down" data-aos-delay="200" className='aos-init md:text-[40px] sm:text-[34px] se:text-[29px] text-[23px] font-medium font-serif'>Program Overview</h1>
                <p data-aos="fade-up" data-aos-delay="400" className='aos-init mt-5'>
                    Throne Management and Business Intitute aims at offering all our students a broad and balanced curriculum that provides
                    rewarding and stimulating activities to prepare them for the best social and cultural life.
                </p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 mx-1 pt-10'>
                <div className='border md:mx-0 sm:mx-[80px] se:mx-[60px] shadow-lg rounded-lg'>
                    {/* <div className='mySlides'> */}
                        <img className='h-[50vh] w-full hover:scale-y-105 rounded-t-lg duration-300 object-cover' src={PC} alt="" />
                    {/* </div> */}
                    <div className='pt-[20px] pb-[93px] px-7'>
                        <h1 className='text-center md:text-[20px] text-[19px] font-medium'>Professional Courses</h1>
                        <p className='pt-7'>Duration: 14 days</p>
                        <p className='pt-3 text-black/80'>
                            Our Professional Courses are focused on the attributes of talented experts in various industies
                            who shared their understanding on concepts of various in demand skills that can sky rocket your career from where
                            it is to where it should be.
                        </p>
                        <a target='_blank' rel="noreferrer" href='https://wa.me/p/4197348707047390/2349012104873'>
                            <button data-aos="fade-up" data-aos-delay="200" className='text-orange-500 mt-[45px] md:mt-[95px] flex gap-3 sm:hidden absolute hover:scale-90 duration-500'>
                                Learn More <FaArrowRightLong className='mt-[6px]' />
                            </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://wa.link/01wlzw'>
                            <button data-aos="fade-up" data-aos-delay="200" className='text-orange-500 mt-[45px] md:mt-[95px] hidden sm:flex gap-3 absolute hover:scale-90 duration-500'>
                                Learn More <FaArrowRightLong className='mt-[6px]' />
                            </button>
                        </a>
                    </div>
                </div>

                <div className='border md:mx-0 sm:mx-[80px] se:mx-[60px] shadow-lg  rounded-lg '>
                    <img className='h-[50vh] w-full hover:scale-y-105 rounded-t-lg duration-300 object-cover' src={EAD} alt="" />
                    <div className='pt-[20px] pb-[93px] px-7'>
                        <h1 className='text-center md:text-[20px] text-[19px] font-medium'>Executive Advance Diploma</h1>
                        <p className='pt-7'>Duration: One Month</p>
                        <p className='pt-3 text-black/80'>
                            Our Advance Executive Diploma is strongly focused on the application of knowledge, as well as developing
                            independent cognitive ability and practical research skills. Students are exposed to challenges within the
                            broader field of management that stimulates and develops critical thinking and creatvie problem-solving.
                        </p>
                        <a target='_blank' rel="noreferrer" href='https://wa.me/p/4197348707047390/2349012104873'>
                            <button data-aos="fade-up" data-aos-delay="200" className='text-orange-500 flex gap-3 md:hidden mt-11 absolute hover:scale-90 duration-500'>
                                Learn More <FaArrowRightLong className='mt-[6px]' />
                            </button>
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://wa.link/01wlzw'>
                            <button data-aos="fade-up" data-aos-delay="200" className='text-orange-500 hidden mt-11 md:flex gap-3 absolute hover:scale-90 duration-500'>
                                Learn More <FaArrowRightLong className='mt-[6px]' />
                            </button>
                        </a>
                    </div>
                </div>

                <div className='border md:mx-0 sm:mx-[80px] se:mx-[60px] shadow-lg rounded-lg '>
                    <img className='h-[50vh] w-full hover:scale-y-105 rounded-t-lg duration-300 object-' src={ED} alt="" />
                    <div className='pt-[20px] pb-[93px] px-7'>
                        <h1 className='text-center md:text-[20px] text-[19px] font-medium'>Associate Bachelor's Degree</h1>
                        <p className='pt-7'>Duration: Two Years</p>
                        <p className='pt-3 text-black/80'>
                            Our Associate Degree Bachelor's Program is designed to enable you understand what it takes to be ever prepared
                            in a ever changing world. With our world class professors and lecturers, the program is expected to imbibe key
                            values and effective strategies that can only foster progress in the latest management issues and challenges
                        </p><br />
                        <a target='_blank' rel="noreferrer" href='https://wa.me/p/4197348707047390/2349012104873'>
                            <button data-aos="fade-up" data-aos-delay="200" className='text-orange-500 flex gap-3 md:hidden mt-11 md:mt-6 absolute hover:scale-90 duration-500'>
                                Learn More <FaArrowRightLong className='mt-[6px]' />
                            </button>
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://wa.link/01wlzw'>
                            <button data-aos="fade-up" data-aos-delay="200" className='text-orange-500 hidden md:flex gap-3 mt-11 md:mt-6 absolute hover:scale-90 duration-500'>
                                Learn More <FaArrowRightLong className='mt-[6px]' />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramOverview