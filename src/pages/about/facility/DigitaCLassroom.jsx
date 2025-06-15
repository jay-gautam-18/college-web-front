import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';

const DigitaCLassroom = () => {
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
     <Home1 heading={"LNCT Group of Colleges | Central India's No. 1 Engineering Institute - Bhopal"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/11/LNCT-Student-19.png"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    />
     <div className="max-w-4xl mx-auto p-6 space-y-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center">Digital Classrooms</h1>

      <p>
        Developments and changes are the laws of nature. This technology has already crept in and now caters to the needs
        of diverse spheres like colleges. This is the outstanding technology that qualifies to be the best of them all
        — the Digital Classroom.
      </p>

      <p>
        These are hi-tech classrooms of campuses in comparison to the traditional way of teaching. Classrooms are well
        furnished and designed as per international standards. It uses effective teacher-student interaction. They are
        also equipped with Digital boards and LCD projectors and a host of other contemporary teaching aids.
      </p>

      <section>
        <h2 className="text-2xl font-semibold">Upgraded level of Smart Classrooms</h2>
        <p>
          Blackboards and chalk have been replaced by Whiteboard and the time has come to upgrade the level of Smart
          Classroom with high-tech software and hardware. Smart Classrooms have been an effective answer to the
          Globalization and the needs of the 21st-century education system.
        </p>
        <img src="/path/to/your-first-image.png" alt="Smart Classrooms" className="my-4 w-full max-w-md mx-auto" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Create learning modules</h2>
        <p>
          One can go live through the recording of lectures, one can package it by creating the modules and share them
          instantly or keep it safe for students’ revision. These learning modules can be used anytime.
        </p>
        <img src="/path/to/your-second-image.png" alt="Learning Modules" className="my-4 w-full max-w-md mx-auto" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Effortless content creation</h2>
        <p>
          Teachers just have to teach without any technical involvement and the system automatically records the lecture
          and transforms it into a digital format which is instantly available for students anytime, anywhere.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Easy to use teaching solution</h2>
        <p>
          This is an easy to use software solution. Each module/lesson is backed with tools that are specially designed
          digital writing pads & pens that can be used to write, draw, highlight, insert tables and check question sets
          and then projected across any screen through a projector.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Broadcast your Classroom</h2>
        <p>
          With teaching sessions now online, teachers can use the web for students to view from anywhere. It allows
          instructors to moderate live demonstrations, including presentation slides, video and voice chat.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Edit recorded lecture</h2>
        <p>
          The teacher can edit the content and keep each bookmark and each topic individually. This will turn into
          bookmarks for students, who can search by topic and jump directly to that section.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Publish</h2>
        <p>
          After editing teachers can even listen to videos and make them as per their convenience and make it available
          for podcasts or webinars or even convert it into packages.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Integration</h2>
        <p>
          The module can plug into an LMS and improve its resources furthermore. While teaching, the teacher can also
          introduce a highlight and show it on the screen, flip the screen and annotate it. One can also plug into
          recorded lectures by integrating with their own power point presentation system, multimedia files, YouTube,
          etc.
        </p>
      </section>
    </div>
    <LnctFooter/>
    </>
  )
}

export default DigitaCLassroom