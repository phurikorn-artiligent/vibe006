import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Updated to Plus Jakarta Sans
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Asset Management Spec",
  description: "Fixed Asset Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
