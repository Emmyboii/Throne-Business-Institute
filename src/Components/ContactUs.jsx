import React from 'react'
import whatsapp from '../Images/WhatsApp2.png';
import call from '../Images/cc.JPG';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
    return (
        <div className='bg-black/80 w-full ms:grid flex flex-col-reverse ms:grid-cols-2 ms:pl-[30px] ms:pt-[70px] pb-10'>
            <div>
                <div className='flex flex-col text-white'>
                    <h1 className='font-bold text-[28px] se:text-[35px] sm:text-[40px] ms:text-[35px] text-center flex justify-center ms:text-justify ms:mt-0 se:mt-8 text-orange-200 pb-1'>Contact Us</h1>
                    <h1 className='text-[20px] se:text-[23px] sm:text-[25px] ms:text-[20px] ms:mr-[50px] pt-5 text-center ms:text-start flex justify-center ms:justify-normal'>Wish to Inquire about admission, syllabus or anything else?</h1>
                    <p className='text-[20px] se:text-[23px] sm:text-[25px] ms:text-[20px] mt-4 se:mt-3 text-center flex justify-center ms:justify-normal'>Call us or send us a mail</p><br />
                    <div className='ms:block hidden'>
                        <div className='flex gap-3 mt-8'>
                            <img className='w-[5%]' src={whatsapp} alt="" />
                            <a href="https://wa.link/kpeupv" rel='noreferrer' target='_blank' className='underline hover:scale-95 duration-500 mr-[220px]'>
                                https://wa.link/kpeupv
                            </a>
                        </div>
                        <div className='flex gap-3 items-center mt-12'>
                            <FaPhoneVolume className='text-[20px]' />
                            <a href='tel: +2439012104873' rel='noreferrer' target='_blank' className='hover:scale-95 duration-500 mr-[220px]'>
                                +243-901-210-4873
                            </a>
                        </div>
                        <div className='flex gap-3 items-center mt-12'>
                            <MdOutlineEmail className='text-[20px]' />
                            <a href='mailto:tmbi@mail.ee' rel='noreferrer' target='_blank' className='hover:scale-95 duration-500 mr-[220px]'>
                                tmbi@mail.ee
                            </a>
                        </div>
                    </div>
                    <div className='se:grid se:grid-cols-3 ms:hidden'>
                        <div className='flex flex-col gap-3 items-center pt-8'>
                            <img className='w-[7%] sw:w-[7%] se:w-[12%] items-center' src={whatsapp} alt="" />
                            <a href="https://wa.link/kpeupv" rel='noreferrer' target='_blank' className='underline hover:scale-90 duration-500'>
                                https://wa.link/kpeupv
                            </a>
                        </div>
                        <div className='flex flex-col gap-3 items-center pt-8'>
                            <FaPhoneVolume className='text-[25px]' />
                            <a href='tel: +2439012104873' rel='noreferrer' target='_blank' className='hover:scale-90 duration-500'>
                                +243-901-210-4873
                            </a>
                        </div>
                        <div className='flex flex-col gap-3 items-center pt-8'>
                            <MdOutlineEmail className='text-[25px]' />
                            <a href='mailto:tmbi@mail.ee' rel='noreferrer' target='_blank' className='hover:scale-90 duration-500'>
                                tmbi@mail.ee
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img className='rounded-[12px] scale-75 sm:scale-90 bg-black opacity-80' src={call} alt="" />
            </div>
        </div>
    )
}

export default ContactUs