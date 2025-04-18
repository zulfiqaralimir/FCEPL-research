'use client';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2021', sales: 52094, profit: 1804, eps: 2.35 },
  { year: '2022', sales: 73473, profit: 2465, eps: 3.22 },
  { year: '2023', sales: 100235, profit: 1508, eps: 1.97 },
  { year: '2024', sales: 107051, profit: 2203, eps: 2.87 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold mb-4">📊 FCEPL Dashboard</h1>

      {/* Key Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="EPS (2024)" value="2.87" />
        <StatCard title="Profit (2024)" value="PKR 2.2B" />
        <StatCard title="Sales (2024)" value="PKR 107B" />
        <StatCard title="P/E Ratio" value="30.26" />
      </section>

      {/* Charts Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Revenue vs Profit (2021–2024)</h2>
        <div className="h-72 bg-white p-4 rounded-xl shadow">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#2563eb" name="Sales (M)" />
              <Line type="monotone" dataKey="profit" stroke="#16a34a" name="Profit (M)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">EPS Trend</h2>
        <div className="h-72 bg-white p-4 rounded-xl shadow">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="eps" stroke="#9333ea" name="EPS" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}

// Small component for cards
function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
