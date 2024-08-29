import React from 'react';
import Quotes from '../Images/Quote.jpg';
import { FaQuoteLeft } from "react-icons/fa";

const Quote = () => {


    return (
        <div className='bg-gray-300'>
            <div className='py-[30px] mv:pl-[50px] mv:pr-[30px] mv:flex mv:flex-row flex flex-col items-center'>
                <img className='scale-95' src={Quotes} alt="" />
                <div>
                    <p className='mx-[20px] mv:ml-[50px] lg:mt-[7.5%] ss:text-[25px] font-serif sd:text-[23px] text-[20px] font-semibold'>
                        <FaQuoteLeft className='text-blue-500' />
                        Nigerians are some of the most gifted learners in the world. Everyday at Our Nigerian Quarters is like a blessing with
                        the active students and talented staff members around. We are always glad to have new students who push the limits of
                        academic brilliance.
                    </p>
                    <p className='pt-7 mx-[20px] ss:text-[25px] sd:text-[23px] text-[20px] mv:ml-[50px] font-normal'>
                        Vonashuchuk Doe — Team Lead Executive TMBI Switzerland
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Quote