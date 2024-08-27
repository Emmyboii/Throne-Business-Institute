import React from 'react';
import Quotes from '../Images/Quote.jpg';
import { FaQuoteLeft } from "react-icons/fa";

const Quote = () => {
    return (
        <div className='bg-gray-300'>
            <div className='py-[30px] px-[50px] grid grid-cols-3'>
                <img className='scale-95 col-span-1' src={Quotes} alt="" />
                <p className='col-span-2 mx-8 mt-[100px] text-[25px] font-semibold'>
                    <FaQuoteLeft className='text-blue-500' />
                    Nigerians are some of the most gifted learners in the world. Everyday at Our Nigerian Quarters is like a blessing with
                    the active students and talented staff members around. We are always glad to have new students who push the limits of
                    academic brilliance.
                    <p className='pt-7'>
                        Vonashuchuk Doe — Team Lead Executive TMBI Switzerland
                    </p>
                </p>

            </div>
        </div>
    )
}

export default Quote