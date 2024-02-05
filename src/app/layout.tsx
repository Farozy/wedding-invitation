import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";
import {GlobalContextProvider} from "@/app/context/store";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Undangan Pernikahan',
  description: 'undangan elektronik untuk pernikahan',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/faviconn.png',
        href: '/faviconn.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/faviconn.png',
        href: '/faviconn.png',
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
