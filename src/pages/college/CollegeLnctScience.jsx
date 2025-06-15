import React, { useEffect, useState } from 'react'
import LnctFooter from '../../Components/LnctFooter';
import Home1 from '../../Components/HomeComponets/Home1';
import Nav from '../../Components/Nav';
import Loader from '../../Components/Loader';

const courses = [
  {
    title: 'Civil Engineering',
    EligibilityCriteria: 'Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in JEE.',
    Seats: '30',
    UGDuration: '4 Year',
    PGDuration: '-'
  },
  {
    title: 'Mechanical Engineering',
    EligibilityCriteria: 'Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in JEE.',
    Seats: '30',
    UGDuration: '4 Year',
    PGDuration: '-'
  },
  {
    title: 'Electronics and Communication Engineering',
    EligibilityCriteria: 'Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in JEE.',
    Seats: '30',
    UGDuration: '4 Year',
    PGDuration: '-'
  },
  {
    title: 'Computer Science Engineering',
    EligibilityCriteria: 'Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in JEE.',
    Seats: '180',
    UGDuration: '4 Year',
    PGDuration: 'M.Tech – 2 Year'
  },
  {
    title: 'CS (Artificial Intelligence and Machine Learning)',
    EligibilityCriteria: 'Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in JEE.',
    Seats: '30',
    UGDuration: '4 Year',
    PGDuration: '-'
  },
  {
    title: 'Computer Science and Engineering (Cyber Security)',
    EligibilityCriteria: 'Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in JEE.',
    Seats: '120',
    UGDuration: '4 Year',
    PGDuration: '-'
  },
  {
    title: 'Computer Science & Engineering – M.E./M.TECH',
    EligibilityCriteria: 'Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in JEE.',
    Seats: '30',
    UGDuration: '-',
    PGDuration: '4 Year'
  },
  {
    title: 'Construction Technology And Management – M.E./M.TECH',
    EligibilityCriteria: 'A candidate seeking admission to M.E. / M.Tech. courses should be a Graduate in Engg/Technology with at least 50% marks, Candidate belonging to SC/ST/OBC (excluding creamy layer) categories of Madhya Pradesh with at least 45% marks. Bachelors degree of minimum of four years duration after passing Higher Secondary 12th of (10+2) system or equivalent, should have been obtained from any AICTE approved institution or Indian University or from a foreign University recognised by Association of Indian Universities (AIU) or institute recognized by the AIU as equivalent thereto.',
    Seats: '30',
    UGDuration: '',
    PGDuration: '2 Year'
  },
];

