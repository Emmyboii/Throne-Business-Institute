import { React } from "react";

const Newsletter = () => {

    return (
        <div id="apply" className='w-full md:py-10 py-10 bg-pink-50 text-black'>
            <div className='flex flex-col items-center justify-center'>
                <form className="w-[90%] ms:w-[50%] mx-5 bg-white py-[35px] shadow-md shadow-black/50">
                    <p className='font-serif font-semibold text-orange-600 text-[23px] sx:text-[25.5px] px-1 sy:text-[30px] text-center leading-[40px] sx:leading-[50px]'>
                        APPLY NOW FOR A SCHOLARSHIP
                    </p><br />
                    <div className="ms:flex">
                        <div className="mx-5 ms:w-full">
                            <label className="text-[17px] sv:text-[20px] mo:text-[21px] font-semibold" htmlFor="firstName">FIRST NAME</label><br />
                            <input className='py-[12px] mt-2 w-full mb-3 pl-[15px] rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none' type="text" name="firstName" required placeholder='John' />
                        </div>
                        <div className="mx-5 ms:w-full">
                            <label className="text-[17px] sv:text-[20px] mo:text-[21px] font-semibold" htmlFor="lastNmae">LAST NAME</label><br />
                            <input className='py-[12px] mt-2 mb-3 pl-[15px] w-full rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none' type="text" name="lastName" required placeholder='Doe' />
                        </div>
                    </div>
                    <div className="ms:flex">
                        <div className="mx-5 ms:w-full">
                            <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-semibold" htmlFor="phoneNumber">WHATSAPP NUMBER</label><br />
                            <input className='py-[12px] mt-2 mb-3 pl-[15px] w-full rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none' type="tel" name="phoneNo" required placeholder='09039926456' />

                        </div>
                        <div className="mx-5 ms:w-full">
                            <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-semibold" htmlFor="email">EMAIL ADDRESS</label><br />
                            <input className='py-[12px] mt-2 mb-3 pl-[15px] w-full rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none' type="email" name="emailAdd" required placeholder='johndoe@email.com' />
                        </div>
                    </div>
                    <div className="mx-5">
                        <label className="text-[17px] sv:text-[19px] mo:text-[21px] font-semibold" htmlFor="educationLvl">HIGHEST EDUCATION LEVEL</label><br />
                        <select className='py-[12px] mt-2 mb-3 pl-[15px] w-full text-[18px] rounded-lg border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none' name="educationLvl" required placeholder='Your First name here' >
                            <option value=""></option>
                            <option className="text-[18px] font-semibold" value="ssce">Senior Secondary School Certificate Examination(SSCE)</option>
                            <option className="text-[18px] font-semibold" value="ond">Ordinary National Diploma(OND)</option>
                            <option className="text-[18px] font-semibold" value="hnd">Higher National Diploma(HND)</option>
                            <option className="text-[18px] font-semibold" value="hnd">Bachelor of Sciences(BSc)</option>
                            <option className="text-[18px] font-semibold" value="hnd">Postgraduate Diploma(PGD)</option>
                            <option className="text-[18px] font-semibold" value="masters">Masters Degree</option>
                        </select>
                    </div>
                    <div className="mx-5">
                        <label className="text-[18.5px] sv:text-[19px] mo:text-[21px] font-semibold" htmlFor="educationLvl">AVAILBABLE PROGRAMME(S)</label><br />
                        <select className='py-[12px] mt-2 mb-3 pl-[15px] text-[18px] w-full rounded-lg border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none' name="educationLvl" required placeholder='Your First name here' >
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
                        <button type="submit" className='py-[15px] w-[100%] mt-1 rounded-xl font-semibold sw:text-[24px] bg-blue-500 text-white'>Register Now</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter