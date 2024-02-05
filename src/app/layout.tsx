import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {GlobalContextProvider} from "@/app/context/store";
import Head from 'next/head';

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Undangan Pernikahan',
    description: 'Kami mengundang sahabat dan keluarga untuk hadir dan memberikan doa restu dalam pernikahan kami yang akan diselenggarakan pada hari Senin, 11 April 2024.',
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/favicon2.png',
                href: '/favicon2.png',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/favicon2.png',
                href: '/favicon2.png',
            },
        ]
    }
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head>
            <title>My page title</title>
            <meta property="og:title" content="My page title" key="title"/>
        </Head>
        <Head>
            <meta property="og:title" content="My new title" key="title"/>
        </Head>
        <body className={inter.className} suppressHydrationWarning={true}>
        <GlobalContextProvider>
            {children}
        </GlobalContextProvider>
        </body>
        </html>
    )
}
