import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';

const DigitalLibrary = () => {
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
    <Home1 heading={"LNCT Group of Colleges | Central India's No. 1 Engineering Institute - Bhopal"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/11/LNCT-Student-19.png"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    />
      <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-1">Digital Library</h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        LNCT Bhopal Central India’s No. 1 Engineering Institute
      </p>

      <p className="mb-6">
        Central Library occupies a place of pride in LNCT and is an essential component of the institute’s outstanding
        education mission. It is a most lively place on the campus providing a safe, comfortable and friendly environment that
        enables learning and advancement of knowledge and promotes discovery and scholarship. The mission of the Central
        Library is to facilitate creation of new knowledge through acquisition, organization and dissemination of knowledge
        resources and provisioning for value added services. All students, faculty members and employees of the Institute are
        permitted to make use of library facilities. The library has a huge collection of books on Engineering, Management,
        Science and Humanities and offers library services through its various divisions.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-3">Salient Features of the Library</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>✔️ The Total Seating Capacity is 200</li>
            <li>✔️ Digital Library with 20 Systems</li>
            <li>✔️ E-POWER and DELNET journals online</li>
            <li>✔️ Standard text books and books by well known authors</li>
          </ul>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2876/2876665.png"
          alt="Library Illustration"
          className="w-32 mt-6 md:mt-0"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Digital Library</h3>
          <p>
            E-journals have been subscribed through DELNET - AICTE consortium. Access to these Journals is made available to all
            the staff and students. Many transactions, journals, magazines, newsletters, proceedings can be accessed through
            this Digital Library.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Internet Lab</h3>
          <p>
            Twenty systems connected to LAN with Internet facility are provided for the students. They can use the facility for
            their project work, preparation for seminars and paper presentations, online access to journals, e-books and study
            material. Intranet facility is provided to access the previous question papers, teaching schedules, internal marks,
            attendance, daily circulars etc.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Audio – Visual Centre & Lecture DVDs</h3>
        <p>
          DVDs comprising the NPTEL (National Programme on Technology Enhanced Learning) / lectures which were procured from all
          IIT’s are kept open for students and staff for subject reference. Staff and students can rent these DVDs in the seminar
          halls.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Departmental Libraries</h3>
        <p>
          In addition to the Central Library, every PG department has department library. All important text / reference books
          are maintained in the departmental libraries for the use of faculty and students.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Book Bank Scheme</h3>
        <p>
          Many students opted for book bank scheme which costs Rs. 4000 for the entire course. This scheme runs on the premise
          that each student should possess at least one text book for each subject throughout his/her 4 years of study. Procuring
          these books from the market is arduous and expensive proposition and also some editions are not available in the
          market. Book bank scheme is devised to overcome this problem. Large number of students are availing this facility.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Working of the Book Bank Scheme</h3>
        <p>
          Principal, HODs and faculty members decide the best books that cover the entire syllabus of the subject. These books
          are purchased and accessioned in the Library and issued to each student (one set) for a period of one year / semester.
          At the end of the year/semester the student has to return all the books and then books of the next semester are issued
          on the last day of the semester.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Benefits to Students</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>A single, one-time payment ensures the availability of the best textbooks for each subject throughout four years of study.</li>
          <li>Books are handed over to the student at the college library.</li>
          <li>The presence of textbooks improves the student’s academic and enhances the performance in internal and external examinations.</li>
          <li>Students can save a lot of time and money since books from market are higher priced and with difficulties.</li>
          <li>Students can borrow two extra books of their choice from the library through 2 library borrowers tickets normally issued to all students.</li>
        </ul>
      </div>
    </div>
    <LnctFooter/>
    </>
  )
}

export default DigitalLibrary
