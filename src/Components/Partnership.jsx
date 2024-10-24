import React from 'react'
import SOBAT from '../Images/sobat_logo.png';
import IICSE from '../Images/iu_logo.png';
import HIGH from '../Images/High Flyers.png';
import ESAE from '../Images/ESAE.png';
import WEST from '../Images/weuclogo2.png';

const Partnership = () => {
    return (
        <div className='py-5 px-6'>
            <p className='text-center font-bold text-[50px] mp:text-[37px] text-orange-400'>PARTNERSHIPS</p>
            <div className='grid xl:grid-cols-3 sp:grid-cols-2 sp:gap-3 gap-9 pt-[40px]'>
                <div className='flex items-center justify-center'>
                    <img src={SOBAT} alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={IICSE} alt="" />
                </div>
                <div className='xl:flex hidden items-center justify-center'>
                    <img src={HIGH} alt="" />
                </div>
            </div>
            <div className='xl:grid hidden grid-cols-2 mt-10'>
                <div className='flex items-center justify-center'>
                    <img src={ESAE} alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={WEST} alt="" />
                </div>
            </div>
            <div className='xl:hidden grid sp:grid-cols-2 mt-9 gap-9'>
                <div className='flex items-center justify-center'>
                    <img src={HIGH} alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={ESAE} alt="" />
                </div>
            </div>
            <div className='xl:hidden mt-9 flex items-center justify-center'>
                <img src={WEST} alt="" />
            </div>
        </div>
    )
}

export default Partnership