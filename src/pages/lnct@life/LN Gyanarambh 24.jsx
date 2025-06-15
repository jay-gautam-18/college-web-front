import  { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Home1 from '../../Components/HomeComponets/Home1'
import LnctFooter from '../../Components/LnctFooter'
import Loader from '../../Components/Loader'

/**
 * LN Gyanarambh 24 – Orientation‑event landing section
 * ---------------------------------------------------
 * ‣ Fully responsive & accessible
 * ‣ Tailwind CSS utility classes only (no external CSS)
 * ‣ Replace the placeholder image/video IDs with real assets
 */

/* ----------------------------------
    ↘ static demo data (replace freely)
-----------------------------------*/
const accordionItems = [
  { label: "Induction Schedule 2024", link: "#" },
  { label: "Registration Link", link: "https://docs.google.com/forms/d/e/1FAIpQLSevEAlAaK9sfO-hlVO2zOXCjtzxYpnX9zoykGSnWTNnjmhL1Q/viewform" },
  { label: "Bus Route", link: "https://lnct.ac.in/wp-content/uploads/2024/09/LNCT-ROUTE-2024.pdf" },
  { label: "Do's & Don'ts in Induction", link: "https://lnct.ac.in/wp-content/uploads/2024/09/dos-and-dons-for-induction-2024.pdf" },
  { label: "Hostel", link: "https://lnct.ac.in/wp-content/uploads/2024/09/Hostel-list.pdf" },
  { label: "Where to Bring", link: "https://lnct.ac.in/wp-content/uploads/2023/09/Check-list.pdf" },
];

const galleryImages = [
  "https://lnct.ac.in/wp-content/uploads/2024/09/0-1-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/1-1-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/2-1-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/4-1-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/5-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/6-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/7-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/8-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/9-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/Gayanarambh-1-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/Gayanarambh-2-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/Gayanarambh-3-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/Gayanarambh-4-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/Gayanarambh-5-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/Gayanarambh-6-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/Gayanarambh-7-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/Gayanarambh-8-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/Gayanarambh-9-300x200.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2024/09/Gayanarambh-10-300x200.jpeg",


  ...Array.from({ length: 0 }, (_, i) => `/images/gyanarambh/frame-${i + 1}.jpg`)
];

const videoIds = [
  "V8n575sCVsA",
  "9TUFQ7DhLQk",
  "W_bTvoZhTJI",
  "xWnsMDfodIo"
  
];

/* -------------------------------------------------
    ↘ Root component (export default)
--------------------------------------------------*/
export default function LNGyanarambh24() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);
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
     <section className="max-w-6xl mx-auto px-6 py-16 font-sans text-gray-800">
        {/* ───────────────────────── Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-gray-900">
             Gyanarambh&nbsp;<span className="text-indigo-600">2024</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
             Where Bright Futures Begin
          </p>
          <span className="mt-6 block w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
        </header>

        {/* ───────────────────────── Hero */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Poster */}
          <img
             src="https://lnct.ac.in/wp-content/uploads/2021/05/0-1-768x768.jpeg"
             alt="Welcome poster"
             className="rounded-xl shadow-xl w-full hover:scale-105 transition-transform duration-300"
          />

          {/* Copy */}
          <article className="prose lg:prose-lg max-w-none text-gray-700">
             <p>
                Immerse yourself in the vibrant culture and traditions of{" "}
                <strong>LNCT</strong> during this orientation. From day‑one, explore
                cutting‑edge innovation, mentorship, and a network that champions
                your passion.
             </p>
             <p>
                Begin this <em>transformative journey</em> with a curated onboarding
                program designed to accelerate your growth. Discover academic
                resources, leadership clubs, and global opportunities. Expect
                keynote sessions from industry stalwarts, campus discovery tours,
                and team‑building challenges that ignite curiosity.
             </p>
             <p>
                Welcome to the start of an incredible chapter as a{" "}
                <strong>Lancer</strong>—where bright futures begin.
             </p>
          </article>
        </div>

        {/* ───────────────────────── Resources + Illustration */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Accordion */}
          <div className="w-full divide-y divide-gray-200 border border-gray-200 rounded-xl shadow-lg">
             {accordionItems.map((item, idx) => (
                <div key={idx} className="bg-white">
                  <button
                     onClick={() => toggle(idx)}
                     className="w-full flex items-center justify-between p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  >
                     <span className="font-medium text-left text-gray-800">
                        {item.label}
                     </span>
                     <svg
                        className={`h-5 w-5 transform transition-transform duration-200 ${
                          openIdx === idx ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                     </svg>
                  </button>
                  {openIdx === idx && (
                     <div className="p-5 pt-0 text-sm text-gray-600">
                        <a
                          href={item.link}
                          className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-indigo-600"
                        >
                          Download / View
                          <svg
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24"
                             fill="currentColor"
                             className="h-4 w-4"
                          >
                             <path d="M12 5v14m7-7H5" />
                          </svg>
                        </a>
                     </div>
                  )}
                </div>
             ))}
          </div>

          {/* Illustration & text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/user-rating-illustration-download-in-svg-png-gif-file-formats--experience-product-review-shopping-customer-feedback-isometric-pack-people-illustrations-4025964.png?f=webp"
                alt="Future illustration"
                className="w-72 mb-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
             />
             <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                Where Bright Futures Begin
             </h3>
             <p className="text-sm leading-relaxed max-w-md text-gray-600">
                Innovate fearlessly. From mastering the latest technology to honing
                leadership acumen, LNCT empowers you to craft the career—and impact—
                you envision.
             </p>
          </div>
        </div>

        {/* ───────────────────────── Gallery */}
        <section className="mb-24">
          <h3 className="text-center text-3xl font-semibold mb-2 text-gray-900">
             Glimpses of Gyanarambh 2024
          </h3>
          <p className="text-center text-sm text-gray-500 mb-8">
             Orientation Program — July 25, 2024
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
             {galleryImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Gyanarambh frame ${idx + 1}`}
                  className="rounded-lg object-cover h-40 w-full shadow-md hover:scale-105 transition-transform duration-300"
                />
             ))}
          </div>
        </section>

        {/* ───────────────────────── Live videos */}
        <section>
          <h3 className="text-center text-3xl font-semibold mb-2 text-gray-900">
             Live — Gyanarambh 2024
          </h3>
          <p className="text-center text-sm text-gray-500 mb-8">
             Orientation Program — July 25, 2024
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
             {videoIds.map((id, idx) => (
                <div
                  key={idx}
                  className="aspect-video w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <iframe
                     src={`https://www.youtube.com/embed/${id}`}
                     title={`Orientation video ${idx + 1}`}
                     allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     className="w-full h-full"
                  />
                </div>
             ))}
          </div>
        </section>
     </section>
     <LnctFooter/>
     </>
  );
}