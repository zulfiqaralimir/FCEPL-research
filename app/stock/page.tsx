// app/stock/page.tsx
type StockData = {
    symbol: string;
    currentPrice: string;
    change: string;
    marketCap: string;
    volume: string;
    weekHigh: string;
    weekLow: string;
  };
  
  const mockStockData: StockData = {
    symbol: "FCEPL",
    currentPrice: "177.50 PKR",
    change: "+1.25 (0.71%)",
    marketCap: "25.3B PKR",
    volume: "1.2M",
    weekHigh: "190.00 PKR",
    weekLow: "150.50 PKR",
  };
  
  export default function StockPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">FCEPL Stock Overview</h1>
        <div className="bg-white shadow rounded p-4">
          <p><strong>Symbol:</strong> {mockStockData.symbol}</p>
          <p><strong>Current Price:</strong> {mockStockData.currentPrice}</p>
          <p><strong>Change:</strong> <span className="text-green-600">{mockStockData.change}</span></p>
          <p><strong>Market Cap:</strong> {mockStockData.marketCap}</p>
          <p><strong>Volume:</strong> {mockStockData.volume}</p>
          <p><strong>52-Week High:</strong> {mockStockData.weekHigh}</p>
          <p><strong>52-Week Low:</strong> {mockStockData.weekLow}</p>
        </div>
      </div>
    );
  }
  