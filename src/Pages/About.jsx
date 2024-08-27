import { React, useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Back from '../Images/Screenshot.png';
import vision from '../Images/Vision1.png';
import mission from '../Images/mission1.png';
// import abt from '../Images/abt.jpg';
// import { ReactTyped } from 'react-typed';

const About = () => {

    const [prog, setprog] = useState(false)

    const handleProg = () => {
        setprog(!prog)
        // if (prog1 === true) {
        //   setprog2(prog2)
        // }
    }

    useEffect(() => {
        AOS.init({
            duration: 1300,
            easing: "ease-out-cubic"
        });
    }, []);

    return (
        <div id='about' className='text-white w-full h-[100%]'>
            <div className='flex text-white justify-center items-center text-center bg-[#01022e]'>
                <div className='z-10 pl-7'>
                    <h1 className='md:text-[82px] sx:text-[64px] sa:text-[57px] text-[53px] font-semibold text-orange-500'>About Us</h1>
                    <p className='md:text-[40px] sx:text-[47px] sa:text-[40px] text-[37px] pt-[24px] font-medium'>
                        Redefining Higher Education
                    </p>
                </div>
                <img className='w-[50%] scale-y-[1.17] xl:scale-y-100 outline-none border-none' src={Back} alt="" />
            </div>
            <div className='bg-pink-50 py-[70px] px-[180px]'>
                <p data-aos="fade-up" data-aos-delay="200" className='aos-init se:text-[21px] text-black leading-[26px]'>
                    Throne Management and Business Institute Switzerland (TMBI) is a pioneering educational institution dedicated to
                    empowering individuals with the knowledge and skills necessary to succeed in the dynamic global landscape. Founded
                    in 2018, TMBI is the first WhatsApp-based peer-to-peer educational institute in Nigeria, offering a unique and
                    accessible approach to learning. <br /><br />
                    We are committed to democratizing education by providing high-quality, affordable, and flexible programs that cater to
                    the diverse needs of learners across Nigeria. Our goal is to bridge the gap between traditional education and the
                    demands of the modern world by leveraging technology to deliver exceptional learning experiences.
                    As a leading global provider of innovative educational solutions, we strive to create a world where education is
                    accessible to all and where knowledge is celebrated as the catalyst for positive change.
                    <span onClick={handleProg} className={prog ? 'hidden' : 'text-orange-400 text-[17px] hover:text-gray-400 cursor-pointer mx-3 active:scale-105 duration-500'}>
                        Learn more
                    </span>
                    <div className={prog ? 'block' : 'hidden'}>
                        <p className='pt-6'>
                            Our values include innovation, accessibility, excellence, integrity, and impact. We believe in embracing innovation to
                            deliver engaging and effective learning experiences, making education accessible to all, providing the highest quality
                            education, upholding the highest ethical standards, and making a positive impact on society.
                            TMBI offers a range of management and business courses designed to meet the diverse educational needs of our students.
                            Our programs are valued between $20,000 to $50,000, reflecting the quality and depth of education provided.
                        </p>
                    </div>
                </p>
            </div>
            <div className={prog ? 'block bg-[#616060]' : 'hidden'}>
                <div className='bg-gradient-to-r from-blue-900 from-50% to-orange-400 mv:py-[55px] md:py-[50px] sx:py-[40px] py-[30px] text-center justify-center flex'>
                    <p className='md:text-[22px] sx:text-[20px] text-[17px] mv:text-[25px] font-semibold mv:mx-[50px] md:mx-[35px] sb:mx-[13px] sx:mx-[30px] text-white'>
                        Choosing TMBI means choosing a convenient and accessible learning platform, flexible learning options, a high-quality
                        curriculum, experienced faculty, and recognition from reputable bodies. Join us on this exciting journey of learning and
                        growth. Discover the power of education with TMBI.
                    </p>
                </div>
                <div className='bg-slate-800  py-[50px]'>
                    <div className='md:grid md:grid-cols-2 ml-9'>
                        <div className='border-2 rounded-lg sx:pl-5 py-10 xl:mr-[140px] lg:mr-[110px] md:mr-[60px] xl:ml-[100px] mr-[30px] sa:mx-[60px] flex'>
                            <img className='xl:w-[18%] md:w-[20%] w-[17%] h-[30%] md:h-[50%] xl:h-[65%] mt-2 p-1 rounded-lg bg-white object-fill sx:block hidden' src={vision} alt="" />
                            <div className='text-white mx-[20px]'>
                                <h1 className='font-medium text-center text-[18px] sa:text-[20px]'>OUR VISION</h1>
                                <p className='pt-3 sx:text-start text-center'>"To be the leading provider of online education in Africa."</p>
                            </div>
                        </div>
                        <div className='border-2 rounded-lg sx:pl-5 xl:ml-[100px] md:ml-[30px] py-10 xl:mr-[120px] lg:mr-[70px] md:mr-[40px] mr-[30px] sa:mx-[60px] mt-6 flex'>
                            <img className='xl:w-[18%] md:w-[20%] md:h-[50%] w-[18%] h-[50%] xl:h-[65%]  mt-2 rounded-lg bg-white sx:block hidden' src={mission} alt="" />
                            <div className='text-white mx-[20px]'>
                                <h1 className='font-medium text-center text-[18px] sa:text-[20px]'>OUR MISSION</h1>
                                <p className='pt-3 sx:text-start text-center'>"To empower individuals with the knowledge and skills to succeed in a globalized world."</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#616060] py-[50px]'>
                    <h1 data-aos="fade-down" className='aos-init text-center text-[31px] sa:text-[35px] font-bold text-white pb-7'>OUR CORE VALUES</h1>

                    <div data-aos="fade-up" data-aos-delay="200" className='mv:mr-[350px] mx-[34px] sb:mx-[50px] se:mx-[80px] mv:ml-[50px] shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px] rounded-md bg-slate-800 text-white'>
                        <h1 className='text-[27px] sv:text-[30px] mv:text-start text-center sx:text-[35px] text-[#ff9736] font-semibold'>Innovation</h1>
                        <p className='py-3'>
                            At Throne Management & Business Institute, we embrace innovation as a cornerstone of our educational philosophy.
                            We continuously seek out new and cutting-edge approaches to learning, ensuring our curriculum remains relevant
                            and effective in today's rapidly evolving world.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" className='mv:ml-[350px] mx-[34px] sb:mx-[50px] se:mx-[80px] mv:mr-[50px] shadow-2xl my-5 shadow-black/60 px-[20px] pt-[22px] pb-[25px] rounded-md bg-white/60 text-black'>
                        <h1 className='text-[27px] sv:text-[30px] mv:text-start text-center sx:text-[35px] text-[#fa9536] font-semibold'>Accessibility</h1>
                        <p className='py-3'>
                            We believe that education should be accessible to all, regardless of geographical location or socioeconomic background.
                            Our online degree programs offer flexibility and convenience, allowing students to learn at their own pace and from
                            anywhere in the world.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" className='mv:mr-[350px] mx-[34px] sb:mx-[50px] se:mx-[80px] mv:ml-[50px] shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px] rounded-md bg-slate-800 text-white'>
                        <h1 className='text-[27px] sv:text-[30px] mv:text-start text-center sx:text-[35px] text-[#fa9536] font-semibold'>Excellence</h1>
                        <p className='py-3'>
                            Excellence is our unwavering commitment. We strive to provide the highest quality education, ensuring that our students
                            receive the knowledge, skills, and experiences necessary to succeed in their careers and contribute positively to
                            society.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" className='mv:ml-[350px] mx-[34px] sb:mx-[50px] se:mx-[80px] mv:mr-[50px] mt-5 shadow-2xl shadow-black/60 px-[20px] pt-[22px] pb-[25px] rounded-md bg-white/60 text-black'>
                        <h1 className='text-[27px] sv:text-[30px] mv:text-start text-center sx:text-[35px] text-[#fa9536] font-semibold'>Integrity</h1>
                        <p className='py-3'>
                            Integrity is the foundation of our institution. We uphold the highest ethical standards in all our endeavors, from our
                            academic programs to our interactions with students and the broader community. We believe in honesty, transparency, and
                            fairness in all our dealings, fostering a culture of trust and respect.
                        </p>
                    </div>
                </div>
                <span onClick={handleProg} className={prog ? 'text-orange-400 text-[17px] hover:text-gray-400 cursor-pointer text-center items-center justify-center flex mx-3 active:scale-105 duration-500' : 'hidden'}>
                    show less
                </span>
            </div>
        </div >
    )
}

export default About