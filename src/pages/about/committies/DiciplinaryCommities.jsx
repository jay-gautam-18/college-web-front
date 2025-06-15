import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';

const DiciplinaryCommities = () => {
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
     const committees = [
    {
      title: "Anti Harassment Women Cell/Committee",
      img: "https://lnct.ac.in/wp-content/uploads/2021/04/Anti-Harassment-Women-Cell.jpg"
    },
    {
      title: "Library Committee",
      img: "https://lnct.ac.in/wp-content/uploads/2021/04/Library-Committee-1.jpg"
    },
    {
      title: "Change of Proctorial Board Chairman w.e.f. 22nd Feb 2018",
      img: "https://lnct.ac.in/wp-content/uploads/2021/04/Proctorial-Board-Chairman.jpg"
    },
    {
      title: "Proctorial Board/Committee",
      img: "https://lnct.ac.in/wp-content/uploads/2021/04/Proctorial-Board-Committee.jpg"
    },
    {
      title: "Quality Improvement Committee (QIC)",
      img: "https://lnct.ac.in/wp-content/uploads/2021/04/Quality-Improvement-Committee.jpg"
    },
    {
      title: "Committee for Scheduled Castes (SC) and Scheduled Tribes (ST)",
      img: "https://lnct.ac.in/wp-content/uploads/2021/04/Committee-for-Scheduled-Castes.jpg"
    },
  ];
  return (
    <>
    <Nav/>
    <Home1
    heading={"Disciplinary Committees | LNCT Group of Colleges"}
    description={"We make the way, we inspire! Join us on an exciting journey towards success!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/11/LNCT-Student-15.png"}
    />
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">Disciplinary Committee</h1>
      <p className="mb-4 text-lg">
        A senior professor is in-charge of the cell and supported by a number of faculty members from all the departments catering to all the students of all the courses. The cell basically works in the following model for student disciplinary functions. The faculty members attached the cell identify the students who are off-track and work continuously to place them in a better state with full coordination from their parents/guardians.
      </p>
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-xl font-bold text-center mb-4">Disciplinary Approaches:</h1>
        <img src="https://lnct.ac.in/wp-content/uploads/2021/04/disipinary-committee-1.jpg" alt="Healthcare staff" className="w-[30vw] h-[80vh] rounded shadow" />
      </div>
    </div>
    <div className="max-w-6xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-8">Other Functional Committees | LNCT Group of Colleges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {committees.map((committee, index) => (
          <div key={index} className="space-y-2">
            <h2 className="text-lg font-semibold">{committee.title}</h2>
            <img 
              src={committee.img} 
              alt={committee.title} 
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
    <LnctFooter/>
    </>

  )
}

export default DiciplinaryCommities