import React from 'react';
import Link from 'next/link';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-bg-secondary text-text-primary p-4">
        {/* Placeholder for marketing header */}
        <nav>
          <Link href="/" className="text-xl font-bold">ClipSafe</Link>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-bg-secondary text-text-primary p-4 text-center">
        {/* Placeholder for marketing footer */}
        <p>&copy; 2025 ClipSafe. All rights reserved.</p>
      </footer>
    </div>
  );
}
