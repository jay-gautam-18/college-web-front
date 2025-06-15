import  { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Home1 from '../../Components/HomeComponets/Home1'
import LnctFooter from '../../Components/LnctFooter'
import Loader from '../../Components/Loader'

const LNUniverse = () => {
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
        heading={"Join us on 14th & 15th April 2023 at LNCT GROUP for Central India's Largest Environmental, Cultural, Social, Science and Technology Festival!"}
        description={""}
        image={"https://lnct.ac.in/wp-content/uploads/2023/03/SRISHTI-2K23.jpg"}
        
        />
    <div className="min-h-screen bg-gray-800 text-white font-sans">
      {/* Header Section */}
      <header className="text-center py-8">
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-6xl font-bold text-orange-500">LN UNIVERSE</h1>
        </div>
        <h2 className="text-3xl font-semibold mb-4">LNUNIVERSE 2025 - A TECHNO CULTURAL FEST</h2>
        <p className="text-sm max-w-2xl mx-auto text-gray-300">
          LNUniverse 2025 is gearing up to be the most vibrant and exhilarating event of the year, set to take place from the 17th to the 26th of April. 
          This techno-cultural extravaganza promises an array of activities, competitions, and performances that will leave attendees spellbound. 
          Held at LNCT University Campus, this fest is a celebration of talent, creativity, and innovation.
        </p>
      </header>

      {/* April Event Section */}
      <section className="py-8 px-4">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          <div className="md:w-1/3">
            <h3 className="text-4xl font-bold text-orange-500 mb-4">17-26 April</h3>
            <h4 className="text-2xl font-semibold mb-2">LNUNIVERSE 2025</h4>
            <p className="text-sm text-gray-300">
              LNUniverse 2025 is shaping up to be the highlight of the year, bursting with energy and excitement!
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="bg-pink-600 p-4 rounded-lg shadow-lg">
              <h5 className="text-xl font-bold text-center">SINGMAC 22ND</h5>
              <p className="text-xs text-center mt-2">Organizing Department: LNCT University Bhopal</p>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
              <h5 className="text-xl font-bold text-center text-orange-500">DRAMMA 21ST</h5>
              <p className="text-sm text-center text-gray-300">Theme: Retro Style (Golden Age of Cinema)</p>
              <p className="text-xs text-center mt-2">Organizing Department: L.N. Paramedical College</p>
            </div>
          </div>
        </div>
      </section>

      {/* May Event Section */}
      <section className="py-8 px-4">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          <div className="md:w-1/3">
            <h3 className="text-4xl font-bold text-orange-500 mb-4">3, 6 & 10 May 25</h3>
            <h4 className="text-2xl font-semibold mb-2">LNUNIVERSE 2025</h4>
            <p className="text-sm text-gray-300">
              LNUniverse 2025 is shaping up to be the highlight of the year, bursting with energy and excitement once again in LNCT Raisen Road Campus!
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="bg-blue-600 p-4 rounded-lg shadow-lg">
              <h5 className="text-xl font-bold text-center">CORE STUDENT OF THE YEAR MEGA 2025</h5>
              <p className="text-xs text-center mt-2">Organizing Department: LNCT University</p>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
              <h5 className="text-xl font-bold text-center text-orange-500">RANG AADHAR</h5>
              <p className="text-sm text-center text-gray-300">Street Art and Drama Meet</p>
              <p className="text-xs text-center mt-2">Organizing Department: LNCT</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <LnctFooter/>
    </>
  );
};

export default LNUniverse;