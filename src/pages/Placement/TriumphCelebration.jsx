import Loader from '../../Components/Loader'
import React, { useEffect, useState } from 'react'

import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';
import LnctFooter from '../../Components/LnctFooter';


const TriumphCelebration = () => {
    const [isLoading, setIsLoading] = useState(true);
    const gallery2022 = [
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-1-1-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-8-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-45-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-27-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-50-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-10-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-49-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-1-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-2-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-3-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-4-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-5-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-6-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-11-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-12-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-13-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-14-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-15-1024x683.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-16-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-17-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-18-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-19-300x200.jpeg',
        'https://lnct.ac.in/wp-content/uploads/2022/05/Triumph-2022-The-Placement-Celebration-Event-20-300x200.jpeg',
        
    ];

    const galleryPrevious = [
        'https://lnct.ac.in/wp-content/uploads/2021/05/Triumph-1-150x150.jpg',
        'https://lnct.ac.in/wp-content/uploads/2021/05/Triumph-2-150x150.jpg',
        'https://lnct.ac.in/wp-content/uploads/2021/05/Triumph-3-150x150.jpg',
        'https://lnct.ac.in/wp-content/uploads/2021/05/Triumph-4-150x150.jpg',
        'https://lnct.ac.in/wp-content/uploads/2021/05/Triumph-5-150x150.jpg',
        'https://lnct.ac.in/wp-content/uploads/2021/05/Triumph-6-150x150.jpg',
        'https://lnct.ac.in/wp-content/uploads/2021/05/Triumph-7-150x150.jpg',
        'https://lnct.ac.in/wp-content/uploads/2021/05/Triumph-8-150x150.jpg',
        'https://lnct.ac.in/wp-content/uploads/2021/05/Triumph-9-150x150.jpg',
        
        // ... more images
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
                heading="Triumph Celebration | LNCT Group of Colleges"
                description="Celebrating the success of our students in placements and achievements."
                image="https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"
            />
            <section className="bg-gradient-to-b from-gray-100 to-white text-gray-900">
                {/* Intro */}
                <div className="max-w-6xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
                        Triumph | The Placement Celebration Event
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
                        Triumph is LNCT's annual placement celebration event, honouring the success of students placed in top organizations. It brings together achievers, faculty, and recruiters for a grand celebration of excellence.
                    </p>
                </div>

                {/* Hero */}
                <div
                    className="bg-cover bg-center h-[300px] md:h-[500px] flex items-center justify-center shadow-lg rounded-lg overflow-hidden"
                    style={{
                        backgroundImage: "url('https://i.pinimg.com/736x/1c/8e/48/1c8e48bbd3073c0e41200554751a38cf.jpg')",
                    }}
                >
                    <h2 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-lg animate-fade-in">
                        Triumph 2022
                    </h2>
                </div>

                {/* Gallery 2022 */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Glimpses of Triumph 2022
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {gallery2022.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Triumph 2022 photo ${i + 1}`}
                                className="rounded-lg shadow-lg object-cover w-full h-48 hover:scale-105 transition-transform duration-300"
                            />
                        ))}
                    </div>
                </div>

                {/* Past Events */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Life @ LNCT | Past Triumph Events
                    </h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        <iframe
                            className="w-full md:w-[45%] aspect-video rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            src="https://www.youtube.com/embed/SmwXQCJH5hw"
                            title="Triumph 2k19"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            className="w-full md:w-[45%] aspect-video rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            src="https://www.youtube.com/embed/U4fC4mYvwpc"
                            title="Triumph 2k18"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Gallery of Other Years */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Celebrations Through the Years
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {galleryPrevious.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Previous photo ${i + 1}`}
                                className="rounded-lg shadow-lg object-cover w-full h-26 hover:scale-105 transition-transform duration-300"
                            />
                        ))}
                    </div>
                </div>
            </section>
            <LnctFooter />
        </>
    );
};

export default TriumphCelebration;
