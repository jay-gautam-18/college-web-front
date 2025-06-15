import React, { useEffect, useState } from 'react'
import LnctFooter from '../../Components/LnctFooter';
import Home1 from '../../Components/HomeComponets/Home1';
import Nav from '../../Components/Nav';
import Loader from '../../Components/Loader';
const CollegeIndoreCmpus = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>

      <Nav/>
      {/* header */}
        <Home1
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/Student-Contect-1.png"}
    description={"we inspire innovation and discovery at LNCT Group of Colleges."}
    heading={"LNCT (Bhopal) Indore Campus | Formerly As Lord Krishna College of Technology (LKCT) Indore"}
    />
            {/* 1st part */}
      <div className="px-4 py-10 md:px-10 lg:px-20  max-w-screen-xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
          LNCT (Bhopal) Indore Campus <br />
         
          <div className="w-[100%] h-[1px] bg-black mx-auto mt-4"></div>
        </h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          {/* Text Section */}
          <div className="lg:w-3/5 text-justify text-gray-800 leading-relaxed space-y-4">
            <p className='text-xl'>
           
LNCT (Bhopal) Indore Campus an emerging institute since 2006. LNCT (Bhopal) Indore Campus is an achievement of eminent personalities, well qualified, devoted in the field of rural development having vast managerial experience in managing of running number of technical institutions through out the state of M P. They are first in establishing technical education as unaided engineering colleges as back as 1994. It is well known in M.P. by name of LAKSHMI NARAIN COLLEGE OF TECHNOLOGY, BHOPAL (LNCT).
                 </p>
            <br />
           <p>
           It is located in Indore, Madhya Pradesh. It offers under graduate engineering and post graduate courses    </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-2/5 w-full">
            <img
              src="https://lnct.ac.in/wp-content/uploads/2021/11/indore_lnct.png" // replace with your actual image path
              alt="LNCT Promotion"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* part-2 */}
       <div className="px-4 py-10 md:px-10 lg:px-20  max-w-screen-xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
        
         
          <div className="w-[100%] h-[1px] bg-black mx-auto mt-4"></div>
        </h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          {/* Text Section */}
          <div className="lg:w-3/5 text-justify text-gray-800 leading-relaxed space-y-4">
            <p className='text-xl'>
              LNCT (Bhopal) Indore Campus is conducting a Walk-in Interview on the 30th of September and 1st of October 2024, from 10 AM to 4 PM. The interview is for both teaching and non-teaching positions. Teaching staff openings include Professor, Associate Professor, and Assistant Professor roles in disciplines such as IT, CSE, EC, EX, CE, Physics, Communication Skills, Pharmacy, and MBA. Non-teaching positions available include Admission Counsellor, Telecaller, and Scholarship Incharge. Interested candidates are requested to bring their resume, testimonials, and two passport-size photographs to the provided address. Salary is negotiable for deserving candidates, and all qualifications must meet prescribed norms.
               </p>
            <br />
          
          </div>

          {/* Image Section */}
          <div className="lg:w-2/5 w-full">
            <img
              src="https://lnct.ac.in/wp-content/uploads/2021/05/Teach.jpeg" // replace with your actual image path
              alt="LNCT Promotion"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        </div>
      </div>

{/* part-3 */}
 <div className="flex flex-col lg:flex-row  justify-between items-center px-6 py-10 gap-10">
      {/* Left Section: Text + Campus Image */}
      <div className="flex flex-col items-center  lg:items-start text-center lg:text-left max-w-3xl">
        <img
          src="https://imgs.search.brave.com/10u0B9sVOwCEoj3eYL75XYo_r179ll6r3tcQ6YwA-JA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY29sbGVnZWR1/bmlhLmNvbS9wdWJs/aWMvY29sbGVnZV9k/YXRhL2ltYWdlcy9h/cHBJbWFnZS8xNDkw/MjQ4ODYzOS5qcGc_/aD0xNjAmdz0zMjAm/bW9kZT1zdHJldGNo" // Replace with actual campus image URL
          alt="LNCT Campus"
          className="w-full max-w-3xl mb-6"
        />
        <p className="text-lg sm:text-xl font-medium text-black leading-relaxed">
          Are you ready to embark on an incredible{' '}
          <span className="font-bold">Academic Journey ?</span> Look no further!{' '}
          <span className="font-bold">LNCT Bhopal Indore Campus</span> is thrilled to
          announce the <span className="font-bold">Admission Open session</span> for the{' '}
          <span className="font-bold">academic year 2025-26</span>
        </p>
      </div>

      {/* Right Section: Tour + Principal */}
      <div className="flex flex-col items-center gap-6">
        {/* 360 Virtual Tour */}
        <div className="flex flex-col items-center">
          <img
            src="https://lnct.ac.in/wp-content/uploads/2023/05/360-Virtual-Tour-Logo.png" // Replace with actual 360° icon URL
            alt="360 Virtual Tour"
            className="w-24 h-24"
          />
          <p className="text-xl font-semibold text-gray-800 mt-2 text-center">
            360° <br /> <span className="text-base">Virtual Tour</span>
          </p>
        </div>

        {/* Principal Profile */}
        <div className="flex flex-col items-center">
          <img
            src="https://lnct.ac.in/wp-content/uploads/2024/07/image001.jpg" // Replace with actual principal image URL
            alt="Dr. Prashant Purohit"
            className="w-64 h-auto rounded-md shadow-md"
          />
          <p className="mt-2 font-semibold text-sm text-gray-700">Principle Profile</p>
          <p className="text-blue-800 font-bold underline text-sm">
            DR. PRASHANT PUROHIT
          </p>
        </div>
      </div>
    </div>

<hr />
<br />
     <div className='w-full md:h-auto flex flex-col justify-center items-center'>
      <h1 className='text-4xl text-bold'>LNCT (Bhopal) Indore Campus</h1>
      <br />
      <p className='text-xl text-bold'>Since 2006, the LNCT (Bhopal) Indore Campus has emerged as a reputable institute in the field of technical education. This campus is the result of the dedicated efforts of experienced and highly qualified individuals who are committed to rural development and have successfully managed several technical institutions across Madhya Pradesh. They were pioneers in establishing unaided engineering colleges in the state as early as 1994. The institute is renowned in Madhya Pradesh as the Lakshmi Narain College of Technology, Bhopal (LNCT). Located in Indore, the institute offers undergraduate and postgraduate courses in engineering</p>
     </div>
      <LnctFooter/>
    </div>
  )
}

export default CollegeIndoreCmpus