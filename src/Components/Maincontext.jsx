import React, { createContext, useContext, useMemo } from 'react';

const NavContext = createContext();

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error('useNav must be used within a NavProvider');
  }
  return context;
};

export const NavProvider = ({ children }) => {
  const navItems = useMemo(() => [
    {
      title: 'Home',
      path: '/',
      description: 'Welcome to LNCT Group of Colleges',
    },
    {
      title: 'About',
      path: '/about',
      description: 'Learn about our institution',
    },
    {
      title: 'Colleges',
      path: '/colleges',
      description: 'Explore our colleges',
      subLinks: [
        { title: 'LNCT', path: '/colleges/lnct' },
        { title: 'LNCTS', path: '/colleges/lncts' },
        { title: 'LNCTE', path: '/colleges/lncte' },
        { title: 'LNCT-SR', path: '/colleges/lnct-sr' },
      ],
    },
    {
      title: 'Departments',
      path: '/departments',
      description: 'Our academic departments',
      subLinks: [
        { title: 'Computer Science', path: '/departments/cs' },
        { title: 'Information Technology', path: '/departments/it' },
        { title: 'Electronics', path: '/departments/electronics' },
        { title: 'Mechanical', path: '/departments/mechanical' },
      ],
    },
    {
      title: 'Admission',
      path: '/admission',
      description: 'Admission process and requirements',
    },
    {
      title: 'Placement',
      path: '/placement',
      description: 'Career opportunities and placements',
    },
    {
      title: 'Life at LNCT',
      path: '/life-at-lnct',
      description: 'Campus life and activities',
    },
    {
      title: 'Alumni',
      path: '/alumni',
      description: 'Connect with our alumni network',
    },
    {
      title: 'Contact',
      path: '/contact',
      description: 'Get in touch with us',
    },
  ], []);

  const value = useMemo(() => ({
    navItems,
  }), [navItems]);

  return (
    <NavContext.Provider value={value}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext; 