// app/financials/page.tsx

type FinancialData = {
    year: number;
    revenue: string;
    netProfit: string;
    eps: string;
  };
  
  const mockFinancials: FinancialData[] = [
    { year: 2023, revenue: "110B PKR", netProfit: "5.2B PKR", eps: "7.12" },
    { year: 2022, revenue: "97B PKR", netProfit: "4.7B PKR", eps: "6.45" },
    { year: 2021, revenue: "83B PKR", netProfit: "3.9B PKR", eps: "5.60" },
    { year: 2020, revenue: "75B PKR", netProfit: "3.3B PKR", eps: "4.85" },
    { year: 2019, revenue: "70B PKR", netProfit: "2.9B PKR", eps: "4.10" },
  ];
  
  export default function FinancialsPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">FCEPL Financial Performance</h1>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Year</th>
              <th className="border border-gray-300 px-4 py-2">Revenue</th>
              <th className="border border-gray-300 px-4 py-2">Net Profit</th>
              <th className="border border-gray-300 px-4 py-2">EPS</th>
            </tr>
          </thead>
          <tbody>
            {mockFinancials.map((row) => (
              <tr key={row.year}>
                <td className="border border-gray-300 px-4 py-2">{row.year}</td>
                <td className="border border-gray-300 px-4 py-2">{row.revenue}</td>
                <td className="border border-gray-300 px-4 py-2">{row.netProfit}</td>
                <td className="border border-gray-300 px-4 py-2">{row.eps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  