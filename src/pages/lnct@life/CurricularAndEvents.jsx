import LnctFooter from "../../Components/LnctFooter";
import Loader from '../../Components/Loader'
import  { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Home1 from '../../Components/HomeComponets/Home1'

const clubList = [
  "Skill Mastery",
  "Khayaal Club (LNCT Literary Club)",
  "Music Club",
  "Quest Nature Club (Also Present Meditation for a Healthy Mind)",
  "LNCT Photography Club",
  "Web Club",
  "Klic Chapter"
];

const regularActivities = [
  "Meditation",
  "Yoga",
  "Zumba/Dance",
  "Aptitude"
];

const eventCards = [
  {
    title: "Faculty Development Programme on AI in Healthcare & Biomedical Imaging",
    image: "https://lnct.ac.in/wp-content/uploads/2023/06/Faculty-Development-Programme-on-AI-in-Healthcare-Biomedical-Imaging-300x169.jpg",
    date: "June 2023",
    description: "One-day development program for faculty on AI in healthcare and biomedical imaging.",
    link: "#"
  },
  {
    title: "National Startup Meet & Seminar organized by MSME",
    image: "https://lnct.ac.in/wp-content/uploads/2023/06/National-Startup-Meet-Seminar-organized-by-MSME-300x169.jpg",
    date: "June 2023",
    description: "Proud moment! Award at the National Startup Meet & Seminar organized by MSME, GoI.",
    link: "#"
  },
  {
    title: "Dr. Anupam Chouksey Represents India on Global Stage at ILE Geneva",
    image: "https://lnct.ac.in/wp-content/uploads/2023/06/Dr-Anupam-Chouksey-Represents-India-on-Global-Stage-at-ILE-Geneva-300x169.jpg",
    date: "June 2023",
    description: "Dr. Anupam Chouksey Represents India at the Global Annual Meet, Geneva.",
    link: "#"
  },
  {
    title: "10 Square Cricket Championship 2023",
    image: "https://lnct.ac.in/wp-content/uploads/2023/06/10-Square-Cricket-Championship-2023-300x169.jpg",
    date: "June 2023",
    description: "LNCT students proudly hosted the 10 Square Cricket Championship.",
    link: "#"
  },
  {
    title: "Congratulations to our CSE Stars",
    image: "https://lnct.ac.in/wp-content/uploads/2023/06/Congratulations-to-our-CSE-Stars-300x169.jpg",
    date: "June 2023",
    description: "Celebrating the achievements of our CSE students.",
    link: "#"
  },
  {
    title: "Slogan writing competition & Discussion organized by QNC on the theme Beat Plastic Pollution",
    image: "https://lnct.ac.in/wp-content/uploads/2023/06/Slogan-writing-competition-Discussion-organised-by-QNC-on-the-theme-Beat-Plstic-Pollution-300x169.jpg",
    date: "June 2023",
    description: "QNC organized a slogan writing competition and discussion on plastic pollution.",
    link: "#"
  },
  {
    title: "विश्व पर्यावरण दिवस के अवसर पर क्यूएनसी द्वारा जागरूकता रैली",
    image: "https://lnct.ac.in/wp-content/uploads/2023/06/%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5-%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%B0%E0%A4%A3-%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%B8-%E0%A4%95%E0%A5%87-%E0%A4%85%E0%A4%B5%E0%A4%B8%E0%A4%B0-%E0%A4%AA%E0%A4%B0-%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%B0%E0%A4%A3-%E0%A4%B8%E0%A4%82%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%A3-%E0%A4%94%E0%A4%B0-%E0%A4%9C%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A5%82%E0%A4%95%E0%A4%A4%E0%A4%BE-768x512.jpg",
    date: "June 2023",
    description: "QNC organized an awareness rally on World Environment Day.",
    link: "#"
  },
  {
    title: "LNCP Proudly Celebrated World Environment Day",
    image: "https://lnct.ac.in/wp-content/uploads/2023/06/LNCP-Proudly-Celebrated-World-Environment-Day-300x169.jpg",
    date: "June 2023",
    description: "LNCP celebrated World Environment Day with various activities.",
    link: "#"
  },
  {
    title: "Congratulations to the Stars of CSE TGT",
    image: "https://lnct.ac.in/wp-content/uploads/2023/06/Congratulations-to-the-Stars-of-CSE-TGT-300x169.jpg",
    date: "June 2023",
    description: "Celebrating the stars of CSE TGT.",
    link: "#"
  },
  {
    title: "Celebrating Excellence in EEE – Batch 2025",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/EEE-Excellence-2025-300x169.jpg",
    date: "June 2025",
    description: "Celebrating the excellence in EEE for the batch of 2025.",
    link: "#"
  },
  {
    title: "Congratulations to Our CSE AIDS Toppers",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/CSE-AIDS-Toppers-300x169.jpg",
    date: "June 2025",
    description: "Congratulations to our CSE AIDS toppers for their outstanding performance.",
    link: "#"
  },
  {
    title: "A big congratulations to Mr. Keshar Garg, alumni of LNCT (CSE Batch – 2021)",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Keshar-Garg-LNCT-Alumni-300x169.jpg",
    date: "June 2025",
    description: "A big congratulations to Mr. Keshar Garg, alumni of LNCT (CSE Batch – 2021).",
    link: "#"
  },
  {
    title: "Hearty congratulations to the brilliant achievers of VII Semester (Batch 2021–25)",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Brilliant-Achievers-VII-Sem-300x169.jpg",
    date: "June 2025",
    description: "Hearty congratulations to the brilliant achievers of VII Semester (Batch 2021–25).",
    link: "#"
  },
  {
    title: "Heartiest congratulations to Mr. Aditya Jain",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Aditya-Jain-Heartiest-Congrats-300x169.jpg",
    date: "June 2025",
    description: "Heartiest congratulations to Mr. Aditya Jain for his achievements.",
    link: "#"
  },
  {
    title: "A Textbook of Engineering Chemistry Released by LNCT GROUP’s Hon’ble Secretary Dr. Anupam Chouksey Sir",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Engineering-Chemistry-Book-Release-300x169.jpg",
    date: "June 2025",
    description: "A Textbook of Engineering Chemistry released by LNCT GROUP’s Hon’ble Secretary Dr. Anupam Chouksey Sir.",
    link: "#"
  },
  {
    title: "Expert lecture on Road Safety Audit & Pedestrian Safety",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Expert-Lecture-Road-Safety-300x169.jpg",
    date: "June 2025",
    description: "Expert lecture on Road Safety Audit & Pedestrian Safety.",
    link: "#"
  },
  {
    title: "LNCTians Student Jayaditya Malviya Achieves Historic NASA Recognition for Satellite System Solution",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Jayaditya-Malviya-NASA-Recognition-300x169.jpg",
    date: "June 2025",
    description: "LNCTians Student Jayaditya Malviya Achieves Historic NASA Recognition for Satellite System Solution.",
    link: "#"
  },
  {
    title: "Team HEALWAVE from ECE Department Secures First Place at SmartHACK Project Idea Competition",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Team-HEALWAVE-SmartHACK-300x169.jpg",
    date: "June 2025",
    description: "Team HEALWAVE from ECE Department Secures First Place at SmartHACK Project Idea Competition.",
    link: "#"
  },
  {
    title: "When Beats Met Brilliance Rhythm Beats Ignites LNUniverse 2025",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Rhythm-Beats-LNUniverse-2025-300x169.jpg",
    date: "June 2025",
    description: "When Beats Met Brilliance Rhythm Beats Ignites LNUniverse 2025.",
    link: "#"
  },
  {
    title: "Honouring the Innovators at Techniria Prize Distribution at LN Universe 2025",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Techniria-Prize-Distribution-LNUniverse-2025-300x169.jpg",
    date: "June 2025",
    description: "Honouring the Innovators at Techniria Prize Distribution at LN Universe 2025.",
    link: "#"
  },
  {
    title: "Where Confidence Met the Catwalk Ramp Walk at LN Universe 2025",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Catwalk-Ramp-LNUniverse-2025-300x169.jpg",
    date: "June 2025",
    description: "Where Confidence Met the Catwalk Ramp Walk at LN Universe 2025.",
    link: "#"
  },
  {
    title: "Heartiest Congratulations to Dr. Vipin Shrivastava",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Dr-Vipin-Shrivastava-300x169.jpg",
    date: "June 2025",
    description: "Heartiest Congratulations to Dr. Vipin Shrivastava.",
    link: "#"
  },
  {
    title: "LNCT Students Shine as Winners of Lake-city Hackathon",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Lake-city-Hackathon-Winners-300x169.jpg",
    date: "June 2025",
    description: "LNCT Students Shine as Winners of Lake-city Hackathon.",
    link: "#"
  },
  {
    title: "National Seminar on Emerging Trends in Technology and Management",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/National-Seminar-Emerging-Trends-300x169.jpg",
    date: "June 2025",
    description: "National Seminar on Emerging Trends in Technology and Management.",
    link: "#"
  }
];

const CurricularAndEvents = () => {
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
  
  <>
   <Nav/>
        <Home1
        heading={"Join us on 14th & 15th April 2023 at LNCT GROUP for Central India's Largest Environmental, Cultural, Social, Science and Technology Festival!"}
        description={""}
        image={"https://lnct.ac.in/wp-content/uploads/2023/03/SRISHTI-2K23.jpg"}
        
        />
  <div className="bg-white min-h-screen py-10 px-2 md:px-6">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 border-b pb-2">Curricular Activity Events</h2>
    <div className="max-w-4xl mx-auto mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Extra Curricular Activity</h3>
      <div className="mb-2">
        <span className="font-semibold">LNCT Students Clubs</span>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          {clubList.map((club, idx) => (
            <li key={idx}>{club}</li>
          ))}
        </ul>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Regular Extra Curricular Activities</h3>
      <ul className="list-disc list-inside ml-6 text-gray-700 mb-2">
        {regularActivities.map((act, idx) => (
          <li key={idx}>{act}</li>
        ))}
      </ul>
      <p className="text-xs text-gray-500 mt-2">
        The original club list displayed as per the directions of the NBA, NAAC, UGC, and AICTE.<br />
        Different kind of programs (like Guest, Expert, Employee, Fresher, Previous, Farewell) are held.
      </p>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {eventCards.map((event, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center border hover:shadow-xl transition-shadow">
          <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded mb-2" />
          <div className="w-full px-2 pb-2">
            <h3 className="text-base font-semibold text-gray-700 mb-1">{event.title}</h3>
            <p className="text-xs text-gray-500 mb-1">{event.date}</p>
            <p className="text-sm text-gray-600 mb-2">{event.description}</p>
            <a href={event.link} className="text-pink-700 hover:underline text-sm font-medium">Continue Reading &rarr;</a>
          </div>
        </div>
      ))}
    </div>
  </div>
  <LnctFooter/>
  </>
};

export default CurricularAndEvents;
