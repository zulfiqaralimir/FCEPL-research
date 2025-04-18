// app/company/page.tsx
export default function CompanyPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">FrieslandCampina Engro Pakistan Ltd (FCEPL)</h1>
        <p className="mb-2">
          FCEPL is a leading dairy and beverages company in Pakistan, known for brands like Olper’s, Omung, and Tarang.
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Sector:</strong> Food & Personal Care</li>
          <li><strong>Stock Symbol:</strong> FCEPL</li>
          <li><strong>Website:</strong> <a href="https://www.fcepl.com.pk" target="_blank" className="text-blue-600 underline">fcepl.com.pk</a></li>
          <li><strong>Parent Company:</strong> FrieslandCampina (Netherlands)</li>
          <li><strong>Listed on:</strong> Pakistan Stock Exchange (PSX)</li>
        </ul>
      </div>
    );
  }
  