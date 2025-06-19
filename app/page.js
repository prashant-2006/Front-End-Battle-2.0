'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMoneyBill,
  FaBolt,
  FaBook,
  FaCalendarAlt,
} from 'react-icons/fa';
import BottomNavbar from './components/navbar';
import BarGraph from './components/BarGraph';
import StatsDashboard from './components/Stats';
import Brand from './components/Brand';

const sections = [
  {
    title: 'Billing',
    description:
      'Instantaneous, accurate billing across all services and payment methods.',
    icon: <FaMoneyBill />,
    color: 'bg-pink-200 dark:bg-pink-900',
    bar: 'bg-pink-500',
  },
  {
    title: 'Charging',
    description: 'Manage real-time charging events across services.',
    icon: <FaBolt />,
    color: 'bg-yellow-200 dark:bg-yellow-800',
    bar: 'bg-yellow-500',
  },
  {
    title: 'Catalog',
    description: 'Centralized product and service catalog management.',
    icon: <FaBook />,
    color: 'bg-lime-200 dark:bg-lime-800',
    bar: 'bg-lime-500',
  },
  {
    title: 'Events',
    description: 'Real-time event handling and orchestration.',
    icon: <FaCalendarAlt />,
    color: 'bg-cyan-200 dark:bg-cyan-800',
    bar: 'bg-cyan-500',
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000;
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const loader = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        setIndex((prev) => (prev + 1) % sections.length);
        currentStep = 0;
      }
    }, interval);

    return () => clearInterval(loader);
  }, [index]);

  const current = sections[index];

  return (
    <div className='mb-28'>
    <div className="min-h-screen w-full bg-[#97aab5] dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-between p-4 md:p-8 relative transition-colors duration-300">
      {/* Site Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-0 text-center uppercase tracking-wide max-w-4xl px-2">
        Unparalleled BSS/OSS Capabilities
      </h1>

      {/* Tabs and Content */}
      <div className="flex flex-col md:flex-row flex-1 items-center justify-center w-full max-w-5xl gap-8">
        {/* Tabs */}
        <div className="flex md:flex-col gap-4 md:gap-6 w-full md:w-auto justify-center md:justify-start flex-wrap md:flex-nowrap">
          {sections.map((section, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`relative px-4 py-2 rounded-2xl flex items-center gap-2 cursor-pointer transition-all duration-300 overflow-hidden
                ${i === index ? section.color : 'bg-gray-300 dark:bg-gray-700'}
                sm:text-sm md:text-base
                min-w-[100px]
                justify-center
                md:justify-start
              `}
            >
              {section.icon}
              <span className="font-mono text-xs sm:text-sm md:text-base">{section.title.toUpperCase()}</span>
              {i === index && (
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 rounded-b-2xl ${section.bar}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.05, ease: 'linear' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content Box */}
        <div
          className={`w-full md:flex-1 max-w-full md:max-w-3xl rounded-3xl p-6 shadow-xl ${current.color} md:min-h-[220px]`}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{current.title}</h1>
          <p className="text-base sm:text-lg mb-4">{current.description}</p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow min-h-[120px] flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400 italic text-center px-2">
              [Placeholder for EMS dashboard/image]
            </p>
          </div>
        </div>
      </div>

      <BottomNavbar />
    </div>
    <BarGraph />
    <StatsDashboard />
    <Brand />
    </div>
  );
}
