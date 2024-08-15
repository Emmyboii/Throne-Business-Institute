import { React, useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Newsletter = () => {

    const emailRef = useRef();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true)


    useEffect(() => emailjs.init("wbZ9AQd_26WHD0vc7"), []);

    function handleInput(e) {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
            setIsEmailValid(false);
            alert("invaild email address");
        } else {
            setIsEmailValid(true);
            setEmail("");
        }

        const serviceId = "service_5lmduav";
        const templateId = "template_spwlmwl";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                email: emailRef.current.value
            });
            alert("Subscribed successfully");
        } catch (error) {
            setIsEmailValid(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-full md:py-16 py-10 px-4 bg-[#1e1d62] text-white'>
            <div className='2la:grid 2la:grid-cols-5'>
                <div className='2la:col-span-2 ml-5'>
                    <p className='font-serif se:text-[34.5px] xl:text-[36px] sb:text-[30px] text-[25px] leading-10'> Stay updated on our admissions and programs </p><br />
                    <p className='font-serif se:text-[20px] sb:text-[21px] text-[18px]'>Subscribe to our newsletter</p>
                </div>
                <form onSubmit={handleSubmit} action="POST">
                    <div className='2la:col-span-3 sw:flex  mt-[50px]'>
                        <input value={email} onChange={handleInput} ref={emailRef} className={!isEmailValid ? 'border-red-700 placeholder:text-red-700 py-[20px] pl-[35px] se:pr-[200px] st:pr-[50px] ml-5 rounded-lg bg-transparent border-2 outline-none' :'py-[20px] pl-[35px] se:pr-[200px] st:pr-[50px] ml-5 rounded-lg bg-transparent border-white border-2 outline-none'} type="text" name="Email" placeholder='Your Email Address' />
                        <button type="submit" disabled={loading} className='text-center py-[16px] sw:py-[18px] sw:px-[40px] px-[30px] sw:mt-0 mt-8 ml-5 sw:ml-[30px] sw:mr-0 mr-10 rounded-lg sw:text-[16px] bg-white text-black'>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter