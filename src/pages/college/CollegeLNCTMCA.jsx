import React,{useState, useEffect} from 'react'
import Home1 from '../../Components/HomeComponets/Home1';
import Nav from '../../Components/Nav';
import LnctFooter from '../../Components/LnctFooter';
import Loader from '../../Components/Loader';

const CollegeLNCTMCA = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState('mission');

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
    image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-24-1-1024x682.jpeg"}
    description={"We envision ourselves as a pace-setting Colleges of Academic Excellence focused on education, research and development in established and emerging professions"}
    heading={"LNCT Group of Colleges | Central India's No. 1 Computer Application Institute"}
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
             Master of Computer Application (MCA) is a 2  year master degree course in Computer Applications. MCA course is very popular as it gives a post Graduation degree and job opportunities are equivalent to Computer Science and Engineering. All MNC's are looking for MCA graduates for their Computer science and IT jobs. LNCT is a renowned name for providing maximum in campus job opportunities to MCA students and the Alumni's of MCA are working in various senior positions in top IT companies in India and abroad.
                 </p>
            <br />
           <p>
            After earning an MCA degree from a reputed Institute like LNCT, there is plethora of job opportunities available in the market. There is a wide scope for MCA graduates in government as well as private sector. As a fresher, an MCA professional can expect anything starting from 3 lakhs. Top companies hiring MCA graduates are Accenture, Infosys, Wipro, TCS, Cognizant,Capgemini, IBM, American Express, HCL, HP and so on.
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

{/* part-2 */}
 <div className="text-center px-4 py-8">
      {/* Toggle Switch */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <span
          className={`text-lg font-semibold ${
            selected === 'objective' ? 'text-black' : 'text-gray-700'
          } cursor-pointer`}
          onClick={() => setSelected('objective')}
        >
          OBJECTIVE
        </span>
        <div
          className="relative w-16 h-8 bg-black rounded-full cursor-pointer transition"
          onClick={() =>
            setSelected(selected === 'mission' ? 'objective' : 'mission')
          }
        >
          <div
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${
              selected === 'mission' ? 'translate-x-8' : ''
            }`}
          ></div>
        </div>
        <span
          className={`text-lg font-semibold ${
            selected === 'mission' ? 'text-black' : 'text-gray-700'
          } cursor-pointer`}
          onClick={() => setSelected('mission')}
        >
          MISSION
        </span>
      </div>

      {/* Content */}
      {selected === 'mission' ? (
        <div className="space-y-2 text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
          <p>
            To offer high-grade, value-based Post-graduate Programmes in the
            field of Computer Applications.
          </p>
          <p>
            To improve continually in the teaching-learning process by
            strengthening infrastructural facilities and faculty credentials.
          </p>
          <p>
            To provide conducive environment to achieve excellence in
            teaching-learning, and research & development activities.
          </p>
          <p>
            To enhance proportion of skilled based courses beyond curriculum to
            create more employable post-graduates.
          </p>
          <p>
            To provide appropriate forums to develop innovative talents,
            practice ethical values and inculcate as enduring learners.
          </p>
        </div>
      ) : (
        <div className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
          <p>
            The main objective is to make students technically talented in the
            information technology field. The department has tied up with
            Coursera (spoken tutorial project) which offers certificate courses
            to help the students to gain exposure towards leading its tools and
            languages which is part of the curriculum to earn credits. The
            students are advised to enroll for online MOOC courses to gain
            knowledge and upgrade their skills for employment.
          </p>
        </div>
      )}
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

    {/* part-4 */}
   
      <div className="px-4 py-10 md:px-10 lg:px-20 max-w-screen-xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
         
         
          <div className="w-[100%] h-[1px] bg-black mx-auto mt-4"></div>
        </h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          {/* Text Section */}
          <div className="lg:w-3/5 text-justify text-gray-800 leading-relaxed space-y-4">
            <p className='text-xl'>
            The department of MCA was started in 1998 with an objective to provide a conducive ambiance for learning Computer Applications & career-oriented subjects. The department has fine-tuned up and has many MOUs with the industries to inculcate knowledge in the students in the field of information technology and current trends.
Purpose of the Student Induction Program is to help new students adjust and feel comfortable in the new environment, inculcate in them the ethos and culture of the institution, help them build bonds with other students and faculty members, and expose them to a sense of larger purpose and self-exploration. The term induction is generally used to describe the whole process whereby the incumbents adjust to or acclimatize to their new roles and environment. In other words, it is a well-planned event to educate the new entrants about the environment in a particular institution, and connect them with the people in it. Student Induction Program engages with the new student.
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
      <LnctFooter/>
    </div>
  )
}

export default CollegeLNCTMCA