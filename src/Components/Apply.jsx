import React, { useState } from 'react';
import axios from 'axios';


const Apply = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
        // firstname: '',
        // lastname: '',
        // whatsapp: '',
        // email: '',
        // educationlvl: '',
        // programs: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const jotFormAPIKey = 'f08aa138e599d22562079cf29cfd5148';
        const formID = '242971674535062';

        const url = `https://api.jotform.com/form/${formID}/submissions`;

        const data = {
            submission: {
                q1_name: formData.name,
                q2_email: formData.email,
                q3_feedback: formData.feedback
            }
        };


        // const data = {
        //     submission: {
        //         q1_firstname: formData.firstname,
        //         q2_lastname: formData.lastname,
        //         q3_whatsapp: formData.whatsapp,
        //         q4_email: formData.email,
        //         q5_educationlvl: formData.educationlvl,
        //         q6_programs: formData.programs,
        //     }
        // };

        try {
            await axios.post(url, data, {
                headers: {
                    'Authorization': `Bearer ${jotFormAPIKey}`,
                    'Content-Type': 'application/json'
                }
            });
            alert('Form Submitted Successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formID = '242971674535062';
    //     const formUrl = `https://docs.google.com/forms/d/${formID}/formResponse`;

    //     const formBody = new FormData();
    //     formBody.append('entry.1166573479', formData.firstname); // Replace with your name entry ID
    //     formBody.append('entry.562501021', formData.lastname); // Replace with your name entry ID
    //     formBody.append('entry.171977893', formData.whatsapp); // Replace with your name entry ID
    //     formBody.append('entry.522937889', formData.email); // Replace with your email entry ID
    //     formBody.append('entry.89628955', formData.educationlvl); // Replace with your feedback entry ID
    //     formBody.append('entry.1456453106', formData.programs); // Replace with your name entry ID

    //     try {
    //         await axios.post(formUrl, formBody);
    //         alert('Form Submitted Successfully!');
    //     } catch (error) {
    //         console.error('Error submitting form: ', error);
    //     }
    // };


    return (
        // <div>
        //     <div id="apply" className='w-full md:py-10 py-10 bg-gray-300 text-black'>
        //         <div className='flex flex-col items-center justify-center'>
        //             <form onSubmit={handleSubmit} className="w-[90%] ms:w-[50%] mx-5 bg-white py-[35px] shadow-md shadow-black/50">
        //                 <p className='font-serif font-semibold text-orange-600 text-[23px] sx:text-[25.5px] px-1 sy:text-[30px] text-center leading-[40px] sx:leading-[50px]'>
        //                     APPLY NOW FOR A SCHOLARSHIP
        //                 </p><br />
        //                 <div className="ms:flex">
        //                     <div className="mx-5 ms:w-full">
        //                         <label className="text-[17px] sv:text-[20px] mo:text-[21px] font-semibold" htmlFor="firstName">FIRST NAME</label><br />
        //                         <input
        //                             className='py-[12px] mt-2 w-full mb-3 pl-[15px] rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
        //                             type="text"
        //                             name="firstname"
        //                             value={formData.firstname}
        //                             onChange={handleChange}
        //                             required
        //                             placeholder='John'
        //                         />
        //                     </div>
        //                     <div className="mx-5 ms:w-full">
        //                         <label className="text-[17px] sv:text-[20px] mo:text-[21px] font-semibold" htmlFor="lastNmae">LAST NAME</label><br />
        //                         <input
        //                             className='py-[12px] mt-2 mb-3 pl-[15px] w-full rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
        //                             type="text"
        //                             name="lastname"
        //                             value={formData.lastname}
        //                             onChange={handleChange}
        //                             required
        //                             placeholder='Doe'
        //                         />
        //                     </div>
        //                 </div>
        //                 <div className="ms:flex">
        //                     <div className="mx-5 ms:w-full">
        //                         <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-semibold" htmlFor="phoneNumber">WHATSAPP NUMBER</label><br />
        //                         <input
        //                             className='py-[12px] mt-2 mb-3 pl-[15px] w-full rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
        //                             type="tel"
        //                             name="whatsapp"
        //                             value={formData.whatsapp}
        //                             onChange={handleChange}
        //                             required
        //                             placeholder='09039926456'
        //                         />
        //                     </div>
        //                     <div className="mx-5 ms:w-full">
        //                         <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-semibold" htmlFor="email">EMAIL ADDRESS</label><br />
        //                         <input
        //                             className='py-[12px] mt-2 mb-3 pl-[15px] w-full rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
        //                             type="email"
        //                             name="email"
        //                             value={formData.email}
        //                             onChange={handleChange}
        //                             required
        //                             placeholder='johndoe@email.com'
        //                         />
        //                     </div>
        //                 </div>
        //                 <div className="mx-5">
        //                     <label className="text-[17px] sv:text-[19px] mo:text-[21px] font-semibold" htmlFor="educationLvl">HIGHEST EDUCATION LEVEL</label><br />
        //                     <select
        //                         className='py-[12px] mt-2 mb-3 pl-[15px] w-full text-[18px] rounded-lg border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
        //                         name="educationlvl"
        //                         value={formData.educationlvl}
        //                         onChange={handleChange}
        //                         required
        //                         placeholder='Your First name here'
        //                     >
        //                         <option value=""></option>
        //                         <option className="text-[18px] font-semibold" value="ssce">Senior Secondary School Certificate Examination(SSCE)</option>
        //                         <option className="text-[18px] font-semibold" value="ond">Ordinary National Diploma(OND)</option>
        //                         <option className="text-[18px] font-semibold" value="hnd">Higher National Diploma(HND)</option>
        //                         <option className="text-[18px] font-semibold" value="hnd">Bachelor of Sciences(BSc)</option>
        //                         <option className="text-[18px] font-semibold" value="hnd">Postgraduate Diploma(PGD)</option>
        //                         <option className="text-[18px] font-semibold" value="masters">Masters Degree</option>
        //                     </select>
        //                 </div>
        //                 <div className="mx-5">
        //                     <label className="text-[18.5px] sv:text-[19px] mo:text-[21px] font-semibold" htmlFor="educationLvl">AVAILBABLE PROGRAMME(S)</label><br />
        //                     <select
        //                         className='py-[12px] mt-2 mb-3 pl-[15px] text-[18px] w-full rounded-lg border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
        //                         name="programs"
        //                         value={formData.programs}
        //                         onChange={handleChange}
        //                         required
        //                         placeholder='Your First name here'
        //                     >
        //                         <option className="text-[18px]" value="">Available Programme(s)</option>
        //                         <optgroup className="text-[22px]" label="Associate Degree's (B.Sc - AD)">
        //                             <option className="text-[18px] font-[500]" value="Social Media Management">
        //                                 Social Media Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Customer Service">
        //                                 Customer Service
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Human Resource Management">
        //                                 Human Resource Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Project Management">
        //                                 Project Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Risk Management">
        //                                 Risk Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Sales Management">
        //                                 Sales Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Information Management">
        //                                 Information Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Supply Chain Management">
        //                                 Supply Chain Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Marketing">
        //                                 Marketing
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Accounting">
        //                                 Accounting
        //                             </option>
        //                         </optgroup>
        //                         <optgroup className="text-[22px]" label="Executive MBA Program">
        //                             <option className="text-[18px] font-[500]" value="Business Management">
        //                                 Business Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Marketing">
        //                                 Marketing
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Human Resources">
        //                                 Human Resources
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Risk Management">
        //                                 Risk Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Supply Chain Management">
        //                                 Supply Chain Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Project Management">
        //                                 Project Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Information Technology">
        //                                 Information Technology
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Sales Management">
        //                                 Sales Management
        //                             </option>
        //                             <option className="text-[18px] font-[500]" value="Accounting">
        //                                 Accounting
        //                             </option>
        //                         </optgroup>
        //                     </select>
        //                 </div>
        //                 <div className="mx-5">
        //                     <button type="submit" className='py-[15px] w-[100%] mt-1 rounded-xl font-semibold sw:text-[24px] bg-blue-500 text-white'>Register Now</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
            />
            <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Your Feedback"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Apply;