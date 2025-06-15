import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "500", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
