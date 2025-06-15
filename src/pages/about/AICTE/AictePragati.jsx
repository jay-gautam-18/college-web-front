import React, { useEffect, useState } from 'react';
import Nav from '../../../Components/Nav';
import Home1 from '../../../Components/HomeComponets/Home1';
import LnctFooter from '../../../Components/LnctFooter';
import Loader from '../../../Components/Loader';

const AictePragati = () => {
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
     heading={"AICTE Pragati | Central India's No. 1 Engineering Institute - Bhopal"}
    description={"LNCT Group of Colleges is committed to set new benchmarks in academics and technological innovation!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/Student-Contect-1.png"}
    />
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">AICTE Pragati</h1>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>
          <a
            href="https://lnct.ac.in/wp-content/uploads/2022/08/Scholarship250722050732.pdf"
            className="text-blue-600 hover:underline"
          >
            Notification – AICTE Pragati Scholarship Scheme For Girls Student
          </a>
        </li>
        <li>
          <a
            href="https://lnct.ac.in/wp-content/uploads/2019/05/aicteapproval1.pdf"
            className="text-blue-600 hover:underline"
          >
            Click to see AICTE Approval Notice
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        AICTE Pragati and Saksham Scholarship Scheme
      </h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>
          <a
            href="https://lnct.ac.in/wp-content/uploads/2022/08/Scholarship250722050732.pdf"
            className="text-blue-600 hover:underline"
            >
            Notification – AICTE Pragati Scholarship Scheme For Girls Student
          </a>
        </li>
        <li>
          <a
            href="https://lnct.ac.in/wp-content/uploads/2019/05/aictePSNote.pdf"
            className="text-blue-600 hover:underline"
            >
            Notification
          </a>
        </li>
        <li>
          <a
            href="https://lnct.ac.in/wp-content/uploads/2019/05/aictePSInstr.pdf"
            className="text-blue-600 hover:underline"
            >
            Instructions
          </a>
        </li>
        <li>
          <a
            href="https://lnct.ac.in/wp-content/uploads/2019/05/aictePSCombo.pdf"
            className="text-blue-600 hover:underline"
            >
            Combine Pragati & Saksham Scholarship
          </a>
        </li>
      </ul>

      <p className="text-lg">
        For Applying Online:-
        <a
          href="https://www.aicte-pragati-saksham-gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 font-bold hover:underline ml-2"
          >
          https://www.aicte-pragati-saksham-gov.in/
        </a>
      </p>
    </div>
    <LnctFooter/>
</>
  );
};

export default AictePragati;
