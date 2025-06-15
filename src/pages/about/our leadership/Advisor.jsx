import React, { useRef, useEffect ,useContext , useState} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1';
import Loader from '../../../Components/Loader';

const Advisor = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOSD, setSelectedOSD] = useState(null);

  const osdList = [
    {
      college: 'LNCT Group Of Colleges',
      name: 'Dr. Om Prakash Rai',
      content: (
        <div className="space-y-3">
          <p><strong>Full Name:</strong> Dr. Om Prakash Rai</p>
          <img src="https://lnct.ac.in/wp-content/uploads/2019/05/Dr.-Om-Prakash-Rai.jpg" alt="" />
          <p><strong>Ph.D.:</strong> Mathematics<br />
             <strong>Thesis Topic:</strong> Fourier Transform</p>
          <p><strong>Specialization:</strong> —</p>
          <p>
            <strong>Research Summary:</strong> Dr. Rai's research aims to apply mathematical tools, particularly the Fourier Transform, to analyze and solve practical challenges within the tourism industry in Madhya Pradesh. His approach focuses on identifying and modeling key issues in tourism using mathematical formulations and proposing practical, effective solutions tailored to regional contexts.
          </p>
          <p><strong>Research Papers Published:</strong> 4 (International), 2 (National)</p>
          <p><strong>Books Published:</strong> 1</p>
          <p><strong>Patents:</strong> —</p>
          <p><strong>Foreign Visits:</strong> —</p>
          <p><strong>Achievements:</strong> —</p>
          <p><strong>Total Work Experience:</strong> 67 Years</p>
          <p><strong>Awards/Projects:</strong> —</p>
        </div>
      ),
    },
  ];

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
    <>
    <Nav/>
   <Home1
   image={"https://lnct.ac.in/wp-content/uploads/2024/01/31-Year-Ception-1024x1024.jpeg"}
   heading={"Join The League of Achievers!"}
   description={"LNCT Group of College is one of the Top engineering college in Bhopal, MP and Central India. LNCT Synonymous with excellence in higher education with 32+ Years of Academic Excellence and Discipline."}
   />

     <div className="max-w-4xl mx-auto my-10 p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        OSD (Officer on Special Duty)
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead>
            <tr className="bg-gray-300">
              <th className="py-2 px-4 font-semibold">COLLEGE NAME</th>
              <th className="py-2 px-4 font-semibold">NAME</th>
            </tr>
          </thead>
          <tbody>
            {osdList.map((osd, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-2 px-4">{osd.college}</td>
                <td
                  className="py-2 px-4 text-blue-600 cursor-pointer hover:underline"
                  onClick={() => setSelectedOSD(idx === selectedOSD ? null : idx)}
                >
                  {osd.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOSD !== null && (
        <div className="mt-6 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-md shadow">
          <h3 className="text-lg font-semibold mb-2">{osdList[selectedOSD].name}</h3>
          {osdList[selectedOSD].content}
        </div>
      )}
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
    <LnctFooter/>
    </>
  )
}

export default Advisor;