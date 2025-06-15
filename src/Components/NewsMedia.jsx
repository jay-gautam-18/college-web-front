import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const News = [
  {
    title: "National Startup Meet & Seminar organized by MSM",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/National-Startup-Meet-Seminar-organized-by-MSM-1024x682.jpg",
    date: "June 12, 2025",
  },
  {
    title: "Dr. Anupam Chouksey Represents India on Global Stage at ILC Geneva",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Dr.-Anupam-Chouksey-Represents-India-on-Global-Stage-at-ILC-Geneva-819x1024.jpg",
    date: "June 12, 2025",
  },
  {
    title: "10 Square Cricket Championship 2025",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/10-Square-Cricket-Championship-2025-1024x682.jpg",
    date: "June 12, 2025",
  },
  {
    title: "LNCP Proudly Celebrated World Environment Day",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/LNCP-Proudly-Celebrated-World-Environment-Day-1024x768.jpg",
    date: "June 5, 2025",
  },
  {
    title: "Slogan writing competition & Discussion organised by QNC on the theme Beat Plstic Pollution",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Slogan-writing-competition-Discussion-organised-by-QNC-on-the-theme-Beat-Plstic-Pollution.jpg",
    date: "June 5, 2025",
  },
  {
    title: "Congratulations to the Stars of CSE-IoT",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Congratulations-to-the-Stars-of-CSE-IoT-819x1024.jpg",
    date: "June 3, 2025",
  },
];

const NewsMedia = () => {
  const topLine = useRef(null);
  const bottomLine = useRef(null);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([topLine.current, bottomLine.current], {
        scrollTrigger: {
          trigger: topLine.current,
          start: "top 90%",
        },
        width: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleEnter = (index) => {
    gsap.to(cardRefs.current[index], { scale: 1.05, duration: 0.3 });
    gsap.to(overlayRefs.current[index], { y: 0, duration: 0.4 });
  };

  const handleLeave = (index) => {
    gsap.to(cardRefs.current[index], { scale: 1, duration: 0.3 });
    gsap.to(overlayRefs.current[index], { y: "100%", duration: 0.4 });
  };

  const handleMobileTap = (index) => {
    const overlay = overlayRefs.current[index];
    const isActive = overlay.dataset.active === "true";
    if (isActive) {
      handleLeave(index);
      overlay.dataset.active = "false";
    } else {
      handleEnter(index);
      overlay.dataset.active = "true";
    }
  };

  return (
    <div className="min-h-screen  px-4 sm:px-6 py-12 sm:py-16">
      <div ref={topLine} className="md:w-[90%] hidden md:block  h-[1px] bg-black mb-6 mx-auto lg:overflow-hidden" />
      <h2 className="text-3xl sm:text-7xl font-bold text-center mb-10 sm:mb-12">News & Media</h2>
      <div ref={bottomLine} className="md:w-[90%] hidden md:block h-[1px] bg-black mb-10 overflow-hidden sm:mb-16 mx-auto" />

      <div className="w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {News.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer"
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
              onClick={() => handleMobileTap(index)}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div
                ref={(el) => (overlayRefs.current[index] = el)}
                data-active="false"
                className="absolute bottom-0 left-0 w-full h-full  bg-black/50 flex flex-col justify-between items-start transform translate-y-full"
              >
                <h1 className="text-white text-base sm:text-lg font-semibold p-4">{card.date}</h1>
                <p className="text-white text-base sm:text-lg font-semibold p-4">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsMedia;