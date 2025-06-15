import React,{useState, useEffect} from 'react'
import LnctFooter from '../../Components/LnctFooter';
import Home1 from '../../Components/HomeComponets/Home1';
import Nav from '../../Components/Nav';
import Loader from '../../Components/Loader';

 const calendars = [
    {
      label: 'Academic Calendar 2019-20',
      url: 'https://lnct.ac.in/wp-content/uploads/2023/08/Academic-Calendar-2019-20.pdf',
    },
    {
      label: 'Academic Calendar 2020-21',
      url: 'https://lnct.ac.in/wp-content/uploads/2023/08/Academic-Calendar-2020-21.pdf',
    },
    {
      label: 'Academic Calendar 2021-22',
      url: 'https://lnct.ac.in/wp-content/uploads/2023/08/Academic-Calendar-2021-22.pdf',
    },
    {
      label: 'Academic Calendar 2022-23',
      url: 'https://lnct.ac.in/wp-content/uploads/2023/08/Academic-Calendar-2022-23.pdf',
    },
    {
      label: 'Academic Calendar Sem II, IV, VIII',
      url: 'https://lnct.ac.in/wp-content/uploads/2023/08/Academic-Calendar-Sem-II-IV-VIII.pdf',
    },
    {
      label: 'Academic Calendar VI Sem',
      url: 'https://lnct.ac.in/wp-content/uploads/2023/08/Academic-Calendar-VI-Sem.pdf',
    },
  ];

  const courseData = [
  {
    title: 'D.PHARM',
    details: {
      'Eligibility Criteria': '12th Standard (PCB/PCM)',
      Seats: '60',
      'UG Duration': '2 Year',
      'PG Duration': '–',
    },
  },
  {
    title: 'B.PHARM',
    details: {
      'Eligibility Criteria': '12th Standard (PCB/PCM)',
      Seats: '100',
      'UG Duration': '4 Year',
      'PG Duration': '–',
    },
  },
  {
    title: 'M.PHARM',
    details: {
      'Eligibility Criteria': 'B.Pharm',
      Seats: '30',
      'UG Duration': '–',
      'PG Duration': '2 Year',
    },
  },
];
const CollegeLnctPharmacy = () => {
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

const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
       <Nav/>
      {/* header */}
      <Home1
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/chemistry-studen.png"}
    description={"Best Infrastructure with State-of-the-Art laboratories, Latest Machines and Smart Classrooms with A/V facility to provide 360 degree academic exposure."}
    heading={"Lakshmi Narain College of Pharmacy (LNCP) | LNCT Group of Colleges"}
    />
            {/* 1st part */}
      <div className="px-4 py-10 md:px-10 lg:px-20 max-w-screen-xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
        Lakshmi Narain College of Pharmacy (LNCP)
 <br />
          <span className="block mt-2">NIRF <br />LNCP OVERALL NIRF</span>
          <div className="w-[100%] h-[1px] bg-black mx-auto mt-4"></div>
        </h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 mt-10">
          {/* Text Section */}
          <div className="lg:w-2/5 text-justify text-gray-800 leading-relaxed space-y-4">
            <p className='text-xl'>
         About LNCP
              </p>
            <br />
          <li>Graduates of pharmacy degrees work right at the heart of human healthcare, taking on roles relating to the design and development of new treatments, prescription and care management, and advising on the range of medical options available.</li>
          <li>At LNCP, you will typically take modules focusing on chemistry, human biology and physiology, pharmaceutics (how medicines are made) and pharmacology (how drugs interact with the body).</li>
          <li>Pharmacy degrees combine academic research with more vocational training and professional pharmacy skills, such as learning about legal and ethical issues, and how to interact with patients.</li>
          <li>You will learn all about prescriptions, drugs, medications and clinical practice, and practice responding to different scenarios. As you study pharmacy, you may have the opportunity to specialize in a particular type of role (such as new medicine development or patient care), or in a particular field of medical care (such as infectious diseases, or care of the elderly).</li>
          </div>

          {/* Image Section */}
          <div className="lg:w-2/5 w-full">
            <img
              src="https://imgs.search.brave.com/qP2DNCIgu0KNmEiABoE_YOcaLhuNoCo_lZ6kJM1BYP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY29sbGVnZWR1/bmlhLmNvbS9wdWJs/aWMvcmV2aWV3UGhv/dG9zLzU1MTYwMy8x/MDAwMTQzODIyLmpw/Zw" // replace with your actual image path
              alt="LNCT Promotion"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        </div>
      </div>

       {/* part-3 */}
        <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="font-semibold  text-lg mb-4">Masters Of Business Administration (MBA)</h2>
      <div className="border border-black  rounded-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5 border-b border-black">
          <div className="border-r font-medium px-4 py-3 md:col-span-1">Eligibility Criteria</div>
          <div className="px-4 py-3 md:col-span-4 text-justify">
          For 2 Years Duration – Any Graduate with Maths either in 12th or in graduation 50% in graduation for General and 45% for SC/ST/OBC
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 border-b border-black">
          <div className="border-r font-medium px-4 py-3 md:col-span-1">Seats</div>
          <div className="px-4 py-3 md:col-span-4">
          	300
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 border-b border-black">
          <div className="border-r font-medium px-4 py-3 md:col-span-1">Duration</div>
          <div className="px-4 py-3 md:col-span-4">2 Year</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 border-b border-black">
          <div className="border-r font-medium px-4 py-3 md:col-span-1">College Name</div>
          <div className="px-4 py-3 md:col-span-4">LNCT-McA</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="border-r font-medium px-4 py-3 md:col-span-1">Director</div>
          <div className="px-4 py-3 md:col-span-4">Dr. Sanjay Bajpai</div>
        </div>
      </div>
    </div>
    <br />
<hr />
<br />
    {/* part4 */}
     <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-black mb-4">
        Academic Calendar | LNCP
      </h1>
      <ul className="list-disc pl-6 space-y-2">
        {calendars.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
{/* 
    part-5 */}
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Courses Offered | LNCP</h2>
      <div className="border">
        {courseData.map((course, index) => (
          <div key={index} className="border-t">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full px-4 py-3 text-left text-lg font-semibold"
            >
              <span>{course.title}</span>
              <span className="text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className=" border-t px-4 py-4">
                <table className="w-full table-auto text-left border">
                  <tbody>
                    {Object.entries(course.details).map(([key, value], i) => (
                      <tr key={i} className="border-t">
                        <td className="p-2 font-medium w-1/2">{key}</td>
                        <td className="p-2">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* footer */}
    <LnctFooter/>
    </div>
  )
}

export default CollegeLnctPharmacy