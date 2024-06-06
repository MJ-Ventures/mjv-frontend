import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MJV",
  description: "MJV Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
