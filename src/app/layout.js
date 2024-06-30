import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import { Providers } from "@/providers";
import VideoAskWidget from "@/components/video-ask";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MJV",
  description: "MJV Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <VideoAskWidget />
        <ToastContainer />
      </body>
    </html>
  );
}
