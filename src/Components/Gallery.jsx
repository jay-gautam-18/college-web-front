import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const titles = [
  { title1: 'DIGITAL', title2: 'LIBRARY', image: 'https://lnctu.ac.in/wp-content/uploads/2021/05/School-of-Architecture-1-1.jpg', path: '/digital-library' },
  { title1: 'HAPPY', title2: 'CLASSROOM', image: 'https://lnct.ac.in/wp-content/uploads/2022/02/Online-Campus-Preneur-Masterclass-by-Dr.-Vivek-Bindra.jpg', path: '/happy-classroom' },
  { title1: 'HEALTH', title2: 'CARE', image: 'https://lnctu.ac.in/wp-content/uploads/2021/05/Best-Private-University-in-Central-India-1-1.jpg', path: '/health-care' },
  { title1: 'LNCT', title2: 'CANTEEN', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPjiBmlYI__afZWIwdDu-N1W_HYR4EPQjphUbC-4qEn972U62ZqFRlF2QcFBuLEgqh3Y&usqp=CAU', path: '/lnct-canteen' },
  { title1: 'TRANS', title2: 'PORTATION', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfo5mqjGcvmowVQDEUn5bxRqAlODC2L_XDvg&s', path: '/transportation' },
  { title1: 'SPORTS', title2: 'ACADEMY', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BrYX7-FxH-UAx8QsW-08e0IqBPoaiVVZXQ&s', path: '/sports-academy' },
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseMove = e => setPosition({ x: e.clientX, y: e.clientY });

  const handleClick = path => {
    navigate(path);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Campus Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {titles.map((item, idx) => (
          <div
            key={idx}
            className="group relative cursor-pointer px-12 py-14 text-center"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
            onClick={() => handleClick(item.path)}
          >
            <p className="text-lg font-medium text-gray-600">{item.title1}</p>
            <p className="text-2xl font-bold text-gray-800">{item.title2}</p>
            <img src={item.image} alt={`${item.title1} ${item.title2}`} className="md:hidden w-full h-40 object-cover mt-4" />

            {hoveredIndex === idx && (
              <div
                className="fixed z-50 w-64 h-40 rounded-lg shadow-lg overflow-hidden border border-gray-300"
                style={{ top: position.y + 20, left: position.x + 20 }}
              >
                <img
                  src={item.image}
                  alt={`${item.title1} ${item.title2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;