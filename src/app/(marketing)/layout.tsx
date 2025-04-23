import React, { FC } from "react";
import Navbar from "@/app/_components/navbar";
import { marketingConfig } from "@/config/marketing";
import Footer from "@/app/_components/footer";
import { Toaster } from "@/app/_components/ui/toaster";
import { Metadata } from "next";

interface layoutProps {
  children: React.ReactNode;
}

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

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen w-screen bg-background">
      <Navbar items={marketingConfig} />
      {children}
      <Toaster />
      <Footer />
    </main>
  );
};

export default layout;
