import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/TBI logo.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [menu, setMenu] = useState(
        JSON.parse(localStorage.getItem('menu')) || 'home');
    const [nav, setNav] = useState(false);
    // const [fix, setFix] = useState(false);



    // function setFixed() {
    //     if (window.scrollY > 0) {
    //         setFix(true)
    //     } else {
    //         setFix(false)
    //     }
    // }

    const handleNav = () => {
        setNav(!nav);
    }

    // window.addEventListener("scroll", setFixed)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [menu])

    // useEffect(() => {
    //     const menu = JSON.parse(localStorage.getItem('menu'));
    //     if (menu) {
    //         setMenu(menu);
    //     }
    // }, []);

    useEffect(() => {
        localStorage.setItem('menu', JSON.stringify(menu));
    }, [menu]);

    return (
        <div className=''>
            <div className=' top-0 w-full flex justify-between p-[7px]'>
                <div className='flex items-center ml-8'>
                    <a href='/' ><img onClick={() => setMenu('home')} src={Logo} alt='' className='xl:w-[150px] lg:w-[140px] md:w-[120px] w-[100px]' /></a>
                </div>
                <ul className='hidden lg:flex xl:text-[21px] lg:text-[17px] ml-[30%] gap-[25px] items-center'>
                    <Link to='/'>
                        <li onClick={() => setMenu('home')} className={menu === "home" ? 'text-[#ffc936] ' : 'active:scale-95 hover:text-[#ffc936]'}>
                            Home
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li onClick={() => setMenu('about')} className={menu === "about" ? 'text-[#ffc936]' : 'active:scale-95 hover:text-[#ffc936]'}>
                            About Us
                        </li>
                    </Link>
                    <Link to='/programs'>
                        <li onClick={() => setMenu('program')} className={menu === "program" ? 'text-[#ffc936]' : 'active:scale-95 hover:text-[#ffc936]'}>
                            Programs
                        </li>
                    </Link>
                    <Link to='/accreditation'>
                        <li onClick={() => setMenu('Accredite')} className={menu === "Accredite" ? 'text-[#ffc936]' : 'active:scale-95 hover:text-[#ffc936]'}>
                            Accreditation
                        </li>
                    </Link>
                </ul>
                <div className='md:flex md:items-center hidden'>
                    <Link to='/contact'>
                        <button onClick={() => setMenu('Contact')} className='bg-blue-900  text-white active:scale-95 mt-2  py-3 px-6 rounded-lg outline-none active:bg-blue-800'>
                            Contact Us
                        </button>
                    </Link>
                </div>
                <div onClick={handleNav}>
                    <HiMenuAlt3 className='md:flex lg:hidden text-[30px] mt-[12px] md:mt-[20px] mr-7 cursor-pointer' />
                </div>
            </div>

            {nav ? <div onClick={handleNav} className='bg-black/80 lg:hidden w-full fixed h-screen z-10 top-0 left-0'></div> : ''}

            <div className={nav ? 'fixed top-0 right-0 w-[50%] lg:hidden h-screen bg-zinc-900 text-white z-50 duration-500' : 'fixed top-0 right-[-100%] w-[50%] lg:hidden h-screen z-50 duration-500'}>
                <div className='flex items-center ml-4 mt-8'>
                    <a href='/' ><img src={Logo} alt="" className='xl:w-[150px] lg:w-[140px] md:w-[120px] sb:w-[100px] w-[80px]' /></a>
                </div>
                <AiOutlineClose onClick={handleNav} size={30} className='absolute right-4 sb:top-[40px] top-[30px] cursor-pointer' />
                <nav className='lg:hidden flex flex-col'>
                    <ul className='flex flex-col p-4'>
                        <Link to='/' onClick={handleNav}>
                            <li onClick={() => setMenu('home')} className={menu === "home" ? 'text-red-600  p-3 rounded-xl bg-slate-800' : 'p-3 rounder-xl text-white active:scale-95 hover:text-red-600'}>
                                Home
                            </li>
                        </Link>
                        <Link to='/about' onClick={handleNav}>
                            <li onClick={() => setMenu('about')} className={menu === "about" ? 'text-red-600  rounded-xl p-3 bg-slate-800' : 'p-3  rounded-xl text-white active:scale-95 hover:text-red-600'}>
                                About Us
                            </li>
                        </Link>
                        <Link to='/programs' onClick={handleNav}>
                            <li onClick={() => setMenu('program')} className={menu === "program" ? 'text-red-600  rounded-xl p-3 bg-slate-800' : 'p-3  rounded-xl text-white active:scale-95 hover:text-red-600'}>
                                Programs
                            </li>
                        </Link>
                        <Link to='/accreditation' onClick={handleNav}>
                            <li onClick={() => setMenu('Accredite')} className={menu === "Accredite" ? 'text-red-600 rounded-xl p-3 bg-slate-800' : 'p-3  rounded-xl text-white active:scale-95 hover:text-red-600'}>
                                Accreditation
                            </li>
                        </Link>
                        <Link to='/contact' onClick={handleNav}>
                            <button onClick={() => setMenu('Contact')} className='bg-blue-900 text-white active:scale-95 mt-2 w-full py-3 px-6 rounded-lg outline-none active:bg-blue-800'>
                                Contact Us
                            </button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default Navbar