import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';
const Seminarhall = () => {
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
    <>
    <Nav/>
    <Home1
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-2-768x509.jpg"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    heading={"Seminar| LNCT Group of Colleges"}
    />
     <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-4">Seminar Hall</h1>
      <div className="flex justify-center items-center mb-8">
        <span className="border-t border-gray-400 w-1/4"></span>
        <span className="mx-2 text-gray-600">LNCT Group of Colleges</span>
        <span className="border-t border-gray-400 w-1/4"></span>
      </div>

      <p className="mb-4">
        The institute has the proud distinction of maintaining a fully equipped seminar hall with modern audio-visual aids.
        Besides hosting the monthly student assemblies addressed by the Director in order to interact with the students, the
        seminar hall also hosts various academic activities, extension lectures, educational and training programs for the students
        and faculty. The conferences and lectures not only provide the students with firsthand information about the working of
        various fields but also give them an opportunity to get their doubts cleared by asking more and more questions from the
        faculty members and the Director as well.
      </p>

      <p className="mb-6">
        Our institute proudly features a state-of-the-art seminar hall, complete with modern audio-visual aids designed to elevate
        the learning experience. This versatile venue is instrumental in fostering communication and collaboration, serving as a key
        space for monthly student assemblies led by the Director, ensuring meaningful interactions with students.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Key Activities:</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <strong>Academic Engagement:</strong> The seminar hall hosts a variety of academic activities, including extension
          lectures and specialized training programs that benefit both students and faculty.
        </li>
        <li>
          <strong>Interactive Learning Opportunities:</strong> Conferences and lectures offer students invaluable insights into
          diverse fields, encouraging them to engage actively by asking questions and seeking clarification from faculty and the
          Director.
        </li>
      </ul>

      <p>
        This dynamic environment not only enriches the educational journey but also empowers students to deepen their understanding
        and develop critical thinking skills. Experience the vibrant atmosphere where knowledge meets curiosity, and explore the
        endless opportunities for growth and learning!
      </p>
    </div>
    <LnctFooter/>
    </>
  )
}

export default Seminarhall