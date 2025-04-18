// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow p-4">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-blue-600">Home</Link></li>
            <li><Link href="/company" className="text-blue-600">Company</Link></li>
            <li><Link href="/stock" className="text-blue-600">Stock</Link></li>
            <li><Link href="/financials" className="text-blue-600">Financials</Link></li>
            <li><Link href="/news" className="text-blue-600">News</Link></li>
            <li><Link href="/dashboard" className="text-blue-600">Dashboard</Link></li>
          </ul>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
