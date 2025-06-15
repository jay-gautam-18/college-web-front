import React, { useRef, useEffect, useState  } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Nav from '../../../Components/Nav';
import LnctFooter from '../../../Components/LnctFooter';
import Home1 from '../../../Components/HomeComponets/Home1';
import Loader from '../../../Components/Loader';
gsap.registerPlugin(ScrollTrigger);

const OurVision = () => {
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
    heading = {"Our Vision | Mission"}
    description={"We train and guide you to innovate, lead and to be successful Engineers!"}
    image={"https://lnct.ac.in/wp-content/uploads/2024/05/%E0%A4%85%E0%A4%82%E0%A4%A4%E0%A4%B0%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%B7%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AF-%E0%A4%9C%E0%A5%88%E0%A4%B5-%E0%A4%B5%E0%A4%BF%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%A4%E0%A4%BE-%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%B8.jpg"}
    />
    <section className=" text-gray-800 py-20 px-6 md:px-16">
      {/* Vision */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl font-semibold mb-4 text-gray-900">Vision</h2>
        <p className="text-lg leading-relaxed">
          To be a premier institute where engineering education and research converge to produce engineers as responsible citizens.
        </p>
      </div>

      {/* Mission */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl font-semibold mb-4 text-gray-900">Mission</h2>
        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
          <li>To improve continually in the teaching-learning process by strengthening infrastructural facilities and faculty credentials.</li>
          <li>To undertake interdisciplinary research and development by engaging the faculty and students in curricular, co-curricular and industry collaborated projects towards problem solving.</li>
          <li>To enhance proportion of skilled based courses beyond curriculum to create more employable graduates.</li>
          <li>To inculcate human values, ethics, patriotism and responsibility in our outgoing engineers by providing conducive environment.</li>
        </ul>
      </div>

      {/* PEOs */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-gray-900">Program Educational Objectives (PEOs)</h2>
        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
          <li>To understand the applications of science and humanities, basic introductory engineering courses, core subjects of the curriculum of the course and interdisciplinary subjects, a specialized group subjects, electives, projects, seminars, group discussion supplemented by site visits and local short tours.</li>
          <li>To make students familiar with modern equipment, instrumentation, software and other computational, mathematical, design and project management tools.</li>
          <li>They should be capable themselves to handle complex problems based on their acquired knowledge with other available sources of information and references.</li>
          <li>They should be able to carry out research, design, consultancy services, innovations and patents to the existing situations independently for the betterment of society.</li>
          <li>To use up-to-date techniques and skills required in modern era to analyze problems in industrial field.</li>
          <li>They should be competent to model real-life problems using software and hardware platforms both in offline and in real-time mode.</li>
          <li>They should do analysis independently of real-life problems of design and use computing systems appropriate to their solutions that are technically sound, economically feasible, viable and sustainable.</li>
          <li>To make the students conversant with the methods and instruments being presently used in the field thus bridging the gaps between the curriculum and industry requirements.</li>
          <li>To churn out the aspirants of engineering courses into first-class engineers and assist them in placements during the course of the study.</li>
          <li>To develop the department by conducting faculty development programs and also encouraging their participation in conferences, seminars, workshops and guest lectures at national and international level.</li>
          <li>To develop the skills of the staff by conducting staff development programs and encourage participation in them.</li>
          <li>The engineers from LNCT should be intelligent, knowledgeable and diligent towards their job responsibility; they should accept social responsibility with confidence, ethics, patriotism and high character.</li>
          <li>The engineers passing out from this college should respect their elders, considerate among their colleagues, religious, tolerant, culture loving, nature loving and cooperative with team.</li>
        </ul>
      </div>
    </section>


    <LnctFooter/>
    </>
  )
}

export default OurVision

