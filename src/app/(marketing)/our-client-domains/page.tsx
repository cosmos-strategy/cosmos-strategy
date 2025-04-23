import { FC, Suspense } from "react";
import OurWorkMapSection from "@/app/_components/our-work-map-section";
import IpSuitsAccordian from "@/app/_components/ip-suits-accordian";
import Image from "next/image";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Client Domainss | Cosmos Strategy",
  description: "Our Client Domainss | Cosmos Strategy",
};

interface OurClientDomainsProps {}

const OurClientDomains: FC<OurClientDomainsProps> = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollToHash />
      </Suspense>
      <OurWorkMapSection />
    </>
  );
};

export default OurClientDomains;
