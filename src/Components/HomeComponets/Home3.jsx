import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Home4 from './Home4'
gsap.registerPlugin(ScrollTrigger);



const Home3 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll(".slide-in");

    sections.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
    <div className="min-h-screen w-full   px-4 py-16">
      <div className="w-full mx-auto flex flex-col md:flex-row  ">
        {/* Left Static Side */}
        <div className="w-full md:w-2/5 md:sticky md:top-24 md:h-[calc(70vh-6rem)] flex flex-col justify-center p-6">
            <div className="mr-5 md:w-1/3 sticky space-y-10">
                <div>
                    <h2 className="md:text-7xl text-5xl font-[400] md:w-[30vw] leading-tight">WHY CHOOSE OUR COLLEGE?</h2>
                    <p className="mt-2 tracking-wide text-2xl text-gray-700 w-[70vw] md:max-w-[30vw]">
                        Experience world-class education, state-of-the-art labs, vibrant campus life, and strong placement support. Our college empowers students with practical skills, industry exposure, and a nurturing environment for holistic growth.
                    </p>
                </div>
                <button className="md:text-xl text-lg border bg-black text-white font-[300] px-10 md:px-6 md:py-1.5 rounded-lg hover:bg-transparent hover:text-black transition">
                    Explore More Benefits
                </button>
            </div>
        </div>
        <div className='h-auto w-[1px] bg-black mx-5'></div>
        {/* Right Scroll Side */}
        <div ref={containerRef} className="w-full md:w-3/5 space-y-12">
             {/* Large Featured Image */}
        <div>
            <img src="https://lnct.ac.in/wp-content/uploads/2022/04/Placment_2022-1024x511.webp" alt="Dancing Stars" className="rounded-2xl w-full" />
            <div className="flex justify-between text-sm mt-3">
            <span className="text-black md:text-2xl">Our Rankers</span>
            <span className="text-gray-500 md:text-2xl">-2025</span>
            </div>
        </div>
            <hr />
        {/* 2 Rows with 2 Columns each */}
        <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
            <div>
                <img src="https://lnct.ac.in/wp-content/uploads/2021/04/Kalchuri-LNCT-Incubation-CentreKLIC-2.jpg" alt="Enjoy Silence" className="rounded-2xl" />
                <div className="flex justify-between md:text-2xl mt-2">
                <span>Our Advanced Labs</span>
                <span className="text-gray-500">50+</span>
                </div>
            </div>
            <div>
                <img src="https://lnct.ac.in/wp-content/uploads/2021/04/Klic-Contact-Us.jpg" alt="Pure Vision" className="rounded-2xl" />
                <div className="flex justify-between md:text-2xl mt-2">
                <span>Incubation Center </span>
                <span className="text-gray-500">KLIC</span>
                </div>
            </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-4">
            <div>
                <img src="https://admissions.lnctu.ac.in/images/sport.jpg" alt="Boring Brand" className="rounded-2xl" />
                <div className="flex justify-between md:text-2xl mt-2">
                <span>Sports</span>
                <span className="text-gray-500">2024</span>
                </div>
            </div>
            <div>
                <img src="https://lnctu.ac.in/wp-content/uploads/2025/04/A-Grand-Kickoff-to-SYNAPSE-2025.jpg" alt="New Culture" className="rounded-2xl" />
                <div className="flex justify-between md:text-2xl mt-2">
                <span>Cultural Activites</span>
                <span className="text-gray-500">2022</span>
                </div>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    <hr />
    </>
  );
};

export default Home3;