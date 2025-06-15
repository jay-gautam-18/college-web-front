import Loader from '../../Components/Loader';
import { useEffect, useState } from 'react'
import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';
import LnctFooter from '../../Components/LnctFooter';

const Clubs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const clubs = [
    {
      title: "AIESEC",
      desc: "With this T&P Department conducts sessions with AIESEC Local Chapters like International University Volunteer Exchange Program, Leadership Development, Public Speaking.",
    },
    {
      title: "Corporate Club",
      desc: "This club conducts sessions of Corporate Leaders, Alumni Talks, MNCs CSR activities with core G.E.C & M.S.M.E communities, Placed students' interaction with juniors and many more. The main motto of Corporate Club is to fill the Industry-Academic gaps.",
    },
    {
      title: "TEDx Club",
      desc: "The TEDx club is responsible for conducting TEDx talks at LNCT Group.",
    },
    {
      title: "T&P Volunteer Club",
      desc: "This club is responsible for conducting T&P Events like Mock Interviews, Online Assessments, Group Discussions and many more. The motto of T&P Volunteer Club is to help students in terms of Placement specific learning.",
    },
    {
      title: "CV & HR Club",
      desc: "LNCT CV/HR Club is conducting sessions and awareness campaigns under guidance of T & P Leaders. Student E-cell council has listed all college levels with College Student Offices.",
    },
    {
      title: "Go Global Club",
      desc: "The Global Club is responsible to provide Global exposure for Higher Studies in International University and Jobs in foreign countries. Conducting talks with Global Alumni of LNCT Group, communities helping students for Global exposure.",
    },
    {
      title: "MUN Club",
      desc: "LNCT MUN Club is conducting MUN events at LNCT Group under Model United Nations, arranging leader talks on Global issues and awareness about the same among youth.",
    },
  ];

  useEffect(() => {
    // Simulate loading time or wait for data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loader />;
  }


  return (
    <>
      <Nav />
      <Home1 
        heading="T&P Department Clubs | LNCT Group of Colleges"
        description="Explore the various clubs and student organizations under the Training & Placement Department."
        image="https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"
      />
      <div className="py-12 px-6 md:px-20 bg-zinc-100 text-black font-sans">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-black underline">
          T&P Department - Clubs
        </h2>

        {/* Club List */}
        <div className="grid md:grid-cols-2 gap-8">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-bold text-xl text-black mb-2 underline">
                {index + 1}. {club.title}
              </h3>
              <p className="text-gray-700">{club.desc}</p>
            </div>
          ))}
        </div>

        {/* Illustrations */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-12">
          <img
            src="/images/club-image-1.png"
            alt="Club illustration 1"
            className="w-64 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          />
          <img
            src="/images/club-image-2.png"
            alt="Club illustration 2"
            className="w-64 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        </div>

        {/* Reports Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-black mb-6 ">
            T&P Department - Clubs & Reports
          </h2>
          <div className="space-y-4 text-black">
            <a
              href="https://lnct.ac.in/wp-content/uploads/2024/04/Go-Global-report.pdf"
              className="block hover:text-red-400 text-lg font-medium underline"
            >
              Go Global Report
            </a>
            <a
              href="https://lnct.ac.in/wp-content/uploads/2024/04/Corporate-Club-Report.pdf"
              className="block  hover:text-red-400 text-lg font-medium underline"
            >
              Corporate Club Report
            </a>
          </div>
        </div>
      </div>
      <LnctFooter />
    </>
  );
};

export default Clubs;
