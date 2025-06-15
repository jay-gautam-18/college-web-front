import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Home1 from '../../Components/HomeComponets/Home1'
import LnctFooter from '../../Components/LnctFooter'
import Loader from '../../Components/Loader'
export default function ElectricalEngineering() {
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
  return(
    <>
    <Nav/>
    <Home1
    heading={"Department of Electrical Engineering | LNCT Group of Colleges"}
    description={"We train and guide you to innovate, lead and to be successful Engineers!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/ME-min.jpg"}
    />
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">
        Department of Electrical Engineering
      </h1>

      <p className="mb-4">
        Department of Electrical Engineering is established in 2010 with intake of 30 at undergraduate program in Electrical Engineering. Presently it has intake of 120 at undergraduate program in Electrical Engineering and postgraduate program in control system. The department has qualified, experienced and adequate faculty as per cadre ratios. <br />

Since inception it has undergone many developments. It has modern laboratories like Basic Electrical Engineering, Network Analysis, Electrical Instrumentation, Electrical Workshop, Power System, Power Electronics, Control System, Electrical Machine, Electrical Simulation and Electrical Drives. The laboratories facilities and the infrastructure are being regularly upgraded and are well supported by the college. <br />

The Department encourages its faculty to present paper in national journal, referred international journal, conferences and symposium. Faculty is permitted to participate both in campus and off campus programs. Research assistance for paper presentation and travel grants for India and abroad are provided by LNCT and government agencies like MPCST, AICTE, DST etc
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Course Details</h2>
      <table className="w-full mb-6 border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Course</th>
            <th className="border p-2">College Name</th>
            <th className="border p-2">Eligibility Criteria</th>
            <th className="border p-2">Seats</th>
            <th className="border p-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">B.E./B.Tech (Electrical)</td>
            <td className="border p-2">LNCT</td>
            <td className="border p-2">
              XII with Physics + Maths + (Chemistry/Computer Sci./Biology) with minimum 45% (40% for SC/ST/OBC MP)
            </td>
            <td className="border p-2">60</td>
            <td className="border p-2">4 Years</td>
          </tr>
          <tr>
            <td className="border p-2">M.E./M.Tech (Power System)</td>
            <td className="border p-2">LNCT</td>
            <td className="border p-2">
              B.E./B.Tech with minimum 50% (45% for SC/ST/OBC MP)
            </td>
            <td className="border p-2">30</td>
            <td className="border p-2">2 Years</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Vision</h2>
      <p className="mb-4">
        To produce proficient engineers with expertise in knowledge and its application related to Electrical Engineering.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Mission</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To impart methodological knowledge through innovative teaching and workshops.</li>
        <li>To motivate electrical engineers to pursue non-polluting, renewable sources of energy.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Programme Educational Objectives (PEOs)</h2>
      <ul className="list-disc ml-6">
        <li>To impart fundamental knowledge for practice, study, and applications in the field of electric power and control.</li>
        <li>To produce proficient engineers with education necessary for productive roles, including knowledge of current technology and trends in power and control.</li>
        <li>To mold engineers with strong communication skills and professionalism to become effective team members and leaders in multidisciplinary settings.</li>
      </ul>
    </div>
    <LnctFooter/>
    </>

  )
}
