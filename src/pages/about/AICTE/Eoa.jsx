import React, { useEffect, useState }  from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';

const Eoa = () => {
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
    { text: 'Lnct', href: 'https://lnct.ac.in/wp-content/uploads/2024/09/EOA_LNCT-2024-25.pdf' },
    { text: 'Lnct E', href: 'https://lnct.ac.in/wp-content/uploads/2024/09/EOA-LNCTE-2024-25.pdf' },
    { text: 'Lnct S', href: 'https://lnct.ac.in/wp-content/uploads/2024/09/EOA-LNCTS-2024-25.pdf' },
    { text: 'Lnct MCA', href: 'https://lnct.ac.in/wp-content/uploads/2024/09/EOA-MCA-2024-25.pdf' },
    { text: 'Lnct MBA', href: 'https://lnct.ac.in/wp-content/uploads/2024/09/EOA_MBA-2024-25.pdf' },
  ];
  return (
    <>
    <Nav/>
    <Home1
    heading={"EOA | LNCT Group of Colleges"}
    description={"LNCT Group of Colleges is committed to set new benchmarks in academics and technological innovation!"}
    image={"https://lncte.in/wp-content/uploads/2022/03/LNCT-Group-of-Colleges-25-768x512-1.jpeg"}
    />
    <ul className="list-disc pl-5 mb-6 space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-blue-600 hover:underline">{link.text}</a>
          </li>
        ))}
      </ul>
    <LnctFooter/>
    </>
  )
}

export default Eoa