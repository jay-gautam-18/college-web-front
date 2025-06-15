import React, { useEffect, useState } from 'react';
import LnctFooter from '../../Components/LnctFooter';
import Home1 from '../../Components/HomeComponets/Home1';
import Nav from '../../Components/Nav';
import Loader from '../../Components/Loader';

const CollegeLnct = () => {
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
    <div className="px-4 md:px-8 py-8 space-y-12">

 <Nav/>
      {/* Header */}
       <Home1
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-College.jpg"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    heading={"LNCT Bhopal | Central India's No. 1 Engineering Institute - Bhopal"}
    />

      {/* Center Heading */}
      <section>
        <h2 className="text-2xl font-serif font-bold text-center mb-2">
          LNCT College | 32+ Years of Academic Excellence and Discipline.
        </h2>
        <hr className="border-gray-300 mb-4" />
      </section>

      {/* Engineering Info */}
      <section className="border border-gray-300 rounded-lg p-4 space-y-6">
        <article>
          <h3 className="text-xl font-semibold mb-2">Engineering</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li><strong>1st Self‑Financed Institute of M.P.</strong> started in 1993‑94. Branches include B.E. – CSE, IT, EC, EX, EE, ME, EI, Chemical & Civil; M‑Tech – CSE, IT, Thermal, Power Elex, Control, CTM and VLSI.</li>
            <li><strong>NBA Accredited</strong> by AICTE New Delhi.</li>
            <li><strong>ISO : 9001‑2000 certified</strong>.</li>
            <li><strong>AICTE funded IIPC & EDC</strong>.</li>
            <li><strong>Rated ‘A’ Category</strong> by the High Court fee committee.</li>
          </ul>
        </article>

        <article className="border-t border-b py-4">
          <h3 className="text-xl font-semibold mb-2">Computer Application</h3>
          <p className="text-gray-800">
            Master of Computer Application (MCA) is a 2-year postgraduate degree. LNCT provides high job opportunities, and MCA graduates work in top IT companies such as Infosys, TCS, IBM, and more. Freshers can expect salaries starting from 3 LPA.
          </p>
        </article>

        <article>
          <h3 className="text-xl font-semibold mb-2">NIRF</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li><a href="https://lnct.ac.in/wp-content/uploads/2025/02/LNCT_Overall.pdf"><strong>Click here to view NIRF (LNCT_Overall)</strong></a></li>
            <li><a href="https://lnct.ac.in/wp-content/uploads/2025/02/LNCT_MBA_Overall.pdf"><strong>Click here to view NIRF (LNCT_MBA)</strong></a></li>
            <li><a href="https://lnct.ac.in/wp-content/uploads/2025/02/LNCT_Innovation.pdf"><strong>Click here to view NIRF (LNCT_Innovation)</strong></a></li>
            <li><a href="https://lnct.ac.in/wp-content/uploads/2025/02/LNCT_Engg.pdf"><strong>Click here to view NIRF (LNCT_Engg)</strong></a></li>
          </ul>
        </article>
      </section>

      {/* Management Courses Table */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Courses Offered | Management</h2>
        <div className="overflow-x-auto">
          <div className="min-w-[600px] flex border text-sm">
            <ul className="w-1/5 bg-gray-100 border-r">
              {['Eligibility Criteria', 'Seats', 'Duration', 'College Name', 'Streams'].map((item, i) => (
                <li key={i} className="border-b p-2 font-semibold">{item}</li>
              ))}
            </ul>
            <ul className="w-4/5">
              <li className="border-b p-2">
                A Graduate with at least 50% marks (45% for SC/ST/OBC of MP) in any UGC/AICTE approved course. 3-year Bachelor's after 10+2.
              </li>
              <li className="border-b p-2">MBA – 360 | MBA (FM) – 00</li>
              <li className="border-b p-2">2 Years</li>
              <li className="border-b p-2">LNCT-MBA</li>
              <li className="p-2">Marketing, HR, Finance, Retail & Banking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MCA Courses Table */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Courses Offered | Computer Application</h2>
        <div className="overflow-x-auto">
          <div className="min-w-[600px] flex border text-sm">
            <ul className="w-1/5 bg-gray-100 border-r">
              {['Eligibility Criteria', 'Seats', 'Duration', 'College Name', 'Director'].map((item, i) => (
                <li key={i} className="border-b p-2 font-semibold">{item}</li>
              ))}
            </ul>
            <ul className="w-4/5">
              <li className="border-b p-2">
                Graduate with Maths in 12th or graduation. 50% (Gen) or 45% (SC/ST/OBC).
              </li>
              <li className="border-b p-2">300</li>
              <li className="border-b p-2">2 Years</li>
              <li className="border-b p-2">LNCT-MCA</li>
              <li className="p-2">Dr. Sanjay Bajpai</li>
            </ul>
          </div>
        </div>
      </section>

      <LnctFooter />
    </div>
  );
};

export default CollegeLnct;
