import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import NewsMedia from '../../Components/NewsMedia'
import Loader from '../../Components/Loader'
function ComputerScienceEngineering() {
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
    heading={"Computer Science and Engineering | LNCT Group of Colleges"}
    description={"We envision ourselves as a pace-setting Colleges of Academic Excellence focused on education, research and development in established and emerging professions"}
    image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-18-768x512.jpeg"}
    />
    <div className="p-6  mx-12">
      <h1 className="text-4xl font-semibold mb-4 text-center">
        Computer Science and Engineering
      </h1>
      <hr className="mb-6" />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Department of Computer Science and Engineering of the college was
            established in year 1994 with intake of 60 students. Two
            postgraduate courses in Computer Science and Engineering and Software
            Engineering were started in the year 2004 and 2007 respectively.
          </p>
          <p className="mb-4">
            Currently the department has an intake of 180 at undergraduate
            level and 24 at postgraduate level (M.Tech, CSE). Since its
            inception the department has always been recognized for excellence
            in teaching and outstanding students’ performance at global level
            and for the excellent placement record in various
            international/national companies. All over the world, the alumni
            of the department occupy top positions in IT industries like
            Google, Sun Microsystem, Yahoo, Cisco, TCS, Cognizant, Infosys,
            Wipro and many more.
          </p>
          <p className="mb-4">
            Department provides an ambient teaching-learning environment for
            its students through qualified, experienced faculty and smart
            classroom facility. The course structure is as per RGPV, Bhopal
            and includes courses on nascent topics to equip our students with
            the latest developments in Computer Science Engineering to bridge
            the gap with the industry.
          </p>
          <p className="mb-4">
            Research guidance to M. Tech. students is provided by Head of
            Department and the Head of Computer Center, along with the
            various other experienced faculty members in the areas like
            Networks Security, Cloud Computing, Data Mining and Knowledge
            Management, Soft Computing, Image Processing, Artificial
            Intelligence, Ad-hoc Networks, Parallel Processing, Software
            Engineering etc.. The department also organizes
            National/International Conference, Workshops, Seminar, Expert
            Lectures in above mentioned areas.
          </p>
          <p className="mb-4">
            The Department has 10 nos. of state-of-the-art computer
            laboratories with latest computers and software supported by
            High Speed Ethernet and Wireless networks. Presently the department
            has leased line Internet connectivity on OFC(Primary) and RF(Backup).
            Various student Chapters/Organizations like CSI Chapter, IETE
            Chapter, Open SUN Solaris Community are active throughout the
            year.
          </p>
          <p className="mb-4">
            Research assistance for paper presentation and travel grants for
            India and abroad are provided by LNCT and government agencies
            like MPCST, AICTE, DST etc.
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
            <td className="border p-2">	Dr. SADHNA MISHRA</td>
          </tr>
          <tr>
            <td className="border p-2">LNCTS</td>
            <td className="border p-2">DR. BHAWANA PILLAI</td>
          </tr>
          <tr>
            <td className="border p-2">LNCT E</td>
            <td className="border p-2">	Dr. MEGHA KAMBLE</td>
          </tr>
          <tr>
            <td className="border p-2">LNCT</td>
            <td className="border p-2">DR. BHUPESH GAUR  (AIML/AIDS)</td>
          </tr>
          <tr>
            <td className="border p-2">LNCT</td>
            <td className="border p-2">DR. VIVEK RICHHARIYA (IOT)</td>
          </tr>
          <tr>
            <td className="border p-2">LNCT E</td>
            <td className="border p-2">	DR. NEETESH GUPTA (DATA SC./CYBER S)</td>
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
                LNCT | LNCTE | LNCT&S
              </td>
            </tr>
            <tr>
              <td className="font-semibold p-2 border w-1/4">
                Eligibility Criteria
              </td>
              <td className="p-2 border">
                Eligibility-XII with: Physics + Maths + (Chemistry/Computer
                Science/Biology) with Min. 45% (40% for SC/ST/OBC MP Domicile
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
                LNCT- 180 | LNCTE- 180 | LNCT&S- 180
              </td>
            </tr>
            <tr>
              <td className="font-semibold p-2 border w-1/4">
                Special Courses
              </td>
              <td className="p-2 border">
                <ul className="list-disc ml-6 space-y-2">
                   <li>CS (IOT Cyber Including Blockchain) – LNCT- 180</li>
                   <li>CS (AIML) – LNCT- 180 | LNCTE- 180 | LNCT&S- 180</li>
                   <li>CS (AIDS) – LNCT- 180</li>
                   <li>CS (Cyber) – LNCT&S – 180</li>
                   <li>CS (Data Science) – 120</li>
                </ul>
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
                LNCT- 30 | LNCT &amp; S- 30 | LNCTE- 24
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

export default ComputerScienceEngineering;
