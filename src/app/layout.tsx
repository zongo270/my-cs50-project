import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css'; 

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Capital City Game</title>
        <meta name="description" content="Guess the capital cities!" />
        {/* Add other meta tags, links, etc. */}
      </Head>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </>
  );
};

export default RootLayout;
