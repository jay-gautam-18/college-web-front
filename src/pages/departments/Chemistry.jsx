import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import Loader from '../../Components/Loader'

const Chemistry = () => {
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
heading={"Chemistry Department"}
description={"Learn, achieve and excel with LNCT Group of colleges"}
image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-25-768x512.jpeg"}
/>
<div className="p-8 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-2">
        Department of Engineering Chemistry | LNCT Group of Colleges
      </h1>
      <p className="text-center text-sm text-gray-600 border-y py-2 mb-6"></p>

      <section className="mb-6 space-y-4">
        <p>
          Chemistry is a soul of all branches. Without its knowledge one cannot think beyond the scope. Chemistry department has always taken the initiative to bring about the applicability of chemistry in their respective engineering subjects. The students are taught in a way which will help them to inculcate in them a sense of analytical thinking and to channelize their thoughts to a specific direction.
        </p>
        <p>
          Everything that has been created by engineers is composed of chemicals. Chemistry is the study of chemicals. Things fail when chemicals interact in undesirable ways. Falling of Bridges, failure of Machines, explosion in Refineries, leakage of Radiations in Nuclear plants etc happens when knowledge of chemistry not utilized properly.
        </p>
        <p>
          Chemistry is inextricably linked with civil and mechanical engineering as it is the discipline which deals with forming new substances from different basic materials. Chemistry is used in many ways in computers also for example we use many elements like silicon, zinc, aluminum, copper etc., in designing and in developing the hardware of computer. Chemistry is important in many electronics fabrication and packaging methods and may one day help extend the trend toward faster and cheaper electronics by molecular electronics. Thus the students who get well versed in the basic concept of chemistry will be able to put up new projects with their conceptualized thinking. Such knowledge has always been a lightening torch in their path of success.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Head of Department</h2>
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border border-gray-300">College Name</th>
              <th className="p-2 border border-gray-300">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">LNCT</td>
              <td className="p-2 border border-gray-300">Dr. LISHA KURUP</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">LNCT S</td>
              <td className="p-2 border border-gray-300">Dr. VARSHA PARMAR</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">LNCT E</td>
              <td className="p-2 border border-gray-300">Dr. PRATIBHA SHARMA</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Lab Details:</h2>
        <p className="mb-2">
          As per the course content the lab is well equipped with all the essential apparatus and glassware. The experiments involve the testing of water for hardness, alkalinity, chloride ion etc. The percentage of Copper and Iron in the ore is obtained by carrying out volumetric titrations. Proximate analysis of coal is also carried out in our labs.
        </p>
        <p>
          In our chemistry lab, lubricants are tested for their properties like Flash and Fire point, Viscosity Index, Aniline point and Cloud and Pour point. The chemistry lab is well set with the instruments like Abel’s apparatus, Pensky Marten’s apparatus, Cleaveland’s apparatus, Redwood viscometers etc. which are needed for the testing of lubricants. The consistency of grease is well estimated using Penetrometer.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Event Organized</h2>
        <p className="mb-2">
          The department has actively contributed for the growth of students and faculties by organizing national and international conferences. The department has conducted national conferences in the years 2007, 2010, 2013, 2015, 2016 and international conference in 2017. The conferences proved to be a grand success not only because of the research scholars from different places who shared their research work but because of the students who took interest in sharing their knowledge with others.
        </p>
        <p className="mb-2">
          It continuously endeavors for fulfilling research outputs. Research assistance for paper presentation and travel grants for India and abroad are provided by the college and government agencies like MPCST, AICTE, DST etc.
        </p>
        <p className="mb-2">
          On the occasion of world environment day a seminar was conducted on 5th June 2017 for raising awareness on emerging environmental issues. The theme of this seminar was “Environmental Issues Protection, Conservation and Management”. Students with full enthusiasm participated in this seminar and the celebration of world environment day proved to be a grand success.
        </p>
        <p>
          Every year we have also been conducting BhartiyaSanskritikGyanPariksha (conducted by AkhilVishwaGayatriParivar, ShantikunjHaridwar, Uttranchal) since 2014. Such initiatives help our newer generations to get rooted to Indian culture which is very essential in today’s scientific world.
        </p>
      </section>
    </div>
<LnctFooter/>
</>
)
}

export default Chemistry