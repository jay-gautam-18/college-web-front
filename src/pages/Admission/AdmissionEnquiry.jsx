import React,{useState,useEffect} from 'react'
import Nav from '../../Components/Nav';
import LnctFooter from '../../Components/LnctFooter';
import Home1 from '../../Components/HomeComponets/Home1';
import Home5 from '../../Components/HomeComponets/Home5';
import RegistrationForm from '../../Components/RegistrationForm';
import Loader from '../../Components/Loader';


const courseData = {
  "Civil Engineering": {
    eligibility: [
      "1st Year XII with: Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45% for SC/ST/OBC) with qualified rank in JEE.",
      "2nd Year Direct Admission: 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)"
    ],
    seats: "LNCT 60 | LNCTS 60",
    ugDuration: "4 Year",
    pgDuration: "-"
  },
  "Electrical & Electronics Engineering": {
    eligibility: [
      "Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in JEE.Eligibility-2nd Year.",
      "Direct Admission : 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)"
    ],
    seats: "LNCT 60 ",
    ugDuration: "4 Year",
    pgDuration: "-"
  },
  "Mechanical Engineering": {
    eligibility: [
      "Eigibility-1st Year XII with : Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45 % for SC/ST/OBC) with qualified rank in JEE.",
      "Eligibility-2nd Year.Direct Admission : 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)"
    ],
    seats: "	LNCT – 60 | LNCT & S – 30 | LNCTE -30",
    ugDuration: "4 Year",
    pgDuration: "-"
  },
  "Electronics and Communication Engineering": {
    eligibility: [
    "1st Year XII with: Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45% for SC/ST/OBC) with qualified rank in JEE.",
    "2nd Year Direct Admission: 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)"
  ],
  seats: "LNCT 180 | LNCT&S 30 | LNCTE 30",
  ugDuration: "4 Year",
  pgDuration: "-"
  },
  "Computer Science Engineering": {
    eligibility: [
    "1st Year XII with: Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45% for SC/ST/OBC) with qualified rank in JEE.",
    "2nd Year Direct Admission: 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)"
  ],
  seats: "LNCT 180 | LNCT&S 30 | LNCTE 30",
  ugDuration: "4 Year",
  pgDuration: "-"
  },
  "CS (AI & ML)": {
    eligibility: [
    "1st Year XII with: Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45% for SC/ST/OBC) with qualified rank in JEE.",
    "2nd Year Direct Admission: 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)"
  ],
  seats: "LNCT 360 | LNCT&S 180 | LNCTE 120",
  ugDuration: "4 Year",
  pgDuration: "-"
  },
  "CS (AI, ML & Data Science)": {
   eligibility: [
    "1st Year XII with: Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45% for SC/ST/OBC) with qualified rank in JEE.",
    "2nd Year Direct Admission: 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)"
  ],
  seats: "LNCT 180",
  ugDuration: "4 Year",
  pgDuration: "-"
  },
  "ECE (ACT-5G Tech)": {
    eligibility: [
    "1st Year XII with: Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45% for SC/ST/OBC) with qualified rank in JEE.",
    "2nd Year Direct Admission: 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)"
  ],
  seats: "LNCT 60 | LNCTE 60",
  ugDuration: "4 Year",
  pgDuration: "-"
  },
  "CSE (Cyber Security)": {
    eligibility: [
    "1st Year XII with: Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45% for SC/ST/OBC) with qualified rank in JEE.",
    "2nd Year Direct Admission: 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)"
  ],
  seats: "LNCT&S 120",
  ugDuration: "4 Year",
  pgDuration: "M.Tech – 2 Year"
  },
  "CSE (Data Science)": {
    eligibility: [
    "1st Year XII with: Phy + Maths + (Chem. / Comp. Sc./Bio) with Min. 50% (45% for SC/ST/OBC) with qualified rank in JEE.",
    "2nd Year Direct Admission: 1. Min. 50% (45% for SC/ST/OBC) Diploma in Engg. 2. With at least 60% in B. Sc (with Maths)"
  ],
  seats: "LNCTE 120",
  ugDuration: "4 Year",
  pgDuration: "M.Tech – 2 Year"
  },
  "VLSI Design - M.E./M.TECH": {
    eligibility: [
    "A candidate seeking admission to M.E. / M.Tech. courses should be a Graduate in Engg/Technology with at least 50% marks.",
    "Candidate belonging to SC/ST/OBC (excluding creamy layer) categories of Madhya Pradesh must have at least 45% marks.",
    "Bachelor’s degree of minimum four years duration after 12th (10+2) or equivalent, obtained from an AICTE-approved institution, Indian University, or a foreign University recognized by AIU."
  ],
  seats: "30",
  ugDuration: "-",
  pgDuration: "2 YEAR"
  },
  "Thermal Engineering – M.E./M.TECH": {
    eligibility: [
    "A candidate seeking admission to M.E. / M.Tech. courses should be a Graduate in Engg/Technology with at least 50% marks.",
    "Candidate belonging to SC/ST/OBC (excluding creamy layer) categories of Madhya Pradesh with at least 45% marks.",
    "Bachelor’s degree of minimum of four years duration after passing Higher Secondary 12th of (10+2) system or equivalent, should have been obtained from any AICTE approved institution or Indian University or from a foreign University recognised by Association of Indian Universities (AIU) or institute recognized by the AIU as equivalent thereto."
  ],
  seats: "30",
  ugDuration: "-",
  pgDuration: "2 YEAR"
  },
  "Power Electronics – M.E./M.TECH": {
     eligibility: [
    "A candidate seeking admission to M.E. / M.Tech. courses should be a Graduate in Engg/Technology with at least 50% marks.",
    "Candidate belonging to SC/ST/OBC (excluding creamy layer) categories of Madhya Pradesh with at least 45% marks.",
    "Bachelor’s degree of minimum of four years duration after passing Higher Secondary 12th of (10+2) system or equivalent, should have been obtained from any AICTE approved institution or Indian University or from a foreign University recognised by Association of Indian Universities (AIU) or institute recognized by the AIU as equivalent thereto."
  ],
  seats: "30",
  ugDuration: "-",
  pgDuration: "2 YEAR"
  },
  "CSE – M.E./M.TECH": {
   eligibility: [
    "A candidate seeking admission to M.E. / M.Tech. courses should be a Graduate in Engg/Technology with at least 50% marks.",
    "Candidate belonging to SC/ST/OBC (excluding creamy layer) categories of Madhya Pradesh with at least 45% marks.",
    "Bachelor’s degree of minimum of four years duration after passing Higher Secondary 12th of (10+2) system or equivalent, should have been obtained from any AICTE approved institution or Indian University or from a foreign University recognised by Association of Indian Universities (AIU) or institute recognized by the AIU as equivalent thereto."
  ],
  seats: "30",
  ugDuration: "-",
  pgDuration: "2 YEAR"
  },
  "Construction Tech & Mgmt – M.E./M.TECH": {
    eligibility: [
    "A candidate seeking admission to M.E. / M.Tech. courses should be a Graduate in Engg/Technology with at least 50% marks.",
    "Candidate belonging to SC/ST/OBC (excluding creamy layer) categories of Madhya Pradesh with at least 45% marks.",
    "Bachelor’s degree of minimum of four years duration after passing Higher Secondary 12th of (10+2) system or equivalent, should have been obtained from any AICTE approved institution or Indian University or from a foreign University recognised by Association of Indian Universities (AIU) or institute recognized by the AIU as equivalent thereto."
  ],
  seats: "30",
  ugDuration: "-",
  pgDuration: "2 YEAR"
  },
  "MBA": {
    eligibility: [
    "A candidate seeking admission to MBA and Allied Courses should be a Graduate with at least 50% marks and 45% marks in case of SC, ST, OBC category of Madhya Pradesh in aggregate of any UGC/AICTE approved Indian University or from a foreign University recognized by Association of Indian Universities (AIU) or institute recognized by the concerned University as equivalent thereto.",
    "The Bachelor’s degree must be of minimum three years duration after passing Higher Secondary (10+2) examination of (10+2) system or equivalent."
  ],
  seats: "LNCT MBA (240) | LNCT MBA-FM (240) | LNCTE MBA (180) | LNCTE MBA – MM (120)",
  duration: "2 Year",
  collegeName: "LNCT-MBA",
  director: "Dr. Arvind Singh"
  },
  "MCA 2 Years": {
    eligibility: [
    "For 2 Years Duration – Any Graduate with Maths either in 12th or in graduation.",
    "50% in graduation for General and 45% for SC/ST/OBC."
  ],
  seats: "300",
  duration: "2 Year",
  collegeName: "LNCT – MCA",
  director: "Dr. Sanjay Bajpai"
  }
};

