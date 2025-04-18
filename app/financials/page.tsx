export default function FinancialsPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">FCEPL Annual Financials</h1>
  
        <p className="text-sm text-gray-600 mb-2">
          All numbers in thousands (000s) except EPS
        </p>
  
        <table className="w-full table-auto border border-gray-300 text-sm">
          <thead className="bg-gray-100 font-semibold text-center">
            <tr>
              <th className="border px-4 py-2"></th>
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
      </div>
    );
  }
  