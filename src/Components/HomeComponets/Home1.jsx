import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Home2 from "./Home2"
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const Home1 = ({image,heading,description}) => {
  const navigate = useNavigate()
  const topLine = useRef(null);
  const bottomLine = useRef(null);
  const midLine = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal line animation
      gsap.from([topLine.current, bottomLine.current], {
        scrollTrigger: {
          trigger: topLine.current,
          start: 'top 90%',
        },
        width: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Vertical line animation
      gsap.from(midLine.current, {
        scrollTrigger: {
          trigger: midLine.current,
          start: 'top 80%',
        },
        height: 0,
        duration: 1,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-auto">

        {/* Top Horizontal Line */}
        <div className="w-full h-[5%] flex justify-center items-center">
          <div ref={topLine} className="w-[95%] h-[1px] bg-black mt-10" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-between px-8 py-16 min-h-[60vh] w-full gap-10">

          {/* Left Text */}
          <div className="md:w-1/2 space-y-6 mt-5">
            <h1 className="text-5xl md:text-7xl tracking-[1px] font-light leading-tighter">
              {heading}
            </h1>
            <p className="text-3xl text-gray-700">
              {description}
            </p>
            <button onClick={()=>navigate('/admission')} className="px-5 py-2 bg-black text-white rounded-lg text-xl border transition hover:text-black hover:bg-transparent font-[500]">
              Admission Open
            </button>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:flex justify-center items-center">
            <div ref={midLine} className="w-[1px] h-full bg-black" />
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={image}
                alt="Team Working"
                className="md:h-[32vw]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="w-full h-[5%] flex justify-center items-center">
          <div ref={bottomLine} className="w-[95%] h-[1px] bg-black mb-16" />
        </div>
      </div>
          </>
  );
};

export default Home1;