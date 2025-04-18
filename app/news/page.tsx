// app/news/page.tsx

type NewsItem = {
    title: string;
    date: string;
    summary: string;
    link: string;
  };
  
  const mockNews: NewsItem[] = [
    {
      title: "FCEPL Announces Q1 2024 Results",
      date: "April 5, 2024",
      summary: "FrieslandCampina Engro reported a YoY revenue growth of 8% in Q1. EPS stood at PKR 2.01.",
      link: "https://www.fcepl.com.pk/financial-results/",
    },
    {
      title: "Dividend Announcement: FCEPL Declares Interim Dividend",
      date: "March 15, 2024",
      summary: "Board of Directors approved an interim cash dividend of PKR 3.00 per share.",
      link: "https://dps.psx.com.pk/",
    },
    {
      title: "FCEPL Hosts Analyst Briefing",
      date: "February 22, 2024",
      summary: "The company shared its strategic roadmap and future growth plans with analysts.",
      link: "https://www.fcepl.com.pk/newsroom/",
    },
  ];
  
  export default function NewsPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">FCEPL News & Announcements</h1>
        <ul className="space-y-4">
          {mockNews.map((item, index) => (
            <li key={index} className="bg-white shadow rounded p-4 border border-gray-200">
              <h2 className="text-xl font-semibold text-blue-700">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="mt-2">{item.summary}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mt-2 inline-block">
                Read more
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  