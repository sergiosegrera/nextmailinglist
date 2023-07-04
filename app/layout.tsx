import { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Mailing List",
  description: "A simple mailing list site using Next 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics key={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      <body
        className={`${inter.className} min-h-[100dvh] flex flex-col justify-between container mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
