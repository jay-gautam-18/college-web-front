import  { useContext, useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
    import Home1 from '../../../Components/HomeComponets/Home1'
    import LnctFooter from '../../../Components/LnctFooter'
import Loader from '../../Components/Loader'   

const Radio = () => {
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
    const radioItems = [
        {
            title: 'LNCT RADIO ANNOUNCEMENT',
            category: 'Sep 2020',
            audioUrl: '',
        },
        {
            title: 'LNCT RADIO LECTURES',
            category: 'Higher Education',
            audioUrl: '',
        },
        {
            title: 'Management',
            category: 'Higher Education',
            audioUrl: '/audio/management.mp3',
        },
        {
            title: 'The Art of Communication',
            category: 'Higher Education',
            audioUrl: '/audio/communication.mp3',
        },
        {
            title: 'Physics',
            category: 'Higher Education',
            audioUrl: '',
        },
        {
            title: 'E-Learning Lecture',
            category: 'Higher Education',
            audioUrl: '',
        },
        {
            title: 'Chemistry',
            category: 'Higher Education',
            audioUrl: '',
        },
        {
            title: 'Spoken Word',
            category: 'Cultural Episode',
            audioUrl: '/audio/spoken-word.mp3',
        },
        {
            title: 'Episode - Hindi Speech',
            category: 'Spoken Word',
            audioUrl: '',
        },
        {
            title: 'LNCT YT Event 2020',
            category: 'Previous Awards',
            audioUrl: '',
        },
    ];

    const RadioCard = ({ title, category, audioUrl }) => (
        <>
        <Nav/>
        <Home1
        heading={"Join us on 14th & 15th April 2023 at LNCT GROUP for Central India's Largest Environmental, Cultural, Social, Science and Technology Festival!"}
        description={""}
        image={"https://lnct.ac.in/wp-content/uploads/2023/03/SRISHTI-2K23.jpg"}
        
        />
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center space-y-3">
            <img
                src="/placeholder-image.png"
                alt="Thumbnail"
                className="w-32 h-32 object-contain"
            />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{category}</p>
            {audioUrl ? (
                <a
                    href={audioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                >
                    {audioUrl}
                </a>
            ) : (
                <p className="text-red-500 font-medium">Page Not Found</p>
            )}
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">LNCT Radio</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {radioItems.map((item, idx) => (
                    <RadioCard
                        key={idx}
                        title={item.title}
                        category={item.category}
                        audioUrl={item.audioUrl}
                    />
                ))}
            </div>
        </div>
        <LnctFooter/>
        </>
    );
};

export default Radio;