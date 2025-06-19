import Head from 'next/head';
import { FiSettings } from 'react-icons/fi'; // Settings icon
import { useState } from 'react';

// Data for the brand kits
const initialBrandKitsData = [
  { id: 1, name: 'ECorp', logoColors: ['#00C853', '#FFFFFF'], checked: false },
  { id: 2, name: 'ICorp', logoColors: ['#FF9800', '#FFFFFF'], checked: false },
  { id: 3, name: 'The Agency', logoColors: ['#FF0000', '#FFFFFF'], checked: true },
];

const BrandKitItem = ({ name, logoColors, isChecked, onToggleCheck }) => {
  return (
    <div
      className="flex items-center justify-between bg-neutral-800 rounded-lg p-3 cursor-pointer hover:bg-neutral-700 transition-colors duration-200"
      onClick={onToggleCheck}
    >
      <div className="flex items-center space-x-4">
        {/* Custom Checkbox */}
        <div
          className={`w-5 h-5 rounded-md flex items-center justify-center border-2 ${
            isChecked ? 'bg-purple-600 border-purple-600' : 'border-gray-500'
          } transition-all duration-200`}
        >
          {isChecked && (
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </div>

        {/* Logo Circles */}
        <div className="relative w-7 h-7">
          <div
            className="absolute w-5 h-5 rounded-full"
            style={{ backgroundColor: logoColors[0], top: '0', left: '0' }}
          ></div>
          <div
            className="absolute w-5 h-5 rounded-full"
            style={{ backgroundColor: logoColors[1], bottom: '0', right: '0' }}
          ></div>
        </div>

        {/* Name */}
        <span className="text-white text-base font-medium">{name}</span>
      </div>

      {/* Settings Icon */}
      <div className="flex items-center">
        <FiSettings className="text-gray-400 text-lg cursor-pointer hover:text-white" />
      </div>
    </div>
  );
};

export default function Brand() {
  const [brandKits, setBrandKits] = useState(initialBrandKitsData);

  const handleToggleCheck = (id) => {
    setBrandKits(prevKits =>
      prevKits.map(kit =>
        kit.id === id ? { ...kit, checked: !kit.checked } : kit
      )
    );
  };

  return (
    <section id='brand' className="min-h-screen flex items-center justify-center p-4">
      <Head>
        <title>Brand Kits with Tailwind</title>
        <meta name="description" content="Brand Kits component using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-sm bg-neutral-900 rounded-xl shadow-lg p-6">
        <h2 className="text-white text-2xl font-semibold mb-6">Brand Kits</h2>
        <div className="space-y-3">
          {brandKits.map((kit) => (
            <BrandKitItem
              key={kit.id}
              name={kit.name}
              logoColors={kit.logoColors}
              isChecked={kit.checked}
              onToggleCheck={() => handleToggleCheck(kit.id)}
            />
          ))}
        </div>
      </main>
    </section>
  );
}