'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const dummyData = [
  { service: 'Billing', usage: 400, revenue: 2400 },
  { service: 'Charging', usage: 300, revenue: 2210 },
  { service: 'Catalog', usage: 200, revenue: 2290 },
  { service: 'Events', usage: 278, revenue: 2000 },
];

// Possible filters for demo
const filterOptions = ['Last 24h', 'Last 7 days', 'Last 30 days'];
const keyOptions = ['usage', 'revenue'];

export default function BarGraph() {
  const [filterBy, setFilterBy] = useState(filterOptions[0]);
  const [dataKey, setDataKey] = useState(keyOptions[0]);

  return (
    <section id='graph' className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white rounded-3xl p-6 shadow-lg max-w-4xl mx-auto mb-20">
      <h2 className="text-3xl font-bold mb-4 text-center uppercase tracking-wide">
        Real-Time Service Usage Overview
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <label className="flex items-center gap-2">
          <span className="font-semibold">Filter By:</span>
          <select
            className="rounded-md p-2 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            {filterOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2">
          <span className="font-semibold">Key:</span>
          <select
            className="rounded-md p-2 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700"
            value={dataKey}
            onChange={(e) => setDataKey(e.target.value)}
          >
            {keyOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={dummyData}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
          barSize={50}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="service"
            angle={-30}
            textAnchor="end"
            interval={0}
            height={60}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey={dataKey}
            fill={dataKey === 'usage' ? '#F472B6' : '#3B82F6'} // pink or blue for revenue
            radius={[8, 8, 0, 0]}
            label={{ position: 'top', formatter: (val) => val.toLocaleString() }}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
