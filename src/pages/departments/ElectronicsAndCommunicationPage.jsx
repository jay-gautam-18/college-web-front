import React, { useEffect, useState } from 'react' 
import Nav from '../../Components/Nav'
import Home1 from '../../Components/HomeComponets/Home1'
import LnctFooter from '../../Components/LnctFooter'
import Loader from '../../Components/Loader'
export default function ElectronicsAndCommunicationPage() {
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
    heading={"Department of Electronics and Communication Engineering | LNCT Group of Colleges"}
    description={"We train and guide you to innovate, lead and to be successful Engineers!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/ME-min.jpg"}
    />
    <div className="p-6 space-y-6">
      <header className='space-y-4'>
        <h1 className="text-3xl font-semibold mb-4">Electronics and Communication Engineering</h1>
        <p>The Department of Electronics and Telecommunication Engineeringestablished in 1994, with an intake of 60. The department has undergone numerous development under the guidance of Professor and Head of Department, The department is now known as Department of Electronics and Communication Engineering and has a present intake of 180. It also offers Postgraduate degree program in Very Large Scale Integration (VLSI) Design with intake of 24. The department has qualified and experienced faculty in all cadre ratios in various specializations.</p>
        <p>The department was accredited in 2007 by National Board of Accreditation, for 3 years vide letter no. NBA/ACCR-904/2007 dated 12th Sept 2007, for its undergraduate program in Electronics and Communication Engineering. The department is fully equipped to support theoretical and practical syllabus of Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal.</p>
        <p>The department has 15 laboratories and many kits, instruments and software such as VLSI Kits, DSP Kits, Antenna, Filter kits, Communication kits, ARM and 8086 Microprocessor kits, test benches, programmers and IC testers, LCR meters, CRO’s, function generators, PCB Etching machine, Microwind, FECO etc..</p>
        <p>The departmental library has 300 books of different authors and titles. The department encourages its students as well as its faculty to present their research paper and work in National and referred International Journals. Faculty Development Programs on LABVIEW, ARM Processors and Embedded Systems, EDA tools from Microwind, Mentor Graphics, FEKO, PieceSpice etc. were also conducted time to time. The faculty members regularly attend programmes sponsored by DST, AICTE, TEQIP-II, ISTE etc.. The department has organized national conferences during 2007, 2010, 2013, 2015 and 2016.</p>
        <p>
            Department regularly organizes and conduct workshops for students and faculty members on breadboarding, robotics, PCB designing, Embedded Systems, Android Systems, Quad-copter, Internet of Things, VLSI and DSP etc. so that the student is aware of latest technology and its trend. The department has excellent records of Campus Placement in various national companies and international companies. Many students of the branch every year get shortlisted in exams like GATE, CAT, GRE, GMAT etc. and opt for higher studies in India and abroad. Also students bring laurels to the department by winning Chancellor’s Scholarship. Industrial visits to HEG, BHEL, Railways, Anant Spinning Mills, National Fertilizers Limited etc. are regularly organized for making the students friendly with industrial environment and understand the application of the subjects which they are learning during four years of B.E.
        </p>
        <p>
            The student’s editorial board also publishes a monthly departmental newsletter “ACRUX” which speaks about quality of the students.
<br />
The department has completed AICTE-MODROBS project of Rs. 15 Lacs for the establishment of Project Laboratory under the guidance of Dr. Rita Jain as the Principal Investigator.
<br />
Research assistance for paper presentation and travel grants for India and abroad are provided by LNCT and government agencies like MPCST, AICTE, DST etc.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Courses</h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border p-2">Course</th>
              <th className="border p-2">College</th>
              <th className="border p-2">Eligibility</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">B.E./B.Tech. (Electronics and Communication)</td>
              <td className="border p-2">LNCT</td>
              <td className="border p-2">XII with Physics + Maths + (Chemistry/Computer) with minimum 45% (40% for SC/ST/OBC MP) and qualified rank in JEE</td>
              <td className="border p-2">4 Years</td>
              <td className="border p-2">60</td>
            </tr>
            <tr>
              <td className="border p-2">M.Tech. (Digital Communication)</td>
              <td className="border p-2">LNCT</td>
              <td className="border p-2">B.E./B.Tech. in related discipline with minimum 50% (45% for SC/ST/OBC MP)</td>
              <td className="border p-2">2 Years</td>
              <td className="border p-2">18</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Mission</h2>
        <ul className="list-inside list-disc">
          <li>To impart education with strong fundamentals of Electronics and Communication.</li>
          <li>To enable graduates to pursue higher education and research.</li>
          <li>To develop technical skills to solve real-world problems in communication and related fields.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Programme Educational Objectives (PEOs)</h2>
        <ul className="list-inside list-decimal">
          <li>To produce graduates proficient in designing and developing electronic circuits and communication systems.</li>
          <li>To pursue a successful career in industry, academia, or research.</li>
          <li>To contribute to the society by developing technology for communication, healthcare, automation, and related sectors.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Programme Specific Outcomes (PSOs)</h2>
        <ul className="list-inside list-decimal">
          <li>Ability to apply knowledge of modern communication techniques.</li>
          <li>Ability to implement circuits, systems, and networks for specialized applications.</li>
          <li>Ability to employ discipline-specific software and techniques in designing and analyzing electronic systems.</li>
        </ul>
      </section>
    </div>
    <LnctFooter/>
        </>
    
  );
}
