import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';

const Auditorium = () => {
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
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/Auditorium-LNCT-Group-of-Colleges1-768x508.jpg"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    heading={"Auditorium | LNCT Group of Colleges"}
    />
     <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-4">Auditorium</h1>
      <div className="flex justify-center items-center mb-8">
        <span className="border-t border-gray-400 w-1/4"></span>
        <span className="mx-2 text-gray-600">LNCT Group of Colleges</span>
        <span className="border-t border-gray-400 w-1/4"></span>
      </div>

      <h2 className="text-2xl font-semibold mb-2">State-of-the-Art Auditoriums</h2>
      <p className="mb-4">
        Welcome to our premier auditorium, a dynamic space designed for collaboration among students, faculty, and corporate leaders.
        With a seating capacity of <strong>1,800</strong>, this centrally air-conditioned venue stands as the crown jewel of our campus.
      </p>

      <h3 className="text-xl font-semibold mb-2">Features:</h3>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>
          <strong>Modern Facilities:</strong> Equipped with cutting-edge multimedia projectors and state-of-the-art sound systems, 
          our auditorium is perfect for a wide range of events, from lectures to large-scale presentations.
        </li>
        <li>
          <strong>Spacious Design:</strong> Enjoy large lobbies and verandahs, ideal for networking and hosting international 
          conferences and exhibitions.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Seminar Halls</h2>
      <p className="mb-6">
        For more intimate gatherings, our seminar halls offer the perfect setting. These spaces are outfitted with advanced 
        presentation tools, making them ideal for smaller scale events, workshops, and discussions.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Versatile Event Spaces</h2>
      <p className="mb-4">
        Whether you’re organizing a major conference or a focused seminar, our facilities provide the ideal backdrop for 
        engaging dialogue and meaningful interactions. The blend of comfort and technology ensures an exceptional experience 
        for all attendees.
      </p>
      <p>
        Explore our venues and discover the perfect space for your next event! Let us help you create unforgettable moments 
        and foster collaboration in a vibrant environment.
      </p>
    </div>
    <LnctFooter/>
    </>
    
  )
}

export default Auditorium