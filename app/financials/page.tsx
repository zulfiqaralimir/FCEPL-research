export default function FinancialsPage() {
    return (
      <div className="space-y-10">
        <h1 className="text-2xl font-bold mb-4">FCEPL Financials</h1>
  
        {/* Financial Summary */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Financials (Annual)</h2>
          <p className="text-sm text-gray-600 mb-2">All numbers in thousands (000's) except EPS</p>
          <table className="w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="border px-4 py-2">Year</th>
                <th className="border px-4 py-2">Sales</th>
                <th className="border px-4 py-2">Profit after Tax</th>
                <th className="border px-4 py-2">EPS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { year: 2024, sales: "107,051,450", profit: "2,203,128", eps: "2.87" },
                { year: 2023, sales: "100,235,403", profit: "1,508,786", eps: "1.97" },
                { year: 2022, sales: "73,473,687", profit: "2,465,673", eps: "3.22" },
                { year: 2021, sales: "52,094,197", profit: "1,804,078", eps: "2.35" },
              ].map((item) => (
                <tr key={item.year}>
                  <td className="border px-4 py-2">{item.year}</td>
                  <td className="border px-4 py-2">{item.sales}</td>
                  <td className="border px-4 py-2">{item.profit}</td>
                  <td className="border px-4 py-2">{item.eps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
  
        {/* Ratios */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Key Financial Ratios</h2>
          <table className="w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="border px-4 py-2">Ratio</th>
                <th className="border px-4 py-2">2024</th>
                <th className="border px-4 py-2">2023</th>
                <th className="border px-4 py-2">2022</th>
                <th className="border px-4 py-2">2021</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">Gross Profit Margin (%)</td><td className="border px-4 py-2">15.91</td><td>14.37</td><td>16.48</td><td>16.96</td></tr>
              <tr><td className="border px-4 py-2">Net Profit Margin (%)</td><td className="border px-4 py-2">2.06</td><td>1.51</td><td>3.36</td><td>3.46</td></tr>
              <tr><td className="border px-4 py-2">EPS Growth (%)</td><td className="border px-4 py-2">45.69</td><td className="text-red-500">-38.82</td><td>37.02</td><td>921.74</td></tr>
              <tr><td className="border px-4 py-2">PEG</td><td className="border px-4 py-2">0.68</td><td className="text-red-500">-1.07</td><td>0.55</td><td>0.04</td></tr>
            </tbody>
          </table>
        </section>
  
        {/* Payouts */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Payouts</h2>
          <table className="w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Financial Results</th>
                <th className="border px-4 py-2">Details</th>
                <th className="border px-4 py-2">Book Closure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">February 14, 2025 4:02 PM</td>
                <td className="border px-4 py-2">31/12/2024 (YR)</td>
                <td className="border px-4 py-2">28% (F) (D)</td>
                <td className="border px-4 py-2">15/04/2025 – 21/04/2025</td>
              </tr>
            </tbody>
          </table>
        </section>
  
        {/* Financial Reports */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Financial Reports</h2>
          <table className="w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="border px-4 py-2">Report</th>
                <th className="border px-4 py-2">Period Ended</th>
                <th className="border px-4 py-2">Posting Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Annual", "2024", "2025-03-27"],
                ["Quarterly", "2024-09-30", "2024-10-30"],
                ["Quarterly", "2024-06-30", "2024-08-29"],
                ["Annual", "2023", "2024-04-08"],
                ["Quarterly", "2023-09-30", "2023-10-26"],
                ["Quarterly", "2023-06-30", "2023-08-30"],
                ["Quarterly", "2023-03-31", "2023-04-28"],
                ["Annual", "2022", "2023-03-27"],
                ["Quarterly", "2022-09-30", "2022-10-28"],
                ["Quarterly", "2022-06-30", "2022-08-31"],
              ].map(([type, period, date], i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">{type}</td>
                  <td className="border px-4 py-2">{period}</td>
                  <td className="border px-4 py-2">{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
  