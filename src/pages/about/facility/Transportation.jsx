import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';

const Transportation = () => {
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
    heading={"Transportation | LNCT Group of Colleges"}
    description={"LNCT Group of Colleges is committed to set new benchmarks in academics and technological innovation!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/Transportation-LNCT-Group-of-Colleges-5-768x508.jpeg"}
    />
      <div className="max-w-5xl mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Transportation | LNCT Group of Colleges
      </h1>

      <p>
        A full fledged Transport department functions in the college with buses to provide transport facility to students and staff from various places. This service is offered ensuring a hassle-free and safe transportation.
      </p>
      <p>
        The College runs 85 buses for providing transport facility to students from various places in the city. The number of buses will be increased corresponding to the increase in the intake of students.
      </p>
      <p>
        The students intending to avail the transport facility need to inform the transport officer at the time of admission.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src="/path/to/transport1.jpg" alt="Transportation 1" className="rounded shadow" />
        <img src="/path/to/transport2.jpg" alt="Transportation 2" className="rounded shadow" />
        <img src="/path/to/transport3.jpg" alt="Transportation 3" className="rounded shadow" />
        <img src="/path/to/transport4.jpg" alt="Transportation 4" className="rounded shadow" />
      </div>

      <ul className="list-disc pl-5 space-y-1">
        <li>Biggest fleet of buses operating from all corners of Bhopal.</li>
        <li>Well coordinated punctual and regular service available throughout the year.</li>
        <li>Bus Facility for Attending off Campus Drives.</li>
        <li>Bus facility for Industrial visits.</li>
        <li>Bus facility to take students to examination centers.</li>
        <li>Full provision of back up service in place to avoid any breakdown.</li>
      </ul>

      <div className="mt-6">
        <img
          src="/path/to/transport-main.jpg"
          alt="Main Transportation Bus"
          className="rounded shadow mx-auto"
        />
      </div>
    </div>
    <LnctFooter/>
    </>
  )
}

export default Transportation