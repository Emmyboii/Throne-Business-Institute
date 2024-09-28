import { React, useState } from 'react'
import Back from '../Images/Screenshot.png';
import Back2 from '../Images/graduate.jpg';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
// import { ReactTyped } from 'react-typed';

const Program = () => {


  const [prog1, setprog1] = useState(false)
  const [prog2, setprog2] = useState(false)
  const [prog3, setprog3] = useState(false)
  const [prog4, setprog4] = useState(false)
  const [prog5, setprog5] = useState(false)

  const handleProg1 = () => {
    setprog1(!prog1)
    setprog2(prog1)
    setprog3(prog1)
    setprog4(prog1)
    setprog5(prog1)
  }

  const handleProg2 = () => {
    setprog1(prog2)
    setprog2(!prog2)
    setprog3(prog2)
    setprog4(prog2)
    setprog5(prog2)
  }
  const handleProg3 = () => {
    setprog1(prog3)
    setprog2(prog3)
    setprog3(!prog3)
    setprog4(prog3)
    setprog5(prog3)
  }
  const handleProg4 = () => {
    setprog1(prog4)
    setprog2(prog4)
    setprog3(prog4)
    setprog4(!prog4)
    setprog5(prog4)
  }
  const handleProg5 = () => {
    setprog1(prog5)
    setprog2(prog5)
    setprog3(prog5)
    setprog4(prog5)
    setprog5(!prog5)
  }


  return (
    <div id='programs' className='w-full h-[100%]'>
      <div className='flex mo:flex-row flex-col text-white justify-center items-center text-center bg-[#01022e]'>
        <div className='z-10 mo:pl-[55px] mo:pr-0 mo:py-0 ma:pl-9 ma:pr-9 py-[70px]'>
          <h1 className='lg:text-[40px] md:text-[55px] sm:text-[46px] sy:text-[43px] text-[38px] font-bold border-none font-serif text-orange-500'>
            Choose Your Path to Success
          </h1>
          <p className='md:text-[25px] sy:text-[25px] text-[22px] pt-5'>
            Explore our diverse range of programs designed to meet your career aspirations.
          </p>
        </div>
        <img className='w-[50%] hidden mo:block scale-y-[1.05] mo:scale-y-100 outline-none border-none' src={Back} alt="" />
      </div>
      <img className='w-full h-[40vh] mp:h-[60vh] object- mo:hidden block mo:scale-y-100 outline-none border-none' src={Back2} alt="" />
      <div className='bg-blue-900 py-[60px]'>
        <div>
          <h1 className='text-center text-white font-extrabold sa:text-[39px] st:text-[37.5px] text-[34.7px] md:text-[50px]'>OUR PROGRAMS:</h1>
        </div>

        <div id='ABD' className='md:mx-[19%] sv:mx-[15%] mx-[12%] hover:scale-105 duration-500 text-white bg-blue-900 my-[90px] text-[17.5px] ma:text-[19px]'>
          <div className='shadow-2xl shadow-black/60 mp:px-[40px] sb:px-[20px] px-[10px] py-[20px]'>
            <h1 className=' text-center text-[22px] sb:text-[24px] se:text-[28px] sy:text-[34px] ma:text-[40px] mt-5 text-orange-500 font-bold'>
              Ass. Bachelors Degree
            </h1>
            <p className='pt-3 leading-[30px]'>
              Our Associate Degree Bachelor's Program is designed to enable you understand what it takes to be ever prepared in a ever
              changing world, with our world class professors and lecturers, the program is expected to imbibe key values and effective
              strategies that can only foster progress in the latest management issues and challenges.
              <span onClick={handleProg1} className={prog1 ? 'hidden' : 'text-orange-400 text-[17px] hover:text-gray-400 cursor-pointer mx-3 active:scale-105 duration-500'}>
                Learn more
              </span>
            </p>

            <div className={prog1 ? 'block pt-4' : 'pt-4 hidden'}>
              <ul className='text-center sv:font-semibold font-[550]'>
                <li className='pt-2'>High-quality education at a fraction of the cost.</li>
                <li className='pt-2'>Learn at your own pace, from anywhere in the world.</li>
                <li className='pt-2'>Earn a degree valued worldwide.</li>
                <li className='pt-2'>Enroll with just your SSCE.</li>
                <li className='pt-2'>Get an NYSC certificate after.</li>
              </ul>

              <p className='pt-8 leading-[30px]'>
                According to Nuffic- the Dutch Organisation for Internationalisation in Education, an European
                Associate Bachelor's degree is comparable to a Nigerian HND program and even better
                because it qualifies the student to a direct master's degree afterwards. Our students are
                introduced to the most robust and up-to-date instruction in business and management
                disciplines. <br />
                At Throne Management & Business Institute, Switzerland we take great pride in offering our
                world-class programs to diligent and deserving Nigerian students with unbeatable scholarships
                to power their dreams.
              </p>

              <ul className='pt-6'>
                <li className='text-center font-semibold text-[21px]'>Available Programs are:</li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Social Media Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Customer Service
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Human Resource Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Project Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Risk Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Sales Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Information Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Supply Chain Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Marketing
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Accounting
                </li>
              </ul>

              <p className='pt-7'>
                <span className='font-bold'>ACCREDITATION:</span><br /> Our programs are accredited by the Switzerland Education Board, Carcao
                Educational Board, Central African Republic Education Board, Chad Educational Board PIET
                and recognized by the Nigerian University Council.
              </p>
              <p className='pt-6'>
                <span className='font-bold'>PARTNERSHIPS:</span><br /> We partner with SOBAT Business School, Switzerland, IICSE University, USA,
                High Flyer University, USA, ESAE University, Benin, and Cape Coast University, West End
                College University.
              </p>

              <div className='pt-7'>
                <p className='text-[20px]'><span className='font-bold'>PROGRAM DURATION:  </span>2 year and 3 year programs</p>
                <p className='pt-4'>
                  <span className='font-bold'>TUITION: </span>
                  <strike className='font-bold text-orange-400'>CHF 2,660</strike> <span className='font-bold'>NGN 12,000/month</span>
                </p>
              </div>
              <div className='text-center mt-8'>
                <a href="#apply">
                  <button className='bg-orange-500 p-4 rounded-full font-bold text-[20px] mb-3'>APPLY NOW</button>
                </a>
                <p>*Limited Slots Available</p>
              </div>
            </div>
          </div>
        </div>

        <div id='MBA' className='md:mx-[19%] sv:mx-[15%] mx-[12%] hover:scale-105 duration-500 text-white bg-blue-900 text-[17.5px] my-[102px] ma:text-[19px]'>
          <div className='shadow-2xl shadow-black/60 mp:px-[40px] sb:px-[20px] px-[10px] pt-[22px] pb-[30px]'>
            <h1 className='text-[22px] text-center sb:text-[24px] se:text-[28px] sy:text-[34px] ma:text-[40px] mt-5 text-[#ff9633] font-bold'>
              Executive MBA Program
            </h1>
            <div className='pt-3 leading-[30px]'>
              The Master of Business Administration Program(MBA) are internationally-recognized programs designed to develop the skills
              required for careers in business and management. An MBA from Throne Management & Business Institute can significantly enhance
              your career prospects and open doors to new opportunities.
              <span onClick={handleProg2} className={prog2 ? 'hidden' : 'text-orange-400 text-[17px] hover:text-gray-400 cursor-pointer mx-3 active:scale-105 duration-500'}>
                Learn more
              </span>
              <span className={prog2 ? 'block' : 'hidden'}>
                Our rigorous programs equip you with the knowledge, skills, and networks needed to succeed in today's competitive business
                environment. Upon enrolling in our 2-Year MBA program, you'll benefit from a structured curriculum designed to equip you
                with the skills and knowledge needed to excel in today's competitive business world.
              </span>
            </div>
            <div className={prog2 ? 'block pt-7 leading-[33px]' : 'pt-5 hidden'}>
              <h1 className='text-center font-bold'>IT’S TIME TO REACH FOR GREATER</h1>
              <ul>
                <li className='flex gap-2 pb-2'><GoDotFill className='mt-2' /> Gain access to higher-paying positions and leadership roles.</li>
                <li className='flex gap-2 pb-2'><GoDotFill className='mt-2' /> Increase your earning power through advanced business knowledge and skills.</li>
                <li className='flex gap-2 pb-2'><GoDotFill className='mt-2' /> Explore new industries and sectors with a broader range of career opportunities.</li>
                <li className='flex gap-2 pb-2'><GoDotFill className='mt-2' /> Develop critical thinking and strategic planning skills.</li>
                <li className='flex gap-2 pb-2'><GoDotFill className='mt-2' /> Learn to inspire and motivate teams to achieve organizational goals.</li>
                <li className='flex gap-2 pb-2'><GoDotFill className='mt-2' /> Connect with like-minded professionals and build valuable relationships.</li>
                <li className='flex gap-2 pb-2'><GoDotFill className='mt-2' /> Gain a global understanding of business practices and cultural nuances.</li>
              </ul>

              <p className='pt-7 font-bold text-[16px]'>
                Our 2-Year MBA program offers a rigorous yet flexible learning experience that will help
                you achieve your career aspirations.
              </p>
              <p className='pt-5 text-[16px] font-bold'>OUR MBA CONCENTRATIONS INCLUDE:</p>

              <ul className='pt-3'>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Business Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Marketing
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Human Resources
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Risk Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Supply Chain Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Project Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Information Technology
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Sales Management
                </li>
                <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                  Accounting
                </li>
              </ul>

              <p className='pt-7'>
                <span className='font-bold'>ACCREDITATION:</span><br /> Our programs are accredited by the Switzerland Education Board, Carcao
                Educational Board, Central African Republic Education Board, Chad Educational Board PIET
                and recognized by the Nigerian University Council.
              </p>
              <p className='pt-6'>
                <span className='font-bold'>PARTNERSHIPS:</span><br /> We partner with SOBAT Business School, Switzerland, IICSE University, USA,
                High Flyer University, USA, ESAE University, Benin, and Cape Coast University, West End
                College University.
              </p>

              <div className='pt-7'>
                <p className='text-[20px]'><span className='font-bold'>PROGRAM DURATION:  </span>12 to 24 months</p>
                <p className='pt-4'>
                  <span className='font-bold'>TUITION: </span>
                  <strike className='font-bold text-orange-400'>CHF 12,660</strike> <span className='font-bold'>NGN 59,000/month</span>
                </p>
              </div>
              <div className='text-center mt-8'>
                <a href="#apply">
                  <button className='bg-orange-500 text-white p-4 rounded-full font-bold text-[20px] mb-3'>APPLY NOW</button>
                </a>
                <p>*Limited Slots Available</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-center text-white font-extrabold text-[39px] md:text-[50px]'>OTHER PROGRAMS:</h1>
        </div>

        <div className='md:mx-[20%] sv:mx-[15%] mx-[12%] hover:scale-105 duration-500 text-white bg-blue-900 text-[17.5px] my-[70px] ma:text-[19px]'>
          <div className='shadow-2xl shadow-black/60 mp:px-[40px] sb:px-[20px] px-[10px] pt-[22px] pb-[30px]'>
            <div>
              <h1 className='text-[22px] text-center sb:text-[24px] se:text-[28px] sy:text-[34px] ma:text-[40px] mt-5 text-orange-500 font-bold'>
                Executive Diploma Program
              </h1>
              <div className='pt-3 leading-[30px]'>
                Our Executive Diploma programs will help you focus your learning on distinct topics, to provide you with specific expertise
                in your field or industry. By concetrating your energy on singular concepts, the niche skills you gain could set you apart
                from the rest.
                <span onClick={handleProg3} className={prog3 ? 'hidden' : 'text-orange-400 text-[17px] hover:text-gray-400 cursor-pointer mx-3 active:scale-105 duration-500'}>
                  Learn more
                </span>
              </div>
              <div className={prog3 ? 'block pt-7 leading-[33px]' : 'pt-5 hidden'}>

                <ul className='text-center font-semibold'>
                  <li className='pt-2'>1 month Program</li>
                  <li className='pt-2'>Online Program </li>
                  <li className='pt-2'>Self Paced</li>
                  <li className='pt-2'>Plus Certificate</li>
                  <li className='pt-2'>1 Free Udemy exclusive program</li>
                </ul>

                <ul className='pt-10'>
                  <li className='text-center font-semibold text-[23px]'>Available Programs are:</li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Fullstack Development
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Frontend Development
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    UI-UX Design
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Graphic Design
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Business - Data Analyst
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    IoT Pro Course
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Copywriting
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Procurement
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    DevOps Pro Course
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Networking Programming Course
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Office Administration
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Asset Professional Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Hospitality Management

                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Data Science ...and many more
                  </li>
                </ul>

                <div className='pt-7'>
                  <p className='text-[20px]'><span className='font-bold'>PROGRAM DURATION:  </span>One month program</p>
                  <p className='pt-4'>
                    <span className='font-bold'>TUITION: </span>
                    <strike className='font-bold text-orange-500'>CHF 500</strike> <span className='font-bold'>NGN 5,000</span>
                  </p>
                </div>
                <div className='items-center justify-center flex mt-8'>
                  <a target='_blank' rel='noreferrer' href='https://wa.link/01wlzw'>
                    <button className='bg-orange-500 md:block font-bold hidden p-4 rounded-full'>GET STARTED</button>
                  </a>
                  <a target='_blank' rel='noreferrer' href='https://wa.me/p/4391537294231364/2349012104873'>
                    <button className='bg-orange-500 font-bold block md:hidden p-4 rounded-full'>GET STARTED</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='md:mx-[20%] sv:mx-[15%] mx-[12%] hover:scale-105 duration-500 text-white bg-blue-900 text-[17.5px] my-[70px] ma:text-[19px]'>
          <div className='shadow-2xl shadow-black/60 mp:px-[40px] sb:px-[20px] px-[10px] pt-[22px] pb-[30px]'>
            <div>
              <h1 className='text-[22px] text-center sb:text-[24px] se:text-[28px] sy:text-[34px] ma:text-[40px] mt-5 text-orange-500 font-bold'>
                Professional Certificates
              </h1>
              <div className='pt-3 leading-[30px]'>
                Our Professional Courses are focused on the attributes of talented experts in various industies who shared their understanding
                on concepts of various in demand skills that can sky rocket your career from where it is to where it should be.
                <span onClick={handleProg4} className={prog4 ? 'hidden' : 'text-orange-400 text-[17px] hover:text-gray-400 cursor-pointer mx-3 active:scale-105 duration-500'}>
                  Learn more
                </span>
              </div>
              <div className={prog4 ? 'block pt-7 leading-[33px]' : 'pt-5 hidden'}>

                <ul className='text-center font-semibold'>
                  <li className='pt-2'>14 days Program</li>
                  <li className='pt-2'>Online Program </li>
                  <li className='pt-2'>Self Paced</li>
                  <li className='pt-2'>Plus Certificate</li>
                </ul>

                <ul className='pt-10'>
                  <li className='text-center font-semibold text-[23px]'>Available Programs are:</li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Project Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Customer Service
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Risk Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Marketing
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Accounting
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Sales Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Information Technology
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Supply Chain Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Product Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Product Design
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Design Thinking
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Brand Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Laravel Programming

                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Java Programming   ...and many more
                  </li>
                </ul>

                <div className='pt-7'>
                  <p className='text-[20px]'><span className='font-bold'>PROGRAM DURATION: </span> 14 Days</p>
                  <p className='pt-4'>
                    <span className='font-bold'>TUITION: </span> NGN 3,000
                  </p>
                </div>
                <div className='items-center justify-center flex mt-8'>
                  <a target='_blank' rel='noreferrer' href='https://wa.link/01wlzw'>
                    <button className='bg-orange-500 font-bold md:block hidden text-white p-4 rounded-full'>GET STARTED</button>
                  </a>
                  <a target='_blank' rel='noreferrer' href='https://wa.me/p/6349031568501910/2349012104873'>
                    <button className='bg-orange-500 font-bold block md:hidden text-white p-4 rounded-full'>GET STARTED</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='md:mx-[20%] sv:mx-[15%] mx-[12%] hover:scale-105 duration-500 text-white bg-blue-900 text-[17.5px] my-[70px] ma:text-[19px]'>
          <div className='shadow-2xl shadow-black/60 mp:px-[40px] sb:px-[20px] px-[10px] pt-[22px] pb-[30px]'>
            <div>
              <h1 className='text-[22px] text-center sb:text-[24px] se:text-[28px] sy:text-[34px] ma:text-[40px] mt-5 text-orange-500 font-bold'>
                Executive Mini MBA Program
              </h1>
              <div className='pt-3 leading-[30px]'>
                Our Executive Mini MBA Program is focused on the fundamentals of business management. The program provides an introductory
                insight into business, preparing students as well as professionals for what might be a further exploration, or just a
                foundamental understanding of the area.
                <span onClick={handleProg5} className={prog5 ? 'hidden' : 'text-orange-400 text-[17px] hover:text-gray-400 cursor-pointer mx-3 active:scale-105 duration-500'}>
                  Learn more
                </span>
              </div>
              <div className={prog5 ? 'block pt-7 leading-[33px]' : 'pt-5 hidden'}>

                <ul className='text-center font-semibold'>
                  <li className='pt-2'>2 month Program</li>
                  <li className='pt-2'>Online Program </li>
                  <li className='pt-2'>Self Paced</li>
                  <li className='pt-2'>Plus Certificate</li>
                  <li className='pt-2'>3 Free Udemy exclusive program</li>
                  <li className='pt-2'>Free CV Review </li>
                  <li className='pt-2'>Free LinkedIn Review</li>
                </ul>

                <ul className='pt-10'>
                  <li className='text-center font-semibold text-[23px]'>Available Programs are:</li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Business Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Social Media Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Project Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Customer Service
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Accounting
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Marketing
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Human Resource Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Supply Chain Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Sales Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Risk Management
                  </li>
                  <li className='flex items-center gap-2 pt-4'><MdOutlineKeyboardDoubleArrowRight className='text-orange-400 text-[30px]' />
                    Information Technology
                  </li>
                </ul>

                <div className='pt-7'>
                  <p className='text-[20px]'><span className='font-bold'>PROGRAM DURATION: </span> Two months</p>
                  <p className='pt-4'>
                    <span className='font-bold'>TUITION: </span> NGN 40,000</p>
                </div>
                <div className='items-center justify-center flex mt-8'>
                  <a target='_blank' rel='noreferrer' href='https://wa.link/01wlzw'>
                    <button className='bg-orange-500 font-bold md:block hidden p-4 rounded-full'>GET STARTED</button>
                  </a>
                  <a target='_blank' rel='noreferrer' href='https://wa.me/p/4057106524338825/2349012104873'>
                    <button className='bg-orange-500 font-bold block md:hidden p-4 rounded-full'>GET STARTED</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <a target='_blank' rel='noreferrer' href="https://wa.link/01wlzw">
            <button className='p-4 md:block hidden text-[18px] items-center justify-center mt-6 rounded-[27px] font-medium bg-white'>
              VIEW MORE
            </button>
          </a>
          <a target='_blank' rel='noreferrer' href="https://wa.me/c/2349012104873">
            <button className='p-4 md:hidden text-[18px] block items-center justify-center mt-6 rounded-[27px] font-medium bg-white'>
              VIEW MORE
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Program