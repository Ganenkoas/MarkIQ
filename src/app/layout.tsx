import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { cookies } from 'next/headers';
import { I18nProvider } from '@/i18n/I18nProvider';
import { Locale } from '@/i18n/dictionaries';

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
    const cookieStore = cookies();
    const serverLocale = (cookieStore.get('NEXT_LOCALE')?.value || 'ru') as Locale;

    return (
        <html lang={serverLocale} className="scroll-smooth">
            <body className={`${inter.className} flex flex-col min-h-screen`}>
                <I18nProvider serverLocale={serverLocale}>
                    <Header />
                    {children}
                    <Footer />
                </I18nProvider>
            </body>
        </html>
    );
}
