import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Nav from '../../../Components/Nav';
import LnctFooter from '../../../Components/LnctFooter';
import Home1 from '../../../Components/HomeComponets/Home1';
import Loader from '../../../Components/Loader';

const Trust = () => {
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
    image={" https://lnct.ac.in/wp-content/uploads/2024/05/%E0%A4%85%E0%A4%82%E0%A4%A4%E0%A4%B0%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%B7%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AF-%E0%A4%9C%E0%A5%88%E0%A4%B5-%E0%A4%B5%E0%A4%BF%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%A4%E0%A4%BE-%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%B8.jpg"}
    heading={"Trust | LNCT Group of Colleges"}
    description={"Learn, achieve and excel with LNCT Group of Colleges!"}
    />
    <section className=" py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
          H.K. KALCHURI EDUCATION TRUST
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto my-4" />
      </div>

      <div className="max-w-3xl mx-auto mt-10 border border-black rounded-md overflow-hidden">
        {/* Managing Trustee */}
        <div className="bg-black text-white font-semibold text-center py-3 border-b border-black">
          Managing Trustee
        </div>
        <div className="grid grid-cols-2 text-left text-lg border-b border-black">
          <div className="px-4 py-3 border-r border-black">
            Shri Jai Narayan Chouksey
          </div>
          <div className="px-4 py-3">
            Chairman and Managing Trustee of LNCT Group
          </div>
        </div>

        {/* Trustees */}
        <div className="bg-black text-white font-semibold text-center py-3 border-b border-black">
          Trustees
        </div>
        <div className="grid grid-cols-2 text-left text-lg border-b border-black">
          <div className="px-4 py-3 border-r border-black">
            Smt. Poonam Chouksey
          </div>
          <div className="px-4 py-3">
            Vice-Chairperson, LNCT Group, Bhopal
          </div>
        </div>
        <div className="grid grid-cols-2 text-left text-lg">
          <div className="px-4 py-3 border-r border-black">
            Dr. Anupam Chouksey
          </div>
          <div className="px-4 py-3">
            Secretary LNCT Group, Bhopal
          </div>
        </div>
      </div>
    </section>
    <LnctFooter/>
    </>
  )
}

export default Trust