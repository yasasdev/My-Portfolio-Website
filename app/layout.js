import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL('https://yasaslekamge.com'),
  title: {
    default: 'Yasas Lekamge | Full-Stack Software Engineer',
    template: '%s | Yasas Lekamge'
  },
  description: 'Associate Software Engineer at X4 DigitalLabs specializing in web applications, mobile development, and full-stack solutions. BSc Software Engineering student at NIBM with expertise in React, Next.js, and PHP.',
  keywords: [
    'Yasas Lekamge',
    'Software Engineer',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Web Development',
    'Mobile Development',
    'X4 DigitalLabs',
    'NIBM',
    'Portfolio',
    'JavaScript',
    'PHP',
    'Sri Lanka Developer'
  ],
  authors: [{ name: 'Yasas Lekamge', url: 'https://yasaslekamge.com' }],
  creator: 'Yasas Lekamge',
  publisher: 'Yasas Lekamge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yasaslekamge.com',
    title: 'Yasas Lekamge | Full-Stack Software Engineer',
    description: 'Associate Software Engineer at X4 DigitalLabs specializing in web applications, mobile development, and full-stack solutions.',
    siteName: 'Yasas Lekamge Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yasas Lekamge - Software Engineer',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Yasas Lekamge | Full-Stack Software Engineer',
    description: 'Associate Software Engineer at X4 DigitalLabs specializing in web applications, mobile development, and full-stack solutions.',
    creator: '@yasasdev',
    images: ['/twitter-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://yasaslekamge.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden
        dark:bg-darkTheme dark:text-white`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
