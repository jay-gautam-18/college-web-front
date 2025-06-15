import Loader from '../../Components/Loader';
import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';
import LnctFooter from '../../Components/LnctFooter';

const LnctMun2022 = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    // Simulate loading time or wait for data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Nav />
      <Home1 
        heading="LNCT MUN 2022 | LNCT Group of Colleges"
        description="LNCT Model United Nations: A platform for students to simulate global discussions and develop leadership skills."
        image="https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"
      />
      <section className="bg-white py-12 px-6 lg:px-16 text-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 uppercase">
            LNCT Model United Nations 2022
          </h2>

          {/* Intro Section */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-3">About LNCT MUN 2022</h3>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                LNCT MUN is a student-run initiative to simulate a series of research-oriented global discussions. It offers students the chance to represent various nations across different UN bodies.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                It provides students with a platform for critical thinking, negotiation, and leadership development, preparing them for real-world diplomatic scenarios.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://lnct.ac.in/wp-content/uploads/2022/07/Updated-Flyer-1-768x768.jpeg" // Replace with your image path
                alt="LNCT MUN 2022"
                className="rounded-xl shadow-lg max-w-sm w-full"
              />
            </div>
          </div>

          {/* Delegate Section */}
          <div className="grid md:grid-cols-2 gap-10 mt-14 items-center">
            <div className="flex justify-center">
              <img
                src="https://lnct.ac.in/wp-content/uploads/2022/06/flyer-2-revised-768x768.jpeg" // Replace with your image path
                alt="Delegate Applications"
                className="rounded-xl shadow-lg max-w-sm w-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Delegate Applications</h3>
              <p className="text-sm md:text-base leading-relaxed mb-2">
                LNCT MUN recreates a diplomatic simulation of the United Nations where students represent different countries in various committees and deliberate upon current international issues.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Students gain experience in formal debate, lobbying, documentation writing, and policy-making.
              </p>
            </div>
          </div>

          {/* Registration Section */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Registrations</h3>
            <p className="text-sm md:text-base max-w-3xl mx-auto mb-4">
              LNCT Group of Colleges announces its very first edition of LNCT MUN 2022.
              Visit our portal and register as a delegate to join the global parliament. The event is scheduled to be held on 2nd and 3rd September at LNCT Group Campus, Kalchuri Nagar, Bhopal.
            </p>
            <p className="text-sm md:text-base">
              <a
                href="#"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                Click here
              </a>{' '}
              to know more and go through the brochure.
            </p>
          </div>

          {/* Fee and Inclusions */}
          <div className="grid md:grid-cols-2 gap-10 mt-16 items-start">
            <div>
              <h3 className="text-lg font-bold mb-4">Fee Inclusions</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>2 Meals (Lunch + Snacks)</li>
                <li>Professional Committee Training</li>
                <li>Delegate Kit</li>
                <li>Background Guide</li>
                <li>Participation Certificate</li>
                <li>Exclusive Social Night Event</li>
                <li>
                  Registration Fee: <strong>₹250 for Internal Students</strong>,{' '}
                  <strong>₹350 for External Students</strong>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="https://lnct.ac.in/wp-content/uploads/2022/07/Updated-Flyer-1-768x768.jpeg" // Replace with your image path
                alt="MUN Poster"
                className="rounded-xl shadow-lg max-w-sm w-full"
              />
            </div>
          </div>

          {/* Eligibility */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
            <p className="text-sm md:text-base max-w-2xl mx-auto">
              LNCT MUN is open to all undergraduate and postgraduate students from any stream or college. If you're passionate about debate, policy, or global affairs — this is for you!
            </p>
          </div>
        </div>
      </section>
      <LnctFooter />
    </>
  );
};

export default LnctMun2022
