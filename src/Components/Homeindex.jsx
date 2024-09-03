import { React, useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Background1 from "../Images/background2.jpg";
import { RiArrowUpWideLine } from "react-icons/ri";
import Background2 from "../Images/BG1.jpg";
import Background3 from "../Images/BG2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homeindex = () => {


    const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY > 650) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)


    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic"
        });
    }, []);


    var settings = {
        infinite: true,
        fade: true,
        speed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5700,
    };


    return (
        <div className='w-full h-[100%] bg-blue-600 outline-none border-none'>
            <div>
                <Slider {...settings} >
                    <img src={Background1} alt='' className='w-full max-h-dvh min-h-[70dvh] object-cover opacity-50' />
                    <img src={Background2} alt='' className='w-full max-h-dvh min-h-[70dvh] object-cover lg:object-fill opacity-50' />
                    <img src={Background3} alt='' className='w-full max-h-dvh min-h-[70dvh] object-cover opacity-50' />
                </Slider>
            </div>
            <div className='flex'>
                <div data-aos="fade-down" data-aos-delay="200" className='aos-init absolute top-[32%] flex flex-col justify-center sp:top-[37%] mp:top-[47%] md:top-[37%] mr:top-[35%] ma:top-[50%] mj:top-[35%] mk:top-[50%] mv:top-[32%] mw:top-[45%] lg:top-[38%] 2la:top-[48%] xl:top-[44%] 2lq:top-[50%] left-[4%]'>
                    <h1 className=' lg:text-[60px] md:text-[55px] leading-[56px] sv:text-[49px] text-[48px] se:text-[57px] sp:text-[47px] mv:text-[60px] font-bold text-white'>
                        Accelerate <br className='sp:hidden block' /> Your Future.
                    </h1>
                    <p className='pt-8 lg:text-[26px] mv:text-[26px] sm:text-[23px] sv:text-[21px] text-[19px] xl:mr-[550px] 2la:mr-[450px] 2ll:mr-[800px] ms:mr-[400px] md:mr-[250px] sm:mr-[120px] sx:mr-[80px] font-semibold text-white'>
                        Earn globally recognized degrees, diplomas and certificates with unbeatable scholarship.
                    </p>
                    <a href='#programs'>
                        <button data-aos="fade-up" data-aos-delay="600" className='aos-init absolute bg-blue-400 mt-5 text-white py-3 px-6 rounded-lg outline-none active:bg-blue-300'>
                            Start your Journey
                        </button>
                    </a>
                </div>
                <button onClick={() => window.scrollTo(0, 0)} title='Scroll To Top' data-aos="slide-right" data-aos-delay="100" className={fix ? 'bg-gray-500  p-1 fixed rounded-full hover:bg-gray-600 text-white top-[84%] left-[-2%] z-40 mx-11' : 'hidden'}>
                    <RiArrowUpWideLine size={40} className='' />
                </button>

                <div className='xl:block hidden absolute top-[23%] 2lq:top-[22%] left-[60%]'>
                    <form className="w-[80%] ms:w-[80%] mx-5 bg-white py-[30px] shadow-md shadow-black/50">
                        <p className='font-serif font-semibold text-orange-600 text-[23px] sx:text-[25.5px] px-1 sy:text-[30px] text-center leading-[40px] sx:leading-[50px]'>
                            APPLY NOW FOR A SCHOLARSHIP
                        </p><br />
                        <div className="ms:flex">
                            <div className="mx-5 ms:w-full">
                                <input className='py-[10px] mt-2 w-full mb-6 pl-[20px] rounded-lg bg-transparent border-black border-2 focus:border-orange-400 focus:shadow focus:shadow-orange-400 outline-none placeholder:text-[17px]' type="text" name="firstName" required placeholder='First Name' />
                            </div>
                            <div className="mx-5 ms:w-full">
                                <input className='py-[10px] mt-2 mb-6 pl-[20px] w-full rounded-lg bg-transparent border-black border-2 focus:border-orange-400 focus:shadow focus:shadow-orange-400 outline-none placeholder:text-[17px]' type="text" name="lastName" required placeholder='Last Name' />
                            </div>
                        </div>
                        <div className="ms:flex">
                            <div className="mx-5 ms:w-full">
                                <input className='py-[10px] mt-2 mb-6 pl-[20px] w-full rounded-lg bg-transparent border-black border-2 focus:border-orange-400 focus:shadow focus:shadow-orange-400 outline-none placeholder:text-[17px]' type="tel" name="phoneNo" required placeholder='WhatsApp number' />
                            </div>
                            <div className="mx-5 ms:w-full">
                                <input className='py-[10px] mt-2 mb-6 pl-[20px] w-full rounded-lg bg-transparent border-black border-2 focus:border-orange-400 focus:shadow focus:shadow-orange-400 outline-none placeholder:text-[17px]' type="email" name="emailAdd" required placeholder='E-mail' />
                            </div>
                        </div>
                        <div className="mx-5">
                            <select className='py-[10px] mt-2 mb-6 pl-[20px] pr-[30px] text-[18px] w-full rounded-lg bg-transparent border-black border-2 focus:border-orange-400 focus:shadow focus:shadow-orange-400 outline-none' name="educationLvl" required >
                                <option value="">Highest Education Level</option>
                                <option className="text-[18px] font-semibold" value="ssce">Senior Secondary School Certificate Examination(SSCE)</option>
                                <option className="text-[18px] font-semibold" value="ond">Ordinary National Diploma(OND)</option>
                                <option className="text-[18px] font-semibold" value="hnd">Higher National Diploma(HND)</option>
                                <option className="text-[18px] font-semibold" value="hnd">Bachelor of Sciences(BSc)</option>
                                <option className="text-[18px] font-semibold" value="hnd">Postgraduate Diploma(PGD)</option>
                                <option className="text-[18px] font-semibold" value="masters">Masters Degree</option>
                            </select>
                        </div>
                        <div className="mx-5">
                            <select className='py-[10px] mt-2 mb-6 pl-[20px] pr-[30px] text-[18px] w-full rounded-lg bg-transparent border-black border-2 focus:border-orange-400 focus:shadow focus:shadow-orange-400 outline-none' name="educationLvl" required >
                                <option className="text-[18px]" value="">Available Programme(s)</option>
                                <optgroup className="text-[22px]" label="Associate Degree's (B.Sc - AD)">
                                    <option className="text-[18px] font-[500]" value="Social Media Management">Social Media Management</option>
                                    <option className="text-[18px] font-[500]" value="Customer Service">Customer Service</option>
                                    <option className="text-[18px] font-[500]" value="Human Resource Management">Human Resource Management</option>
                                    <option className="text-[18px] font-[500]" value="Project Management">Project Management</option>
                                    <option className="text-[18px] font-[500]" value="Risk Management">Risk Management</option>
                                    <option className="text-[18px] font-[500]" value="Sales Management">Sales Management</option>
                                    <option className="text-[18px] font-[500]" value="Information Management">Information Management</option>
                                    <option className="text-[18px] font-[500]" value="Supply Chain Management">Supply Chain Management</option>
                                    <option className="text-[18px] font-[500]" value="Marketing">Marketing</option>
                                    <option className="text-[18px] font-[500]" value="Accounting">Accounting</option>
                                </optgroup>
                                <optgroup className="text-[22px]" label="Executive MBA Program">
                                    <option className="text-[18px] font-[500]" value="Business Management">Business Management</option>
                                    <option className="text-[18px] font-[500]" value="Marketing">Marketing</option>
                                    <option className="text-[18px] font-[500]" value="Human Resources">Human Resources</option>
                                    <option className="text-[18px] font-[500]" value="Risk Management">Risk Management</option>
                                    <option className="text-[18px] font-[500]" value="Supply Chain Management">Supply Chain Management</option>
                                    <option className="text-[18px] font-[500]" value="Project Management">Project Management</option>
                                    <option className="text-[18px] font-[500]" value="Information Technology">Information Technology</option>
                                    <option className="text-[18px] font-[500]" value="Sales Management">Sales Management</option>
                                    <option className="text-[18px] font-[500]" value="Accounting">Accounting</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="mx-5">
                            <button type="submit" className='py-[10px] w-[100%] sw:mt-0 rounded-xl font-semibold sw:text-[24px] bg-black text-white'>Register</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='bg-gradient-to-r from-blue-500 from-50% to-orange-400 lg:py-[57px] mr:py-[50px] md:py-[42px] sa:py-[35px] py-[14px] text-center justify-center flex'>
                <p className='lg:text-[25px] mr:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] font-semibold sm:mx-[40px] md:mx-[55px] mx-[2px] sa:mx-[10px] text-white'>
                    Unlock your potential with our innovative online programs.
                    We offer a unique pathway to academic excellence. With our flexible online platform and world-class faculty,
                    you can achieve your educational goals without compromising your commitments.
                </p>
            </div>
        </div>

    )
}

export default Homeindex