import React, { useEffect, useState } from "react";
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import NewsMedia from '../../Components/NewsMedia'
import Loader from '../../Components/Loader'
function IT() {
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
    heading={"Department of Information Technology Engineering | LNCT Group of Colleges"}
    description={"LNCT Group of Colleges is committed to set new benchmarks in academics and technological innovation!"}
    image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-17-768x512.jpeg"}
    />
    <div className="p-6  mx-12">
      <h1 className="text-4xl font-semibold mb-4 text-center">
        Department of Information Technology Engineering
      </h1>
      <hr className="mb-6" />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            The Department of Information Technology, established in 1999, with an intake of 40 at undergraduate level. Presently the department has intake of 120 in undergraduate program B.Tech. (IT). Since start of the course it has undergone major developments. The department has qualified, experienced faculty in adequate number in cadre ratio. The department has laboratories like Networking, Project, Programming and RDBMS with modern facilities, departmental library and a computer center.The department encourages its faculty to present papers in National Journal, Referred International Journals, Conferences Symposium and Workshops/Staff Development Program like TEQIP-III, ISTE and STP. It has good placement records in prominent IT companies Infosys, Wipro, Cognizent, Amazon etc.The department publishes a National Journal entitled ‘National Journal of Engineering Science and Management’. Research assistance for paper presentation and travel grants for India and abroad are provided by LNCT and government agencies like MPCST, AICTE, DST etc.The department has completed AICTE-MODROBS project of Rs. 5 Lacs for the establishment of Open Source (Linux/Unix) Laboratory under the guidance of Dr. Manish Shrivastava as the Principal Investigator.
          </p>
          
        </div>
        
      </div>
    </div>
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold mb-4">
        Head of Department
      </h1>
      <table className=" table-auto border-collapse mb-6">
        <thead>
          <tr>
            <th className="border p-2 font-semibold text-gray-700">
              College Name
            </th>
            <th className="border p-2 font-semibold text-gray-700">
              Name
            </th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">LNCT</td>
            <td className="border p-2">Prof. SUSHIL KUMAR</td>
          </tr>
        </tbody>
      </table>
    </div>
     
      <div className="p-6 max-w-3xl mx-auto space-y-6">
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          B.E./B.Tech. (4 Years Duration)
        </h2>
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="font-semibold p-2 border w-1/4">
                College Name
              </td>
              <td className="p-2 border">
                LNCT
              </td>
            </tr>
            <tr>
              <td className="font-semibold p-2 border w-1/4">
                Eligibility Criteria
              </td>
              <td className="p-2 border">
                Eligibility-XII with: Physics + Maths + (Chemistry/Computer
                science/Biology) with Min. 45% (40% for SC/ST/OBC MP Domicile
                Candidate) with qualified rank in JEE.<br />
                Eligibility(Direct/LateralEntry)-2nd Year.<br />
                Direct Admission:<br />
                1. Min. 45% (40% for SC/ST/OBC) in B.Sc. and passed 12th
                examination with Maths.<br />
                2. Min. 45% (40% for SC/ST/OBC) in Diploma in Engg.
              </td>
            </tr>
            <tr>
              <td className="font-semibold p-2 border w-1/4">
                Seats
              </td>
              <td className="p-2 border">
                0
              </td>
            </tr>
            <tr>
              <td className="font-semibold p-2 border w-1/4">
                Duration
              </td>
              <td className="p-2 border">
                4 Years
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          M.E./M.Tech. – Computer Science &amp; Engineering
        </h2>
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="font-semibold p-2 border w-1/4">
                College Name
              </td>
              <td className="p-2 border">
                LNCT | LNCTE | LNCT &amp; S
              </td>
            </tr>
            <tr>
              <td className="font-semibold p-2 border w-1/4">
                Eligibility Criteria
              </td>
              <td className="p-2 border">
                Eligibility-B.E./B.Tech. with Min. 50% (45% for SC/ST/OBC MP
                Domicile Candidate)
              </td>
            </tr>
            <tr>
              <td className="font-semibold p-2 border w-1/4">
                Seats
              </td>
              <td className="p-2 border">
                LNCT-30 | LNCT &amp; S-30 | LNCTE- 24
              </td>
            </tr>
            <tr>
              <td className="font-semibold p-2 border w-1/4">
                Duration
              </td>
              <td className="p-2 border">
                2 Years
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
     <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold mb-4">
        Student Chapters and Societies in Department
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Vision</h2>
        <p>
          To produce competent computer manpower to cater the need of technical
          challenges in industry, research and academics, with the sense of service
          to the humanity and the nation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Mission</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            To provide best possible educational facilities for teaching &amp;
            learning process to computer science and engineering students for
            building a promising career.
          </li>
          <li>
            To create ambient environment in which core competency in the field of
            computer science &amp; engineering along with research can be
            strengthened.
          </li>
          <li>
            To organize conferences, seminars and hands-on training programs to
            expose/train students, staff and faculties with current technological
            developments, in field of computer science &amp; engineering.
          </li>
          <li>
            To encourage the students to become self-motivated, to take up
            responsibility and work with ethical and moral values.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Program Educational Objectives (PEOs)
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            To prepare the graduates to apply knowledge of computer science and
            engineering subjects in domain of software analysis, design and
            application development.
          </li>
          <li>
            To prepare computer science and engineering graduates for employment
            in software industry, academic, public sectors and private sectors
            undertakings and for the higher studies and entrepreneurship.
          </li>
          <li>
            To prepare the graduates to use latest skills, techniques and
            engineering tools to analyse and solve problems related to computer
            science and engineering in industrial, social and environmental context.
          </li>
          <li>
            To prepare the graduates to exhibit professionalism, ethical values,
            effective written and oral presentation skills and team work with
            social responsibilities.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Program Specific Outcomes (PSOs)
        </h2>
        <p>A graduate of Computer Science and Engineering Program will develop</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            an ability to demonstrate basic knowledge of Data structure, Database
            Management System, Software Engineering, Computer Networking and
            Operating System.
          </li>
          <li>
            an ability to design &amp; develop software projects using computer
            science principles and open source software tools.
          </li>
          <li>
            an ability to apply acquired knowledge of theoretical and modern
            computer science subjects in problem solving of domains such as web
            and mobile based application development, database management system
            and network security.
          </li>
          <li>
            an ability to employ assimilated learning and knowledge from
            curricular courses towards personality development and grooming as
            responsible citizens.
          </li>
        </ul>
      </section>
    </div>
     <LnctFooter/>
    </>

  );
}

export default IT;
