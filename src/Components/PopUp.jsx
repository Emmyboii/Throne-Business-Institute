import React, { useEffect, useRef, useState } from 'react'
import { FaTimes } from "react-icons/fa";
import BG from '../Images/last.jpg';

const PopUp = () => {
    const [modal, setModal] = useState(false)

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    const onClose = () => {
        setModal(false)
    }

    useEffect(() => {
        if (!localStorage.getItem("seenPopUp")) {
            setTimeout(() => {
                setModal(true);
                localStorage.setItem("seenPopUp", true);
            }, 4500)
        }
    }, []);

    return modal ? (
        <div ref={modalRef} onClick={closeModal} className='fixed z-50 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center duration-300'>
            <div className='flex flex-col justify-center xl:w-[70%] mp:w-[80%] w-[65%] h-[50vh]'>
                <button onClick={onClose} className='place-self-end cursor-pointer text-white'><FaTimes size={30} /></button>
                <div className="shadow-md shadow-black/50 grid mp:grid-cols-5">
                    <img src={BG} className='mp:col-span-3 z-30 mp:h-[60vh] mj:h-auto' alt="" />
                    <form className='shadow-gray-400 mp:col-span-2 shadow-md py-4 bg-white flex flex-col justify-center'>
                        <div className="mx-5">
                            <input className='py-[7px] mt-[10px] xl:mb-4 xl:py-[10px] w-full mb-[10px] pl-[6px] rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[16px]' type="text" name="firstName" required placeholder='First Name' />
                        </div>
                        <div className="mx-5">
                            <input className='py-[7px] mb-[10px] xl:mb-4 xl:py-[10px] pl-[6px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[16px]' type="text" name="lastName" required placeholder='Last Name' />
                        </div>
                        <div className="mx-5">
                            <input className='py-[7px] mb-[10px] xl:mb-4 xl:py-[10px] pl-[6px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[16px]' type="tel" name="phoneNo" required placeholder='WhatsApp number' />
                        </div>
                        <div className="mx-5">
                            <input className='py-[7px] mb-[10px] xl:mb-4 xl:py-[10px] pl-[6px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[16px]' type="email" name="emailAdd" required placeholder='E-mail' />
                        </div>
                        <div className="mx-5">
                            <select className='py-[7px] mb-[10px] xl:mb-4 xl:py-[10px] pl-[6px] pr-[30px] text-[16px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none' name="educationLvl" required >
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
                            <select className='py-[7px] mb-[10px] xl:mb-4 xl:py-[10px] pl-[6px] pr-[30px] text-[16px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none' name="educationLvl" required >
                                <option className="text-[18px]" value="">Available Programme(s)</option>
                                <optgroup className="text-[22px]" label="Associate Degree's (B.Sc - AD)">
                                    <option className="text-[18px] font-[500]" value="Social Media Management">
                                        Social Media Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Customer Service">
                                        Customer Service
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Human Resource Management">
                                        Human Resource Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Project Management">
                                        Project Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Risk Management">
                                        Risk Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Sales Management">
                                        Sales Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Information Management">
                                        Information Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Supply Chain Management">
                                        Supply Chain Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Marketing">
                                        Marketing
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Accounting">
                                        Accounting
                                    </option>
                                </optgroup>
                                <optgroup className="text-[22px]" label="Executive MBA Program">
                                    <option className="text-[18px] font-[500]" value="Business Management">
                                        Business Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Marketing">
                                        Marketing
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Human Resources">
                                        Human Resources
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Risk Management">
                                        Risk Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Supply Chain Management">
                                        Supply Chain Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Project Management">
                                        Project Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Information Technology">
                                        Information Technology
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Sales Management">
                                        Sales Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Accounting">
                                        Accounting
                                    </option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="mx-5">
                            <button type="submit" className='py-[7px] w-[100%] sw:mt-0 rounded-xl font-semibold sw:text-[24px] bg-blue-500 text-white'>Apply Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) : "";
}

export default PopUp