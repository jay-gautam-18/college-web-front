import React,{useState, useEffect} from 'react'
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

const CollegeLNCTEecellence = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

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

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (


    
    <div>

       <Nav/>
         {/* header */}
      <Home1
    image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-25-1024x682.jpeg"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    heading={"LNCT Excellence | LNCTEl | Central India's No. 1 Engineering Institute - Bhopal"}
    />

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
              Lakshmi Narain College of Technology (LNCTE) is a prominent engineering college located in Bhopal, Madhya Pradesh, India. Let me provide you with some details about it:
            </p>
            <br />
           <li>LNCTE is part of the LNCT Group of Colleges and was established in the year 2007.</li>
           <li>The college aims to develop into a center of excellence with global standards in technical education.</li>
           <li>LNCTE offers undergraduate and postgraduate programs in various engineering and management disciplines.</li>
           <li>LNCTE boasts state-of-the-art infrastructure, including sophisticated digital classrooms.</li>
           <li>The college emphasizes practical learning and provides holistic exposure to extracurricular activities.</li>
           <li>With a strong focus on placement opportunities, LNCTE ensures that students receive a world-class education.</li>
           <li>Lakshmi Narain College of Technology Excellence (LNCTE) on securing NBA accreditation</li>
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

{/* footer */}
<LnctFooter/>
    </div>
  )
}

export default CollegeLNCTEecellence