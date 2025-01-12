import {  Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weights: "500",
});

export const metadata = {
  title: "KoinX: Trusted Crypto Tax Software and Portfolio Tracker",
  description:
    "Experience cutting-edge crypto tax solutions with KoinX. Streamline your taxation process. Try now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
