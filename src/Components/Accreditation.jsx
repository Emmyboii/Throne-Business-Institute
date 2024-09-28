import React from 'react'
import SWL from '../Images/SWL.jpg';
import MEC from '../Images/MEC.jpg';
import CAR from '../Images/CAR.jpg';
import NGR from '../Images/nigeria.png';


const Accreditation = () => {

    return (
        <div id='accreditation' className='bg-pink-50 pb-5'>
            <div className='bg-black flex text-center justify-center'>
                <h1 className='py-10 sy:text-[55px] se:text-[47px] sv:text-[40px] st:text-[30px] text-[24px] font-bold font-serif text-white'>ACCREDITATIONS</h1>
            </div>
            <div className='py-[40px] text-center grid lg:grid-cols-3 sm:grid-cols-2'>
                <div>
                    <div className='flex flex-col items-center justify-center mx-5'>
                        <img className='border-black border-4 h-[50vh]' src={SWL} alt="" />
                        <div className='mt-[30px]'>
                            <h1 className='text-[30px] font-semibold text-orange-400 font-serif'>Switzerland</h1>
                            <p className='font-serif leading-8 lg:mx-0 md:mx-10'>
                                The State Secretariat for Education, Research and Innovation SERI within the Federal Department of Economic
                                Affairs, Education and Research EAER is the federal government's specialised agency for national and international
                                matters concerning education, research and innovation policy.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col-reverse items-center justify-center mx-5 sm:mt-0 mt-11'>
                        <div className='mt-[30px]'>
                            <h1 className='text-[30px] font-semibold text-orange-400 font-serif'>The Republic Of Chad</h1>
                            <p className='font-serif leading-8 lg:mx-0 md:mx-10'>
                                The PIET sets out the Government of Chad's policy on education for the period 2018-2020. It covers all levels of education
                                (from pre- school to higher education).
                            </p>
                        </div>
                        <img className='border-black border-4 xl:ml-[55px] h-[50vh]' src={MEC} alt="" />
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center mx-5 lg:mt-0 mt-11'>
                    <img className='border-black border-4 h-[50vh]' src={CAR} alt="" />
                    <div className='mt-[30px]'>
                        <h1 className='text-[30px] font-semibold text-orange-400 font-serif'>Central African Republic</h1>
                        <p className='font-serif leading-8 lg:mx-0 md:mx-10'>
                            The Ministry of Higher Education (Ministère de l'Enseignement Supérieur) is a government ministry responsible
                            for overseeing and regulating higher education institutions in the country, as well as developing policies and
                            strategies to improve the quality of education.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className='grid grid-cols-2 items-center px-10 justify-center'>
                <p className='text-[22px]'>
                    All our programs are recognized by the Federal Government of Nigeria with students guaranteed of NYSC certificate afterwards.
                </p>
                <div className='ml-[320px]'>
                    <img src={NGR} alt="" className='w-[50%]' />
                </div>
            </div> */}
        </div>
    )
}

export default Accreditation