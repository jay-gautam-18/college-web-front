import React from 'react'
import Home3 from './Home3'
import { FaAws } from "react-icons/fa";
import Ourservices from '../Ourservices';
import OurTiesUps from './OurTiesUps';
const Home2 = () => {

  return (
    <>
    <OurTiesUps/>
    <Ourservices/>
     <div className="  py-10 px-2">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Left Heading */}
        <div className="min-w-[150px]">
        <p className="text-2xl tracking-[2px] font-[350]">WHAT WE OFFER</p>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-black hidden md:block" />

        {/* Right Grid of Services */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
        
        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
            <div>
            <h1 className='crore text-6xl'>1.12cr.</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-2xl">Highest Package</h3>
            </div>
        </div>

        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
            <div>
            <h1 className='crore text-6xl'>1600+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Offers For 2024 Batch</h3>
            </div>
        </div>

        <div className="flex items-start gap-4 pr-4 ">
             <div>
            <h1 className='crore text-6xl'>9877+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Offers For 2024 Batch</h3>
            </div>
        </div>

        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
             <div>
            <h1 className='crore text-6xl'>208+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Offers 10 Lakhs & Above</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
             <div>
            <h1 className='crore text-6xl'>171</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">NIRF All India Rank</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 pr-4 ">
             <div>
            <h1 className='crore text-6xl'>500+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Top Recruiters</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
             <div>
            <h1 className='crore text-6xl'>191+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl ">Patent Publications</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 ">
             <div>
            <h1 className='crore text-6xl'>211+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Ph.D Faculties</h3>
            </div>
        </div>
        </div>
    </div>
    </div>
    <hr />
    </>
  )
}

export default Home2