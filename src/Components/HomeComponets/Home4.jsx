import React, { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home5 from './Home5';

gsap.registerPlugin(ScrollTrigger);

const Home4 = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const taglineRef = useRef(null);
  const lineRef = useRef(null);
  const paraRef = useRef(null);

  // Memoize animation configurations
  const animations = useMemo(() => ({
    tagline: {
      trigger: taglineRef.current,
      start: 'top 90%',
      animation: {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
      }
    },
    heading: {
      trigger: headingRef.current,
      start: 'top 90%',
      animation: {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
      }
    },
    line: {
      trigger: lineRef.current,
      start: 'top 80%',
      animation: {
        height: 0,
        duration: 1,
        ease: 'power2.out',
      }
    },
    paragraph: {
      trigger: paraRef.current,
      start: 'top 90%',
      animation: {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'power2.out',
      }
    }
  }), []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate "How we work"
      gsap.from(taglineRef.current, {
        scrollTrigger: {
          trigger: animations.tagline.trigger,
          start: animations.tagline.start,
        },
        ...animations.tagline.animation
      });

      // Animate Heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: animations.heading.trigger,
          start: animations.heading.start,
        },
        ...animations.heading.animation
      });

      // Animate Vertical Line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: animations.line.trigger,
          start: animations.line.start,
        },
        ...animations.line.animation
      });

      // Animate Paragraph on Right
      gsap.from(paraRef.current, {
        scrollTrigger: {
          trigger: animations.paragraph.trigger,
          start: animations.paragraph.start,
        },
        ...animations.paragraph.animation
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animations]);

  // Memoize content to prevent unnecessary re-renders
  const content = useMemo(() => ({
    tagline: "How we work",
    heading: "We help our Students\nsucceed with\ninnovative\nstrategies.",
    paragraphs: [
      "Other than Best Academics and Placements, Providing Best Sports facilities also. Producing National & International Players in Drop Row Ball, Base Ball, Throw Ball, Kabbaddi etc.",
      "Through careful analysis, creative thinking, and a deep understanding of their goals, we empower businesses to surpass expectations and thrive in today's dynamic and competitive landscape.",
      "Through careful analysis, creative thinking, and a deep understanding of their goals, we empower businesses to surpass expectations and thrive in today's dynamic and competitive landscape."
    ]
  }), []);

  return (
    <>
      <div ref={sectionRef} className="w-full flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-[4fr_0.5fr_2fr] w-full max-w-8xl">
          
          {/* Left Side */}
          <div className="md:p-10 mb-10 space-y-10">
            <p
              ref={taglineRef}
              className="uppercase tracking-widest text-lg text-gray-700 mb-4"
            >
              {content.tagline}
            </p>
            <h1
              ref={headingRef}
              className="md:text-7xl text-4xl font-thin md:leading-tight tracking-tight text-black whitespace-pre-line"
            >
              {content.heading}
            </h1>
            <a 
              href='https://www.aicte-india.org/feedback/' 
              className="md:text-xl text-lg border bg-black text-white font-[300] px-10 md:px-6 md:py-1.5 rounded-lg hover:bg-transparent hover:text-black transition"
            >
              AICTE Feedback
            </a>
          </div>

          {/* Custom Vertical Line */}
          <div className="hidden md:flex justify-center">
            <div
              ref={lineRef}
              className="w-px bg-black h-[80%] my-auto"
            ></div>
          </div>

          {/* Right Side */}
          <div className="md:p-10 flex flex-col justify-start">
            <ul className="list-disc pl-5 space-y-6">
              {content.paragraphs.map((text, index) => (
                <li key={index}>
                  <p
                    ref={index === 0 ? paraRef : null}
                    className="md:text-xl font-light text-gray-800 leading-relaxed"
                  >
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Home4);