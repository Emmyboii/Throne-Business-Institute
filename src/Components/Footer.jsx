import React from 'react'
import Logo from '../Images/TBI logo.png';
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='w-full  bg-black/90 text-white pt-[40px] sa:pl-5 sx:px-[50px] pb-[40px]'>
            <div className='2ls:grid 2ls:grid-cols-3'>
                <div className='flex flex-col  mr-[60px]'>
                    <a href='/'><img onClick={() => window.scrollTo(0, 0)} src={Logo} width={200} alt="" /></a>
                    <div className='flex ms:hidden ml-[50px] mt-9 text-[25px] gap-4'>
                        <a href="https://ng.linkedin.com/company/tmbis-ng-trs" rel='noreferrer' target='_blank' className='underline'>
                            <FaLinkedin />
                        </a>
                        <a href="https://wa.link/kpeupv" rel='noreferrer' target='_blank' className='underline'>
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
                <div className='flex mr:flex-row items-center mr:items-start flex-col 2ls:col-span-2 justify-between 2ls:mt-0 mt-10'>
                    <div className='flex flex-col text-center mr:text-start'>
                        <h1 className='font-bold text-[25px]'>Office Enquiry</h1>
                        <p className='sx:pt-8 pt-4 font-serif'>Strictly by Invitation</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-[25px] mr:mt-0 mt-8 text-center mr:text-start'>Contact Us</h1>
                        <div className='mr:flex mr:gap-3 text-center sx:pt-8 pt-4 '>
                            <FaMapMarkerAlt className='mt-2 mr:block hidden' /><p>Lennox Mall | Lekki Phase 1 | Admiralty Way Lekki Lagos  Nigeria</p>
                        </div>
                        <div className='mr:flex mr:gap-3 text-center items-center pt-8'>
                            <MdOutlineEmail className='mr:block hidden'/>
                            <a href='mailto:tmbi@mail.ee' rel='noreferrer' target='_blank'>
                                tmbi@mail.ee
                            </a>
                        </div>
                        <div className='mr:flex mr:gap-3 text-center items-center pt-8'>
                            <FaPhoneVolume className='mr:block hidden'/>
                            <a href='tel: +2439012104873' rel='noreferrer' target='_blank'>
                                +243-901-210-4873
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white ms:flex items-center mt-[100px] xl:mr-0 md:mr-[50px]'>
                <p className='text-[13px]  mr:text-[14px] text-white/80 text-center ms:text-start flex gap-1'>
                    <FaRegCopyright className='text-[20px] mt-1 text-white/80' />
                    2024 Throne Management and Business Institute Switzerland | Powered by Throne Management and Business Institute Switzerland
                </p>
                <div className='ms:flex hidden lg:flex-row flex-col ml-[120px] text-[25px] gap-4'>
                    <a href="https://ng.linkedin.com/company/tmbis-ng-trs" rel='noreferrer' target='_blank' className='underline'>
                        <FaLinkedin />
                    </a>
                    <a href="https://wa.link/kpeupv" rel='noreferrer' target='_blank' className='underline'>
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer