// app/stock/page.tsx

export default function StockPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">FCEPL Stock Overview</h1>
  
        <div className="grid grid-cols-2 gap-4 bg-white shadow-md p-6 rounded-md">
          <div><strong>Open:</strong> 85.07 PKR</div>
          <div><strong>High:</strong> 87.50 PKR</div>
          <div><strong>Low:</strong> 84.05 PKR</div>
          <div><strong>Volume:</strong> 1,273,215</div>
          <div><strong>Day Range:</strong> 84.05 – 87.50 PKR</div>
          <div><strong>52-Week Range:</strong> 57.12 – 100.00 PKR</div>
          <div><strong>Circuit Breaker:</strong> 76.55 – 93.56 PKR</div>
          <div><strong>LDCP:</strong> 85.05 PKR</div>
          <div><strong>P/E Ratio (TTM):</strong> 30.26</div>
          <div><strong>1-Year Change:</strong> <span className="text-green-600">+18.66%</span></div>
          <div><strong>YTD Change:</strong> <span className="text-red-600">-2.69%</span></div>
        </div>
      </div>
    );
  }
  