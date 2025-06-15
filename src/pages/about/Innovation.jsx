import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import think from '/think.png'
import { useNavigate } from 'react-router-dom'
import Loader from '../../Components/Loader';
const Innovation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()
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
    heading={"LNCT NISP | Central India's No. 1 Engineering Institute - Bhopal"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/Student-Contect-1-768x544.png"}
    />
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-8 sm:space-y-10 text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-center px-4">
        LNCT Innovation and Start-up Policy
      </h1>

      <div className="md:flex md:items-center md:space-x-8 space-y-6 md:space-y-0">
        <div className="md:w-2/3 space-y-4 px-4">
          <p className="text-sm sm:text-base">
            With the vision of the LNCT of being a premier institute where engineering education and research converge to produce engineers as responsible citizens, LNCT has been excelling in providing engineering education, promoting innovations and creativity among its students and faculties. At LNCT, both the students and faculty members are continuously motivated and supported in carrying out innovations and bring significant technological solutions to fulfill the requirements of fast changing world.
          </p>
          <p className="text-sm sm:text-base">
            With the initiative of implementing Startup plan of Government of India, LNCT has taken the responsibility of making its own policy according to the guidelines of the National Innovation and Start-up policy, NISP-2019 for promoting the innovative ventures of the students and faculty members. In this context a committee coordinated by Dr. V. N. Baraiya, Professor, Mechanical Engineering framed the policy after several rounds of brainstorming sessions, meetings and discussions. The relevant facets of innovation, startup and entrepreneurship have been covered in the policy for the transformation of incubating ideas of innovative minds of students and faculty members into startup and business reality.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center px-4">
          <img src={think} alt="Innovation Illustration" className="w-40 h-40 sm:w-52 sm:h-52 object-contain" />
        </div>
      </div>

      <div className="rounded-lg py-6 sm:py-8 px-4 flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="text-center space-y-3 w-full md:w-auto">
          <h2 className="text-lg sm:text-xl font-semibold">Policy Document</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a href='https://lnct.ac.in/wp-content/uploads/2021/07/Approval-Letter.pdf' className="text-base sm:text-2xl bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">Approval Letter</a>
            <a href='https://lnct.ac.in/wp-content/uploads/2021/07/LNCT_NISP_Policy_VNB.pdf' className="text-base sm:text-2xl bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">Policy</a>
          </div>
        </div>
        <div className="text-center space-y-3 w-full md:w-auto">
          <h2 className="text-lg sm:text-xl font-semibold">Implementation</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a href='https://lnct.ac.in/wp-content/uploads/2021/08/LNCT-NISP-Schedule.pdf' className="text-base sm:text-2xl bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">Schedule</a>
            <a href='https://lnct.ac.in/wp-content/uploads/2021/07/Policy-Implementation-Team.pdf' className="text-base sm:text-2xl bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors">Team</a>
          </div>
        </div>
      </div>

      <div className="text-center px-4">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4">Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <img src="https://lnct.ac.in/wp-content/uploads/2021/08/Meeting-of-policy-implementation-team1-1536x1152.jpg" alt="Activity 1" className="rounded-lg shadow w-full h-auto object-cover" />
          <img src="https://lnct.ac.in/wp-content/uploads/2021/08/Meeting-of-policy-implementation-team-1024x768.jpg" alt="Activity 2" className="rounded-lg shadow w-full h-auto object-cover" />
        </div>
      </div>
    </div>
    <LnctFooter/>
    </>
  )
}

export default Innovation