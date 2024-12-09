import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import { ViewTransitions } from 'next-view-transitions';
import Header from '../components/header';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

const fira = Fira_Code({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HelloIn.IT',
  description: 'Your doze of IT recruting questions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang='en' className={`${fira.className}`}>
        <GoogleTagManager gtmId='GTM-N8DXN6QN' />
        <Script
          src={`https://cdn-cookieyes.com/client_data/e29e45ec78c92ac88e93de45/script.js`}
          strategy='beforeInteractive'
        ></Script>
        <body className='antialiased tracking-tight'>
          <div className='min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900'>
            <main className='max-w-[80ch] mx-auto w-full space-y-6'>
              <Header />
              {children}
            </main>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
