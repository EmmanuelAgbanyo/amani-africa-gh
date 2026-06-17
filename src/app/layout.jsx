import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

export const metadata = {
  title: 'Amani Africa | Sustainable Local Transformation',
  description: 'Mobilizing resources and partnerships to support community development, individual humanitarian support, and local leaders across Ghana.',
  icons: {
    icon: '/amani-logo.jpeg',
    shortcut: '/amani-logo.jpeg',
    apple: '/amani-logo.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
