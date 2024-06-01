import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LangProvider from "./providers/lang-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://daichi2mori.github.io/"),
  title: "CodeShot",
  description: "Generates image from code",
  openGraph: {
    title: "CodeShot",
    description: "Generates image from code",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
