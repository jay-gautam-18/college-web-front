// TopperWall.jsx
import  { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Home1 from '../../Components/HomeComponets/Home1'
import LnctFooter from '../../Components/LnctFooter'
import Loader from '../../Components/Loader'

const toppers = [
    "https://lnct.ac.in/wp-content/uploads/2025/06/CSE-AIML-768x965.jpg",
    "https://lnct.ac.in/wp-content/uploads/2025/06/EC-240x300.jpg",
    "https://lnct.ac.in/wp-content/uploads/2025/06/Congratulations-to-the-Stars-of-CSE-IoT-768x960.jpg",
    "https://lnct.ac.in/wp-content/uploads/2025/06/Congratulations-to-Our-CSE-AIDS-Toppers-768x965.jpg",
    "https://lnct.ac.in/wp-content/uploads/2025/06/Celebrating-Excellence-in-EEE-%E2%80%93-Batch-2025-768x960.jpg",
    "https://lnct.ac.in/wp-content/uploads/2025/06/Congratulations-to-our-CSE-Stars-768x959.jpg",
    "https://lnct.ac.in/wp-content/uploads/2025/05/Hearty-congratulations-to-the-brilliant-achievers-of-VIII-Semester-Batch-2021%E2%80%9325-768x960.jpg",
    "https://lnct.ac.in/wp-content/uploads/2024/07/Toppers-Wall-1-768x768.jpeg",
    "https://lnct.ac.in/wp-content/uploads/2024/07/Toppers-Wall-2-768x768.jpeg",
    "https://lnct.ac.in/wp-content/uploads/2024/07/Toppers-Wall-3-768x768.jpeg",
    "https://lnct.ac.in/wp-content/uploads/2024/07/Toppers-Wall-4-768x768.jpeg",
    "https://lnct.ac.in/wp-content/uploads/2024/07/Toppers-Wall-5-768x768.jpeg",
    "https://lnct.ac.in/wp-content/uploads/2024/07/Toppers-Wall-6-768x768.jpeg",
    "https://lnct.ac.in/wp-content/uploads/2024/07/Toppers-Wall-7-768x768.jpeg",
    "https://lnct.ac.in/wp-content/uploads/2024/07/Toppers-Wall-8-768x768.jpeg",
    "https://lnct.ac.in/wp-content/uploads/2024/07/Toppers-Wall-9-768x768.jpeg",
];

export default function TopperWall() {
    const [selectedImage, setSelectedImage] = useState(null);
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
    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Nav />
            <Home1 
                image="https://lnct.ac.in/wp-content/uploads/2024/07/Toppers-Wall-1-768x768.jpeg"
                heading="Toppers Wall"
                description="Celebrating the academic excellence and achievements of our outstanding students"
            />
            <section className="max-w-6xl mx-auto px-4 py-16 text-center font-sans text-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Toppers Wall: <span className="text-amber-600">Pinnacle of Excellence</span>
                </h2>
                <div className="w-24 h-1 bg-amber-600 mx-auto mb-10 rounded"></div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {toppers.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Topper banner ${index + 1}`}
                            className="rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
                            onClick={() => handleImageClick(src)}
                        />
                    ))}
                </div>

                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={closeModal}
                    >
                        <div className="relative">
                            <img
                                src={selectedImage}
                                alt="Selected topper"
                                className="rounded-lg shadow-lg max-w-full max-h-full animate-scale-up"
                            />
                            <button
                                className="absolute top-2 right-2 text-white text-2xl font-bold"
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}

                <style jsx>{`
                    @keyframes scale-up {
                        from {
                            transform: scale(0.8);
                            opacity: 0;
                        }
                        to {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }
                    .animate-scale-up {
                        animation: scale-up 0.3s ease-in-out;
                    }
                `}</style>
            </section>
            <LnctFooter />
        </>
    );
}
