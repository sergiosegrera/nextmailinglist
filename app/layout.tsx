import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
      <body
        className={`${inter.className} min-h-[100dvh] flex flex-col justify-between container mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