const CollegeLnctScience = () => {
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

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>

 <Nav/>

      {/* header */}
      <Home1
    image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-24-1-1024x682.jpeg"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    heading={"LNCT & Science | Top Engineering Colleges In Bhopal | Highest Placement"}
    />

<hr />

      {/* 1st part */}
      <div className="px-4 py-10 md:px-10 lg:px-20 max-w-screen-xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
          LNCT & Science | Top NBA Accredited Engineering Colleges In Bhopal <br />
          <span className="block mt-2">Highest Placement</span>
          <div className="w-[100%] h-[1px] bg-black mx-auto mt-4"></div>
        </h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          {/* Text Section */}
          <div className="lg:w-3/5 text-justify text-gray-800 leading-relaxed space-y-4">
            <p className='text-xl'>
              LNCT & Science is one of the top engineering colleges in Bhopal, MP and Central India. They are
              dedicated to providing a futuristic and innovative learning experience for their students through the
              use of advanced digital classrooms. This ensures that the students receive real-time learning, keeping
              them ahead of the curve in terms of technology and trends in the industry.
            </p>
            <p className='text-xl'>
              The college is well equipped with state-of-the-art infrastructure and has a proven track record, with
              over 3200 placement offers to their students. The institution places a strong emphasis on
              extracurricular activities, providing a holistic educational experience for their students. As a result,
              LNCT & Science has established itself as one of the top engineering colleges in Bhopal and Central India.
            </p>
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

      {/* 2nd part */}
      <div className=" p-6 md:p-10 bg-transparent border max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Engineering</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>
            1st Self-Financed Institute of M.P. started in 1993-94.
            <br />
            <span className="ml-4 block">
              Branches: B.E.- CSE, IT, EC, EX, EE, ME, EI, Chemical & Civil
              <br />
              M. Tech.  CSE, IT, Thermal, Power Elex, Control, CTM and VLSI
            </span>
          </li>
          <li>1st Self-Financed institutes of M.P. to be accredited by NBA, AICTE New Delhi.</li>
          <li>1st Self-Financed Institute to have ISO : 9001-2000 certification</li>
          <li>
            1st Self-Financed Institute to have AICTE funded
            <br />
            <span className="ml-4 block"> Industry Institute Partnership cell (IIPC)</span>
            <br />
            <span className="ml-4 block"> Entrepreneur Management Development Cell</span>
          </li>
          <li>1st in M.P. rated ‘A’ Category by the High Court committee for fixation of fee</li>
          <li>
            1st Self-Financed institutes of M.P. to have following departments/Chapters/Cells/Clubs:
            <ul className="list-none mt-2 space-y-2 ml-4">
              <li>
                <span className=" text-black px-2 py-0.5 rounded font-semibold">
                  Industry Institute Partnership Cell (IIPC)
                </span>
              </li>
              <li> National Entrepreneur Network (NEN) Chapter for encouraging Entrepreneurship among Students</li>
              <li>
                Young Indian Yuva Chapter (An initiative by Confederation of Indian Industries i.e. CII)
              </li>
              <li> Student Chapters of IEEE, IE(I), CSI, SAE and IETE</li>
              <li>
                Photography Club, Music Club, Raahat Club, Aasvas Club, Quest Nature Club, NCC, NSS
              </li>
              <li> Spice Macay Heritage Centre</li>
            </ul>
          </li>
        </ul>
      </div>

      <br />
      {/* 3part */}
      <article className=" p-6 md:p-10 bg-transparent border max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">NIRF</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          <li><a href="https://lnct.ac.in/wp-content/uploads/2025/02/LNCTS_Overall.pdf"><strong>Click here to view NIRF (LNCTS_Overall) in PDF</strong></a></li>
          <li><a href="https://lnct.ac.in/wp-content/uploads/2025/02/LNCTS_Engg.pdf"><strong>Click here to view NIRF (LNCTS_Engg) in PDF</strong></a></li>
        </ul>
      </article>
      <br />
      {/* 4 part */}
      <div className="flex flex-col md:flex-row bg-transparent  border-t border-b p-5 overflow-hidden max-w-6xl gap-4 mx-auto mt-10">


        {/* Left Side - Image */}
        <div className="md:w-3/5 w-full ">
          <img
            src="https://imgs.search.brave.com/kSsV53HzzVewilfwNoLQyk5017mJaCCeiuKprMKjwIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sbmN0/LmFjLmluL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzExL0Rl/YmF0ZS1Db21wZXRp/dGlvbi0yMDI0LUVs/ZXZhdGluZy1Qcm9m/ZXNzaW9uYWwtU3Bl/YWtpbmctYW5kLUNy/aXRpY2FsLVRoaW5r/aW5nLmpwZw"
            alt="NBA Accreditation Poster"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-2/5 w-full p-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            NBA Accreditation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Another remarkable achievement! Congratulations to Lakshmi Narain College of Technology & Science (LNCTS)
            for obtaining NBA Accreditation for its Electronics and Communication Engineering and Computer Science
            Engineering departments. This accreditation underscores our commitment to academic excellence and quality
            education. Kudos to the faculty, staff, and students for their hard work!
          </p>
        </div>
      </div>

      {/* 5 part */}
      <div className="max-w-6xl mx-auto  px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">COURSES OFFERED | TECHNICAL</h2>
        <div className="divide-y border rounded shadow ">
          {courses.map((course, index) => (
            <div key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between py-4 px-4 text-left font-medium  focus:outline-none"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">&#9656;</span> {/* Play triangle icon */}
                  {course.title}
                </span>
              </button>
              {openIndex === index && (
                <div className='pl-8 pb-2 border m-2 '>
                  <ul>
                    <li>EligibilityCriteria : {course.EligibilityCriteria}</li>
                    <hr />
                    <li>Seats : {course.Seats}</li>
                    <hr />
                    <li>UGDuration : {course.UGDuration}</li>
                    <hr />
                    <li>PGDuration : {course.PGDuration}</li>
                  </ul>
                </div>


              )}
            </div>
          ))}
        </div>
      </div>

     {/* 6 part */}
<LnctFooter/>
    </div>
  )
}

export default CollegeLnctScience