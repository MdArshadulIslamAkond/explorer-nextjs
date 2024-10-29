import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/services/AuthProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default:"Next Hero",
    template:"%s | Next Hero"
  },
  description: "Supper powerful Next Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Navbar></Navbar>
        <div className="h-screen">
          {children}
        </div>
      </body>
       </AuthProvider>
    </html>
  );
}
