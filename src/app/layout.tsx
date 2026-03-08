import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'MarkIQ | Маркетинговый мозг в кармане',
    description: 'Загружаете ссылку на сайт или описание бизнеса. Через две минуты получаете результат, на который у агентства уходит неделя.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className="scroll-smooth">
            <body className={`${inter.className} flex flex-col min-h-screen`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
