import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';

const Antiragging = () => {
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
     const links = [
    { text: 'Notice No. LNCTE 31A Anti Ragging Committee', href: 'https://lnct.ac.in/wp-content/uploads/2024/07/Notice-No.-LNCTE-31A-Anti-Ragging-Committee.pdf' },
    { text: 'Anti-Ragging Committee Session 2024-25', href: 'https://lnct.ac.in/wp-content/uploads/2024/07/Anti-Ragging-Committee-Session-2024-25.pdf' },
    { text: 'LNCT Anti Ragging Committee for the Academic Year 2023-24', href: 'https://lnct.ac.in/wp-content/uploads/2023/08/LNCTE-Anti-Ragging-Committee-for-the-Academic-Year-2023-24.pdf' },
    { text: 'MCA ARC Committee', href: 'https://lnct.ac.in/wp-content/uploads/2022/09/NOTICE-NO.-238.pdf' },
    { text: 'B.Tech ARC Committee', href: 'https://lnct.ac.in/wp-content/uploads/2022/10/296.pdf' },
  ];

  const steps = [
    "Anti ragging committees for LNCT, LNCTS, LNCTP, LNCT MBA, LNCT MCA have been constituted, notified and displayed for year 2018-19, 'ARC 2018-19'",
    "Members are from Teaching, Non teaching and senior students.",
    "The list contains names, designations, departments, mobile numbers and address.",
    "They perform basic function:",
    "• Vigilance of junior students from their home bus stop to college bus stop and back",
    "• Escort newly admitted students from college bus stop to class rooms and labs/workshop",
    "• Escort are present in canteen during lunch break of first year students",
    "• Vigilance in hostel during their stay in hostel",
    "ARC list on flex banner is separately displayed at prominent locations and website",
    "Telephone numbers of college authorities are displayed on Notice board",
    "ARC, 2018 meeting is convened on 30/06/2018 at 2:00 PM with Principal, OSD and Chairman ARC",
    "AICTE guide lines and measures to be taken are informed by Principal",
    "Letters from DSW and RGPV seeking for details is responded bearing No. 361/Date-26/07/2013 photocopy enclosed",
    "Affidavit of senior students are available in office",
    "Undertaking by ARC members is obtained and available",
    "In induction programme of BE students steps adopted to curb ragging by LNCT Group Raisen campus have been informed to newly admitted BE students and their parents",
    "Posters for curbing ragging are displayed in all departments of all colleges",
    "Hostels Rules are displayed and following steps are taken:",
    "• In hostels for hostels inmates following steps are taken",
    "• Attendance is taken at night",
    "• Main gate is closed and locked",
    "• Twenty four hours security guard are on duty and are provided with I-cards",
    "• Items of daily needs and stationary are made available",
    "• Hostel warden and caretakers are available and take round",
    "• Communication means, telephone, medical and sports facilities are provided",
    "• Hostel Rules information"
  ];
  return (
    <>
    <Nav/>
    <Home1
    heading={"Anti Ragging Committee | LNCT Group of Colleges"}
    description={"We make the way, we inspire! Join us on an exciting journey towards success!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/DSC_0354-removebg-preview-min.png"}
    />
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Anti-Ragging Committee | LNCT Group of Colleges</h1>
      <p className="mb-4 text-justify">
        Ragging is a barbarian act in this civilized world and it is a punishable offense. As per the Directives of The Hon'ble Supreme Court of India all higher educational institutions should curb this menace totally as it is prevalent there. The behavioral patterns among the students should be carefully observed to inculcate human values. Ragging humiliates people and the measures taken against ragging must deter its recurrence.
      </p>
      <p className="mb-4 text-justify">
        Since the ensuing academic session is likely to commence shortly, the anti ragging committee of the institute has decided to take up intensive multimedia publicity campaign in order to reinforce anti ragging measures. Prevention is better than cure and so the Anti Ragging Squad of student community is all set to end this inhuman activity.
      </p>
      <p className="mb-6 text-justify">
        Every student and respective parents should sign an undertaking at the time of Registration stating that they will not be involving in any sort of ragging activities. The admission to the college can be cancelled if they are found guilty at any time.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Links</h2>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-blue-600 hover:underline">{link.text}</a>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Steps to Prevent Ragging</h2>
      <ul className="list-disc pl-5 space-y-1">
        {steps.map((step, index) => (
          <li key={index} className="text-justify">{step}</li>
        ))}
      </ul>
      <img 
        src="https://lnct.ac.in/wp-content/uploads/2023/09/Anti-768x432.webp" 
        alt="Anti-ragging"  
        className='h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] w-full object-cover rounded-lg shadow-sm'
      />
    </div>

    <LnctFooter/>
    </>
  )
}

export default Antiragging