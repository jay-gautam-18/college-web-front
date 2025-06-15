import Loader from '../../../Components/Loader'
import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav';
import LnctFooter from '../../../Components/LnctFooter';
import Home1 from '../../../Components/HomeComponets/Home1';

const alumniGroups = [
  {
    title: "Civil Servants Eminent Alumni",
    items: [
      { name: "Mr. Piyush Mishra (IES)", batch: "LNCT EX 2007", position: "Sr. Section Engineer (Indian Railways) Raipur", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image010.jpg" },
      { name: "Ms. Shruchi Shukla (RI)", batch: "LNCT IT Batch 2014", position: "Revenue Officer", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image011.jpg" },
      { name: "Mr. Manish Rajput (IES)", batch: "LNCT ME 2018 Batch", position: "Indian Railways", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image012.jpg" },
      { name: "Mr. Piyush Pratap Singh (IES)", batch: "LNCT ME 2016 Batch", position: "Indian Railways", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image013.jpg" },
      { name: "Mr. Anis Rahman (IES)", batch: "2001 Batch EC Alumnus", position: "Director, Ministry of Communication (Govt. of India)", img: "https://lnct.ac.in/wp-content/uploads/2025/03/Anis-Rehman-Sir1.jpeg" },
      { name: "Mr. Avadh Kishor Pawar (IRS)", batch: "LNCT Civil Engg. 2009 Batch", position: "Dy. Director Enforcement Directorate, Delhi", img: "https://lnct.ac.in/wp-content/uploads/2025/03/Mr.-Awadh-Kishor-Pawar.jpeg" },
      { name: "Mr. Karan Singh Sahi (IES)", batch: "LNCT CSE 2018 Batch", position: "Asst. Commissioner, Ministry of Water Resources, Govt. of India", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image003.jpg" },
      { name: "Mr. Himanshu Pandey (IES)", batch: "CE GIANTICS, Batch 2016", position: "ESE, Tezpur (Assam)", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image004.jpg" },
      { name: "Ms. Srushti Jayant Deshmukh (IAS)", batch: "LNCT, Chemical Engineering Batch-2018", position: "IAS Officer", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image005.jpg" },
      { name: "Ms. Ayushi Jain, CSE - (IAS)", batch: "LNCT Batch 2014", position: "SDO, Narsinghpur, Assam", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image006.jpg" },
      { name: "Mr. Ankit Jaiswal - (IPS)", batch: "CSE, LNCT, Batch 2014", position: "Additional SP - Zone-1, Bhopal", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image007.jpg" },
      { name: "Ms. Pratibha Sharma, DSP Bhopal", batch: "LNCT - Batch 2016", position: "DSP – Bhopal Central Zone", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image008.jpg" },
    ],
  },
  {
    title: "NRI Alumni",
    items: [
      { name: "Mr. Kamlesh Gehani", batch: "LNCT CSE, Batch-1998", position: "Sr. Business Analyst, Devita Inc. USA", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image001-2.jpg" },
      { name: "Mr. Siddhartha Saran", batch: "LNCT CSE, Batch-1998", position: "Director IT, Gap Inc. USA", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image002-1.jpg" },
      { name: "Mr. Sanjay Rajput", batch: "LNCT EX, Batch-1998", position: "Vice President, Citi Group", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image003-2.jpg" },
      { name: "Mr. Faizal Khan", batch: "LNCT EX, Batch-2003", position: "US Army", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image004-1.jpg" },
      { name: "Mr. Kunal Chandana", batch: "LNCTS, EC, Batch-2010", position: "Sr. Technology Assistant, Exelon, Chicago", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image005-2.jpg" },
    ],
  },
  {
    title: "Public Sector Eminent Alumni",
    items: [
      { name: "Sanskar Bawariya", batch: "CE (LNCT&S), Batch-2017", position: "CEO, MPPSC, Indore", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image013-1.jpg" },
      { name: "Mr. Salman Khan", batch: "CE (LNCT), Batch-2013", position: "Asst. Engineer, UP Irrigation Dept.", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image001-1.jpg" },
      { name: "Mr. Kundan Kumar", batch: "CE (LNCT), Batch-2013", position: "Asst. Engineer, NBPDCL-Bihar", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image003-1.jpg" },
      { name: "Mr. Abhishek Shrivastava", batch: "CE (LNCT), Batch-2013", position: "Asst. Engineer, WRE, Rajasthan", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image005-1.jpg" },
      { name: "Mr. Pratik", batch: "CE (LNCT), Batch-2013", position: "Deputy Manager, SFVN Ltd, Patna", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image008-1.jpg" },
      { name: "Mr. Sunil Sharma", batch: "CE (LNCT), Batch-2015", position: "Asst. Engineer, Ministry of Housing, Nagpur", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image009-1.jpg" },
      { name: "Ms. Pooja Verma", batch: "CE (LNCT&S), Batch-2017", position: "Asst. Engineer, MPWRD, NVDA", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image011-1.jpg" },
    ],
  },
  {
    title: "Indian Army / Navy",
    items: [
      { name: "Major Kanishka Sakwar", batch: "Civil, Batch-2016, LNCT", position: "Pilot (Indian Army)", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image002-4.jpg" },
      { name: "Mr. Manish Rajput", batch: "LNCT EX 2013 Batch", position: "Lieutenant Indian Navy", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image004-4.jpg" },
      { name: "Mr. Mayank S Pandey", batch: "LNCT ME 2016 Batch", position: "Captain Indian Army", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image006-1.jpg" },
      { name: "Mr. Rahul Pareek", batch: "LNCTE ME 2017 Batch", position: "Lieutenant Indian Navy", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image008-2.jpg" },
      { name: "Mr. Saksham Pandey", batch: "LNCTE ME 2016 Batch", position: "Lieutenant Indian Army", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image010-1.jpg" },
    ],
  },
  {
    title: "NIT Professors Eminent Alumni",
    items: [
      { name: "Dr. Manish Pandey", batch: "LNCT CSE 2001 Batch", position: "MANIT Bhopal", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image002-5.jpg" },
      { name: "Dr. Praveen Kaushik", batch: "LNCT CSE 2001 Batch", position: "MANIT Bhopal", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image003-5.jpg" },
      { name: "Prof. Akhilesh Soni", batch: "LNCT ME 2003 Batch", position: "MANIT Bhopal", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image004-5.jpg" },
      { name: "Dr. Ankit Jain", batch: "LNCT CSE 2009 Batch", position: "NIT Kurukshetra", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image001-5.jpg" },
    ],
  },
  {
    title: "Corporate Sector / NRI Alumni",
    items: [
      { name: "Mr. Shubhendra Upadhyay", batch: "LNCT EX, Batch-2015", position: "CEO, Contriviral Group of Hotels", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image003-3.jpg" },
      { name: "Mr. Anant Pal Singh Malik", batch: "LNCT IT, Batch-2016", position: "Senior Project Engineer Blackstone, Gurugram", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image004-2.jpg" },
      { name: "Ms Khushboo Wali", batch: "LNCT IT, Batch-2016", position: "Software Associate, Horibeger, Pune", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image005-3.jpg" },
      { name: "Dr. Nitin Jain", batch: "LNCT EE, Batch-2001", position: "Image Quality Architect, GE Healthcare Bangalore", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image001-3.jpg" },
      { name: "Mr. Kumar Aman", batch: "LNCT CM, Batch-2019", position: "Executive Production & Research Coordinator, Gujarat Credo Alumina Pvt. Ltd", img: "https://lnct.ac.in/wp-content/uploads/2023/09/image002-2.jpg" },
    ],
  },
];

const EminentAlumni = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Nav />
      <Home1
        heading={"Eminent Alumni - LNCT Bhopal | Central India's No. 1 Engineering Institute - Bhopal"}
        description={"Discover the success stories of our distinguished alumni who have made significant contributions across various sectors."}
        image={"https://lnct.ac.in/wp-content/uploads/2021/04/Student-Contect-1-300x212.png"}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-12 sm:space-y-16">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Eminent Alumni of LNCT Group
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Our alumni are leading across civil services, defense, public sector,
            research, and corporates—shaping national and global impact.
          </p>
        </div>

        {alumniGroups.map((group, gi) => (
          <section key={gi} className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 px-4">{group.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {group.items.map((alum, ai) => (
                <div key={ai} className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center">
                  <div className="relative mb-4 w-full flex justify-center">
                    <img
                      src={alum.img || "https://via.placeholder.com/150"}
                      alt={alum.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500 object-cover"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <h3 className="text-base sm:text-lg font-semibold text-blue-900 line-clamp-2">{alum.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">{alum.batch}</p>
                    <p className="text-xs sm:text-sm text-gray-500 italic line-clamp-2">{alum.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="/files/Alumni-News-Updates.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            📄 View Alumni News & Updates
          </a>
        </div>
      </main>
      <LnctFooter />
    </>
  );
};

export default EminentAlumni;
