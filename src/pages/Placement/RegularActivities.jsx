import Loader from '../../Components/Loader';
import React, { useEffect, useState } from 'react'
import LnctFooter from "../../Components/LnctFooter";
import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';

const RegularActivities = () => {
const [isLoading, setIsLoading] = useState(true);   

  useEffect(() => {
    // Simulate loading time or wait for data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
        <Nav/>
        <Home1
        heading={"Regular Activities"}
        description={"Join us on 14th & 15th April 2023 at LNCT GROUP for Central India's Largest Environmental, Cultural, Social, Science and Technology Festival!"}
        image={"https://lnct.ac.in/wp-content/uploads/2023/03/SRISHTI-2K23.jpg"}
        
        />
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-2">Regular Activities</h2>
      <p className="text-center text-gray-500 mb-10">Department for Career Development</p>

      {/* Our Activities Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Activities</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Arranging in Campus, Pool Campus and Off Campus for Corporate in Offline and Online Mode.</li>
            <li>Aptitude & Training Classes</li>
            <li>Personality Development Training</li>
            <li>Organizing Mock Interviews and GD.</li>
            <li>Mock Tests and Company Specific Training.</li>
            <li>Placed students Interactions.</li>
            <li>Entrepreneurship Cell</li>
            <li>Industry Institute Partnership Cell</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img 
            src="https://img.freepik.com/free-vector/job-interview-concept-illustration_114360-24598.jpg?semt=ais_hybrid&w=740"
            alt="Interview illustration"
            className="w-80 h-auto "
          />
        </div>
      </div>

      {/* IT Training Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1dvqBwcyLvIjrxg7-EqfyHyV1U_5R8olKA&s"
            alt="Programming illustration"
            className="w-80 h-auto"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold mb-4">IT Training</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Training on C/C++, Java, Python, Data Structure, DBMS, and Competitive Coding</li>
            <li>Training on Emerging Technologies – AI, ML, Cyber Security, Data Science, Cloud, IoT, Blockchain, etc.</li>
            <li>Programming and IT Subjects Training for Non CS-IT students</li>
            <li>Full stack project training for students</li>
            <li>Regular Programming Assessments and Hackathons</li>
          </ul>
        </div>
      </div>
    </div>
    <LnctFooter/>
    </>
  );
};

export default RegularActivities;
