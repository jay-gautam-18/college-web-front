import React, { useEffect, useState } from "react";
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import NewsMedia from '../../Components/NewsMedia'
import Loader from '../../Components/Loader'
export default function EEEPage() {
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
    heading={"Department of Electrical and Electronics Engineering | LNCT Group of Colleges"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/ME-min.jpg"}
    />
     <div className="p-6 max-w-4xl mx-auto">
      {/* Department Title and Description */}
      <h1 className="text-3xl font-semibold mb-4">
        Department of Electrical and Electronics Engineering | LNCT Group of Colleges
      </h1>
      <p className="mb-4">
        Department of Electrical and Electronics Engineering is established in 1994 with an intake of 60 at
        undergraduate level. Since its inception department has undergone many developments. The department
        has qualified, experienced and adequate faculty in grade. The department has modern laboratories like
        Network Analysis, Project, Machine Machine, Power System, Control System, Electrical and Electronics Instrumentation, 
        Electrical Sector.
      </p>

      <p className="mb-4">
        The department has a library and computer center. The department encourages its faculty to present
        research papers in national, refereed international journals, conferences and symposiums. Faculty members
        are motivated to attend workshops and Faculty Development Programs both in-house and off-campus. The department
        has good records of placement in prominent companies.
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
                Dr. Anand Singh
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                LNCTE
              </td>
              <td className="border p-2">
                Dr. Sachin Tiwari
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        <div className="p-6 max-w-4xl mx-auto">
      {/* Bachelor's Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          B.Tech. (4 Years Duration)
        </h2>
        <table className="min-w-full table-auto border-collapse mb-4">
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">
                College Name
              </td>
              <td className="border p-2">
                LNCT
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">
                Eligibility Criteria
              </td>
              <td className="border p-2">
                10+2 with Physics, Maths & (Chemistry or CS or Bio),
                minimum 45%. (40% for SC/ST/OBC MP) + JEE Main
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">
                Duration
              </td>
              <td className="border p-2">
                4 Years
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">
                Intake
              </td>
              <td className="border p-2">
                60
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Master's Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          M.Tech. – Power Electronics
        </h2>
        <table className="min-w-full table-auto border-collapse mb-4">
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">
                College Name
              </td>
              <td className="border p-2">
                LNCT
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">
                Eligibility Criteria
              </td>
              <td className="border p-2">
                B.Tech. in related discipline with minimum 50%. (45% for SC/ST/OBC MP )
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">
                Duration
              </td>
              <td className="border p-2">
                2 Years
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">
                Intake
              </td>
              <td className="border p-2">
                18
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
            To impart knowledge of electrical and electronics engineering and mould students into world class professional to achieve excellence in engineering education and research.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Mission
          </h3>
          <ul className="list-disc ml-6">
            <li>To prepare students with a deep understanding of fundamentals of electrical and electronics engineering.</li>
            <li>To prepare engineers with a creative, innovative, adaptable, problem-solving attitude and a strong ethical view.</li>
            <li>To collaborate with industry, research organizations and academia to encourage innovations and patents.</li>
            <li>To impart education to students in the field of electrical and electronics.</li>
          </ul>
        </div>

        {/* PEOs Section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Program Educational Objectives (PEOs)
          </h3>
          <ul className="list-disc ml-6">
            <li>To be able to apply knowledge of mathematics, science and engineering as appropriate in the field of electrical and electronic practice.</li>
            <li>To identify, understand, implement, evaluate and formulate solutions to meet industry and societal needs.</li>
            <li>To use the latest techniques, skills and modern engineering tools necessary to solve industrial problems related to electrical and electronics.</li>
            <li>To have understanding of effects of the engineering solutions and to exhibit professionalism, ethical attitude, effective written and oral communication skills and team work.</li>
          </ul>
        </div>

        {/* PSOs Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Program Specific Outcomes (PSOs)
          </h3>
          <ul className="list-disc ml-6">
            <li>Understand & apply statistics, probability, transform methods, discrete mathematics, or applied differential equations in support of electrical circuits and networks.</li>
            <li>Demonstrate knowledge and hands-on competence in the application of circuits, signals, power, control, instrumentation, and associated software.</li>
            <li>Analyze, design, implement, control, and maintain electrical and electronic systems; and power systems for electrical & electronic drives and machines.</li>
            <li>Application project management techniques and computation aid to power systems and electrical and electronic systems.</li>
          </ul>
        </div>
      </div>
    </div>
    
    <LnctFooter/>
    </>

  )
}
