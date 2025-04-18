export default function FinancialsPage() {
    return (
      <div className="space-y-10">
        <h1 className="text-2xl font-bold mb-6">FCEPL Annual Financials</h1>
  
        {/* Annual Financials Table */}
        <section>
          <p className="text-sm text-gray-600 mb-2">
            All numbers in thousands (000s) except EPS
          </p>
          <table className="w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-gray-100 font-semibold text-center">
              <tr>
                <th className="border px-4 py-2 text-left"></th>
                <th className="border px-4 py-2 bg-green-50">2024</th>
                <th className="border px-4 py-2">2023</th>
                <th className="border px-4 py-2 bg-green-50">2022</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border px-4 py-2 font-medium text-left">Sales</td>
                <td className="border px-4 py-2">107,051,450</td>
                <td className="border px-4 py-2">100,235,403</td>
                <td className="border px-4 py-2">73,473,687</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-medium text-left">Profit after Taxation</td>
                <td className="border px-4 py-2">2,203,128</td>
                <td className="border px-4 py-2">1,508,786</td>
                <td className="border px-4 py-2">2,465,673</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-medium text-left">EPS</td>
                <td className="border px-4 py-2">2.87</td>
                <td className="border px-4 py-2">1.97</td>
                <td className="border px-4 py-2">3.22</td>
              </tr>
            </tbody>
          </table>
        </section>
  
        {/* Ratios Table */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Key Ratios</h2>
          <table className="w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-gray-100 font-semibold text-center">
              <tr>
                <th className="border px-4 py-2 text-left">Ratio</th>
                <th className="border px-4 py-2 bg-green-50">2024</th>
                <th className="border px-4 py-2">2023</th>
                <th className="border px-4 py-2 bg-green-50">2022</th>
                <th className="border px-4 py-2">2021</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border px-4 py-2 text-left font-medium">Gross Profit Margin (%)</td>
                <td className="border px-4 py-2">15.91</td>
                <td className="border px-4 py-2">14.37</td>
                <td className="border px-4 py-2">16.48</td>
                <td className="border px-4 py-2">16.96</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-medium">Net Profit Margin (%)</td>
                <td className="border px-4 py-2">2.06</td>
                <td className="border px-4 py-2">1.51</td>
                <td className="border px-4 py-2">3.36</td>
                <td className="border px-4 py-2">3.46</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-medium">EPS Growth (%)</td>
                <td className="border px-4 py-2">45.69</td>
                <td className="border px-4 py-2 text-red-600">-38.82</td>
                <td className="border px-4 py-2">37.02</td>
                <td className="border px-4 py-2">921.74</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-medium">PEG</td>
                <td className="border px-4 py-2">0.68</td>
                <td className="border px-4 py-2 text-red-600">-1.07</td>
                <td className="border px-4 py-2">0.55</td>
                <td className="border px-4 py-2">0.04</td>
              </tr>
            </tbody>
          </table>
        </section>
  
        {/* Payouts Table */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Payouts</h2>
          <table className="w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-green-100 font-semibold text-center">
              <tr>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Financial Results</th>
                <th className="border px-4 py-2">Details</th>
                <th className="border px-4 py-2">Book Closure</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border px-4 py-2">February 14, 2025 – 4:02 PM</td>
                <td className="border px-4 py-2">31/12/2024 (YR)</td>
                <td className="border px-4 py-2">28% (F) (D)</td>
                <td className="border px-4 py-2">15/04/2025 – 21/04/2025</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
  