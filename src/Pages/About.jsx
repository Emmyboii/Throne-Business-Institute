import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import EMM from '../Images/EMM.jpg';
import EMM1 from '../Images/EMM1.jpg';
import vision from '../Images/Vision1.png';
import mission from '../Images/mission1.png';
import abt from '../Images/abt.jpg';
import { ReactTyped } from 'react-typed';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1300,
            easing: "ease-out-cubic"
        });
    }, []);

    return (
        <div className='text-white'>
            <div className='flex bg-black text-center items-center justify-center'>
                <img className='h-[100vh] object-cover opacity-65 w-full' src={abt} alt='' />
                <h1 className='absolute top-[25%] md:text-[77px] sx:text-[60px] sa:text-[55px] text-[50px] font-semibold'>About Us</h1>
                <p className='absolute top-[58%] md:text-[54px] sx:text-[40px] sa:text-[35px] text-[30px] font-semibold'>
                    <ReactTyped
                        strings={['Redefining Higher Education']}
                        typeSpeed={90}
                        backSpeed={120}
                        startDelay={300}
                        showCursor={false}
                        loop
                    />
                </p>
            </div>
            <div className='mv:grid mv:grid-cols-2 items-center flex flex-col justify-center bg-black/60 mv:pl-[50px] mv:pr-[20px] mv:py-[50px]'>
                <div>
                    <img className='mv:h-[120vh] h-[80vh] w-full lg:mt-0 mt-12 mv:block hidden mv:object-cover' src={EMM} alt="" />
                    <img className='mr:scale-95 scale-90 h-[80vh] w-full mt-12 mv:hidden block mv:object-cover' src={EMM1} alt="" />
                </div>
                <div>
                    <p data-aos="fade-up" data-aos-delay="200" className='aos-init se:text-[19px] text-[18px] mv:text-[18px] text-white mv:pl-9 mv:mx-0 se:mx-9 mx-4 mv:mb-0 mb-5 mt-6 leading-[26px]'>
                        Throne Management and Business Institute Switzerland (TMBI) is a pioneering educational institution dedicated to
                        empowering individuals with the knowledge and skills necessary to succeed in the dynamic global landscape. Founded
                        in 2018, TMBI is the first WhatsApp-based peer-to-peer educational institute in Nigeria, offering a unique and
                        accessible approach to learning. <br /><br />
                        We are committed to democratizing education by providing high-quality, affordable, and flexible programs that cater to
                        the diverse needs of learners across Nigeria. Our goal is to bridge the gap between traditional education and the
                        demands of the modern world by leveraging technology to deliver exceptional learning experiences.
                        As a leading global provider of innovative educational solutions, we strive to create a world where education is
                        accessible to all and where knowledge is celebrated as the catalyst for positive change. <br /><br />
                        Our values include innovation, accessibility, excellence, integrity, and impact. We believe in embracing innovation to
                        deliver engaging and effective learning experiences, making education accessible to all, providing the highest quality
                        education, upholding the highest ethical standards, and making a positive impact on society.
                        TMBI offers a range of management and business courses designed to meet the diverse educational needs of our students.
                        Our programs are valued between $20,000 to $50,000, reflecting the quality and depth of education provided.
                    </p>
                </div>
            </div>
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
            <div className='bg-black/60 py-[50px]'>
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
        </div>
    )
}

export default About