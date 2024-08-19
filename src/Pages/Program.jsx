import React from 'react'
import Back from '../Images/programBG.jpg';
import ED2 from '../Images/girl.JPG';
import PC2 from '../Images/PC3.png';
import { TbCurrencyNaira } from "react-icons/tb";
// import { ReactTyped } from 'react-typed';

const Program = () => {
  return (
    <div className='bg-black w-full h-[100%]'>
      <img className='w-full opacity-20 h-[90vh] object-cover' src={Back} alt="" />
      <div className='flex flex-col text-white justify-center absolute top-[34%] items-center text-center'>
        <h1 className='lg:text-[70px] md:text-[55px] sm:text-[46px] sy:text-[43px] text-[38px] font-bold border-none font-serif text-[#be8957]'>
          Choose Your Path to Success
        </h1>
        <p className='md:text-[30px] sy:text-[25px] text-[22px] xl:px-[230px] lg:px-[180px] md:px-[80px] sy:px-[43px] sd:px-[30px] pt-[55px] px-[25px]'>
          Explore our diverse range of programs designed to meet your career aspirations.
        </p>
      </div>
      <div className='py-[60px] flex flex-col text-center justify-center bg-white'>
        <h1 className='lg:text-[30px] md:text-[28px] sm:text-[25px] sv:text-[23px] text-[22px] lg:px-[150px] md:px-[90px] sm:px-[60px] se:px-[40px]'>
          Our curriculum is developed by industry experts
          and aligned with global standards.
        </h1><br />
        <div className='sm:grid sm:grid-cols-2 md:gap-[85px] sm:gap-[55px] px-[70px]'>
          <img className='rounded-lg sm:hover:scale-105 sv:hover:scale-100 sm:scale-100 sv:scale-95 scale-100 hover:scale-105 duration-500 object-cover' src={ED2} alt="" />
          <img className='rounded-lg hover:scale-105 duration-500 object-cover hidden sm:block' src={PC2} alt="" />
        </div>
      </div>
      <div className='bg-[#888787] py-[60px]'>

        <div className='ms:mr-[170px] ms:ml-[50px] mx-[50px] hover:scale-105 duration-500 text-white'>
          <div className='ms:grid ms:grid-cols-2 shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px]'>
            <div>
              <h1 className='text-[22px] text-center sb:text-[26px] sa:text-[30px] sy:text-[35px] text-[#fa9536] font-semibold'>Associate Degree's (B.sc - AD)</h1>
              <p className='pt-3'>
                Our Associate Degree Bachelor's Program is designed to enable you understand what it takes to be
                ever prepared in a ever changing world.
              </p>
              <p className='pt-7 text-[18px]'><span className='text-[23px] font-medium'>Duration:</span> 2 Years</p>
            </div>
            <div className='se:flex se:flex-row ms:flex-col flex flex-col items-center justify-center ms:text-center ms:justify-center se:justify-between md:justify-between md:gap-[50%] ma:gap-[60%] ms:gap-0 ms:mt-0 mt-7'>
              <div className='flex'>
                <TbCurrencyNaira className='text-[43px] xl:ml-[330px] ms:ml-[190px] mm:ml-[200px] 2ls:ml-[252px]' /><p className='text-[30px] font-medium'>300,000</p>
              </div>
              <a target='_blank' rel='noreferrer' href='https://wa.link/01wlzw'>
                <button className='active:translate-y-1 md:block hidden xl:ml-[329px] ms:ml-[200px] mm:ml-[210px] 2ls:ml-[260px] ms:mt-[20px] py-[10px] px-[45px] rounded-xl font-medium bg-white text-black'>
                  Explore
                </button>
              </a>
              <a target='_blank' rel='noreferrer' href='https://wa.me/p/5630364327036644/2349012104873'>
                <button className='active:translate-y-1 block md:hidden xl:ml-[88px] py-[10px] px-[45px] rounded-xl font-medium bg-white text-black'>
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='ms:ml-[170px] ms:mr-[50px] mx-[50px] hover:scale-105 duration-500 mt-[40px] bg-white text-[#5e5c5c]'>
          <div className='ms:grid ms:grid-cols-2 shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px]'>
            <div>
              <h1 className='text-[22px] text-center sb:text-[26px] sa:text-[30px] sy:text-[35px] text-[#fa9536] font-semibold'>Executive Diploma Program</h1>
              <p className='pt-3'>
                Our Executive Diploma programs will help you focus your learning on distinct topics, to provide you with specific expertise
                in your field or industry.
              </p>
              <p className='pt-7 text-[18px]'><span className='text-[23px] font-medium'>Duration:</span> One Month</p>
            </div>
            <div className='se:flex se:flex-row ms:flex-col flex flex-col items-center justify-center ms:text-center ms:justify-center se:justify-between  md:justify-between md:gap-[55%] ma:gap-[64%] ms:gap-0 ms:mt-0 mt-7'>
              <div className='flex'>
                <TbCurrencyNaira className='text-[43px] xl:ml-[330px] ms:ml-[200px] 2ls:ml-[252px]' /><p className='text-[30px] font-medium'>5,000</p>
              </div>
              <a target='_blank' rel='noreferrer' href='https://wa.link/01wlzw'>
                <button className='active:translate-y-1 md:block hidden xl:ml-[338px] ms:ml-[205px] 2ls:ml-[259px] ms:mt-[20px] py-[10px] ms:px-[30px] px-[45px] rounded-xl font-medium bg-[#888787] text-white'>
                  Explore
                </button>
              </a>
              <a target='_blank' rel='noreferrer' href='https://wa.me/p/5630364327036644/2349012104873'>
                <button className='active:translate-y-1 block md:hidden xl:ml-[88px] py-[10px] px-[45px] rounded-xl font-medium bg-[#888787] text-white'>
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='ms:mr-[170px] ms:ml-[50px] mx-[50px] hover:scale-105 duration-500 mt-[40px] text-white'>
          <div className='ms:grid ms:grid-cols-2 shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px]'>
            <div>
              <h1 className='text-[22px] text-center sb:text-[26px] sa:text-[30px] sy:text-[35px] text-[#fa9536] font-semibold'>Professional Certificates</h1>
              <p className='pt-3'>
                Our PCs are focused on the attributes of talented experts in various industies who shared their
                understanding on concepts of various in demand skills that can sky rocket your career from where it is to where
                it should be.
              </p>
              <p className='pt-5 text-[18px]'><span className='text-[23px] font-medium'>Duration:</span> 14 days</p>
            </div>
            <div className='se:flex se:flex-row ms:flex-col flex flex-col items-center justify-center text-center ms:justify-center se:justify-between  md:justify-between md:gap-[55%] ma:gap-[64%] ms:gap-0 ms:mt-0 mt-7'>
              <div className='flex'>
                <TbCurrencyNaira className='text-[43px] xl:ml-[330px] ms:ml-[200px] 2ls:ml-[252px]' /><p className='text-[30px] font-medium'>3,000</p>
              </div>
              <a target='_blank' rel='noreferrer' href='https://wa.link/01wlzw'>
                <button className='active:translate-y-1 md:block hidden xl:ml-[338px] ms:ml-[205px] 2ls:ml-[259px] ms:mt-[20px] py-[10px] ms:px-[30px] px-[45px] rounded-xl font-medium bg-white text-black'>
                  Explore
                </button>
              </a>
              <a target='_blank' rel='noreferrer' href='https://wa.me/p/5630364327036644/2349012104873'>
                <button className='active:translate-y-1 block md:hidden xl:ml-[88px] py-[10px] px-[45px] rounded-xl font-medium bg-white text-black'>
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='ms:ml-[170px] ms:mr-[50px] mx-[50px] hover:scale-105 duration-500 mt-[40px] bg-white text-[#5e5c5c]'>
          <div className='ms:grid ms:grid-cols-2 shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px]'>
            <div>
              <h1 className='text-[22px] text-center sb:text-[26px] sa:text-[30px] sy:text-[35px] text-[#fa9536] font-semibold'>Executive MBA Program</h1>
              <p className='pt-3'>
                The Master of Business Administration Program(MBA) are internationally-recognized programs designed to develop the skills
                required for careers in business and management.
              </p>
              <p className='pt-7 text-[18px]'><span className='text-[23px] font-medium'>Duration:</span> 6 Months - 2 Years</p>
            </div>
            <div className='se:flex se:flex-row ms:flex-col flex flex-col items-center justify-center ms:text-center ms:justify-center se:justify-between  md:justify-between md:gap-[50%] ma:gap-[60%] ms:gap-0 ms:mt-0 mt-7'>
              <div className='flex'>
                <TbCurrencyNaira className='text-[43px] xl:ml-[330px] ms:ml-[190px] mm:ml-[200px] 2ls:ml-[252px]' /><p className='text-[30px] font-medium'>700,000</p>
              </div>
              <a target='_blank' rel='noreferrer' href='https://wa.link/01wlzw'>
                <button className='active:translate-y-1 md:block hidden xl:ml-[329px] ms:ml-[200px] mm:ml-[210px] 2ls:ml-[260px] ms:mt-[20px] py-[10px] px-[45px] rounded-xl font-medium bg-[#888787] text-white'>
                  Explore
                </button>
              </a>
              <a target='_blank' rel='noreferrer' href='https://wa.me/p/5630364327036644/2349012104873'>
                <button className='active:translate-y-1 block md:hidden  xl:ml-[88px] py-[10px] px-[45px] rounded-xl font-medium bg-[#888787] text-white'>
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='ms:mr-[170px] ms:ml-[50px] mx-[50px] hover:scale-105 duration-500 mt-[40px] text-white'>
          <div className='ms:grid ms:grid-cols-2 shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px]'>
            <div>
              <h1 className='text-[22px] text-center sb:text-[26px] sa:text-[30px] sy:text-[35px] text-[#fa9536] font-semibold'>Executive Mini - MBA Programs</h1>
              <p className='pt-3'>
                Our Executive Mini MBA Program is focused on the fundamentals of business management. The program provides an introductory
                insight into business for what might be a further exploration.
              </p>
              <p className='pt-7 text-[18px]'><span className='text-[23px] font-medium'>Duration:</span> 2 Months</p>
            </div>
            <div className='se:flex se:flex-row ms:flex-col flex flex-col items-center justify-center ms:text-center ms:justify-center se:justify-between  md:justify-between md:gap-[53%] ma:gap-[61%] ms:gap-0 ms:mt-0 mt-7'>
              <div className='flex'>
                <TbCurrencyNaira className='text-[43px] xl:ml-[330px] ms:ml-[200px] 2ls:ml-[252px]' /><p className='text-[30px] font-medium'>40,000</p>
              </div>
              <a target='_blank' rel='noreferrer' href='https://wa.link/01wlzw'>
                <button className='active:translate-y-1 md:block hidden xl:ml-[343px] ms:ml-[210px] 2ls:ml-[260px] ms:mt-[20px] py-[10px] ms:px-[35px] px-[45px] rounded-xl font-medium bg-white text-black'>
                  Explore
                </button>
              </a>
              <a target='_blank' rel='noreferrer' href='https://wa.me/p/5630364327036644/2349012104873'>
                <button className='active:translate-y-1 block md:hidden xl:ml-[88px] py-[10px] px-[45px] rounded-xl font-medium bg-white text-black'>
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='ms:ml-[170px] ms:mr-[50px] mx-[50px] hover:scale-105 duration-500 mt-[40px] bg-white text-[#5e5c5c]'>
          <div className='ms:grid ms:grid-cols-2 shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px]'>
            <div>
              <h1 className='text-[22px] text-center sb:text-[26px] sa:text-[30px] sy:text-[35px] text-[#fa9536] font-semibold'>Executive Advanced Diploma</h1>
              <p className='pt-3'>
                Our Advance Executive Diploma is strongly focused on the application of knowledge, as well as developing independent cognitive
                ability and practical research skills
              </p>
              <p className='pt-7 text-[18px]'><span className='text-[23px] font-medium'>Duration:</span> One Month</p>
            </div>
            <div className='se:flex se:flex-row ms:flex-col flex flex-col items-center justify-center ms:text-center ms:justify-center se:justify-between  md:justify-between md:gap-[53.5%] ma:gap-[62%] ms:gap-0 ms:mt-0 mt-7'>
              <div className='flex'>
                <TbCurrencyNaira className='text-[43px] xl:ml-[330px] ms:ml-[200px] 2ls:ml-[252px]' /><p className='text-[30px] font-medium'>10,000</p>
              </div>
              <a target='_blank' rel='noreferrer' href='https://wa.link/01wlzw'>
                <button className='active:translate-y-1 md:block hidden xl:ml-[339px] ms:ml-[210px] 2ls:ml-[260px] ms:mt-[20px] py-[10px] ms:px-[35px] px-[45px] rounded-xl font-medium bg-[#888787] text-white'>
                  Explore
                </button>
              </a>
              <a target='_blank' rel='noreferrer' href='https://wa.me/p/4197348707047390/2349012104873'>
                <button className='active:translate-y-1 block md:hidden xl:ml-[88px] py-[10px] px-[45px] rounded-xl font-medium bg-[#888787] text-white'>
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <h1 className='text-[30px] mt-9 font-bold text-red-600'>FOR MORE PROGRAMS</h1>
          <a target='_blank' rel='noreferrer' href="https://wa.link/01wlzw">
            <button className='p-4 md:block hidden items-center justify-center mt-6 rounded-[27px] font-medium bg-white'>
              Click Here
            </button>
          </a>
          <a target='_blank' rel='noreferrer' href="https://wa.me/c/2349012104873">
            <button className='p-4 md:hidden block items-center justify-center mt-6 rounded-[27px] font-medium bg-white'>
              Click Here
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Program