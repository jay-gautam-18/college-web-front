import Loader from '../../../Components/Loader'
import  { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import Home1 from '../../../Components/HomeComponets/Home1'
import LnctFooter from '../../../Components/LnctFooter'

const galleryImages = [
  // Replace with your actual image URLs
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Music-Club-1-150x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Music-Club-2-150x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Music-Club-3-150x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Music-Club-4-150x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Music-Club-5-150x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Music-Club-6-150x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Music-Club-7-150x150.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Music-Club-8-150x150.jpg"
];

const LNCTMusicClub = () => {
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
  return (<>
   <Nav/>
        <Home1
        heading={"Life @ LNCT | LNCT Music Club"}
    description={"Dream, explore and discover with LNCT Group of Colleges and step into a world of endless possibilities!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/Cisco-Net-Acc-768x494.jpg"}/>
    <div className="bg-white min-h-screen py-10 px-2 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 tracking-tight">About The LNCT Music Club</h1>
      <p className="text-center max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        The Music Club at LNCT GROUP has been set up to encourage talent in music—instrumental as well as vocal. This is a student-run club which was formed in the year 2006. Members participate in all the cultural activities of the college. All interested and talented students are encouraged to join as members.
      </p>
      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Members:</h2>
        <div className="text-lg text-gray-800 space-y-1">
          <div><span className="font-bold">Guitarist:</span> Pranjal Sharma; Kartik Rathore; Sagar Meshram</div>
          <div><span className="font-bold">Keyboardist:</span> Aditya Gautam</div>
          <div><span className="font-bold">Singers:</span> Zayed Khan; Akshay Sinha</div>
          <div><span className="font-bold">Band:</span> Aayat</div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Music Club ${idx + 1}`}
              className="rounded-xl shadow-lg object-cover w-full h-48 md:h-56 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setPopupImg(img)}
            />
          ))}
        </div>
      </div>
      {/* Popup Modal */}
      {popupImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setPopupImg(null)}>
          <div className="relative bg-white rounded-lg shadow-2xl p-2 md:p-4 max-w-2xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl bg-white bg-opacity-80 rounded-full px-2 py-1 hover:bg-gray-200 transition"
              onClick={() => setPopupImg(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img src={popupImg} alt="Popup" className="rounded-lg max-h-[70vh] w-auto object-contain border-2 border-gray-200" />
          </div>
        </div>
      )}
    </div>
    <LnctFooter/>
    </>
    
  );
};

export default LNCTMusicClub;
