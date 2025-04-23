import OurOfferPage from "@/app/_components/our-offer-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Promise | Cosmos Strategy",
  description: "Our Promise | Cosmos Strategy",
};

export default function Component() {
  return (
    <>
      <OurOfferPage />
    </>
  );
}
