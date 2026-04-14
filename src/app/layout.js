import "./globals.css";

export const metadata = {
  title: "Keen Keeper",
  description: "Family And Friend Comes First",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
