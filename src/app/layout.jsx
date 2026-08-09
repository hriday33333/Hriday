import { Providers } from '@/components/Providers';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const siteUrl = siteConfig.url;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Zakir Hasan Hriday - MERN Stack Developer | React & JavaScript',
    template: '%s | Zakir Hasan Hriday',
  },
  description:
    'Zakir Hasan Hriday: Expert Full Stack Developer specializing in React, JavaScript, and modern web technologies. Building responsive, high-performance web applications.',
  keywords: [
    'Zakir Hasan Hriday',
    'Zakir Hasan',
    'Hriday',
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
    'JavaScript Developer',
    'Web Developer',
    'Portfolio',
    'MERN Stack',
    'Tailwind CSS',
    'Node.js',
  ],
  authors: [{ name: 'Zakir Hasan Hriday' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: '/',
  },
  // TODO: paste your Google Search Console verification code here once you have it
  // verification: {
  //   google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  // },
  openGraph: {
    title:
      'Zakir Hasan Hriday - Full Stack Developer | React & JavaScript Specialist',
    description:
      'Expert Full Stack Developer specializing in React, JavaScript, and modern web technologies. Building responsive, high-performance web applications.',
    url: siteUrl,
    siteName: 'Zakir Hasan Hriday Portfolio',
    images: [
      {
        url: '/profile-logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Zakir Hasan Hriday - Full Stack Developer | React & JavaScript Specialist',
    description:
      'Expert Full Stack Developer specializing in React, JavaScript, and modern web technologies.',
    images: ['/profile-logo.png'],
  },
  icons: {
    icon: '/logo.svg',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  themeColor: '#3b82f6',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Zakir Hasan Hriday',
  alternateName: 'Hriday',
  url: siteUrl,
  image: `${siteUrl}/profile-logo.png`,
  sameAs: [
    'https://github.com/hriday33333',
    'https://www.linkedin.com/in/zakir-hasan/',
  ],
  jobTitle: 'MERN Stack Developer',
  worksFor: { '@type': 'Organization', name: 'Freelance' },
  knowsAbout: [
    'React',
    'JavaScript',
    'Node.js',
    'Tailwind CSS',
    'Web Development',
    'MERN Stack Development',
  ],
  description:
    'Zakir Hasan Hriday is a MERN Stack Developer specializing in React, JavaScript, and modern web technologies',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zakir Hasan Hriday',
  url: siteUrl,
  description:
    'Portfolio of Zakir Hasan Hriday, MERN Stack Developer specializing in React and JavaScript',
  author: { '@type': 'Person', name: 'Zakir Hasan Hriday' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <main id="main-content" role="main">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
