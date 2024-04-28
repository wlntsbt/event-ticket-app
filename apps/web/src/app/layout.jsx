// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });
import TanstackProvider from '@/providers/tanstackProvider';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
import ReduxProvider from '@/providers/reduxProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <TanstackProvider>
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </TanstackProvider>
      </ReduxProvider>
    </html>
  );
}
