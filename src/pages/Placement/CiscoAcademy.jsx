import Loader from '../../Components/Loader';
import { useEffect, useState } from 'react'

import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';
import LnctFooter from '../../Components/LnctFooter';

const CiscoAcademy = () => {
  const [isLoading, setIsLoading] = useState(true);
  const courses = [
    {
      title: "Cybersecurity Essentials",
      description:
        "A single breach can have huge consequences for a company's ability to function, hurting the bottom line and causing disruption in the daily lives of millions of people. This is why the demand for security professionals continues to grow. Get onboard—and develop an understanding of cybersecurity, security principles, and technologies in this entry-level course. Recommended: Plan to study for CCNA or CyberOps Associate Certification.",
      image: "https://i.ytimg.com/vi/vInCm7Xz0sI/sddefault.jpg",
      enrollLink: "https://www.netacad.com/",
    },
    {
      title: "NDG Linux Essentials",
      description:
        "As one of the most stable operating systems on the planet, Linux is used for servers, embedded systems, and more, making it a great reason to acquire Linux knowledge. NDG Linux Essentials quickly builds your Linux knowledge and prepares you for the Linux Essentials Professional Development Certificate (PDC), your proof of Linux know-how. No prerequisites required for this course.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BHZfIv3DqK447W29s6To6ABmkdFMSza9DQ&s",
      enrollLink: "https://www.netacad.com/",
    },
    {
      title: "Networking Essentials",
      description:
        "This is a great course for developers, data scientists, cybersecurity specialists, and other professionals looking to broaden their networking knowledge. It's also a great launching point for those preparing for a networking career. No prerequisites required for this instructor-led version of Networking Academy badge course.",
      image: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/a6efd491-1ca7-4275-88e4-746f3cfdf5b7/image.png",
      enrollLink: "https://www.netacad.com/",
    },
    {
      title: "PCAP: Programming Essentials in Python",
      description:
        'The language for "new" programmers. How great would it be to write your own computer program? PCAP is a certification program that teaches the essentials of programming in Python, the language of choice for beginners. Python is used in programming careers for aspiring young developers who are interested in pursuing careers in security, networking, and IoT. Choose Python!',
      image: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1496536626/image15394355032870408899.png",
      enrollLink: "https://www.netacad.com/",
    },
    {
      title: "CCNAv7: Introduction to Network",
      description:
        "Begin preparing for a networking career with this introduction to how networks operate. This first course in the 3-course CCNA series introduces architectures, models, protocols, and networking elements—functions needed to support the operations and priorities of Fortune 500 companies to small innovative retailers. You'll even get the chance to build simple local area networks (LANs) yourself.",
      image: "https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/twitter_thumb_201604_CCNAITN__1_.png",
      enrollLink: "https://www.netacad.com/",
    },
    {
      title: "Introduction to Cyber Security",
      description:
        "Computer security, cybersecurity or information technology security in the protection of computer systems and networks from the theft of or damage to their hardware, software, or electronic data as well as from the disruption or misdirection of the services they provide.",
      image: "https://d1yvg8k7xew6m.cloudfront.net/wp-content/uploads/2021/02/70543618_m-1-2048x1452-1.jpg",
      enrollLink: "https://www.netacad.com/",
    },
    {
      title: "Introduction to Packet Tracer",
      description:
        "Enroll, download and start learning valuable tips and best practices for using Cisco Packet Tracer. This course is designed to help you get started with Packet Tracer and explore its powerful simulation and visualization features. It is a great starting point for anyone interested in networking.",
      image: "https://www.netacad.com/webpages/courses/70d46a4c-f42b-4085-855d-1f2f3fe1aeca/content/en-US/assets/9968e7c33ce3465d9c537504f084ae4a.webp",
      enrollLink: "https://www.netacad.com/",
    },
    {
      title: "IT Essentials",
      description:
        "Begin preparing for a career in IT with the Introduction to IT course. This course covers the fundamentals of computer hardware and software as well as advanced concepts such as security, networking, and the responsibilities of an IT professional. It prepares you for the CompTIA A+ certification.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_D-9Ev0qznmRD7qMvHZSpz7qk4HjJ9a6HQ&s",
      enrollLink: "https://www.netacad.com/",
    },
  ];

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
        heading="Cisco Academy | LNCT Group of Colleges"
        description="Explore Cisco Networking Academy courses and certifications at LNCT."
        image="https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"
      />
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Header Section */}
        <header className="bg-white py-6 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center text-gray-800">About Partnership</h1>
            <p className="text-center text-gray-600 mt-2">
              LNCT signed a Memorandum of Understanding (MoU) with the Cisco to bring the benefits of digital technology to Students.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-6 md:space-y-0 md:space-x-12">
              {/* Cisco Section */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-md">
                <img src="https://gmacs.co.uk/wp-content/uploads/2023/12/net-academy-logo.png" alt="Cisco Networking Academy" className="h-12 mb-4 mx-auto" />
                <p className="text-gray-600 text-sm">
                  Cisco Networking Academy Program is the only flagship Cisco Global CSR program been executed across the World. Cisco Networking Academy transforms the lives of learners, educators and communities through the power of technology, education and career opportunities. Available to anyone, anywhere Cisco Networking Academy provide access to industry-relevant curriculum and content in areas of Networking, Cyber Security, Programming, IoT, Data Science, Linux and General IT are available at zero cost to institutions and students.
                </p>
              </div>
              {/* NIT Foundation Section */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-md">
                <img src="https://niitfoundation.org/wp-content/uploads/2023/10/niitfoundatinLogonew.png" alt="NIT Foundation" className="h-12 mb-4 mx-auto" />
                <p className="text-gray-600 text-sm">
                  Your partner in education, NIT Foundation, an authorized Academy Support Center & Instructor Training Center in collaboration with Cisco Networking Academy, support LNCT to implement the Cisco NetAcad courses in the student's community as part of this collaboration, NIT Foundation will provide the needed access to education and career opportunities as well as increase the number of qualified experts, who are in demand within the ICT industry.
                </p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 italic">
              Whether you're searching for your passion or wanting to embark on a hybrid career, LNCT offers Cisco Networking Self-Learning courses to allow you to explore at your own pace.
            </p>
          </div>
        </header>

        {/* Courses Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Language: English</span>
                      <a
                        href={course.enrollLink}
                        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
                      >
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold">Student Support Service</h4>
                <p className="text-sm mt-2">
                  Check out the PDF <a href="#" className="underline hover:text-gray-300">Link</a> to complete the program assessment and certification. Contact us for more details.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="https://drive.google.com/file/d/1ctUgl1ZB1VCu7qdWwX2tPHFWN6j0MTOi/view?usp=sharing" download className="text-sm underline hover:text-gray-300">
                  PDF Link
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <LnctFooter />
    </>
  );
};

export default CiscoAcademy;