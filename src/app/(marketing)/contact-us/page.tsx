import { FC } from "react";
import {
  addressData,
  contactUsBody,
  partnersContents,
} from "@/config/marketing";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/app/_components/contact-form";
import InfiniteMap from "@/app/_components/infinite-map";
import OurOffices from "@/app/_components/our-offices";
import { Metadata } from "next";
interface pageProps {}

export const metadata: Metadata = {
  title: "Contact Us | Cosmos Strategy",
  description: "Contact Us | Cosmos Strategy",
};
const page: FC<pageProps> = ({}) => {
  return (
    <>
      {/* {Form Section} */}
      <section className="w-screen flex items-center justify-center bg-background py-16 pt-44 xl:pt-56  md:pb-16">
        <div className="container flex items-start justify-center flex-col">
          <h2 className="flex items-start justify-start flex-col leading-[1.1]">
            <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
              Contact Us
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-bold">
              Get in Touch
            </span>
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* {CTA Section} */}
      <section className="w-screen flex items-center justify-center bg-background py-16 md:py-16">
        <div className="container flex flex-col items-start justify-start">
          <h2 className="flex items-start justify-start flex-col mb-8 md:mb-12 leading-[1.1]">
            <span className="text-secondary_heading text-primary-foreground  font-heading text-left">
              Reach out to us
            </span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-8 items-start justify-start">
            {contactUsBody.map((item, i) => (
              <li key={i} className="flex gap-6 items-start justify-start">
                <Image src={item.icon} alt={item.name} width={35} height={35} />
                <Link
                  className="font-paragraph text-foreground text-subtitle_heading"
                  href={item.link}
                  target="_blank"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <OurOffices />
    </>
  );
};

export default page;
