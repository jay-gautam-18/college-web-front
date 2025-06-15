import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import NewsMedia from '../../Components/NewsMedia'
import Loader from '../../Components/Loader'
const Civil = () => {
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
    <Home1 heading={"Department of Civil Engineering | LNCT Group of Colleges"}
    description={"We inspire innovation and discovery at LNCT Group of Colleges."}
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/Civil-Eng-Images-min-768x509.jpg"}
    />
      
     <div className="p-6 max-w-4xl mx-auto">
      {/* Title Section */}
      <h1 className="text-2xl font-semibold mb-4">
        Department of Civil Engineering | LNCT Group of Colleges
      </h1>

      {/* Description Section */}
      <div className="mb-6 space-y-4">
        <p>
          The Department of Civil Engineering is established in 2004,
          initially with an intake of 30 at undergraduate level and 18 at
          postgraduate level in 2007. Department has developed over the years
          with an increase in intake from 60 to 120 at undergraduate
          program, 24 at postgraduate program at present.
        </p>

        <p>
          Since inception the department has set new standards over the time
          persistently under the guidance of experienced Head and Faculties
          with the required support of management.
        </p>

        <p>
          The department is located on the ground floor of the CME block in
          LNCT campus. The department has qualified, experienced and
          adequate faculty to meet the requirements of present intake. The
          department also has adequate number of laboratories for giving
          assured quality results for consultancy testing. The department
          has a computer center and a library for use.
        </p>

        <p>
          The department strongly believes in making continuous efforts to
          strive for excellence by exploring new frontiers of knowledge in
          engineering and technology. It guides its students the best
          available instructions of the curriculum. It also conducts
          regularly national conferences, seminars and special guest
          lectures for the benefit of faculty, staff and students. It also
          collaborates actively for academia – industry interactions. The
          department also communicates suggestions to affiliating
          university for academic developments. The department also
          conducts Staff Development Program and national conference with
          the support of AICTE for faculty members. In the field of
          academic consultancy the department is recognized center in
          Madhya Pradesh, Bhopal of Institution of Civil Engineers, Karol
          Bagh, New Delhi.
        </p>

        <p>
          Research assistance for paper presentation and travel grants for
          India and abroad are provided by LNCT and government agencies
          like MPCST, AICTE, DST etc.
        </p>
      </div>

      {/* Table Section */}
      <h1 className="text-2xl font-semibold mb-4">
        Head of Department
      </h1>
      <table className="min-w-full table-auto border-collapse mb-6">
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
            <td className="border p-2">Dr. Rajeev Singh Parihar</td>
          </tr>
          <tr>
            <td className="border p-2">LNCTS</td>
            <td className="border p-2">Dr. Praveen K Singhai</td>
          </tr>
        </tbody>
      </table>
        <div className="p-6 max-w-4xl mx-auto">
      {/* Bachelor's Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          B.E./B.Tech. (4 Years Duration)
        </h2>
        <table className="min-w-full table-auto border-collapse mb-4">
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">
                College Name
              </td>
              <td className="border p-2">
                LNCT | LNCTE | LNCTS
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">
                Eligibility Criteria
              </td>
              <td className="border p-2">
                Eligibility-XII with Physics + Maths + (Chemistry/Computer
                Science/Biology) with Min. 45% (40% for SC/ST/OBC MP
                Domicile Candidate) with qualified rank in JEE.
                <br />
                Eligibility(Direct/LateralEntry)-2nd Year.
                <br />
                Direct Admission:
                <ul className="list-disc ml-6">
                   <li>Min. 45% (40% for SC/ST/OBC) in B.Sc. and passed 12th examination with Maths.</li>
                   <li>Min. 45% (40% for SC/ST/OBC) in Diploma in Engg.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">
                Seats
              </td>
              <td className="border p-2">
                LNCT-60 | LNCTS-30
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
          </tbody>
        </table>
      </div>

      {/* M.Tech. (Construction Technology and Management) Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          M.E./M.Tech. – Construction Technology and Management (CTM)
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
                Eligibility-B.E./B.Tech. with Min. 50% (45% for SC/ST/OBC
                MP Domicile Candidate)
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">
                Seats
              </td>
              <td className="border p-2">
                LNCT-30
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
          </tbody>
        </table>
      </div>

      {/* M.Tech. (Structural) Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          M.E./M.Tech. – Structural Engineering
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
                Eligibility-B.E./B.Tech. with Min. 50% (45% for SC/ST/OBC
                MP Domicile Candidate)
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">
                Seats
              </td>
              <td className="border p-2">
                LNCT-30
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
          </tbody>
        </table>
      </div>
    </div>
      {/* Student Chapters Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Student Chapters and Societies in Department
        </h2>

        <h3 className="font-semibold mt-4 mb-2">Vision</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Be a fountain head of new ideas and innovations in Civil Engineering.</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Mission</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>To offer assured quality programs in Civil Engineering including education, research guidance, training, leadership and team spirit.</li>
          <li>To inculcate the quality of entrepreneurship among graduating students.</li>
          <li>To be a center of excellence in Civil Engineering programme.</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">
          Program Educational Objectives (PEOs)
        </h3>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide ambitious academic environment and effective teaching-learning process in the department.</li>
          <li>To prepare the aspirants of civil engineers into employable, responsible, accountable, sincere and ethical engineers having a combination of basic knowledge of science and engineering, design, implementation and capable of handling complex situations if they arise in their job tenure.</li>
          <li>To develop an interest for higher studies amongst graduates so that they can contribute to academy publication / research and development in area of Civil Engineering.</li>
          <li>To make them abreast with modern equipments, software and other computational, mathematical design aids so that they perform effectively in the multidisciplinary groups for growth of Civil Engineering profession.</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">
          Program Specific Outcomes (PSOs)
        </h3>
        <ul className="list-disc ml-6">
          <li>Graduate with first class and during tenure of course get selected in campus interviews or higher studies or become entrepreneur.</li>
          <li>Acquire knowledge of Basic Sciences, Engineering, Humanities and Civil Engineering subjects, course and electives with its awareness of latest trends.</li>
          <li>Analyze, synthesize, design, prepare drawings and other technical documents using modern tools judiciously for civil engineers structures being undertaken by the constructors and owners.</li>
          <li>Communicate effectively with their seniors, juniors, workers, stakeholders regarding conveying of instructions, design and drawing details, erection details, write and interpret project reports and summary.</li>
        </ul>
      </div>
    </div>
    <NewsMedia/>
    <LnctFooter/>
    </>

  )
}

export default Civil