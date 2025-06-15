import { useEffect, useState } from 'react'
import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';
import LnctFooter from '../../Components/LnctFooter';
import Loader from '../../Components/Loader';


const KlicSection = () => {
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
        heading="KLIC Section | LNCT Group of Colleges"
        description="Kalchuri LNCT Group Incubation Center (KLIC): Supporting startups and innovation."
        image="https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"
      />
      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="lg:w-2/3 text-justify">
            <h2 className="text-xl md:text-2xl font-semibold italic text-gray-800 mb-4">
              KALCHURI LNCT GROUP INCUBATION CENTER (KLIC)
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              <strong className="italic">KLIC</strong> is promoted by <strong className="italic">LNCT GROUP OF INSTITUTIONS & UNIVERSITIES</strong> to support Atmanirbhar Bharat, acting as a catalyst to Central India's startup and entrepreneur ecosystem.
              Its primary objective is to create a startup ecosystem and familiarize visionary brains with business aspects of an idea, providing a platform with necessary resources, culture, opportunities, and amenities to grow their startups into business enterprises.
              <br /><br />
              KLIC is a Technology Business Incubation Center connected with Industry Academia. Entrepreneurship is the process of designing, launching, and running a new business – typically starting small as a startup company, offering a product, process, or service.
            </p>
          </div>

          {/* Image / Illustration */}
          <div className="lg:w-1/3 flex justify-center">
            <img
              src="https://lnct.ac.in/wp-content/uploads/2021/04/Kalchuri-LNCT-Incubation-CentreKLIC-2.jpg" // Replace with your image path
              alt="Startup Rocket"
              className="w-60 h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Banner Section */}
        <div className="mt-12 relative">
          <img
            className="w-full h-72 object-cover rounded-md shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center text-white text-center p-4">
            <h3 className="text-lg md:text-2xl font-bold mb-2">KALCHURI LNCT GROUP OF INCUBATION CENTER</h3>
            <p className="mb-4 text-sm md:text-base max-w-2xl">
              This Incubation Center is a mix of Business Incubator and Technology Business Incubator.
            </p>
            <a
              href="https://klic.lnct.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-md"
            >
              Visit Official Website
            </a>
          </div>
        </div>
      </section>
      <LnctFooter />
    </>
  );
};

export default KlicSection;
