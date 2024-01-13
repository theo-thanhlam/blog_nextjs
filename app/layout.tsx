import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { ThemeContextProvider } from '@/context/themeContext';
import ThemeProvider from '@/providers/themeProvider';
import Head from 'next/head';
import AuthProvider from '@/providers/authProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Theo Blog App',
  description: 'Theo page that writes random things'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container-default">
              <div className="wrapper">
                <NavBar />
                {children}

                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
