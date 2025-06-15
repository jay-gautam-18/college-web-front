import React, { useEffect, useState } from 'react'
import Home1 from '../../Components/HomeComponets/Home1'
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Loader from '../../Components/Loader';

const Acreditation = () => {
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
    heading={"Accredited By NBA (National Board of Accreditation)"}
    description={"Learn, achieve and excel with LNCT Group of collegesLearn, achieve and excel with LNCT Group of colleges"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-Group-of-colleges-25.jpg"}
    />
    <div className='flex w-full justify-center items-center flex-col gap-4 p-4'>
        <img className='h-[80vh]' src="https://lnct.ac.in/wp-content/uploads/2021/05/NBA-ACCREDITATION-2020-2023-page-001-1118x1536.jpg" alt="" />
        <img className='h-[80vh]' src="https://lnct.ac.in/wp-content/uploads/2021/05/NBA-ACCREDITATION-2020-2023-page-002-1118x1536.jpg" alt="" />
    </div>
    <LnctFooter/>
    </>
  )
}

export default Acreditation