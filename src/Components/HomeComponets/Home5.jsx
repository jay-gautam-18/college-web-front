import React, { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mainContext } from '../../Context/Maincontext';
import BarChart from './BarChart';
gsap.registerPlugin(ScrollTrigger);

const Home5 = () => {
  const topLine = useRef(null);
  const bottomLine = useRef(null);
  const verticalLine = useRef(null);
  const sections = useRef([]);
  const {values} = useContext(mainContext)
useEffect(() => {
  const ctx = gsap.context(() => {
    // Animate horizontal lines
    gsap.from([topLine.current, bottomLine.current], {
      scrollTrigger: {
        trigger: topLine.current,
        start: 'top 90%',
      },
      width: 0,
      duration: 1,
      ease: 'power2.out',
    });

    // Animate vertical line
    gsap.from(verticalLine.current, {
      scrollTrigger: {
        trigger: verticalLine.current,
        start: 'top 90%',
      },
      height: 0,
      duration: 1.2,
      ease: 'power2.out',
    });

    // Animate each section
    sections.current.forEach((el, i) => {
      if (el) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
          delay: i * 0.1,
        });
      }
    });
  });

  return () => ctx.revert(); // Clean up on unmount
}, []);


  return (
    <>
    <div className=" overflow-hidden  w-full px-4 md:px-10 py-14 flex flex-col items-center">
      
      {/* Top Horizontal Line */}
      <div ref={topLine} className="w-[80vw] md:w-[80vw]  h-[1px] bg-black mb-6" />

      {/* Title */}
      <h1 className="text-4xl md:text-6xl text-center font-bold mb-6">Research & Development Cell ( R&D )</h1>

      {/* Bottom Horizontal Line */}
      <div ref={bottomLine} className="w-[80vw] md:w-[80vw] h-[1px] bg-black mb-16" />

      {/* Main Section */}
      <div className="flex flex-col md:flex-row w-full max-w-[1280px] gap-10">
        
        {/* Left Side - Image Placeholder */}
        <div className="w-full md:w-1/2 h-[500px] md:h-[550px] rounded-xl   items-center justify-center">
          <BarChart/>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:flex justify-center">
          <div ref={verticalLine} className="w-[1px] h-[90%] bg-black mx-4"></div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          {values.map((item, i) => (
                <div
                key={i}
                className="pl-6 mb-10"
                ref={(el) => (sections.current[i] = el)}
                >
              <div className="flex items-start gap-4">
                <div className="border border-black rounded-full px-5 py-3 text-2xl font-semibold">
                  {item.number}
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-800 leading-relaxed text-xl ">
                    {item.desc}
                  </p>
                </div>
              </div>
              {i !== 3 && <hr className="my-6 border-black" />}
                </div>
          ))}
        </div>
      </div>
    </div>
          </>
  );
};

export default Home5;