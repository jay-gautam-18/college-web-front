import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContext } from 'react';
import { mainContext } from '../Context/Maincontext';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const LatestNews = () => {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);
  const tagsRef = useRef([]);
  const headingsRef = useRef([]);
  const {blogs } = useContext(mainContext)
  const navigate = useNavigate()
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title and Button Animations
      gsap.from([sectionRef.current.querySelector('h2'), sectionRef.current.querySelector('button')], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
         delay: 0.2,
        ease: 'power2.out',
      });

      // Text Animations
      tagsRef.current.forEach((el, i) => {
        gsap.from([el, headingsRef.current[i]], {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
          opacity: 0,
          y: 30,
           delay: 0.2,
          duration: 1,
          ease: 'power2.out',
          delay: i * 0.1,
        });
      });

      // Animate Horizontal Line (scale X from 0 to 1)
      gsap.fromTo(
        '.horizontal-line',
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          scrollTrigger: {
            trigger: '.horizontal-line',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          duration: 1,
          ease: 'power2.out',
           delay: 0.2,
        }
      );

      // Animate Vertical Line (scale Y from 0 to 1)
      gsap.fromTo(
        '.vertical-line',
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: '.vertical-line',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          duration: 1,
          ease: 'power2.out',
           delay: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth Cursor Logic (unchanged)
  useEffect(() => {
    const cursor = cursorRef.current;
    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };

    const moveCursor = gsap.quickSetter(cursor, "css");

    const update = () => {
      pos.x += (mouse.x - pos.x) * 0.2;
      pos.y += (mouse.y - pos.y) * 0.2;
      moveCursor({ left: pos.x + "px", top: pos.y + "px" });
      requestAnimationFrame(update);
    };

    update(); // start animation loop

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const imageAreas = document.querySelectorAll(".image-hover-area");

    imageAreas.forEach((area) => {
      area.addEventListener("mousemove", handleMouseMove);
      area.addEventListener("mouseenter", () => cursor.classList.remove("opacity-0"));
      area.addEventListener("mouseleave", () => cursor.classList.add("opacity-0"));
    });

    return () => {
      imageAreas.forEach((area) => {
        area.removeEventListener("mousemove", handleMouseMove);
        area.removeEventListener("mouseenter", () => {});
        area.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);



  return (
    <section
      ref={sectionRef}
      className="w-full py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 relative"
    >
      {/* Smooth Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 opacity-0 z-50 pointer-events-none transition-opacity duration-300"
      >
        <div className="bg-black text-white px-4 py-1 text-xs rounded-full">
          VIEW
        </div>
      </div>

      {/* Title and Button */}
      <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">LATEST BLOGS & POST</h2>
      </div>

      {/* Cards */}
      <div className="flex flex-row w-full max-w-full overflow-x-auto scrollbar-hidden gap-4 sm:gap-6 md:gap-10 border-t border-black pt-6 sm:pt-8 md:pt-10 relative">
        {blogs.map((item, i) => (
          <div
            key={i}
            className={`group relative min-w-[280px] sm:min-w-[320px] md:min-w-[20vw] max-w-[280px] sm:max-w-[320px] md:max-w-xs md:border-r last:border-r-0 md:border-black pr-4 sm:pr-5`}
          >
            <div className="overflow-hidden rounded-xl relative image-hover-area">
              <img
                onClick={()=>navigate(`/blogs/${item.id}`)}
                src={item.img}
                alt="blogs"
                className="rounded-xl w-full h-48 sm:h-52 md:h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p
              ref={(el) => (tagsRef.current[i] = el)}
              className="text-xs mt-3 sm:mt-4 mb-1 sm:mb-2"
            >
              {item.tag}
            </p>
            <h3
              ref={(el) => (headingsRef.current[i] = el)}
              className="text-base sm:text-lg font-medium line-clamp-2"
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;