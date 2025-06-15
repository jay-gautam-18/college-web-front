import React, { useEffect, useState } from 'react';
import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';
import LnctFooter from '../../Components/LnctFooter';
import Loader from '../../Components/Loader';

const AcademicCalendar = () => {
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
    heading={"Academic Calendar | LNCT Group of Colleges"}
    description={"Excel and succeed in all your endeavours with LNCT Group of Colleges!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/select1.png"}
    />
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Academic Calendar | LNCT Group of Colleges
      </h1>
      <hr className="mb-6" />

      {/* Session 2025-26 */}
      <h2 className="text-2xl font-semibold mb-2">
        Academic Calendar for Session 2025 – 26
      </h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://lnct.ac.in/wp-content/uploads/2025/06/NOTICE-ACADEMIC-CALENDAR-LNCP-B.-PHARM.-VII-SEM-SESSION-2025-26.pdf" className="text-blue-600 hover:underline">NOTICE ACADEMIC CALENDAR LNCP B. PHARM. VII-SEM SESSION 2025-26</a></li>
        <li><a href="https://lnct.ac.in/wp-content/uploads/2025/06/NOTICE-ACADEMIC-CALENDAR-LNCT-LNCTS-LNCTE-B.TECH-VII-SEM-SESSION-2025-26.pdf" className="text-blue-600 hover:underline">NOTICE ACADEMIC CALENDAR LNCT LNCTS LNCTE B.TECH VII-SEM SESSION 2025-26</a></li>
        <li><a href="https://lnct.ac.in/wp-content/uploads/2025/06/ACADEMIC-CALENDAR-LNCP-B.-PHARM.-VII-SEM-SESSION-2025-26-.pdf" className="text-blue-600 hover:underline">ACADEMIC CALENDAR LNCP B. PHARM. VII-SEM SESSION 2025-26</a></li>
        <li><a href="https://lnct.ac.in/wp-content/uploads/2025/06/ACADEMIC-CALENDAR-LNCT-LNCTS-LNCTE-B.TECH-VII-SEM-SESSION-2025-26-.pdf" className="text-blue-600 hover:underline">ACADEMIC CALENDAR LNCT LNCTS LNCTE B.TECH VII-SEM SESSION 2025-26</a></li>
      </ul>

      {/* Session 2024-25 */}
      <h2 className="text-2xl font-semibold mb-2">
        Academic Calendar for Session 2024 – 25
      </h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://lnct.ac.in/wp-content/uploads/2025/03/Academic-Calender-B.-Pharm.-II-IV-Sem-Session-2024-25-51-13-03-25.pdf" className="text-blue-600 hover:underline">Academic Calender B. Pharm. II-IV Sem Session 2024-25</a></li>
        <li><a href="https://lnct.ac.in/wp-content/uploads/2025/03/Academic-Calender-M.-Pharm.-II-Sem-Session-2024-25-51-13-03-25.pdf" className="text-blue-600 hover:underline">Academic Calender M. Pharm. II-Sem Session 2024-25</a></li>
        <li><a href="https://lnct.ac.in/wp-content/uploads/2025/02/Academic-Calendar-B.-Tech-II-Sem-M.-Tech-ME-II-Sem-MCA-II-Sem-Session-24-25.pdf" className="text-blue-600 hover:underline">Academic Calender B. Tech II-Sem, M. Tech ME II-Sem & MCA II-Sem Session 24-25</a></li>
        {/* Add remaining items similarly */}
      </ul>

      {/* Session 2023-24 */}
      <h2 className="text-2xl font-semibold mb-2">
        Academic Calendar for Session 2023 – 24
      </h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="#" className="text-blue-600 hover:underline">REVISED Academic Calendar RGPV B. Tech. II & IV, III B. Pharm II & MCA II Session 2023-24</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Notice for Academic Calendar RGPV B. Tech. VIII Sem. & B. Pharm. VIII Sem</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Academic Calendar RGPV VI, B. Pharm VI, and MCA IV Sem 2023-24</a></li>
        {/* Add remaining items similarly */}
      </ul>
    </div>
    <LnctFooter/>
    </>

  );
};

export default AcademicCalendar;
