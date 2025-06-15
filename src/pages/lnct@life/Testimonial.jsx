import  { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Home1 from '../../Components/HomeComponets/Home1'
import LnctFooter from '../../Components/LnctFooter'
import Loader from '../../Components/Loader' 

const videoData = [
  // Replace these with your actual YouTube embed links and titles
  { title: "Alumni Testimonial | Nakulman Pathak, Saurabh Sahu", embed: "https://www.youtube.com/watch?v=nrQyksJHjog&ab_channel=LNCTBroadcastingChannel" },
  { title: "LNCT Young Co-Founder", embed: "https://www.youtube.com/embed/VIDEO_ID2" },
  { title: "LNCT Testimonial", embed: "https://www.youtube.com/embed/VIDEO_ID3" },
  { title: "Expert Talk | Dr. PC Kumar", embed: "https://www.youtube.com/embed/VIDEO_ID4" },
  { title: "Testimonial | Ms. Shital Gokhale, Mr. Sandeep", embed: "https://www.youtube.com/embed/VIDEO_ID5" },
  { title: "Testimonial | Mr. Krishnakant Vyas", embed: "https://www.youtube.com/embed/VIDEO_ID6" },
  { title: "LNCT Testimonial", embed: "https://www.youtube.com/embed/VIDEO_ID7" },
  { title: "LNCT Testimonial", embed: "https://www.youtube.com/embed/VIDEO_ID8" },
  { title: "Expert Talk | Mr. Soumitra Chakraborty", embed: "https://www.youtube.com/embed/VIDEO_ID9" },
  { title: "Testimonial | Ms. Sudeshna Ghosh", embed: "https://www.youtube.com/embed/VIDEO_ID10" },
  { title: "Testimonial | Mr. Shubham Kumar", embed: "https://www.youtube.com/embed/VIDEO_ID11" },
  { title: "Testimonial | Ms. Shubha Mishra", embed: "https://www.youtube.com/embed/VIDEO_ID12" },
  { title: "Testimonial | Ms. Sharmila Gupta", embed: "https://www.youtube.com/embed/VIDEO_ID13" },
  { title: "Testimonial | Group", embed: "https://www.youtube.com/embed/VIDEO_ID14" }
];

const Testimonial = () => {
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
    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">LNCT Video Blog / Vlog</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {videoData.map((video, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center border hover:shadow-xl transition-shadow">
          <div className="w-full aspect-video rounded overflow-hidden mb-2">
            <iframe
              className="w-full h-56 md:h-64 rounded"
              src={video.embed}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full px-2 pb-2">
            <h3 className="text-base font-semibold text-gray-700 text-center">{video.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
  <LnctFooter/>
  </>
};

export default Testimonial;
