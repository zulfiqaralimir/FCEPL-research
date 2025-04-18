export default function NewsPage() {
    const announcements = [
      { date: "Apr 14, 2025", time: "1:17 PM", title: "Board Meeting 1st Quarter 2025" },
      { date: "Mar 27, 2025", time: "11:57 AM", title: "Transmission of Annual Report for the Year Ended 2024" },
      { date: "Mar 27, 2025", time: "11:57 AM", title: "FCEPL Notice of Annual General Meeting" },
      { date: "Feb 14, 2025", time: "8:00 AM", title: "Financial Results for the Year Ended 2024" },
      { date: "Feb 6, 2025", time: "8:18 AM", title: "Annual Board Meeting" },
      { date: "Nov 27, 2024", time: "3:27 PM", title: "Analyst Briefing for 3rd Quarter 2024 Presentation - FrieslandCampina Engro Limited." },
      { date: "Nov 27, 2024", time: "2:58 PM", title: "Analyst Briefing for 3rd Quarter 2024 Presentation - FrieslandCampina Engro Limited." },
      { date: "Nov 26, 2024", time: "8:26 AM", title: "Analyst Briefing of FrieslandCampina Engro Pakistan Limited 2024" },
      { date: "Oct 30, 2024", time: "3:00 PM", title: "Transmission of 3rd Quarterly Report for the Period Ended September 30, 2024" },
    ];
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">FCEPL News & Announcements</h1>
  
        <table className="w-full table-auto border border-gray-300 text-sm">
          <thead className="bg-gray-100 font-semibold">
            <tr>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Symbol</th>
              <th className="border px-4 py-2">Company Name</th>
              <th className="border px-4 py-2">Title</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.date}</td>
                <td className="border px-4 py-2">{item.time}</td>
                <td className="border px-4 py-2">FCEPL</td>
                <td className="border px-4 py-2">Frieslandcampina Engro Pakistan Limited</td>
                <td className="border px-4 py-2">{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  