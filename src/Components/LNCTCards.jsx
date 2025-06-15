import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const cardData = [
  {
    title: "Under Graduate",
    subtitle: "Undergraduate Programme",
    img: "https://admissions.lnct.ac.in/images/UG.webp", // Replace with your image path
    label: "Under Graduate >",
    content: (
      <ul className="list-disc ml-4">
        <li>B.TECH in Civil Engineering</li>
        <li>B.TECH in Computer Science and Engineering</li>
        <li>B.TECH in Electrical and Electronics Engineering</li>
        <li>B.TECH in Electrical Engineering</li>
        <li>B.TECH in Electronics and Communication Engineering</li>
        <li>B.TECH in Advanced Communication Technology – Based on 5G</li>
        <li>B.TECH in Computer Science (Data Science)</li>
        <li>B.TECH in Computer Science (Cyber Security)</li>
        <li>B.TECH in Computer Science (IoT & Cyber Security incl. Blockchain)</li>
        <li>B.TECH in Mechanical Engineering</li>
      </ul>
    ),
  },
  {
    title: "Post Graduate",
    subtitle: "Post-Graduate Programme",
    img: "https://admissions.lnct.ac.in/images/PG.webp",
    label: "Post Graduate >",
    content: (
      <ul className="list-disc ml-4">
        <li>M.TECH in Computer Science and Engineering</li>
        <li>M.TECH in Construction Technology & Management</li>
        <li>M.TECH in Structural Engineering</li>
        <li>M.TECH in Power Electronics</li>
        <li>M.TECH in Thermal Engineering</li>
        <li>M.TECH in VLSI Design</li>
        <li>MBA</li>
        <li>MCA</li>
      </ul>
    ),
  },
  {
    title: "Placement",
    subtitle: "Offers 1500+ Students of 2024 Batch",
    img: "https://admissions.lnct.ac.in/images/1.webp",
    label: "Placement >",
    content: (
      <ul className="list-disc ml-4">
        <li>Top Package: 11.12 L CTC – Highest salary offered</li>
        <li>Offers for 2024 Batch: 1600+</li>
        <li>Total Offers in Last 5 Years: 9877+</li>
        <li>Offers above 10 Lakhs: 208+</li>
        <li>NIRF All India Rank: 171</li>
        <li>Top Recruiters: 500+</li>
        <li>Patent Publications: 191+</li>
        <li>Ph.D. Faculties: 188+</li>
        <li>3000+ LNCTians Serving Globally</li>
        <li>85% Average Placement in 10 Years</li>
        <li>6.08 LPA Average CTC</li>
        <li>Top Performer for the State for Last 13 Years</li>
        <li>1st Self-Financed Institute in M.P. Accredited by Amdocs</li>
      </ul>
    ),
  },
  {
    title: "Why LNCT?",
    subtitle: "Why LNCT ?",
    img: "https://admissions.lnct.ac.in/images/Why.webp",
    label: "Why LNCT >",
    content: (
      <ul className="list-disc ml-4">
        <li>6th Times - Accredited by NBA</li>
        <li>32+ Years of Academic Excellence</li>
        <li>Highest Chancellor’s Awards & Placements in Central India</li>
        <li>188+ Ph.D. Faculties for Academic Excellence</li>
        <li>Highest Patents Filed in State in last 3 years</li>
        <li>Modern Labs with AV facilities for 360° learning</li>
        <li>Producing National & International Players in various sports</li>
      </ul>
    ),
  },
];


const Card = ({ title, subtitle, img, label, children, isOpen, onToggle }) => {
    return (
        <div className="relative  rounded-xl shadow-lg border overflow-hidden flex flex-col h-auto">
            {/* Image area */}
            <div className="relative h-[37.5vh] w-full">
                <img
                    src={img}
                    alt={title}
                    className="object-cover w-full h-full"
                />
            </div>
            {/* Label and Arrow */}
            <div className="flex items-center text-white justify-between px-4 py-2 bg-black hover:bg-transparent hover:text-black">
                <span className=" font-medium">{label}</span>
                <button
                    className="ml-2 "
                    onClick={onToggle}
                    aria-label={isOpen ? "Collapse" : "Expand"}
                >
                    {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                </button>
            </div>
            {/* Dropdown with transition */}
            <div
                className={` px-4 overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                    maxHeight: isOpen ? 500 : 0,
                    paddingTop: isOpen ? 16 : 0,
                    paddingBottom: isOpen ? 16 : 0,
                    opacity: isOpen ? 1 : 0,
                }}
            >
                {isOpen && (
                    <div className="text-sm leading-relaxed text-gray-800">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};



export default function LNCTCards() {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <div className="max-w-5xl mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardData.map((card, idx) => (
                <Card
                    key={idx}
                    title={card.title}
                    subtitle={card.subtitle}
                    img={card.img}
                    label={card.label}
                    isOpen={openIdx === idx}
                    onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                    {card.content}
                </Card>
            ))}
        </div>
    );
}
