import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import { Providers } from "@/providers";
import VideoAskWidget from "@/components/video-ask";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // Basic SEO
  title: 'MJ Ventures',
  description:
    'An independent development studio. We help forward-thinking organizations overcome their greatest challenges through bespoke Software and Generative AI solutions.',
  canonical: 'https://mjventures.org/',

  // Open Graph / Facebook metadata
  openGraph: {
    title: 'MJ Ventures',
    description:
      'An independent developer studio. We help forward-thinking organizations overcome their greatest challenges through bespoke Software and Generative AI solutions.',
    url: 'https://mjventures.org/',
    type: 'website',
    images: [
      {
        url: 'https://mjventures.org/img/og.png',
        width: 1200,
        height: 630,
        alt: 'MJ Ventures - Development Studio',
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'MJV',
    site: 'https://mjventures.org/',
    title: 'MJ Ventures - Development Studio',
    description:
      'An independent development studio. We help forward-thinking organizations overcome their greatest challenges through bespoke Software and Generative AI solutions.',
    images: ['https://mjventures.org/img/og.png'],
  },
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
