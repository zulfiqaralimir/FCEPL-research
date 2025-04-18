'use client';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useState } from 'react';

const yearlyData = [
  { year: '2021', sales: 52094, profit: 1804, eps: 2.35 },
  { year: '2022', sales: 73473, profit: 2465, eps: 3.22 },
  { year: '2023', sales: 100235, profit: 1508, eps: 1.97 },
  { year: '2024', sales: 107051, profit: 2203, eps: 2.87 },
];

const quarterlyData = [
  { quarter: 'Q1-2024', sales: 25000, profit: 500, eps: 0.6 },
  { quarter: 'Q2-2024', sales: 26000, profit: 550, eps: 0.65 },
  { quarter: 'Q3-2024', sales: 28000, profit: 600, eps: 0.7 },
  { quarter: 'Q4-2024', sales: 28051, profit: 553, eps: 0.92 },
];

export default function DashboardPage() {
  const [view, setView] = useState<'annual' | 'quarterly'>('annual');
  const data = view === 'annual' ? yearlyData : quarterlyData;

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">📊 FCEPL Dashboard</h1>
        <div className="space-x-2">
          <button
            onClick={() => setView('annual')}
            className={`px-4 py-1 rounded ${view === 'annual' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Annual
          </button>
          <button
            onClick={() => setView('quarterly')}
            className={`px-4 py-1 rounded ${view === 'quarterly' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Quarterly
          </button>
        </div>
      </div>

      {/* Key Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="EPS (2024)" value="2.87" />
        <StatCard title="Profit (2024)" value="PKR 2.2B" />
        <StatCard title="Sales (2024)" value="PKR 107B" />
        <StatCard title="P/E Ratio" value="30.26" />
      </section>

      {/* Revenue vs Profit Chart */}
      <section>
        <h2 className="text-xl font-semibold mb-2">{view === 'annual' ? 'Revenue vs Profit (Annual)' : 'Revenue vs Profit (Quarterly)'}</h2>
        <div className="h-72 bg-white p-4 rounded-xl shadow">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey={view === 'annual' ? 'year' : 'quarter'} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" name="Sales (M)" activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="profit" stroke="#22c55e" name="Profit (M)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* EPS Chart */}
      <section>
        <h2 className="text-xl font-semibold mb-2">EPS Trend ({view === 'annual' ? 'Annual' : 'Quarterly'})</h2>
        <div className="h-72 bg-white p-4 rounded-xl shadow">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey={view === 'annual' ? 'year' : 'quarter'} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="eps" stroke="#9333ea" name="EPS" activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
