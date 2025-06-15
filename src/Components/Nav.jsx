import { useContext, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { mainContext } from '../Context/Maincontext';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const { Nav } = useContext(mainContext);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  return (
    <>
      {/* Top Nav Bar */}
      <div className="w-full flex items-center justify-between text-black px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png" alt="Lnct Logo" className="h-10" />
        </div>
        <div className="flex gap-6 items-center">
          <button onClick={() => setMenuOpen(true)} className="flex text-2xl items-center gap-2">
            <RxHamburgerMenu size={20} /> Menu
          </button>
        </div>
      </div>

      {/* Fullscreen Dropdown Menu */}
      <div
        className={`fixed inset-0 bg-black w-screen h-screen  text-white z-50 transform transition-all duration-400 ease-in-out ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-start p-6">
          <img src="https://lnctu.ac.in/wp-content/uploads/2021/05/New-logo.png" alt="Lnct Logo" className="h-10" />
          <button onClick={closeMenu} className="text-white text-3xl flex gap-2 items-center">
            Close <IoClose size={40 } />
          </button>
        </div>

        <div className="flex h-full">
          {/* Left Main Menu */}
          <div className="md:w-1/4 md:pl-12 pl-3 pt-8 md:space-y-6 space-y-3 md:text-4xl text-[20px] font-light">
            {Nav.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveMenu(activeMenu === index ? null : index);
                  setActiveSubMenu(null);
                }}
                className={`block cursor-pointer transition-all duration-300 ease-in-out ${
                  activeMenu === index ? 'text-white border-b border-white' : 'text-gray-400'
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="line ml-3 md:h-full h-1/2 md:w-[2px] w-[0.2px] bg-amber-50"></div>

        
                <div className="md:w-1/3 md:p-12 p-4 transition-all  duration-500 ease-in-out overflow-y-auto scrollbar-hidden max-h-[80vh]">
                {activeMenu !== null && (
                  <div key={activeMenu}>
                  <h2 className="md:text-2xl text-[18px] font-semibold mb-2 flex items-center gap-1">
                    {Nav[activeMenu].title} <span className="text-lg">→</span>
                  </h2>
                  <p className="text-sm text-gray-300 md:mb-6 mb-3 max-w-md">
                    {Nav[activeMenu].description}
                  </p>
                  <ul className="md:space-y-3 space-y-2 font-semibold md:text-xl text-[13px]">
                    {Nav[activeMenu].links.map((link, i) => {
                    const isMobile = window.innerWidth < 768;
                    const isActive = activeSubMenu === i;
                    const hasSubLinks = link.subLinks && link.subLinks.length > 0;

                    return (
                      <li key={i}>
                      {hasSubLinks ? (
                        <button
                        onClick={() => setActiveSubMenu(isActive ? null : i)}
                        className={`w-full text-left flex justify-between items-center hover:underline ${
                          isActive ? 'text-amber-300' : ''
                        }`}
                        >
                        {link.label}
                        <span className=' block md:hidden'>{isActive ? '▲' : '▼'}</span>
                        </button>
                      ) : (
                        <Link
                        to={link.path}
                        className="hover:underline"
                        onClick={closeMenu}
                        >
                        {link.label}
                        </Link>
                      )}

                      {isMobile && isActive && hasSubLinks && (
                        <ul className="pl-4 mt-2 md:hidden space-y-2 text-sm text-gray-300 overflow-hidden animate-slide-down">
                        {link.subLinks.map((subLink, j) => (
                          <li key={j}>
                          <Link to={subLink.path} onClick={closeMenu} className="hover:underline">
                            {subLink.label}
                          </Link>
                          </li>
                        ))}
                        </ul>
                      )}
                      </li>
                    );
                    })}
                  </ul>
                  </div>
                )}
                </div>
          <div className="md:w-1/3 md:p-12 md:block  hidden p-4 transition-all duration-500 ease-in-out">
            {activeMenu !== null &&
              activeSubMenu !== null &&
              Nav[activeMenu].links[activeSubMenu]?.subLinks?.length > 0 && (
                <div key={`${activeMenu}-${activeSubMenu}`}>
                  <h2 className="md:text-3xl text-[15px] font-semibold mb-2 flex items-center gap-1">
                    {Nav[activeMenu].links[activeSubMenu].label} <span className="text-lg">→</span>
                  </h2>
                  <ul className="md:space-y-4 space-y-2 font-semibold md:text-lg text-[13px]">
                    {Nav[activeMenu].links[activeSubMenu].subLinks.map((subLink, i) => (
                      <li key={i}>
                        <Link to={subLink.path} onClick={closeMenu} className="hover:underline">
                          {subLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>

        {/* Footer Links */}
        <div className="absolute bottom-0 left-0 w-full bg-black md:px-12 px-3.5 md:py-4 py-2.5 border-t border-gray-700 md:text-sm text-[11.5px] flex flex-wrap md:gap-6 gap-3 text-white font-semibold">
          <span>Important links →-effective</span>
          <a href="https://lnct.ac.in/national-conference" className="hover:text-blue-600">National-Conference</a>
          <a href="https://lnct.ac.in/the-national-institutional-ranking-framework/" className="hover:text-blue-600">Nirf 2025</a>
          <a href="https://lnct.ac.in/hostel-allotment/" className="hover:text-blue-600">Hostel-allotment</a>
          <a href="https://lnct.ac.in/corporate-social-responsibility/" className="hover:text-blue-600">csr</a>
          <a href="https://lnct.ac.in/icmmci-2022/" className="hover:text-blue-600">icmmci-2022</a>
          <a href="https://admissions.lnct.ac.in/" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
            <span>ADMISSION 2025-2026</span>
          </a>
          <a href="https://lnct.ac.in/vc.pdf" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
            <span>Voice of lnct</span>
          </a>
          <a href="http://lnctbhopal.in/" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
            <span>Lnct Bhopal</span>
          </a>
          <a href="https://lncpbhopal.in/" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
            <span>lncp Bhopal</span>
          </a>
          <a
            href="https://lnct.ac.in/wp-content/uploads/2021/04/Lakshmi-Narain-College-of-Technology-ISTE-Certificate.pdf"
            onClick={closeMenu}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Tie Ups</span>
          </a>
          <span>Emergency</span>
        </div>
      </div>
    </>
  );
};

export default Nav;