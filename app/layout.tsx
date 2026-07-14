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
    title: 'Future Star Cricket Academy | Best Cricket Coaching in Mirzapur, UP',
    description: 'Join Future Star Cricket Academy in Mirzapur, UP. Led by NIS Certified, Ex-Ranji Trophy player Satish Patnaik. We offer professional cricket coaching for all age groups, hostel facilities, turf pitches, and video analysis.',
    keywords: [
        'Cricket Academy in Mirzapur',
        'Best cricket coaching in Mirzapur UP',
        'Future Star Cricket Academy',
        'Satish Patnaik cricket academy',
        'NIS certified cricket coach UP',
        'Cricket hostel facility in Mirzapur',
        'Professional cricket training Uttar Pradesh',
        'Cricket academy for all age groups',
        'Cricket coaching with hostel',
        'Ex-Ranji player cricket academy',
        'Mirzapur cricket club',
        'Top cricket academy in Uttar Pradesh',
        'Sports academy in Mirzapur'
    ],
    authors: [{ name: 'Future Star Cricket Academy' }],
    creator: 'Future Star Cricket Academy',
    openGraph: {
        title: 'Future Star Cricket Academy | Professional Cricket Coaching in Mirzapur',
        description: 'Professional cricket coaching in Mirzapur led by NIS Certified, Ex-Ranji Trophy player Satish Patnaik. Complete with hostel and turf pitches.',
        url: 'https://futurestarcricketacademy.com',
        siteName: 'Future Star Cricket Academy',
        images: [
            {
                url: '/logo.png',
                width: 800,
                height: 600,
                alt: 'Future Star Cricket Academy',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    }
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
