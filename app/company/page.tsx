export default function CompanyPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Company Profile: FrieslandCampina Engro Pakistan Ltd (FCEPL)</h1>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Business Description</h2>
          <p className="mt-2">
            FrieslandCampina Engro Pakistan Limited is a public listed company incorporated in Pakistan, under the repealed Companies Ordinance, 1984 (now the Companies Act 2017). The Company is a subsidiary of FrieslandCampina Pakistan Holdings B.V. (the Holding Company) which is a subsidiary of Zuivelcoöperatie FrieslandCampina UA (the Ultimate Parent Company).
            <br /><br />
            The principal activity of the Company is to manufacture, process and sell dairy-based products and frozen desserts. The Company also owns and operates a dairy farm.
          </p>
        </section>
  
        <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold">Key People</h2>
            <table className="table-auto w-full mt-2 border border-gray-200">
              <tbody>
                <tr className="border-b">
                  <td className="font-medium p-2">Kashan Hasan</td>
                  <td className="p-2">CEO</td>
                </tr>
                <tr className="border-b">
                  <td className="font-medium p-2">Abdul Samad Dawood</td>
                  <td className="p-2">Chairperson</td>
                </tr>
                <tr>
                  <td className="font-medium p-2">Wajiha Hasan</td>
                  <td className="p-2">Company Secretary</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <div>
            <h2 className="text-xl font-semibold">Contact Details</h2>
            <ul className="mt-2 space-y-2">
              <li><strong>Address:</strong> 5th Floor, The Harbor Front Building, HC-3, Marine Drive, Block - 4, Clifton, Karachi - 75600, Pakistan</li>
              <li><strong>Website:</strong> <a href="https://www.frieslandcampina.com.pk" target="_blank" className="text-blue-600 underline">www.frieslandcampina.com.pk</a></li>
              <li><strong>Registrar:</strong> FAMCO Share Registration Services (Pvt) Limited, 8-F, Next to Hotel Faran, Nursery, Block-6, P.E.C.H.S., Shahrah-e-Faisal, Karachi</li>
              <li><strong>Auditor:</strong> A.F. Ferguson & Co. Chartered Accountants</li>
              <li><strong>Fiscal Year End:</strong> December</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
  