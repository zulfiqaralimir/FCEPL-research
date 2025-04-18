export default function DashboardPage() {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">FCEPL Research Dashboard</h1>
  
        {/* Snapshot Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white shadow rounded p-4">
            <p className="text-gray-500 text-sm">Latest EPS</p>
            <p className="text-xl font-bold">2.87</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <p className="text-gray-500 text-sm">Net Profit (2024)</p>
            <p className="text-xl font-bold">PKR 2.2B</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <p className="text-gray-500 text-sm">Sales (2024)</p>
            <p className="text-xl font-bold">PKR 107B</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <p className="text-gray-500 text-sm">P/E Ratio</p>
            <p className="text-xl font-bold">30.26</p>
          </div>
        </section>
  
        {/* News Summary */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Recent Announcements</h2>
          <ul className="list-disc ml-6 text-sm">
            <li>Board Meeting 1st Quarter 2025 – Apr 14, 2025</li>
            <li>Annual Report Transmission – Mar 27, 2025</li>
            <li>Financial Results Year End 2024 – Feb 14, 2025</li>
          </ul>
        </section>
      </div>
    );
  }
  
