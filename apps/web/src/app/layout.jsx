// import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/cores/Header';
import { Footer } from '@/components/cores/Footer';
import TanstackProvider from '@/providers/tanstackProvider';
import ReduxProvider from '@/providers/reduxProvider';
import ProtectedRoute from '@/components/protectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'LESGOIN!',
  description: 'Event Management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <TanstackProvider>
          <body className="font-Karla">
            <ToastContainer />
            <ProtectedRoute>
              <Header />
              <div className="min-h-screen">{children}</div>
              <Footer className="bottom-0" />
            </ProtectedRoute>
          </body>
        </TanstackProvider>
      </ReduxProvider>
    </html>
  );
}
