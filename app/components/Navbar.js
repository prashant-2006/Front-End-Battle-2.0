'use client';

import { useEffect, useState } from 'react';
import {
  FaBox,
  FaCogs,
  FaChartPie,
  FaBookOpen,
  FaCalendarAlt,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

export default function BottomNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="fixed bottom-6 w-full flex justify-center z-50">
      <div className="flex gap-6 bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-6 py-3 rounded-full shadow-lg items-center">
        <NavItem icon={<FaBox />} label="Brand Kits" targetId="brand" />
        <NavItem icon={<FaCogs />} label="Stats" targetId="stats" />
        <NavItem icon={<FaChartPie />} label="Graphs" targetId="graph" />
        <NavItem icon={<FaBookOpen />} label="Services" targetId="services" />
        <NavItem icon={<FaCalendarAlt />} label="Book" targetId="book" />

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex flex-col items-center text-sm hover:text-cyan-400 transition-all"
        >
          <div className="text-lg">
            {darkMode ? <FaSun /> : <FaMoon />}
          </div>
        </button>
      </div>
    </div>
  );
}

function NavItem({ icon, label, targetId }) {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center md:text-sm hover:text-cyan-400 transition-all"
    >
      <div className="text-lg md:text-2xl">{icon}</div>
      <span className="text-xs hidden md:inline">{label}</span>
    </button>
  );
}
