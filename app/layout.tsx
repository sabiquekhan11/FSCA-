import type { Metadata } from 'next';
import { Hind, Rajdhani, Teko } from 'next/font/google';
import './globals.css';

const hind = Hind({ 
    weight: ['400', '500', '600'], 
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap'
});

const rajdhani = Rajdhani({ 
    weight: ['500', '600', '700'], 
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap'
});

const teko = Teko({ 
    weight: ['400', '500', '600', '700'], 
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'Future Star Cricket Academy | Mirzapur',
    description: 'Youth cricket training academy in Mirzapur, UP, founded by Ex-Ranji Trophy player Satish Patnaik.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${hind.variable} ${rajdhani.variable} ${teko.variable}`}>
            <body>
                {children}
            </body>
        </html>
    );
}
