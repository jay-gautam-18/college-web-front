import React,{useState, useEffect}   from 'react'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1';
import Nav from '../../Components/Nav';
import Loader from '../../Components/Loader';

const CollegeLNCTMBA = () => {
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
    <div>

 <Nav/>

{/* <</header> */}
 <Home1
    image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-7-1024x682.jpeg"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    heading={"LNCT MBA | Top Management Institute in Bhopal"}
    />
      {/* part-1 */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-6 py-12">
        {/* Left Content */}
        <div className="lg:w-2/3 text-justify space-y-4">
          <h2 className="text-center font-semibold text-gray-700 border-t-2 pt-2 pb-4">
            LAKSHMI NARAIN COLLEGE OF TECHNOLOGY
          </h2>
          <p>
            LNCT MBA seeks to be a contextually-relevant business school with world-class academic standards that develops socially. Master of Business Administration or MBA is one of the most popular post-graduate programs in India.
          </p>
          <p>
            MBA is a 2-year post-graduate degree in management. MBA is an internationally accredited post-graduate degree for developing business and management skills.
          </p>
          <p>
            MBA is two years of leadership practice immersed in real-world challenges. Through the case method and general management curriculum, students imparts a strong theoretical foundation in business concepts & provides practical opportunities (via internships, group assignments and individuals).
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Develop</strong> functional business knowledge of the students.</li>
            <li><strong>Develop</strong> effective teamwork and leadership skills.</li>
            <li><strong>Develop</strong> an overall personality.</li>
            <li><strong>Develop</strong> critical thinking, analytical, and problem-solving skills.</li>
            <li><strong>Develop</strong> decision-making skills.</li>
            <li><strong>Develop</strong> interpersonal skills.</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/3 space-y-4">
          {[
            { title: "Prabandhan", edition: "Dec 2021 Edition", url: 'https://lnct.ac.in/wp-content/uploads/2022/07/PRABANDHAN.pdf' },
            { title: "Prabandhan", edition: "IInd Edition", url: 'https://lnct.ac.in/wp-content/uploads/2022/07/NEWS-LETTER-10.01.2022.pdf' },
            { title: "The Editorial Desk", edition: "Volume 1.0", url: 'https://lnct.ac.in/wp-content/uploads/2022/07/The-Editorial-Desk.pdf' },
            { title: "Prabandhan", edition: "June 2022 Edition", url: 'https://lnct.ac.in/wp-content/uploads/2022/07/Prabandhan-Newsletter-2.2-June-22.pdf' },
            { title: "Prabandhan", edition: "2023 Edition", url: 'https://lnct.ac.in/wp-content/uploads/2023/05/Prabandhan-newspaper-1.pdf' },
            { title: "Prabandhan", edition: "2024 Edition", url: 'https://lnct.ac.in/wp-content/uploads/2024/07/Prabandhan-2.pdf' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-transparent p-4 rounded-md shadow border hover:shadow-md transition"
            >
              <div className="flex flex-wrap items-center gap-2 bg-transpat">
                <h3 className="text-gray-800 font-semibold">{item.title}</h3>
                <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                  {item.edition}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                A Quarterly Newsletter of Management & Commerce
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* part-2 */}
        <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="font-semibold  text-lg mb-4">Masters Of Business Administration (MBA)</h2>
      <div className="border border-black  rounded-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5 border-b border-black">
          <div className="border-r font-medium px-4 py-3 md:col-span-1">Eligibility Criteria</div>
          <div className="px-4 py-3 md:col-span-4 text-justify">
            A candidate seeking admission to MBA and Allied Courses should be a Graduate with at least 50% marks and 45% marks in case of SC, ST, OBC category of Madhya Pradesh in aggregate of any UGC/AICTE approved Indian University or from a foreign University recognized by Association of Indian Universities (AIU) or institute recognized by the concerned University as equivalent thereto. The Bachelor’s degree must be of minimum three years duration after passing Higher Secondary (10+2) examination of (10+2) system or equivalent.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 border-b border-black">
          <div className="border-r font-medium px-4 py-3 md:col-span-1">Seats</div>
          <div className="px-4 py-3 md:col-span-4">
            LNCT MBA (240) | LNCT MBA-FM (240) | LNCTE MBA (180) | LNCTE MBA – MM (120)
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 border-b border-black">
          <div className="border-r font-medium px-4 py-3 md:col-span-1">Duration</div>
          <div className="px-4 py-3 md:col-span-4">2 Year</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 border-b border-black">
          <div className="border-r font-medium px-4 py-3 md:col-span-1">College Name</div>
          <div className="px-4 py-3 md:col-span-4">LNCT-MBA</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="border-r font-medium px-4 py-3 md:col-span-1">Director</div>
          <div className="px-4 py-3 md:col-span-4">Dr. Arvind Singh</div>
        </div>
      </div>
    </div>

{/* part-3 */}
 <div className="px-4 md:px-16 py-10 space-y-10 text-gray-800">
      {/* About MBA Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">About MBA</h2>
        <h3 className="text-lg font-bold mb-2">LNCT – MBA started in 2003</h3>
        <p className="mb-4">
          Master of Business Administration (M.B.A) in both colleges are affiliated to Barkatullah University,
          Bhopal and approved by AICTE, New Delhi. It has been designed as an intensive two year, full time
          program and aims at creating a strong academic foundation to provide young thinking minds the power
          to shape their thoughts and develop management aptitude.
        </p>
        <p className="mb-4">
          At LNCT, the MBA program has been created from the feedback,
          ideas and inputs given in by leading practicing managers and academicians world-wide, as experts in
          cross-functional areas.
        </p>
        <p>
          In addition to the prescribed course contents of the syllabi specified by Barkatullah University, our
          perceptual efforts have been to provide value added additional knowledge to make our student perfect
          professional, and effective business leader to streak smart responsible global citizens.
        </p>
      </div>

<hr />
      {/* About Faculty Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">About Faculty</h2>
        <p>
          Teaching is mostly application-based with structured lectures, case studies, industry visits, live
          projects, guest lectures and Industrial Experts talk sessions etc. In order to make teaching and
          learning an engaged and continuous process for our students, our expertise faculty members involve
          students in various exercises like role plays, case discussions, situation analysis, problem solving
          etc.
        </p>
      </div>

<hr />
      {/* Special Attributes Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Special Attributes of our Teaching Pedagogy
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            The Institute is Imparting professional education in the facet of management with the help of highly
            qualified, experienced faculty possessing a right blend of academic and industrial exposure.
          </li>
          <li>Expertise lectures of Corporate leaders</li>
          <li>Case Study</li>
          <li>Role Plays</li>
          <li>Simulation Exercises</li>
          <li>Business Games</li>
          <li>Management Quizzes</li>
          <li>Industrial visit</li>
          <li>Group discussion and personal interviews</li>
          <li>Training for computer proficiency</li>
        </ul>
      </div>
<hr />
      {/* Training and Placement Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Training and Placement information
        </h2>
        <p>
          The institute attaches the highest importance to Training and Placement. Our high standard of imparting
          the education has brought quick results as the corporate world has started recognizing us as one of the
          leading business schools of the region. This is reflected in the placements of our students in leading
          corporate like. Regular placements service has been set up at LNCT, under senior faculty for industrial
          contact. Students drive the activities of the placement office. Necessary pro-active steps are taken to
          facilitate a variety of interactions with industry and business enterprises around the year, to make
          them aware of the unique features of LNCT and we give the 100 percent placement assurance to our
          students.
        </p>
      </div>
    </div>


    {/* footer */}
    <LnctFooter/>
    </div>
  )
}

export default CollegeLNCTMBA
