/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import SideBar from '@/components/SideBarComponent'
import './../globals.css'


export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className={inter.className}
                style={{ display: 'flex', fontFamily: 'Open Sans, sans-serif' }}
            >
                <SideBar />
                {children}
            </body>
        </html>
    )
}
