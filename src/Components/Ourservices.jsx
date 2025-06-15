import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const titleRef2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });
      gsap.from(titleRef2.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power2.out',
      });

      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 80%',
        },
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to([ bottomLineRef.current], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
        scaleX: 1,
        transformOrigin: 'left center',
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
      });
      gsap.to([ topLineRef.current], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
        scaleX: 1,
        transformOrigin: 'left center',
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" w-full px-4 md:px-10 py-20 relative"
    >
      {/* Top Horizontal Line */}
      <div
        ref={topLineRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-black scale-x-0 origin-center"
      ></div>

      {/* Bottom Horizontal Line */}
      <div
        ref={bottomLineRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-black scale-x-0 origin-left"
      ></div>

      <div className="max-w-[100%] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="md:w-4/5 h-[90vh]  flex flex-col">
          <p className=" text-4xl ">no. <span className='text-[20vh] font-[sans] '>1</span> <small className='text-2xl font-bold pb-4'>Private enginnering college ranked in Madhya Pradesh</small></p>
          
          <div>
          <h1
            ref={titleRef}
            className="text-4xl md:text-7xl mb-10 font-normal leading-tight"
            >
            Step into Your Future: Explore LNCT Group of Colleges with Our Virtual Tour!
          </h1>
          <a ref={titleRef2}
           href='https://tour.lnct.ac.in/LNCT/' className="mt- px-6 py-3 bg-black hover:text-black border hover:bg-transparent text-white text-2xl tracking-widest rounded-xl">
           360° Virtual Tour
          </a>
             </div>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:flex justify-center items-center">
          <div
            ref={lineRef}
            className="w-[1px] h-[70%] md:min-h-[50vh] bg-black mx-6"
          ></div>
        </div>

        {/* Right Text */}
        <div ref={textRef} className="md:w-1/2">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Born in semi urban city of Bilaspur (C.G.),Shri Jai Narayan Chouksey, completed his post graduation from Robertson College, Jabalpur. He established Lakshmi Narain College of Technology (LNCT), Bhopal in 1994 under the banner of H.K. Kalchuri Education Trust. Since then, With the commitment of “Working Towards Being the Best”, LNCT Group has achieved many milestones. The institute is successfully meeting the objective of producing skilled manpower of the highest quality who is able to cope up with the challenges of ever evolving industrial needs of the country.The Alumni of LNCT Group are working all across the Globe in Big Multi National Companies.
            <br />
            Today, LNCT Group is one of the Largest and most preferred Educational Group for Engineering, Management, Pharmacy, Medical with ISO-9001 certification and NBA accreditation for many Engineering courses.. Bright young students from all across the country are coming to fulfill their dream in this group.
            <br />
            The LNCT Campus at Bhopal is spread over a lush green environment of approx. 50 acres. The campus constitutes of many buildings that houses the academics and research centers. In addition to this, the academic building has tutorial rooms, lecture halls, computer and electronics labs and offices of the administrations and faculty. The campus is fully equipped with facilities like Wi-Fi,central library (digital library, Internet lab), digital classrooms, hostel, mess,Central workshop, Auditorium Sports Ground etc.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;