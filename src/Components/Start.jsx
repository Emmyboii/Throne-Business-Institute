import React from 'react'
import { IoMdDoneAll } from "react-icons/io";


const Start = () => {
    return (
        <div className='bg-[#01022e]'>
            <div className='py-10 se:px-24 px-10'>
                <p className='text-center font-bold sp:text-[30px] text-white text-[22px]'>
                    HOW TO GET STARTED
                </p>
                <ul className='grid ma:grid-cols-3 sp:grid-cols-2 gap-10 mt-4'>
                    <li className='bg-[#01022e] text-white shadow-inner shadow-gray-600 text-center rounded-xl py-7 px-4'>
                        <p className='font-bold flex items-center justify-center text-[30px] text-orange-500'><IoMdDoneAll /></p>
                        <p className='text-[19px]'>Apply to see if you qualify for a scholarship <a href='https://wa.me/message/ZDO76R45EDU2K1' target='blank' className='text-orange-400 hover:scale-90 duration-300'>[here.]</a></p>
                    </li>
                    <li className='bg-[#01022e] text-white shadow-inner shadow-gray-600 text-center rounded-xl py-7 px-4'>
                        <p className='font-bold flex items-center justify-center text-[30px] text-orange-500'><IoMdDoneAll /></p>
                        <p className='text-[19px]'>Choose a program and a course. Pay your application fee of <span className='text-orange-400'>CHF 8</span> (N15,000 naira).</p>
                    </li>
                    <li className='bg-[#01022e] text-white shadow-inner shadow-gray-600 text-center rounded-xl py-7 px-4'>
                        <p className='font-bold flex items-center justify-center text-[30px] text-orange-500'><IoMdDoneAll /></p>
                        <p className='text-[19px]'>Choose a payment plan, and get started with your course.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Start