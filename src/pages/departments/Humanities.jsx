import React, { useEffect, useState } from 'react' 
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import Loader from '../../Components/Loader'
const Humanities = () => {
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
heading={"Humanities Department"}
description={"Learn, achieve and excel with LNCT Group of colleges"}
image={"https://lnct.ac.in/wp-content/uploads/2021/04/Student-Contect-1-768x544.png"}
/>
<div className="p-8 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">Department of Humanities</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          The importance of Department of Humanities in the Current and Future scenario:
        </h2>
        <p className="mb-4">
          LNCT is the world class group of Institutions. Competition in every profession persuades people to think deeply to give their 100% and to procure better job opportunities. Quality Education is the need of the hour. There is too much of a competition in this field and in the Present scenario it is getting tougher day by day. Humanities as a subject is the life line of a student's career. It helps in setting up a better placement record and above all an amazing and world-class educational environment. The Department of Humanities helps the students to achieve new heights in their academic and professional career. The core skills they learn are related to their specific branches. Department of Humanities provides basic skills needed for presenting their achievements. Communication skills and soft skills are prerequisites for a person to achieve success in life.
        </p>
        <p>
          Presently, teaching course, English is in the curriculum for the undergraduate students of Engineering and Technology. There are two well-equipped language laboratories with 60 computers each in the department. Software K-Van is used in language laboratories. The faculty is qualified, experienced and adequate in numbers in cadre ratio. Faculty is encouraged for doing research and publishing papers in the field of professional communication. Department conducts national conferences, orientation programs, cultural events, soft skills and personality development programmes time to time. Research assistance for paper presentation and travel grants for India and abroad are provided by LNCT and government agencies like MPCST, AICTE etc.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Faculty</h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">College Name</th>
              <th className="p-2 border border-gray-300">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">LNCT</td>
              <td className="p-2 border border-gray-300">Dr. RENU SHRIVASTAVA</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">LNCT S</td>
              <td className="p-2 border border-gray-300">Dr. POOJA SAXENA</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">LNCT E</td>
              <td className="p-2 border border-gray-300">Dr. BRIJESH VERMA</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Information regarding Language Lab</h2>
        <p className="mb-2">
          We have Multimedia Language Lab Software Consisting of two levels. The Lab is quite interactive having all types of activities of basic Language and Communication skills. K-VAN developed the Advanced English Communication Skills Lab, to improve the students' fluency in English, though a well-developed vocabulary and enable them to listen to English spoken at normal conversational speed by educated English speakers and respond appropriately in different socio-cultural and professional contexts.
        </p>
        <p className="mb-2 font-semibold">The Lab consists of two levels:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Student Consol (level-I) in 60 computers with 60 headphones.</li>
          <li>Communicative Language Lab (level-II) in 60 computers with 60 headphones</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">SOFT SKILLS</h2>
        <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-4">
          "It is not good grades, but a "grounding in soft skills" that give people who went to independent schools their edge, a former public school has argued."
        </blockquote>
        <p className="font-semibold mb-2">Dr. Anthony Seldon, former Headmaster of Wellington College</p>
        <p className="mb-4">
          Soft Skills refers to the personal attributes which enables the person to interact well in professional world. In recent years the soft skills has become more and more important as companies expect their employees to know how to behave on the job, to understand how important it is to be on time, to work as a team, to take initiatives and bring out excellent quality work.
        </p>
        <p>
          Soft skills are challenging to develop, as they are closely associated with a person's character. It takes conscious effort, ongoing practice, and a commitment to self-development. For engineering sector, as in any other type of jobs, besides technical skills, the management is keenly looking forward to soft skills in its potential employees. Whosoever role you may be looking forward in your organization, possessing strong soft skills can put you a step ahead in the competition and make you a true professional. Learning Soft Skills is required as learning professional skills from the very beginning of the curriculum to imbibe in the personality.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">French Language</h2>
        <p>
          In this era of the toughest competition where only survival of the fittest exists, LNCT has come up with a new initiative of being the first college in MP to introduce French as a third language in order to make it’s students upbeat and distinguished from the crowd. French is the second language only after English that is spoken in all five continents. Knowledge of French opens the door of French companies in France and other French speaking parts of the world. The training is highly practical and provides the average package of an engineer who has never worked with French is nearly 7 times that of a normal engineer. By the same token, speaking French opens up study opportunities at renowned French universities and business schools and makes the top higher education institutes more accessible. Students with good proficiency in French have a better chance of being hired.
        </p>
      </section>
    </div>
<LnctFooter/>
</>
)
}

export default Humanities