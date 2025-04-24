import type { Metadata } from "next";
import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Toaster } from "@/app/_components/ui/toaster";
import Script from "next/script";
import Head from "next/head";

const roboto = Roboto({
  variable: "--paragraph",
  weight: "400",
  subsets: ["latin"],
});

const sakkalMajala = localFont({
  src: "../../public/fonts/sakkal-majalla-bold.ttf",
  variable: "--heading",
  display: "swap",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Homepage | Cosmos Strategy",
  description: "Homepage | Cosmos Strategy",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${roboto.variable} ${sakkalMajala.variable}`,
          "antialiased grainy font-sans min-h-screen w-screen relative overflow-x-hidden"
        )}
      >
        <Head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XZ6CQ9J0CJ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XZ6CQ9J0CJ');
          `}
          </Script>
        </Head>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
