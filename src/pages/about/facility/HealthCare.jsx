import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';

const HealthCare = () => {
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
    heading={"Health Care | LNCT Group of Colleges"}
    description={"We inspire innovation and discovery at LNCT Group of Colleges."}
    image={"https://lnct.ac.in/wp-content/uploads/2021/11/LNCT-Student-19.png"}
    />
     <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">Health Care | LNCT Group of Colleges</h1>

      <p className="mb-4">
        The institute provides health care to students, staff and their dependents within campus that includes first aid services
        and swift medical aid in an emergency. The severe cases are referred to L N Medical Bhopal. Medical consultation and
        medicines are provided for basic disorders:
      </p>

      <p className="mb-4">
        The health centre is manned by a medical officer and a healthcare assistant to provide excellent medical care to all the
        students, staff and faculty at no cost. The Medical Officer manages the various aspects of the facility. They provide
        quality health care to everyone, evaluates the quality of services, maintains the overall efficiency of the centre and
        decides the procedures to be followed in case of emergency. Also, vaccinations and yearly check ups are done at this
        facility. In the future we look forward in expanding and bringing in high-tech medical equipments to serve better the
        students of our college.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <img src="/path/to/image1.jpg" alt="Healthcare staff" className="w-full h-auto rounded shadow" />
        <img src="/path/to/image2.jpg" alt="Health centre building" className="w-full h-auto rounded shadow" />
        <img src="/path/to/image3.jpg" alt="Doctor consultation" className="w-full h-auto rounded shadow" />
        <img src="/path/to/image4.jpg" alt="Medical equipment" className="w-full h-auto rounded shadow" />
      </div>
    </div>
    <LnctFooter/>
    </>

  )
}

export default HealthCare