import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Call from '../Images/call.jpeg';
import Newsletter from "../Components/Newsletter";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";

const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic"
        });
    }, []);

    return (
        <div className='bg-'>
            <div data-aos="zoom-in" data-aos-delay="100" className='aos-init flex bg-black text-center justify-center'>
                <img className='w-full opacity-30 max-h-dvh min-h-[50dvh] object-cover' src={Call} alt="" />
                <div className='absolute ss:py-[200px] mp:py-[120px] mr:py-[160px] py-[160px] text-white'>
                    <h1 className='ss:text-[100px] se:text-[80px] text-[58px]'>Get In Touch</h1>
                </div>
            </div>
            <div className='md:grid md:grid-cols-3 bg-black/90 text-white sl:px-[50px] py-[80px]'>
                <div className='flex flex-col text-center items-center px-9'>
                    <FaMapMarkerAlt className='text-[26px]' />
                    <p className='sl:text-[30px] text-[23px] font-semibold'>Visit Us</p>
                    <p className='text-[16px] font-medium pb-3'>Find us at</p>
                    <p>Lennox Mall | Lekki Phase 1 | Admiralty Way Lekki Lagos Nigeria</p>
                </div>
                <div className='flex flex-col md:mt-0 mt-[50px] text-center items-center'>
                    <FaPhoneVolume className='text-[26px]' />
                    <p className='sl:text-[30px] text-[23px] font-semibold'>Call Us</p>
                    <p className='text-[16px] font-medium pb-3'>Round the clock support</p>
                    <p>+243-901-210-4873</p>
                </div>
                <div className='flex flex-col md:mt-0 mt-[50px] text-center items-center'>
                    <FaRegMessage className='text-[26px]' />
                    <p className='sl:text-[30px] text-[23px] font-semibold'>Contact Us</p>
                    <p className='text-[16px] font-medium pb-3'>Feel free to send us a mail</p>
                    <p>tmbi@mail.ee</p>
                </div>
            </div>
            <Newsletter />
        </div>
    )
}

export default Contact