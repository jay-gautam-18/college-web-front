import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav';
import LnctFooter from '../../Components/LnctFooter';
import Home1 from '../../Components/HomeComponets/Home1';
import { CheckCircle } from "lucide-react";
import Home5 from '../../Components/HomeComponets/Home5';
import Loader from '../../Components/Loader';
const steps = [
  {
    step: "Step 1",
    icon: (
      <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v10m0-10l-2 2m2-2l2 2m4-2a4 4 0 00-8 0H6a6 6 0 1112 0h-2z" />
      </svg>
    ),
    description: "First of all of You Need To Register",
  },
  {
    step: "Step 2",
    icon: (
      <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M5 20h14a2 2 0 002-2v-4H3v4a2 2 0 002 2zM8 6h8m-4-2v4" />
      </svg>
    ),
    description: "Verification of Document's",
  },
  {
    step: "Step 3",
    icon: (
      <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-1a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Choice Filling and Part Payment of Tuition Fee",
  },
  {
    step: "Step 4",
    icon: (
      <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c2.5 0 4.5-2 4.5-4.5S14.5 2 12 2 7.5 4 7.5 6.5 9.5 11 12 11zm0 2c-3.315 0-6 1.79-6 4v1h12v-1c0-2.21-2.685-4-6-4z" />
      </svg>
    ),
    description: "Allotment Process with take Place",
  },
  {
    step: "Step 5",
    icon: (
      <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v18M6 3h13v6H6m13 0l-4-3.5L19 6" />
      </svg>
    ),
    description: "Reporting to Allotted Institute",
  },
];

const contactInfo = [
  {
    title: 'For Admission in BE/M.Tech. Course Kindly contact at :',
    tollFree: ['7440777111', '7201800001'],
    numbers: ['0755-6185300/1/2/3/4', '0755-6185350', '0755-6185356'],
  },
  {
    title: 'For Admission in MCA Course Contact Numbers are:',
    tollFree: ['7440777111', '7440777888'],
    numbers: ['0755-6185309', '09752400995'],
  },
  {
    title: 'For Admission in MBA Course Contact Numbers are:',
    tollFree: ['7440777111', '7440777888'],
    numbers: ['0755-6185309', '6685448'],
  },
];

const links = [
  {
    title: "BTech Counselling Notification/Schedule",
    url: "https://lnct.ac.in/wp-content/uploads/2025/05/BTech-Counselling-Notification-Schedule.pdf",
  },
  
 
  {
    title: "Eligibility Rules for Admission for all Courses",
    url: "https://lnct.ac.in/wp-content/uploads/2025/05/Admission-Rule-2025-26.pdf",
  },
  {
    title: "Required Documents for BTech.",
    url: "https://lnct.ac.in/wp-content/uploads/2021/08/Required-Documents-for-BTech..jpg",
  },
  {
    title: "Important Instructions for Counselling",
    url: "https://lnct.ac.in/wp-content/uploads/2025/05/guidelines-for-students.pdf",
  },
  {
    title: "Instructions for Aadhaar Authentication",
    url: "https://lnct.ac.in/wp-content/uploads/2024/08/aadhaar_authentication_api_2_0.pdf",
  },
  {
    title: "Switch to Website for Online Counselling",
    url: "https://dte.mponline.gov.in/portal/services/onlinecounselling/counshomepage/home.aspx",
  },
];

const requiredDocuments = [
  '10th & 12th Marksheet',
  'SSC Marksheet',
  'SSC Pass Certificate',
  'JEE Main Entrance Admit Card',
  'JEE Main Entrance Scorecard',
  'HSC Marksheet',
  'HSC Certificate',
  'Domicile Certificate',
  'Category Certificate',
  'Character Certificate',
  'Migration Certificate',
  'Passport Size Photographs',
  'Transfer Certificate',
];

const applicationSteps = [
  'Visit the DTE MP online counseling website.',
  'Now, click the “Go for Counseling” button.',
  'Read the necessary instructions carefully before selecting a course for counseling from the drop‑down menu.',
  'Now choose the course and then click the ‘Apply for Counselling’ button.',
  'To proceed with the registration, use the “Click here” button.',
  'Fill in the personal information as needed.',
  'Now, attach your image and signature and click the Save and Continue button.',
  'Select Adhaar authentication and press the Proceed button.',
  'Fill in the relevant information and then click the Save & Next button.',
  'Fill in the bank account information and click the Save & Next button.',
  'After clicking on “Preview and Lock Registration Detail,” double‑check the information you’ve entered in the form.',
  'Print off the registration receipt for future reference.',
];

const feeSteps = [
  'The charge for counseling is Rs 1530/-.',
  'It is not returnable.',
  'It may be paid in cash at the MP Online Kiosk or in cash at the Helpline Centres.',
  'It can also be paid online using Paytm, a credit card, a debit card, or net banking.',
];

const seatStages = [
  {
    stage: 'Registration for the Counseling Process',
    process: 'To register for counseling, candidates can go to the DTE website and click on the official link.',
  },
  {
    stage: 'Login',
    process: 'After successfully registering, applicants will be led to the Login page, where they must provide their JEE Main Roll Number and Date of Birth in order to log in.',
  },
  {
    stage: 'Filling Out the Application for Counselling',
    process: 'The B.E counseling application form will be displayed, and candidates must fill out all of their personal information in the designated columns.',
  },
  {
    stage: 'Uploading Papers',
    process: 'For the online counseling procedure, candidates must provide scanned copies of certificates or documents stipulated (JPEG Format) by DTE MP.',
  },
  {
    stage: 'Uploading Academic Qualifications',
    process: 'Candidates must fill in academic qualification data in the application form, such as Class 10 and 12 Final Exam Roll Number, Passing Year, and School Name.',
  },
  {
    stage: 'Reviewing Application',
    process: 'After completing all of the preceding procedures, carefully review the data in the application form and make any necessary adjustments.',
  },
  {
    stage: 'Application Submission & Printout',
    process: 'Finally, confirm the information supplied in the application form and click ‘Submit.’ Print off the application form for future reference.',
  },
  {
    stage: 'Online option entry or selection',
    process: 'Log on to the official website on the planned day as stated by DTE MP to complete the option entry form. It is best to fill in as many colleges and courses as possible from the available list.',
  },
  {
    stage: 'Locking in the choices',
    process: 'If the candidates are confident in the choices or options they have entered in the Option/Choice Submission Form, they should click on ‘Lock’ to confirm their entry.',
  },
];
const AdmissionProcess = () => {
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
    image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    heading={"Admission Process | Central India's No. 1 Engineering Institute - Bhopal"}
    />

        {/* part-1 */}
        <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Contact Details - LNCT Group of Colleges
      </h2>
      <hr className="border-t border-gray-400 mb-8 w-1/2 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((info, idx) => (
          <div key={idx} className=" shadow-md p-6 rounded border text-center">
            <h3 className="font-semibold text-lg mb-4">{info.title}</h3>
            <p className="mb-2">
              <span className="font-semibold">Toll Free No.</span>{' '}
              {info.tollFree.join(', ')}
            </p>
            <div className="space-y-1">
              {info.numbers.map((num, i) => (
                <p key={i}>{num}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* part-2 */}
     <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-center text-xl font-semibold border-t border-b py-4 mb-6">
        Important Links for Counselling 2025-26
      </h2>
      <div className=" rounded-xl shadow">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center px-6 py-4 border-b  transition-colors duration-150"
          >
            <div className="flex items-center gap-4">
              <CheckCircle className="text-black w-6 h-6" />
              <span className="text-gray-800">{item.title}</span>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-1 hover:bg-transparent hover:text-black hover:scale-[2xl] transition-all bg-black text-white">
              <svg
                className="w-4 h-4 "
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>

    {/* part-3 */}
      <div className="py-12 px-4 md:px-10 lg:px-20">
      <h2 className="text-2xl font-semibold text-center mb-10 relative">
        <span className="after:block after:w-24 after:h-0.5 after:bg-gray-300 after:mx-auto after:mt-2" />
        Counselling Process
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full md:w-1/5">
            <div className="relative flex items-center justify-center  rounded-full w-32 h-32 mb-4">
              {step.icon}
              <span className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-0.5 rounded-full shadow">
                {step.step}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-800 max-w-[120px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* part-4 */}
  <div className="px-6 py-10 max-w-4xl mx-auto space-y-12">
    {/* 1. Application Steps */}
    <section>
      <h2 className="text-3xl font-bold mb-4">
        How to apply for MP DTE Counseling 2025-26 ?
      </h2>
      <p className="mb-2 text-gray-700">The following are the steps to apply for DTE MP counseling 2024-</p>
      <ol className="list-decimal list-inside space-y-1 text-gray-800">
        {applicationSteps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </section>

    {/* 2. Fees */}
    <section>
      <h2 className="text-3xl font-bold mb-4">DTE MP Counselling 2025-26 Fees</h2>
      <p className="mb-2 text-gray-700">
        The official authorities do not provide any information about the MP DTE application fee. However, the information will be updated on the official website for the applicants convenience. The candidates must pay in order to attend the counseling session.
      </p>
      <p className="mb-2 text-gray-700">The following are the details for application fees for MP DTE 2024-</p>
      <ol className="list-decimal list-inside space-y-1 text-gray-800">
        {feeSteps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </section>

    {/* 3. Seat Allotment */}
    <section>
      <h2 className="text-3xl font-bold mb-4">MP DTE Counselling 2025-26: Seat Allotment Process</h2>
      <p className="mb-4 text-gray-700">
        The allotment letter will be made available in the first week of November 2024 (Tentative). Candidates may view their seat allotment results by going to the official website and logging in using their registered credentials. The seat allotment letter will be distributed based on the JEE Main 2024 results. The seat allotment after upgrading is announced online.
      </p>
      <p className="mb-4 text-gray-700">The seat allotment process for MP B.E admissions consists of many steps, which are detailed below-</p>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 text-left">
          <thead>
            <tr >
              <th className="px-4 py-3 border-r">Stages</th>
              <th className="px-4 py-3">Process</th>
            </tr>
          </thead>
          <tbody>
            {seatStages.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-3 font-medium w-1/3">{item.stage}</td>
                <td className="px-4 py-3">{item.process}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* 4. Required Documents */}
    <section>
      <h2 className="text-3xl font-bold mb-4">A list of the documents necessary for DTE MP Counselling 2024 is as follows-</h2>
      <ol className="list-decimal list-inside space-y-1 text-gray-800">
        {requiredDocuments.map((doc, i) => (
          <li key={i}>{doc}</li>
        ))}
      </ol>
    </section>
  </div>
   <div className="  py-10 px-2">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Left Heading */}
        <div className="min-w-[150px]">
        <p className="text-2xl tracking-[2px] font-[350]">WHAT WE OFFER</p>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-black hidden md:block" />

        {/* Right Grid of Services */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
        
        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
            <div>
            <h1 className='crore text-6xl'>1.12cr.</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-2xl">Highest Package</h3>
            </div>
        </div>

        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
            <div>
            <h1 className='crore text-6xl'>1600+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Offers For 2024 Batch</h3>
            </div>
        </div>

        <div className="flex items-start gap-4 pr-4 ">
             <div>
            <h1 className='crore text-6xl'>9877+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Offers For 2024 Batch</h3>
            </div>
        </div>

        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
             <div>
            <h1 className='crore text-6xl'>208+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Offers 10 Lakhs & Above</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
             <div>
            <h1 className='crore text-6xl'>171</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">NIRF All India Rank</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 pr-4 ">
             <div>
            <h1 className='crore text-6xl'>500+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Top Recruiters</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
             <div>
            <h1 className='crore text-6xl'>191+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl ">Patent Publications</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 ">
             <div>
            <h1 className='crore text-6xl'>211+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Ph.D Faculties</h3>
            </div>
        </div>
        </div>
    </div>
    </div>
        <Home5/>
        <LnctFooter/>

    </div>
  )
}

export default AdmissionProcess