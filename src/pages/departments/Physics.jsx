import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import Loader from '../../Components/Loader'
const Physics = () => {
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
heading={"Physics Department"}
description={"Learn, achieve and excel with LNCT Group of colleges"}
image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-15-768x512.jpeg"}
/>
<div className="p-8 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-2">Department of Engineering Physics</h1>
      <p className="text-center text-sm text-gray-600 border-y py-2 mb-6">LNCT Group of Colleges</p>

      <section className="mb-6">
        <p className="mb-4">
          Department of Engineering Physics was started in the year 1994 with an intake of 180 students and has reputation in academics among the institute across the country. The department has adequate, qualified and experienced faculty in cadre ratios for present intake. Faculty of Department of Engineering Physics engaged in teaching of the following subjects:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Engineering Physics (BT-2001)</li>
          <li>EEES (BS-3001) for undergraduate program B. Tech.</li>
        </ul>
        <p>
          The department has well equipped Physics Lab with Experimental kits and Instruments like Plank’s constants set-up, Gas LASER, Optical Fiber, Hall Effect, G.M. Counter, Optical and Semiconductor devices kit etc.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Head of Department</h2>
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border border-gray-300">College Name</th>
              <th className="p-2 border border-gray-300">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">LNCT</td>
              <td className="p-2 border border-gray-300">Dr. P. S. SAXENA</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">LNCT S</td>
              <td className="p-2 border border-gray-300">Dr. Vivek Pundhir</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">LNCT E</td>
              <td className="p-2 border border-gray-300"></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          The broad areas of research in the department of Engineering Physics are:
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Plasma Physics</li>
          <li>Nanotechnology</li>
          <li>Condensed matter Physics</li>
          <li>Space Science</li>
          <li>Polymers Nano-composites</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Following are the responsibilities of faculty members:
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Faculty in-charge of first year students</li>
          <li>Mentors of first year students</li>
          <li>Members of anti-ragging committee</li>
          <li>Members of R&D Cell</li>
          <li>Members of Alumni Cell</li>
          <li>Conduction of Seminars/conferences</li>
          <li>Conduction of induction program, cultural and co-curricular activities</li>
          <li>Editorial board members of annual newsletters "Voice of LNCT".</li>
        </ul>
        <p>
          Faculties are encouraged in research and publish research papers in the field of Plasma Physics, Nanotechnology, Material Science and Space Science. Newsletter "Voice of LNCT" is published annually by the department. Orientation programs and cultural activities are regularly conducted.
        </p>
      </section>
    </div>
<LnctFooter/>
</>
)
}

export default Physics