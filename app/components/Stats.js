'use client';

import { ArrowUp, ArrowDown, ArrowRight, Download } from 'lucide-react';

// --- Updated Data (based on your site info) ---
const statsData = [
  {
    title: 'Billing Volume Growth',
    mainValue: '3.2M',
    unit: 'invoices',
    change: {
      value: '18%',
      period: 'since last year',
      direction: 'up',
    },
    historicalData: [
      { year: '2024', value: 3200000 },
      { year: '2023', value: 2710000 },
      { year: '2022', value: 2250000 },
      { year: '2021', value: 1820000 },
    ],
    footerLink: {
      text: 'View billing breakdown',
      icon: 'arrow',
    },
  },
  {
    title: 'Real-time Charging Events',
    mainValue: '15.6M',
    unit: 'events',
    change: {
      value: '24%',
      period: 'QoQ',
      direction: 'up',
    },
    historicalData: [
      { year: 'Q2 2024', value: 15600000 },
      { year: 'Q1 2024', value: 12550000 },
      { year: 'Q4 2023', value: 10200000 },
      { year: 'Q3 2023', value: 9400000 },
    ],
    footerLink: {
      text: 'Download charging data',
      icon: 'download',
    },
  },
  {
    title: 'Catalog Updates Processed',
    mainValue: '7,450',
    unit: 'changes',
    change: {
      value: '12%',
      period: 'YoY',
      direction: 'down',
    },
    historicalData: [
      { year: '2024', value: 7450 },
      { year: '2023', value: 8450 },
      { year: '2022', value: 7800 },
      { year: '2021', value: 6200 },
    ],
    footerLink: {
      text: 'Download catalog changes',
      icon: 'download',
    },
  },
];

// --- Historical Bar Sub-component ---
const DataBar = ({ year, value, maxValue, barColor }) => {
  const barWidth = maxValue > 0 ? (value / maxValue) * 100 : 0;
  const formattedValue = value.toLocaleString();

  return (
    <div className="grid grid-cols-12 items-center gap-4 text-sm">
      <div className="col-span-2 text-gray-500 dark:text-gray-50">{year}</div>
      <div className="col-span-8 flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full"
            style={{ width: `${barWidth}%`, backgroundColor: barColor }}
          ></div>
        </div>
      </div>
      <div className="col-span-2 text-right text-gray-700 dark:text-gray-200 font-medium">
        {formattedValue}
      </div>
    </div>
  );
};

// --- Stat Card Sub-component ---
const StatCard = ({ data, barColor }) => {
  const maxValue = Math.max(...data.historicalData.map((item) => item.value));
  const ChangeIcon = data.change.direction === 'up' ? ArrowUp : ArrowDown;
  const FooterIcon = data.footerLink.icon === 'arrow' ? ArrowRight : Download;

  return (
    <div className="flex flex-col space-y-4">
      {/* Header */}
      <div className="text-gray-600 dark:text-white text-sm font-medium">{data.title}</div>

      {/* Main Value and Change */}
      <div className="flex items-end justify-between">
        <div className="flex items-baseline space-x-2">
          <p className="text-5xl font-light text-gray-900 dark:text-white">{data.mainValue}</p>
          <p className="text-gray-500 dark:text-gray-100">{data.unit}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end space-x-1 text-lg">
            <ChangeIcon size={18} style={{ color: barColor }} />
            <span style={{ color: barColor }} className="font-medium">
              {data.change.value}
            </span>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-100">{data.change.period}</p>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Historical Data Bars */}
      <div className="space-y-3">
        {data.historicalData.map((item) => (
          <DataBar
            key={item.year}
            year={item.year}
            value={item.value}
            maxValue={maxValue}
            barColor={barColor}
          />
        ))}
      </div>

      {/* Footer Link */}
      <a
        href="#"
        className="flex items-center space-x-2 pt-4 text-gray-500 dark:text-gray-50 hover:text-gray-900 transition-colors duration-200"
      >
        <span className="text-sm">{data.footerLink.text}</span>
        <div className="border border-gray-400 rounded-full p-1">
          <FooterIcon size={14} />
        </div>
      </a>
    </div>
  );
};

// --- Dashboard Main Component ---
const StatsDashboard = () => {
  const barColor = '#34A853'; // ✅ Changed from brown to green

  return (
    <section id='stats' className="bg-[#F9F6F4] p-6 md:p-12 font-sans dark:bg-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
        {statsData.map((stat, index) => (
          <StatCard key={index} data={stat} barColor={barColor} />
        ))}
      </div>
    </section>
  );
};

export default StatsDashboard;
