import Nav from "../../Components/Nav";
import Home1 from "../../Components/HomeComponets/Home1";
import LnctFooter from "../../Components/LnctFooter";
import Loader from '../../Components/Loader'
import  { useEffect, useState } from 'react'

const galleryImages = [
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-1-300x199.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-2-300x199.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-3-300x300.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-5-300x300.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-6-300x300.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-7-300x199.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-8-300x199.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-9-300x300.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-10-300x300.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-11-300x199.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-12-300x199.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-13-300x300.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-14-300x300.jpg",
];

const ActivityClasses = () => {
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
        <Nav/>
        <Home1
        heading={"Join us on 14th & 15th April 2023 at LNCT GROUP for Central India's Largest Environmental, Cultural, Social, Science and Technology Festival!"}
        description={""}
        image={"https://lnct.ac.in/wp-content/uploads/2023/03/SRISHTI-2K23.jpg"}
        
        />
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-10 px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-6">
                Activity Classes for Students
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
                <div className="flex-1 text-center">
                    <p className="text-gray-700 max-w-xl mx-auto mb-6 leading-relaxed">
                        LNCT group of colleges focuses on quality education and co-curricular activities to develop the overall personality of students. Activities are conducted year-wise as follows:
                    </p>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">First Year Activities</h3>
                        <ul className="text-blue-700 space-y-2">
                            <li>🧘 Meditation</li>
                            <li>💃 Zumba/Dance</li>
                            <li>🧘 Yoga</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Second Year Activities</h3>
                        <ul className="text-blue-700 space-y-2">
                            <li>🧘 Meditation</li>
                            <li>💃 Zumba/Dance</li>
                            <li>📚 Aptitude</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/target-achievement-3488422-2912012.png"
                        alt="Activity Illustration"
                        className="w-80 h-80 object-contain drop-shadow-lg"
                    />
                </div>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                {galleryImages.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Activity Class ${idx + 1}`}
                        className="rounded-lg shadow-lg object-cover w-full h-44 md:h-48 cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
                        onClick={() => setPopupImg(img)}
                    />
                ))}
            </div>
            {popupImg && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setPopupImg(null)}
                >
                    <div
                        className="relative bg-white rounded-lg shadow-2xl p-4 md:p-6 max-w-3xl w-full flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-700 text-2xl bg-white bg-opacity-80 rounded-full px-3 py-1 hover:bg-gray-200 transition"
                            onClick={() => setPopupImg(null)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <img
                            src={popupImg}
                            alt="Popup"
                            className="rounded-lg max-h-[70vh] w-auto object-contain border-2 border-gray-200"
                        />
                    </div>
                </div>
            )}
        </div>
        <LnctFooter/>
        </>
    );
};

export default ActivityClasses;
