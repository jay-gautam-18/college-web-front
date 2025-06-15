import  { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import Home1 from '../../../Components/HomeComponets/Home1'
import LnctFooter from '../../../Components/LnctFooter'
import Loader from '../../../Components/Loader'

const eventCards = [
  {
    title: "Slogan writing competition & Discussion organised by QNC on the theme Beat Plastic Pollution",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/Slogan-writing-competition-Discussion-organised-by-QNC-on-the-theme-Beat-Plstic-Pollution-300x169.jpg",
    date: "June 2025",
    description: "QNC organized a slogan writing competition and discussion on plastic pollution.",
    link: "https://lnct.ac.in/category/quest-nature-club/"
  },
  {
    title: "विश्व पर्यावरण दिवस के अवसर पर क्यूएनसी द्वारा जागरूकता रैली",
    image: "https://lnct.ac.in/wp-content/uploads/2025/06/%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5-%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%B0%E0%A4%A3-%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%B8-%E0%A4%95%E0%A5%87-%E0%A4%85%E0%A4%B5%E0%A4%B8%E0%A4%B0-%E0%A4%AA%E0%A4%B0-%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%B0%E0%A4%A3-%E0%A4%B8%E0%A4%82%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%A3-%E0%A4%94%E0%A4%B0-%E0%A4%9C%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A5%82%E0%A4%95%E0%A4%A4%E0%A4%BE-768x512.jpg",
    date: "June 2025",
    description: "QNC organized an awareness rally on World Environment Day.",
    link: "https://lnct.ac.in/%e0%a4%b5%e0%a4%bf%e0%a4%b6%e0%a5%8d%e0%a4%b5-%e0%a4%aa%e0%a4%b0%e0%a5%8d%e0%a4%af%e0%a4%be%e0%a4%b5%e0%a4%b0%e0%a4%a3-%e0%a4%a6%e0%a4%bf%e0%a4%b5%e0%a4%b8-%e0%a4%95%e0%a5%87-%e0%a4%85%e0%a4%b5/"
  },
  {
    title: "World Earth Day 2025 celebrated by QNC",
    image: "https://lnct.ac.in/wp-content/uploads/2025/04/World-Earth-Day-2025-celebrated-by-QNC-768x512.jpg",
    date: "April 2025",
    description: "QNC celebrated World Earth Day with various activities and awareness programs.",
    link: "https://lnct.ac.in/world-earth-day-2025-celebrated-by-qnc/"
  }
];

const galleryImages = [
  // Replace with your actual image URLs
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-1-300x225.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-2-300x225.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-3-300x200.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-5-300x169.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-6-300x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-4-300x200.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-8-300x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-7-300x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-9-300x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-11-300x225.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-10-300x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-12-300x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-15-300x300.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-13-300x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-14-300x225.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-16-300x225.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-19-300x225.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-20-300x225.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-22-300x225.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-21-300x225.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-23-300x225.jpg"
];

const QuestNatureClub = () => {
  const [popupImg, setPopupImg] = useState(null);
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
        <Nav />
        <Home1 
            image="https://lnct.ac.in/wp-content/uploads/2021/04/Quest-Nature-Club-1-300x225.jpg"
            heading="Quest Nature Club"
            description="Promoting nature conservation and environmental protection for sustainable development"
        />
        <div className="bg-gray-50 min-h-screen py-10 px-2 md:px-6 relative">
            {/* Hero Section */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-10 border-t-8 border-green-600">
                <h1 className="text-3xl md:text-4xl font-extrabold text-center text-green-700 mb-2 tracking-tight">Quest Nature Club <span className="text-base font-medium text-gray-500">(Affiliated to WWF India)</span></h1>
                <p className="text-gray-700 text-center max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
                    Quest Nature Club (QNC) is an environment club initiative at Lakshmi Narain College of Technology (LNCT) Bhopal. It is established with the key involvement and enthusiasm of LNCT's nature lovers as a platform for the dissemination of knowledge and awareness towards care and conservation of the planet and biodiversity. QNC is registered with the WWF (World Wide Fund for Nature) India. The club is involved in various activities like awareness rallies, slogan writing, bird watching, and more. The club is guided by Dr. Shweta Soni as the faculty in-charge and is actively a channel of environment awareness under the guidance of Dr. Ashish Upadhyay, Department of Biotechnology (Chemistry).
                </p>
            </div>

            {/* Objectives & Mission */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-500">
                    <h2 className="text-2xl font-bold text-green-700 mb-3">Objectives</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Raising awareness towards biodiversity, ecosystems and landscapes.</li>
                        <li>Motivating sustainable consumption and production for sustainable use of natural resources and control of waste/loss.</li>
                        <li>Encouraging the involvement of young people in the sustainable management of environmental resources.</li>
                        <li>Promoting participation of all kinds of society in nature conservation and environmental protection through environmental education, awareness, and action.</li>
                        <li>Encouraging responsible people to be engaged in development planning, policy and protection.</li>
                    </ul>
                </div>
                <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-500">
                    <h2 className="text-2xl font-bold text-green-700 mb-3">Mission</h2>
                    <p className="text-gray-700">
                        Promotion of nature conservation and environmental protection at the human level for sustainable and equitable development.
                    </p>
                </div>
            </div>

            {/* Activities */}
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 mb-10 border-l-4 border-green-500">
                <h2 className="text-2xl font-bold text-green-700 mb-3">Activities</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Organizing awareness and sensitization campaigns</li>
                    <li>Tree plantation and biodiversity conservation drives</li>
                    <li>Workshops, competitions, and educational programs for the general public as well as students</li>
                    <li>Organizing rallies, slogan writing, essay writing, debates, group discussions, stage, workshops, poster making, talk shows, writing slogans, writing stories, reports, portfolios amongst the students</li>
                    <li>Organizing bird watching, field visits, and nature walks</li>
                    <li>Organizing quizzes, competitions, and exhibitions</li>
                    <li>Organizing technical sessions & environmental technical related club activities</li>
                </ul>
            </div>

            {/* Latest Events */}
            <div className="max-w-5xl mx-auto mb-10">
                <h2 className="text-2xl font-bold text-pink-700 mb-6 border-b-2 border-pink-200 pb-2">Latest Event</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {eventCards.map((event, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border hover:shadow-2xl transition-shadow">
                            <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
                            <div className="p-4 flex-1 flex flex-col">
                                <span className="inline-block bg-pink-600 text-white text-xs px-3 py-1 rounded-full mb-2 font-semibold">Latest Event</span>
                                <h3 className="text-lg font-bold text-gray-800 mb-1">{event.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                                <a href={event.link} className="mt-auto text-pink-700 hover:underline text-sm font-medium">Continue Reading &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery */}
            <div className="max-w-5xl mx-auto mb-10">
                <h2 className="text-2xl font-bold text-green-700 mb-6 border-b-2 border-green-200 pb-2">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`QNC Gallery ${idx + 1}`}
                            className="rounded-lg shadow-md object-cover w-full h-40 hover:scale-105 transition-transform cursor-pointer"
                            onClick={() => setPopupImg(img)}
                        />
                    ))}
                </div>
            </div>

            {/* Popup Modal */}
            {popupImg && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-12" onClick={() => setPopupImg(null)}>
                    <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-30 rounded-full px-2 py-1 hover:bg-opacity-80 transition"
                            onClick={() => setPopupImg(null)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <img src={popupImg} alt="Popup" className="rounded-lg shadow-2xl max-h-[80vh] w-auto object-contain border-4 border-white" />
                    </div>
                </div>
            )}
        </div>
        <LnctFooter />
    </>
);
};

export default QuestNatureClub;
