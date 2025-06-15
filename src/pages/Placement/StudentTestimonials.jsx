import Loader from '../../Components/Loader';
import React, { useEffect, useState } from 'react'
import { FaPlayCircle } from "react-icons/fa";
import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';
import LnctFooter from '../../Components/LnctFooter';

const videoIds = [
    'vq_nea9wyJs', 'oeLZ91JBcIA', 'eGZU4fX6BOE',
    'NqVuLwCND2A', 'HY17dVWMWD0', 'cRDhDIP0CC0',
    'R9kWvJCP9NQ', '-GhKIF1GrpA', '3wsty3biZSY',
    '3wsty3biZSY', 'xNysVfg9s5k', 'W8vOg4HRaAM',
    '3s8bL1INi0E', 'SLiIn88Zem8', 'SLiIn88Zem8'
];

const StudentTestimonials = () => {
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
                heading="Student Testimonials | LNCT Group of Colleges"
                description="Hear from our students about their experiences and achievements at LNCT."
                image="https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"
            />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    Student Testimonials
                </h2>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {videoIds.map((id, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow-lg border border-gray-300 bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            <a
                                href={`https://www.youtube.com/watch?v=${id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full aspect-video bg-gray-100"
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                                    alt={`Student Testimonial ${index + 1}`}
                                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                                />
                                <FaPlayCircle className="absolute inset-0 m-auto text-white text-6xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <LnctFooter />
        </>
    );
};

export default StudentTestimonials;
