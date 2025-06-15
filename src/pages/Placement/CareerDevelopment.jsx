import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';
import LnctFooter from '../../Components/LnctFooter';
import Loader from '../../Components/Loader';
import { useEffect, useState } from 'react'

const CareerDevelopment = () => {
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
                heading="Career Development | LNCT Group of Colleges"
                description="Department for Career Development: Fostering industry collaboration and student growth."
                image="https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"
            />
            <div className="text-gray-800 font-sans">
                {/* Section 1: Department Overview */}
                <section className="py-16 px-6 md:px-20 bg-white text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">Department for Career Development</h2>
                    <p className="text-gray-500 text-lg mb-8">LNCT Group of Colleges</p>
                    <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
                        Career Development Cell at LNCT Group aims to foster a climate where collaboration with industry thrives,
                        generating both breakthrough discoveries in science and technology that can support continuous innovation and growth.
                        With a perfect track record of very productive relationships with corporations of all sizes, from startups to mature,
                        successful enterprises, our institutions provide the students with education, research, and connections to world-class
                        faculty and corporate excellence.
                    </p>
                    <p className="mt-8 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
                        Enjoy the Privilege of Studying at MP's <sup>1st</sup> Self Financed Institution attracting meritorious students from
                        IIT JEE converting them into a talent required for modern needs of Industry through experienced faculties and corporate tie-ups,
                        LNCT is marching ahead every year in the journey of "Working towards being the Best".
                    </p>
                </section>

                {/* Section 2: Meet the Team */}
                <section className="py-16 px-6 md:px-2 bg-black text-white">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">Meet The Team</h2>
                    <p className="text-center text-lg mb-4 text-blue-200">Department for Career Development</p>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mt-12">
                        <div className="md:w-2/3">
                            <p className="text-lg leading-relaxed text-blue-100">
                                The <strong>Department for Career Development</strong> at LNCT Group of Colleges and LNCT University is headed by
                                Prof. (Dr.) Anuj Garg, Group Director – Planning, Development & Placements, who has been working in the Education
                                Fraternity for more than 20 years and has placed more than 30,000+ engineering students in top corporates. He understands
                                very well the changing demands of the industry and with a Student Centric focused approach towards training them to help
                                reach their dreams, strives to work towards creating Incubations and promoting an Entrepreneurial and Leadership culture
                                among students and get them ready for a better life.
                            </p>

                            <h3 className="mt-8 font-semibold text-blue-200">We have a team of experienced and dedicated Faculty to manage Career Development Cell comprising of:</h3>
                            <ul className="list-disc list-inside mt-6 text-blue-100 space-y-2">
                                <li>Mr. Rohit Pathak – Associate Director, Training Placements & Corporate Relations.</li>
                                <li>Mr. Abhishek Kumar Singh – Manager Placements.</li>
                                <li>Mrs. Kirti Sethi – Manager, Placements & Corporate Relations.</li>
                                <li>Mr. Pushpank Thakur – Coordinator Training & Development.</li>
                                <li>Mr. Virendra Pathak – Coordinator Training & Placements.</li>
                            </ul>
                        </div>

                        <div className="md:w-1/3 flex justify-center">
                            <img
                                src="https://lnct.ac.in/wp-content/uploads/2020/01/Anuj-Garg-TP.jpg"
                                alt="Dr. Anuj Garg"
                                className="rounded-xl shadow-lg max-w-xs hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 3: Objectives */}
                <section className="py-16 px-6 md:px-20 bg-gray-50">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-black">Objectives</h2>
                    <p className="text-center text-gray-500 text-lg mb-8">Department for Career Development</p>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 md:w-2/3">
                            <li>Provide Talent to industry and help in progress of the nation.</li>
                            <li>To continuously learn from Industry about the changing job requirements and providing necessary training to students.</li>
                            <li>
                                To unleash their education in an environment that incorporates the advance technological insights and inculcates
                                modern attitude including analytical and leadership skills among students.
                            </li>
                            <li>
                                To develop the best learning process using a comprehensive understanding of industry's best practices.
                            </li>
                            <li>
                                To establish long-term relationships with the companies by constant engagement.
                            </li>
                            <li>To provide 100% placements to our graduates.</li>
                            <li>
                                To support the ecosystem and other Institutions by providing Off Campus / Pool Campus Opportunities.
                            </li>
                            <li>To help the state and government in Employability and Entrepreneurship.</li>
                        </ul>

                       
                    </div>
                </section>
            </div>
            <LnctFooter />
        </>
    );
};

export default CareerDevelopment;
