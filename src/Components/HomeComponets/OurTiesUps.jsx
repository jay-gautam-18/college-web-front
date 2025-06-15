import React from 'react'
import { SiCisco, SiGodaddy, SiVmware } from 'react-icons/si';


const OurTiesUps = () => {
  return (
    <div className=" py-8 px-4 ">
        <div className="max-w-screen-xl mx-auto flex md:flex-row flex-col items-center  gap-8">
            {/* Left Label */}
            <div className="flex items-center md:border-none border-b-1 justify-center border-black gap-4 min-w-fit">
            <span className="text-2xl mr-4 tracking-[1px] font-[350] mb-5">OUR Tie-Ups</span>
            <div className="w-px md:block hidden h-[40vh] bg-black" />
            </div>
            {/* Logos */}
            <div className="flex flex-wrap  justify-center gap-8 ">
            {/* Repeat this block for each client logo */}
            <div className="flex flex-col items-center space-x-4">
                <div className='flex items-center gap-8'>
                        {/* AWS Text */}
                <h1 className="text-[36px] font-bold text-[#232F3E]">aws</h1>

                {/* Academy Text */}
                <span className="text-[28px] text-[#232F3E]">academy</span>
                </div>
                {/* Arrow/Smile Icon */}
                <svg width="120" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M5 10 C35 30, 115 30, 145 10 Q148 8 150 15 Q148 18 145 20 C148 15 146 7 140 5 C115 25, 35 25, 5 5"
                    fill="#FF9900"
                    />
                </svg>
            </div>
            <div className="flex items-center space-x-4">
      {/* Cisco Bridge Icon */}
            <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
                {/* Bridge lines */}
                <g fill="#1D1D1D">
                <rect x="5" y="20" width="4" height="20" rx="2" />
                <rect x="15" y="10" width="4" height="30" rx="2" />
                <rect x="25" y="0" width="4" height="40" rx="2" />
                <rect x="35" y="10" width="4" height="30" rx="2" />
                <rect x="45" y="20" width="4" height="20" rx="2" />
                <rect x="55" y="10" width="4" height="30" rx="2" />
                <rect x="65" y="0" width="4" height="40" rx="2" />
                <rect x="75" y="10" width="4" height="30" rx="2" />
                <rect x="85" y="20" width="4" height="20" rx="2" />
                </g>
            </svg>

      {/* Cisco + Networking Academy Text */}
                <div className="flex flex-col leading-tight">
                    <span className="text-[28px] font-bold text-[#1D1D1D]">cisco</span>
                    <span className="text-[20px] text-[#0066B3] -mt-1">Networking</span>
                    <span className="text-[20px] text-[#0066B3] -mt-1">Academy</span>
                </div>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded">
      {/* VMware Logo Block */}
      <div className="bg-black px-4 py-1 rounded-md flex items-center">
        <span className="text-white font-medium text-[20px] tracking-tight">
          <span className="font-[600]">vm</span>
          <span className="font-[300]">ware</span>
          <sup className="text-xs align-top ml-0.5">®</sup>
        </span>
      </div>

      {/* IT Academy Text */}
      <div className="text-gray-700 text-[20px] font-light tracking-wider">
        IT ACADEMY
      </div>
            </div>
            <div className="flex items-center space-x-3">
      {/* Microchip Symbol */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-10 h-10"
      >
        <circle cx="100" cy="100" r="100" fill="#e32626" />
        <path
          d="M130 50l-15 25c-10-20-25-15-30-5l-15 25 20 35c10 15 30 10 35-5l15-25 10 5c-5-25-20-45-45-60l5 10z"
          fill="#fff"
        />
      </svg>

      {/* Text Part */}
      <div className="flex flex-col leading-none">
        <span className="font-black text-lg text-black tracking-tight uppercase">
          Microchip
        </span>
        <span className="italic text-gray-700 text-sm -mt-1">
          Academic Program
        </span>
      </div>
            </div>
            <div className="w-24">
      <svg
        viewBox="0 0 200 230"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Hexagon Background */}
        <path
          d="M100 0 L190 50 L190 150 L100 200 L10 150 L10 50 Z"
          fill="#005b76"
          stroke="#c00"
          strokeWidth="6"
        />

        {/* Red Center Banner */}
        <rect x="10" y="70" width="180" height="60" fill="#c00" />

        {/* Bottom Circle */}
        <circle cx="100" cy="170" r="15" fill="#c00" />
        <text
          x="100"
          y="175"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          ./ 
        </text>

        {/* Text: RED HAT ACADEMY */}
        <text
          x="100"
          y="100"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          RED HAT
        </text>
        <text
          x="100"
          y="115"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          ACADEMY
        </text>
      </svg>
            </div>
            <div className="w-48 h-16 p-2 bg-amber-700">
      <svg
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background (optional, removed per your note) */}
        {/* <rect width="300" height="100" fill="#f64a1c" /> */}

        {/* Icon */}
        <g transform="translate(20, 35)">
          <rect x="0" y="0" width="10" height="10" transform="rotate(45)" fill="white" />
          <rect x="15" y="0" width="10" height="10" transform="rotate(45)" fill="white" />
        </g>

        {/* Text: paloalto */}
        <text
          x="70"
          y="50"
          fill="white"
          fontSize="28"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          paloalto
        </text>

        {/* Text: NETWORKS */}
        <text
          x="200"
          y="65"
          fill="white"
          fontSize="10"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          letterSpacing="2"
        >
          NETWORKS
        </text>
      </svg>
            </div>
            <div className="flex items-center space-x-2">
      {/* SVG Logo */}
     <SiGodaddy className='text-5xl'/>

      {/* Text */}
      <span className="text-black font-semibold text-3xl">
        Go<span className="font-bold">Daddy</span>
      </span>
      <span className="text-black text-lg">Academy</span>
            </div>
            <div className="flex flex-col items-center text-white p-4 bg-[#00539b] w-fit rounded">
      {/* Logo icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-10 h-10 mb-2"
      >
        {/* Simulated 3D cube design */}
        <polygon points="50,10 80,25 50,40 20,25" fill="#00539b" />
        <polygon points="20,25 20,55 50,70 50,40" fill="#0071bc" />
        <polygon points="50,40 50,70 80,55 80,25" fill="#9fc9eb" />
      </svg>

      {/* Text */}
      <div className="text-center">
        <div className="text-xl font-light">blue<span className="font-semibold">prism</span><sup>®</sup></div>
        <div className="text-lg font-medium mt-1">University</div>
        <div className="text-xs font-light mt-0.5">Academia Program</div>
        {/* Vertical line (orange) */}
        <div className="absolute h-8 w-1 bg-orange-500 left-0 top-10 ml-2" />
      </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default OurTiesUps