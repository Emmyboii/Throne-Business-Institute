import React from 'react'
import whatsapp from '../Images/WhatsApp2.png';
import call from '../Images/cc.JPG';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {


    return (
        <div id='contact' className='bg-blue-500 w-full ms:flex flex flex-col-reverse ms:flex-row ms:pl-[30px] ms:pt-[70px] pb-10'>
            <div className='ms:ml-[70px]'>
                <div className='flex flex-col text-white'>
                    <h1 className='font-bold text-[28px] se:text-[35px] sm:text-[40px] ms:text-[35px] ms:mt-0 text-center ms:text-start se:mt-8 text-orange-200 pb-1'>Contact Us</h1>
                    <h1 className='text-[20px] se:text-[23px] sm:text-[25px] ms:text-[20px] ms:mr-[50px] pt-5 mx-3 text-center ms:text-start flex justify-center ms:justify-normal'>Wish to Inquire about admission, syllabus or anything else?</h1>
                    <p className='text-[20px] se:text-[23px] sm:text-[25px] ms:text-[28px] mt-4 se:mt-5 text-center ms:text-start font-bold'>CHAT WITH AN ADVISOR</p>
                    <div className='flex flex-col se:flex-row gap-3 my-5 ms:text-start items-center justify-center ms:justify-start'>
                        <img className='w-[6%] se:w-[4%]' src={whatsapp} alt="" />
                        <a href="https://wa.link/dgb7ft" rel='noreferrer' target='_blank' className='hover:scale-95 text-[20px] font-semibold duration-500 ms:mr-[220px]'>
                            +243 903 260 5684
                        </a>
                    </div>
                    <p className='text-[20px] se:text-[23px] sm:text-[25px] ms:text-[30px] font-bold text-center ms:text-start mt-4 se:mt-3'>Or Call us or send us a mail</p><br />
                    <div className='ms:block hidden'>
                        <div className='flex gap-3 items-center mt-3'>
                            <FaPhoneVolume className='text-[27px]' />
                            <a href='tel: +2439012104873' rel='noreferrer' target='_blank' className='hover:scale-95 text-[20px] font-semibold duration-500 mr-[220px]'>
                                +243-901-210-4873
                            </a>
                        </div>
                        <div className='flex gap-3 items-center mt-9'>
                            <MdOutlineEmail className='text-[27px]' />
                            <a href='mailto:tmbi@mail.ee' rel='noreferrer' target='_blank' className='hover:scale-95 text-[20px] font-semibold duration-500 mr-[220px]'>
                                tmbi@mail.ee
                            </a>
                        </div>
                    </div>
                    <div className='se:grid se:grid-cols-2 ms:hidden'>
                        <div className='flex flex-col gap-3 items-center pt-3'>
                            <FaPhoneVolume className='sv:text-[27px] text-[23.4px]' />
                            <a href='tel: +2439012104873' rel='noreferrer' target='_blank' className='text-[20px] font-semibold hover:scale-90 duration-500'>
                                +243-901-210-4873
                            </a>
                        </div>
                        <div className='flex flex-col gap-3 items-center pt-3'>
                            <MdOutlineEmail className='sv:text-[27px] text-[23.4px]' />
                            <a href='mailto:tmbi@mail.ee' rel='noreferrer' target='_blank' className='text-[20px] font-semibold hover:scale-90 duration-500'>
                                tmbi@mail.ee
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center ms:mr-[50px]'>
                <img className='rounded-[12px] scale-75 sm:scale-90 bg-black opacity-80' src={call} alt="" />
            </div>
        </div>
    )
}

export default ContactUs