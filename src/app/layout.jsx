import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

// --- METADATA CONFIGURATION ---
export const metadata = {
  metadataBase: new URL('https://portfolio-beta-one-bi79ovtfs4.vercel.app'), 
  title: "Al Helal Bayijid | MERN Stack Developer",
  description: "Al Helal Mohammod Bayijid is a MERN Stack Developer specializing in React, Tailwind CSS, and modern web application development.",
  
  // Canonical Link
  alternates: {
    canonical: 'https://portfolio-beta-one-bi79ovtfs4.vercel.app',
  },

  // Favicon
  icons: {
    icon: '/logo.webp', // Make sure you add logo.webp to your public folder
  },

  // Open Graph (Facebook/LinkedIn)
  openGraph: {
    type: 'website',
    url: 'https://portfolio-beta-one-bi79ovtfs4.vercel.app',
    title: "Al Helal Bayijid | MERN Stack Developer",
    description: "MERN Stack Developer specializing in React and modern web development.",
    siteName: "Al Helal Bayijid Portfolio",
    images: [
      {
        url: '/bg.webp', 
        width: 1200,
        height: 630,
        type: 'image/webp',
        alt: "Al Helal Bayijid Portfolio Cover",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Al Helal Bayijid | MERN Stack Developer",
    description: "MERN Stack Developer specializing in React and modern web development.",
    images: ['/bg.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.className} bg-white text-gray-900 dark:bg-[#020617] dark:text-gray-100 transition-colors duration-300 antialiased`}
      >
        <Providers>
          {/* Wrapper to match the structure of the reference website */}
          <div id="root">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}