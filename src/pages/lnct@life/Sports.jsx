import  { useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Home1 from '../../Components/HomeComponets/Home1'
import LnctFooter from '../../Components/LnctFooter'
import Loader from '../../Components/Loader'   

const Sports = () => {
    const facilities = [
        "Cricket Ground",
        "Basketball Court",
        "Football Field",
        "Tennis Court",
        "Indoor Games",
        "Volleyball Court",
    ];

    const imageUrls = [
        "https://lnct.ac.in/wp-content/uploads/2021/12/Sports-LNCT-1-1.jpeg",
        "https://lnct.ac.in/wp-content/uploads/2021/12/Sports-LNCT-6-1.jpeg",
        "https://lnct.ac.in/wp-content/uploads/2021/12/Sports-LNCT-2.jpeg",
        "https://lnct.ac.in/wp-content/uploads/2021/12/Sports-LNCT-12.jpeg"
    ];

    const news = [
        {
            title: "10 Square Cricket Championship 2025",
            date: "June 12, 2025",
            image: "https://lnct.ac.in/wp-content/uploads/2025/06/10-Square-Cricket-Championship-2025-768x512.jpg",
            description: "LNCT Group of Colleges proudly hosted the 23rd Junior & Senior National 10 Square Cricket...",
            link: "https://lnct.ac.in/10-square-cricket-championship-2025/"
        },
        {
            title: "6th M.P State Senior & Junior Rugby Championship 2024–25",
            date: "April 4, 2025",
            image: "https://lnct.ac.in/wp-content/uploads/2025/04/6th-M.P.-State-Senior-Junior-Rugby-Championship-2024%E2%80%9325-768x512.jpg",
            description: "6th M.P. State Senior & Junior Rugby Championship 2024–25 Kicks Off with High Energy and...",
            link: "https://lnct.ac.in/6th-m-p-state-senior-junior-rugby-championship-2024-25/"
        },
        {
            title: "3rd Faculty Olympiad – Where Passion Meets Play",
            date: "March 8, 2025",
            image: "https://lnct.ac.in/wp-content/uploads/2025/03/3rd-Faculty-Olympiad-%E2%80%93-Where-Passion-Meets-Play-768x512.jpg",
            description: "From lecture halls to the playing field, our esteemed faculty and staff are showcasing their...",
            link: "https://lnct.ac.in/3rd-faculty-olympiad-where-passion-meets-play/"
        },
    ];

    const rawVideos = [
        "https://youtu.be/nGRWJI61Xy8",
        "https://youtu.be/qqG0g8G4MXM",
        "https://youtu.be/sts7UwPqeK8",
        "https://youtu.be/LoVvfxs3Ims",
        "https://youtu.be/kdx_wOpq6VM",
        "https://youtu.be/w53XbuSkwRw",
        "https://youtu.be/EJNq_6uathk",
        "https://youtu.be/KHPTEy8CAM0",
        "https://youtu.be/LGlkhtELz1Q",
        "https://youtu.be/zH6cljpk54k",
        "https://youtu.be/WrwmI0B51ng",
        
    ];

    // Converts youtu.be or watch?v=... into embed format
    const convertToEmbedUrl = (url) => {
        const match = url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]+)/);
        return match ? `https://www.youtube.com/embed/${match[1]}` : url;
    };

    const videos = rawVideos.map(convertToEmbedUrl);
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
        heading={"Join us on 14th & 15th April 2023 at LNCT GROUP for Central India's Largest Environmental, Cultural, Social, Science and Technology Festival!"}
        description={""}
        image={"https://lnct.ac.in/wp-content/uploads/2023/03/SRISHTI-2K23.jpg"}
        
        />
        <main className="bg-gray-100 text-gray-900">
            <section className="max-w-5xl mx-auto px-6 py-12 text-center">
                <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Sports @ LNCT</h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    At LNCT University, we believe in nurturing a sound mind and body.
                    Our sports facilities and events are designed to promote holistic
                    personality development and physical well-being.
                </p>
            </section>

            <div className="max-w-4xl mx-auto px-6 py-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Facilities</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {facilities.map((item, i) => (
                        <li key={i} className="text-lg">{item}</li>
                    ))}
                </ul>
            </div>

            <div className="py-8 bg-white">
                <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Latest Sports News & Events</h2>
                <div className="flex justify-center gap-6 flex-wrap">
                    {imageUrls.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt="Sport highlight"
                            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg"
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
                {news.map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden block"
                    >
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                            <div className="text-xs text-gray-500 flex items-center gap-2">
                                <span>👤 admin</span>
                                <span>📅 {item.date}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <section className="py-12 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Video Highlights</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {videos.slice(0, 2).map((url, i) => (
                        <iframe
                            key={i}
                            className="w-full h-64 rounded-lg shadow-lg"
                            src={url}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {videos.slice(2).map((url, i) => (
                        <iframe
                            key={i}
                            className="w-full h-40 rounded-lg shadow-md"
                            src={url}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    ))}
                </div>
            </section>
        </main>
        <LnctFooter/>
        </>
    );
};



export default Sports;
