import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'AxiomCast',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ClerkProvider
                appearance={{
                    layout: {
                        logoImageUrl: './icons/logo.svg',
                        socialButtonsVariant: 'iconButton',
                    },
                    variables: {
                        colorText: '#1c1c1c',
                        colorPrimary: '#00AEEF',
                    },
                }}
            >
                <body className={`${inter.className} bg-light-2`}>
                    {children}
                </body>
            </ClerkProvider>
        </html>
    );
}

// 1:40:00
