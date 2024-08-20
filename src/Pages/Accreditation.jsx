import React from 'react'
import Combo from '../Images/ACC.jpg';
import SWL from '../Images/SWL.jpg';
import MEC from '../Images/MEC.jpg';
import CAR from '../Images/CAR.jpg';


const Accreditation = () => {
    return (
        <div>
            <div className='bg-black flex text-center justify-center'>
                <img className='max-h-dvh min-h-[50dvh] w-full opacity-40 object-cover' src={Combo} alt="" />
                <h1 className='absolute lg:top-[26%] top-[30%] sy:top-[48%] sy:text-[55px] se:text-[47px] sv:text-[40px] st:text-[30px] text-[24px] font-bold font-serif text-white'>ACCREDITATIONS</h1>
            </div>
            <div className='py-[60px] text-center'>
                <div className='border-b-2 border-black/55'>
                    <div className='lg:grid lg:grid-cols-2 flex flex-col items-center justify-center lg:ml-[55px] ml-5 mr-5 mb-[50px]'>
                        <img className='border-black border-4 h-[100vh] sm:scale-100 se:scale-90 scale-75' src={SWL} alt="" />
                        <div className='lg:mt-[200px] sv:mt-[30px]'>
                            <h1 className='text-[30px] font-semibold font-serif'>Switzerland</h1>
                            <p className='font-serif leading-8 lg:mx-0 md:mx-10'>
                                The State Secretariat for Education, Research and Innovation SERI within the Federal Department of Economic
                                Affairs, Education and Research EAER is the federal government's specialised agency for national and international
                                matters concerning education, research and innovation policy.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='border-b-2 border-black/55'>
                    <div className='lg:grid lg:grid-cols-2 flex flex-col-reverse items-center justify-center lg:mx-[55px] mx-5 my-[50px]'>
                        <div className='lg:mt-[200px] sv:mt-[30px]'>
                            <h1 className='text-[30px] font-semibold font-serif'>The Republic Of Chad</h1>
                            <p className='font-serif leading-8 lg:mx-0 md:mx-10'>
                                The PIET sets out the Government of Chad's policy on education for the period 2018-2020. It covers all levels of education
                                (from pre- school to higher education).
                            </p>
                        </div>
                        <img className='border-black border-4 xl:ml-[55px] sm:scale-100 se:scale-90 scale-90 sm:object-fill object-cover h-[100vh]' src={MEC} alt="" />
                    </div>
                </div>

                <div className='lg:grid lg:grid-cols-2 flex flex-col items-center justify-center lg:ml-[55px] ml-5 mr-5 mt-[50px]'>
                    <img className='border-black border-4 h-[100vh] sm:scale-100 se:scale-90 scale-75' src={CAR} alt="" />
                    <div className='lg:mt-[240px] sv:mt-[30px]'>
                        <h1 className='text-[30px] font-semibold font-serif'>Central African Republic</h1>
                        <p className='font-serif leading-8 lg:mx-0 md:mx-10'>
                            The Ministry of Higher Education (Ministère de l'Enseignement Supérieur) is a government ministry responsible
                            for overseeing and regulating higher education institutions in the country, as well as developing policies and
                            strategies to improve the quality of education.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accreditation