const AdmissionEnquiry = () => {
    const [selectedCourse, setSelectedCourse] = useState('Civil Engineering');
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
        < Nav/>
         <Home1
        image={"https://lnct.ac.in/wp-content/uploads/2021/05/Cover-No.-1-Engineering-College-1024x1024.jpeg"}
        description={"Learn, achieve and excel with LNCT Group of colleges"}
        heading={"Admission Enquiry | Central India's No. 1 Engineering Institute - Bhopal"}
        />

        {/* part-1 */}
         <div className="flex flex-col lg:flex-row gap-6 px-4 py-10 max-w-screen-xl mx-auto">
      
      {/* Left Form Section */}
      <div className='flex flex-col md:w-1/2'>
      <div>
          {selectedCourse && courseData[selectedCourse]?.eligibility && (
          <div className="mt-6 border transition-all p-4 rounded bg-gray-50">
            <h3 className="text-xl font-bold mb-2">{selectedCourse}</h3>
            <div className="space-y-2">
              <div>
                <strong>Eligibility Criteria:</strong>
                <ul className="list-disc pl-5 text-sm">
                  {courseData[selectedCourse].eligibility.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </div>
              <p><strong>Seats:</strong> {courseData[selectedCourse].seats}</p>
              <p><strong>UG Duration:</strong> {courseData[selectedCourse].ugDuration}</p>
              <p><strong>PG Duration:</strong> {courseData[selectedCourse].pgDuration}</p>
            </div>
          </div>
        )}
      </div>
        <RegistrationForm heading={"Join The League of Achievers!"}/>
      </div>

      {/* Right Course List Section */}
      <div className="flex-1 md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Admission Open</h2>

        <div className="space-y-2">
           
          {Object.keys(courseData).map((course , i) => (
            <button
              key={i}
              onClick={() => setSelectedCourse(course)}
              className="w-full text-left border px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              {course}
            </button>
          ))}
        </div>

       
      </div>
    </div>

    {/* PART-2 */}
    <Home5/>
        < LnctFooter/>
    </div>
  )
}

export default AdmissionEnquiry