import { React } from "react";
// import emailjs from "@emailjs/browser";

const Newsletter = () => {



    return (
        <div className='w-full md:py-16 py-10 bg-pink-50 text-black'>
            <div className='lg:flex lg:flex-row lg:justify-center lg:items-center flex flex-col'>
                <div className='mt-[50px]'>
                    <p className='font-serif font-semibold text-orange-600 text-[35px] text-center leading-[60px]'> REGISTER NOW TO APPLY FOR A SCHOLARSHIP </p><br />
                </div>
                <form action="POST">
                    <div className='mt-[30px] mx-11'>
                        <div>
                            <label className="text-[20px] font-semibold" htmlFor="firstName">FIRST NAME</label><br />
                            <input className='py-[14px] mt-2 mb-6 pl-[35px] se:pr-[300px] st:pr-[50px] rounded-lg bg-transparent border-black border-2 outline-none' type="text" name="first_name" id="firstName" required placeholder='John' />
                        </div>
                        <div>
                            <label className="text-[20px] font-semibold" htmlFor="lastNmae">LAST NAME</label><br />
                            <input className='py-[14px] mt-2 mb-6 pl-[35px] se:pr-[300px] st:pr-[50px] rounded-lg bg-transparent border-black border-2 outline-none' type="text" name="last_name" id="lastName" required placeholder='Doe' />
                        </div>
                        <div>
                            <label className="text-[20px] font-semibold" htmlFor="phoneNumber">WHATSAPP PHONE NUMBER</label><br />
                            <input className='py-[14px] mt-2 mb-6 pl-[35px] se:pr-[300px] st:pr-[50px] rounded-lg bg-transparent border-black border-2 outline-none' type="tel" name="phone_number" id="phoneNo" required placeholder='09039926456' />

                        </div>
                        <div>

                            <label className="text-[20px] font-semibold" htmlFor="firstName">EMAIL ADDRESS</label><br />
                            <input className='py-[14px] mt-2 mb-6 pl-[35px] se:pr-[300px] st:pr-[50px] rounded-lg bg-transparent border-black border-2 outline-none' type="email" name="email" id="emailAdd" required placeholder='johndoe@email.com' />
                        </div>
                        <div>
                            <label className="text-[20px] font-semibold" htmlFor="firstName">HIGHEST EDUCATION LEVEL</label><br />
                            <select className='py-[14px] mt-2 mb-6 pl-[35px] se:pr-[420px] st:pr-[50px] rounded-lg bg-transparent border-black border-2 outline-none' type="text" name="first_name" id="firstName" required placeholder='Your First name here' >
                                <option value=""></option>
                                <option className="my-8" value="ssce">SSCE</option>
                                <option className="my-8" value="hnd">HND</option>
                                <option className="my-8" value="ond">OND</option>
                            </select>
                        </div>
                        <button type="submit" className='text-center py-[15px] sw:px-[100px] px-[30px] sw:mt-0 mt-8 rounded-xl sw:text-[16px] bg-black text-white'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter