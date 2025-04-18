export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">FCEPL Research Dashboard</h1>
      <p className="text-lg">
        Welcome to your personal stock research site for FrieslandCampina Engro Pakistan Ltd (FCEPL).
      </p>
      <p className="mt-4">
        Use the navigation bar to explore:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Company:</strong> Basic info and background</li>
        <li><strong>Stock:</strong> Price, volume, performance</li>
        <li><strong>Financials:</strong> Income statement, balance sheet</li>
        <li><strong>News:</strong> Announcements & earnings updates</li>
      </ul>
    </div>
  );
}
