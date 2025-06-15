import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';

const Mous = () => {
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
      const mous = [
    {
      text: 'MoU between AICTE and Fourth Ambit.',
      url: 'https://fourthambit.com',
    },
    {
      text: 'MoU between AICTE and eMBAarkers.',
      url: 'https://embarkers.in',
    },
    {
      text: 'MoU between AICTE and Scholarsmerit.',
      url: 'http://www.scholarsmerit.com/',
    },
    {
      text: 'MoU between AICTE and Studenting Era.',
      url: 'www.studentingera.com',
    },
    {
      text: 'MoU between AICTE and Campus Quotient.',
      url: 'http://campusquotient.org',
    },
  ];
  return (
    <>
    <Nav/>
    <Home1
    heading={"AICTE MoUs | Central India's No. 1 Engineering Institute - Bhopal"}
    description={"LNCT Group of Colleges is committed to set new benchmarks in academics and technological innovation!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/Student-Contect-1.png"}
    />
      <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        AICTE MoUs | Central India's No. 1 Engineering Institute - Bhopal
      </h1>
      <p className="mb-4 text-justify">
        AICTE in its 49th meeting of the Council held on 14th March, 2017 approved a package of measures to be implemented by all technical institutions approved by AICTE to improve the standards of technical education and to provide competent technical manpower for the nation.
      </p>
      <p className="mb-4 text-justify">
        AICTE is implementing various quality initiatives and in this endeavor has already signed Memorandum of Understanding (MoU) with organizations for the benefit of institutions, students, and faculty at large. Recently, on 17th October 2017,
      </p>
      <p className="mb-4">
        AICTE has signed MoUs with the following organizations:
      </p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        {mous.map((item, index) => (
          <li key={index}>
            {`(${index + 1}) ${item.text} Visit `}
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {item.url}
            </a>
          </li>
        ))}
        <li>
          The MoUs signed between AICTE and the aforesaid organizations can be viewed on the AICTE website{' '}
          <a href="https://www.aicte-india.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            www.aicte-india.org
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Click Here to see The Letter from AICTE
          </a>
        </li>
      </ul>
    </div>
    <LnctFooter/>
    </>
)
}

export default Mous