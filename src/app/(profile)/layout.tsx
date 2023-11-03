/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import SideBar from '@/components/SideBarComponent'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import './../globals.css'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex' }}>
        <SideBar />
        {children}
      </body>
    </html>
  )
}
