import React, { useEffect, useState } from "react";
import LnctFooter from "../../Components/LnctFooter";
import Nav from "../../Components/Nav";
import Home1 from "../../Components/HomeComponets/Home1";
import Loader from '../../Components/Loader'
export default function MEPage() {
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
    heading={"Department of Mechanical Engineering | LNCT Group of Colleges"}
    description={"Dream, explore and discover with LNCT Group of Colleges and step into a world of endless possibilities!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/EE-min.jpg"}
    />
    <div className="p-6 max-w-4xl mx-auto">
      {/* Title and Introduction */}
      <h1 className="text-3xl font-semibold mb-4">
        Department of Mechanical Engineering | LNCT Group of Colleges
      </h1>
      <p className="mb-4">
        The Department of Mechanical Engineering was established in the year 1998 with an intake of 60 at undergraduate level. The present intake of department is 180 in undergraduate program and 24 in postgraduate program in Thermal Engineering. The department has qualified and experienced faculty in adequate number. Since its inception the department is fast developing in the academics and research areas. Currently it has acquired great heights in academics and research. The department has twenty one well equipped and functional laboratories. It is an approved Research Center of RGPV, Bhopal for research work.
        <br />
        Many activities including projects at undergraduate program and post graduate program, seminars, workshops, conferences and industrial visits/interactions are the regular part of the academics. Department has successfully and timely completed AICTE-MODROBS project of Rs. 15 Lacs for the establishment of research facility in I.C. Engine Lab under the guidance of Head of Department as the Principal Investigator.Research assistance for paper presentation and travel grants for India and abroad are provided by LNCT and government agencies like MPCST, AICTE, DST etc.
      </p>

      {/* Head of Department Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Head of Department
        </h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2 font-semibold">
                College Name
              </th>
              <th className="border p-2 font-semibold">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                LNCT
              </td>
              <td className="border p-2">
                Dr. Sanjay Gupta
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                LNCTE
              </td>
              <td className="border p-2">
                Dr. Arvind Jain
              </td>
            </tr>
          </tbody>
        </table>
      </div>

       <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Mechanical Engineering</h1>

      <div className="border-1 p-4 mb-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">B.E./B.Tech.</h2>
        <ul className="mb-2">
          <li>Colleges: LNCT | LNCTE | LNCT&S</li>
          <li>Eligibility: XII with Physics + Maths + (Chemistry/Computer Science/Biology) with minimum 45% (40% for SC/ST/OBC MP Domicile Candidate) and qualified rank in JEE</li>
          <li>Also, direct admission criteria available</li>
          <li>Seats: LNCT-60 | LNCTE-30</li>
          <li>Duration: 4 Years</li>
        </ul>
      </div>

      <div className="border-1 p-4 mb-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">M.E./M.Tech. – Thermal Engineering</h2>
        <ul>
          <li>College: LNCT</li>
          <li>Eligibility: B.E./B.Tech. with minimum 50% (45% for SC/ST/OBC MP Domicile Candidate)</li>
          <li>Seats: 30</li>
          <li>Duration: 2 Years</li>
        </ul>
      </div>
    </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            News Letter
          </h3>
          <ul className="list-disc ml-6">
            <li><a className="text-blue-600" href="https://lnct.ac.in/wp-content/uploads/2021/12/LNCT-ME-Newsletter-April-June-2021.pdf">Newsletter April June 2021</a></li>
            <li><a className="text-blue-600" href="https://lnct.ac.in/wp-content/uploads/2021/12/LNCT-ME-Newsletter-July-Sept-2020.pdf">Newsletter July-Sept 2020</a>.</li>
          </ul>
        </div>

      {/* Student Chapters and Societies Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Student Chapters and Societies in Department
        </h2>

        {/* Vision */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Vision
          </h3>
          <p>
            To produce proficient mechanical engineers who will contribute to the industry and society through their knowledge, skills, and ethical practices.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Mission
          </h3>
          <ul className="list-disc ml-6">
            <li>To impart strong fundamentals of mechanical discipline to the students.</li>
            <li>To create a conductive environment for education, training, and research.</li>
            <li>To develop graduates who can effectively solve industry problems with innovative techniques.</li>
            <li>To instil ethical values and responsibilities to serve society.</li>
          </ul>
        </div>

        {/* PEOs Section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Program Educational Objectives (PEOs)
          </h3>
          <ul className="list-disc ml-6">
            <li>To produce graduates who are proficient in applying fundamentals of mechanical engineering.</li>
            <li>To prepare graduates for successful employment in industries or higher education.</li>
            <li>To foster innovation, creativity, and problem-solving skills.</li>
            <li>To instil interpersonal skills and ethics in graduates.</li>
          </ul>
        </div>

        {/* PSOs Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Program Specific Outcomes (PSOs)
          </h3>
          <ul className="list-disc ml-6">
            <li>Design and implement mechanical components and systems for real-world applications.</li>
            <li>Analyze, develop, and test prototypes using modern techniques and software.</li>
            <li>Apply knowledge of materials, manufacturing, and energy to solve industry problems.</li>
            <li>Collaborate effectively within multidisciplinary teams.</li>
          </ul>
        </div>
      </div>
    </div>
    <LnctFooter/>
    </>

  )
}
