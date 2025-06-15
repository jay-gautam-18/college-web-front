// EngineersOlympic.jsx
import  { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Home1 from '../../Components/HomeComponets/Home1'
import LnctFooter from '../../Components/LnctFooter'
import Loader from '../../Components/Loader'

const events = [
    {
        category: "Sports",
        items: ["Basketball", "Volleyball", "Cricket", "Athletics", "Mini Marathon"]
    },
    {
        category: "eSports",
        items: ["BGMI", "Valorant", "CS:GO", "FIFA", "Chess"]
    },
    {
        category: "Cultural",
        items: ["Dance", "Music", "Drama", "Art", "Photography"]
    },
    {
        category: "Technical",
        items: ["Robotics", "Coding", "Quiz", "Debate", "Project Showcase"]
    }
];

const mediaCoverage = Array.from({ length: 6 }, (_, i) => `/images/olympic/media-${i + 1}.jpg`);
const instagramEmbeds = [
    "https://www.instagram.com/p/embed1",
    "https://www.instagram.com/p/embed2",
    "https://www.instagram.com/p/embed3"
];

export default function EngineersOlympic() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const closePopup = () => {
        setSelectedImage(null);
    };
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
                image="https://lnct.ac.in/wp-content/uploads/2025/04/final_poster_page-0001-768x518.jpg"
                heading="Engineer's Olympic"
                description="Celebrating skills, strength, and spirit at LNCT Group of Colleges"
            />
            <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800 font-sans">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
                    Engineer's Olympic | <span className="text-blue-700">LNCT Group of Colleges</span>
                </h2>
                <div className="w-24 h-1 bg-blue-700 mx-auto mb-10 rounded"></div>

                {/* Navigation Tabs */}
                <div className="flex justify-center space-x-4 mb-8">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-6 py-2 rounded-lg transition-colors ${
                            activeTab === 'overview' 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('events')}
                        className={`px-6 py-2 rounded-lg transition-colors ${
                            activeTab === 'events' 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                    >
                        Events
                    </button>
                    <button
                        onClick={() => setActiveTab('gallery')}
                        className={`px-6 py-2 rounded-lg transition-colors ${
                            activeTab === 'gallery' 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                    >
                        Gallery
                    </button>
                </div>

                {/* Overview Section */}
                {activeTab === 'overview' && (
                    <div className="md:flex gap-6 mb-10">
                        <img
                            src="https://lnct.ac.in/wp-content/uploads/2025/04/final_poster_page-0001-768x518.jpg"
                            alt="Engineer's Olympic Poster"
                            className="rounded-xl w-full md:w-1/2 object-cover shadow hover:shadow-xl transition-shadow"
                        />
                        <div className="md:w-1/2 space-y-4 text-justify text-sm md:text-base">
                            <p>
                                LNCT Group of Colleges presents the 8th Engineer's Olympic 2024 — a grand celebration of skills, strength, and spirit.
                                Students from across LNCT campuses come together to showcase their talents in a variety of sports and intellectual challenges.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">Key Highlights</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Inter-campus competitions with 5000+ participants</li>
                                    <li>Cash prizes worth ₹5 Lakhs</li>
                                    <li>Professional sports equipment and facilities</li>
                                    <li>Expert judges and referees</li>
                                </ul>
                            </div>
                            <p>
                                Participants will be honored with prizes, medals, and certification recognizing their performance in respective events.
                                It's a platform for both celebration and self-discovery.
                            </p>
                        </div>
                    </div>
                )}

                {/* Events Section */}
                {activeTab === 'events' && (
                    <div className="grid md:grid-cols-2 gap-6">
                        {events.map((category, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-semibold text-blue-800 mb-4">{category.category}</h3>
                                <ul className="space-y-2">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <span className="text-blue-600 mr-2">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {/* Gallery Section */}
                {activeTab === 'gallery' && (
                    <>
                        <h3 className="text-2xl font-semibold mb-6 text-orange-600">Media Coverage of 8th Engineer's Olympic</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-14">
                            {mediaCoverage.map((src, i) => (
                                <img
                                    key={i}
                                    src={'https://lnct.ac.in/wp-content/uploads/2025/04/1.jpg'}
                                    alt={`Media clip ${i + 1}`}
                                    className="rounded-lg shadow hover:scale-105 transition-transform cursor-pointer"
                                    onClick={() => handleImageClick(src)}
                                />
                            ))}
                        </div>

                        <h3 className="text-2xl font-semibold mb-6 text-orange-600">Social Media Feeds</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {instagramEmbeds.map((url, i) => (
                                <iframe
                                    key={i}
                                    src={url}
                                    title={`Instagram post ${i + 1}`}
                                    className="w-full aspect-[9/16] border rounded-md shadow-lg hover:shadow-xl transition-shadow"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                    loading="lazy"
                                ></iframe>
                            ))}
                        </div>
                    </>
                )}

                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative">
                            <img
                                src={selectedImage}
                                alt="Selected Media"
                                className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                            />
                            <button
                                onClick={closePopup}
                                className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </section>
            <LnctFooter />
        </>
    );
}
