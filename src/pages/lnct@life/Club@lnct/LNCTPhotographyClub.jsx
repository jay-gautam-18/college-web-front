import Loader from '../../../Components/Loader'
import  { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import Home1 from '../../../Components/HomeComponets/Home1'
import LnctFooter from '../../../Components/LnctFooter'

const galleryImages = [
  // Replace these URLs with your actual club images
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-10.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-9-300x200.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-1-300x164.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-3-300x200.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-2-300x232.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-6-300x187.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-5-300x152.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-4-300x158.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-11-300x200.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-7-300x162.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-8-300x200.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Photography-Club-12-300x211.jpg"
];

const LNCTPhotographyClub = () => {
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
        heading={"Life @ LNCT | Photography Club"}
    description={"Learn, achieve and excel with LNCT Group of colleges"

}
    image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-16-768x512.jpeg"}/>
    <div className="bg-white min-h-screen py-10 px-2 md:px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">Life @ LNCT | Photography Club</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Photography Club ${idx + 1}`}
              className="rounded-lg shadow-md object-cover w-full h-40 md:h-48 cursor-pointer hover:scale-105 transition-transform"
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

export default LNCTPhotographyClub;
