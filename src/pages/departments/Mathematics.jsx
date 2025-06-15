import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import Loader from '../../Components/Loader'
const Mathematics = () => {
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
heading={"Mathematics Department"}
description={"Learn, achieve and excel with LNCT Group of colleges"}
image={"https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-Girl-3-1.png"}
/>
<div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Department of Engineering Mathematics</h1>
        <hr className="my-4 border-gray-400" />
        <p className="text-sm text-gray-600">LNCT Group of Colleges</p>
      </div>

      <p className="mb-6">
        The department of Mathematics, one of the vibrant department of the institution, established in the year 1994. Department functions as a service agency providing support to UG & PG departments and lays a sound foundation for learning engineering & technical subjects. The aim of department is to inculcate analytical skills in mathematical sciences so as to enable the students to apply and formulate in solution making approaches of their technical subjects. Definitely the learning of mathematics will enhance and widen the mathematical aptitude, analytical skills, logical reasoning and systematic thinking of the students.
      </p>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Head of Department</h2>
        <hr className="border-gray-400 mb-4" />
        <p className="text-center text-sm text-gray-500 mb-4">Department of Engineering Mathematics</p>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-r border-gray-300 font-semibold">College Name</th>
                <th className="px-4 py-2 font-semibold">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 border-r border-gray-300">LNCT</td>
                <td className="px-4 py-2">Dr. RAJESH KUMAR SAKALE</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 border-r border-gray-300">LNCT S</td>
                <td className="px-4 py-2">Dr. SANJEET KUMAR</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 border-r border-gray-300">LNCT E</td>
                <td className="px-4 py-2">Dr. SUSHMA JAT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 uppercase text-gray-700">Details of Research Work</h3>
        <p className="mb-4">
          The department is growing with adequate qualified faculty members. Department gave high priority to quality research and education. All faculty members are PhD’s and having Publications in National and International Journals, with regular updating with research and innovations. The faculty members are participating in National & International level Workshop/Seminars/Conferences in the country and abroad. The research pursued in the Department of Mathematics includes a fairly wide spectrum of interests in Mathematical sciences in Pure and Applied Mathematics like:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Special Function</li>
          <li>Bio-mathematics</li>
          <li>Optimization Techniques</li>
          <li>Fixed point theory</li>
          <li>Fuzzy metric space</li>
        </ul>
      </div>
    </div>
<LnctFooter/>
</>
)
}

export default Mathematics