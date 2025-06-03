import { FC } from "react";
import { Button } from "@/app/_components/ui/button";
import { insightCenteredContent } from "@/config/marketing";
import Image from "next/image";
import { Icons } from "@/app/_components/icons";

const colors = [
  "#5CB7E3",
  "#007AB8",
  "#6b7280",
  "#007AB8",
  "#6b7280",
  "#5CB7E3",
  "#6b7280",
  "#5CB7E3",
  "#6b7280",
];

interface VerticalCarouselMobileProps {}

const VerticalCarouselMobile: FC<VerticalCarouselMobileProps> = () => {
  return (
    <section
      id="our-differentiators"
      className="w-screen flex md:hidden md:min-h-screen items-start relative justify-start bg-background py-16 md:py-16 flex-col"
    >
      <div className="container flex items-start justify-start flex-col relative gap-6">
        <h2 className="flex self-start items-start justify-start flex-col leading-[1.1] ">
          <span className="text-extra_paragraph_heading text-foreground font-heading">
            Our
          </span>
          <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
            Differentiators
          </span>
        </h2>
        <div className="flex items-start justify-start flex-col relative border-b border-b-foreground/20 pb-4">
          <h2 className="flex text-foreground text-tertiary_heading self-start items-start justify-start flex-col leading-normal mb-4">
            Insights centered
          </h2>
          <div className="flex items-start justify-top flex-col gap-4 md:gap-0 md:flex-row  overflow-y-scroll scrollbar-hide">
            <div className="grid grid-cols-1 md:grid-cols-1 px-0 md:px-2">
              <div className="flex w-full flex-col items-start">
                <div className="flex items-start justify-center flex-col gap-4 text-foreground">
                  <div className="flex flex-wrap md:flex-nowrap items-center justify-start gap-8">
                    <div className="flex items-start justify-center flex-col gap-4 text-foreground md:basis-3/4">
                      <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                        Modern, Insights centered, 'doctor' approach
                      </h4>
                      <div className="p-2">
                        <ul className="list-disc list-outside">
                          <li className="text-extra_subtitle_heading font-paragraph text-foreground mb-2">
                            Core insights about problem &#x2192; Reimagine
                            Organisation + enterprise around insight
                            concentrically.
                          </li>
                          <li className="text-extra_subtitle_heading font-paragraph text-foreground">
                            Interpreting Organisation as an engine fuelled by
                            differentiated insights.
                          </li>
                          <li className="text-extra_subtitle_heading font-paragraph text-foreground">
                            Insights at the center of marketing, innovation,
                            design, etc.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Image
                      alt="Our Trrain"
                      className="w-1/2 md:w-1/4"
                      src="https://utfs.io/f/ZowmNmBHF7rVHVpLcCdWuQopKOivRcLqJD7x46CXtZGlw0Sh"
                      width={300}
                      height={300}
                    />
                  </div>
                  <p className="text-extra_subtitle_heading font-paragraph text-foreground hidden">
                    &#x2192;
                  </p>
                  <p className="font-heading text-foreground text-extra_paragraph_heading leading-[1.1] md:py-4">
                    Vs.
                  </p>
                </div>
                <div className="flex items-start justify-center flex-col gap-4 text-foreground">
                  <div className="flex flex-wrap md:flex-nowrap items-center justify-start gap-8">
                    <div className="flex items-start justify-center flex-col gap-4 text-foreground md:basis-3/4">
                      <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                        Traditional, algorithmic, 'engineering' approach
                      </h4>
                      <div className="p-2">
                        <ul className="list-disc list-outside">
                          <li className="text-extra_subtitle_heading font-paragraph text-foreground mb-2">
                            Top-down break up of problem &#x2192; bottom-up
                            synthesis of solution parts.
                          </li>
                          <li className="text-extra_subtitle_heading font-paragraph text-foreground">
                            Interpreting organisation as sum of parts.
                          </li>
                          <li className="text-extra_subtitle_heading font-paragraph text-foreground">
                            Insights at the center of P&L and organisation.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center justify-center flex-row gap-6">
                      <Button
                        className="rounded-xl min-w-24 font-paragraph bg-muted-foreground"
                        variant={"default"}
                      >
                        Value Chain
                      </Button>
                      <Icons.ArrowRight className="text-foreground" />
                      <Button
                        className="rounded-xl min-w-24 font-paragraph bg-muted-foreground"
                        variant={"default"}
                      >
                        Business
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" grid-cols-1 md:grid-cols-1 px-0 md:px-2 md:h-full hidden">
              <div className="flex flex-col items-center justify-between gap-10">
                <div className="flex items-center justify-center flex-row gap-6">
                  <Button
                    className="rounded-xl min-w-24 font-paragraph bg-muted-foreground"
                    variant={"default"}
                  >
                    Value Chain
                  </Button>
                  <Icons.ArrowRight className="text-foreground" />
                  <Button
                    className="rounded-xl min-w-24 font-paragraph bg-muted-foreground"
                    variant={"default"}
                  >
                    Business
                  </Button>
                </div>
                <Image
                  alt="Our Trrain"
                  className="w-full md:w-3/4"
                  src="https://utfs.io/f/ZowmNmBHF7rVHVpLcCdWuQopKOivRcLqJD7x46CXtZGlw0Sh"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start flex-col relative border-b border-b-foreground/20 pb-4">
          <h2 className="flex text-foreground text-tertiary_heading self-start items-start justify-start flex-col mb-4 leading-normal ">
            Insights → Hero Actions → P&Ls
          </h2>
          <div className="text-foreground">
            <div className="flex items-start justify-top flex-col md:max-h-[600px]  scrollbar-hide">
              <h4 className="font-paragraph text-subtitle_heading text-primary-foreground mb-4">
                From empathy to insights to hero actions to execution Strategy :
                choice of actions - not that of intent or directions
              </h4>
              <div className="flex items-center justify-start gap-1 flex-col relative py-8">
                {insightCenteredContent.map((item, i) => (
                  <Button
                    style={{ backgroundColor: `${colors[i]}` }}
                    className="rounded-xl min-w-72 md:min-w-72 font-paragraph static z-[1] h-7"
                    size={"lg"}
                    variant={"default"}
                  >
                    {item}
                  </Button>
                ))}
                <Image
                  className="w-full object-contain z-0 h-full absolute left-0 top-0 md:translate-y-6"
                  src={
                    "https://utfs.io/f/ZowmNmBHF7rVi72fZMu12L9SrhBkonyJq4Z8l0ANjKH7a5eu"
                  }
                  alt="Arrow"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start flex-col relative border-b border-b-foreground/20 pb-4">
          <h2 className="flex text-foreground text-tertiary_heading self-start items-start justify-start flex-col mb-4 leading-normal ">
            360 degree co-creation
          </h2>
          <div className="text-foreground mt-0 flex items-start justify-center flex-col">
            <div className="flex items-start justify-top flex-col md:max-h-[600px]  scrollbar-hide">
              <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground ">
                Intensive 360 degree solution co-creation & collaboration
                workshops
              </h4>
              <p className="font-paragraph text-foreground text-extra_paragraph_heading">
                With organization employees, customers, stakeholders
              </p>
              <Image
                alt="Our Trrain"
                className="w-1/2 md:w-[280px] mt-6"
                src="https://zkok4chdpn.ufs.sh/f/ZowmNmBHF7rV4j0m9M58tCRcZbLox5S9hfdI037uwUEjeQWF"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start flex-col relative border-b border-b-foreground/20 pb-4">
          <h2 className="flex text-foreground text-tertiary_heading self-start items-start justify-start flex-col mb-4 leading-normal ">
            Only senior consultants
          </h2>
          <div className="text-foreground mt-0 flex items-start justify-center flex-col">
            <h4 className="font-paragraph  text-extra_paragraph_heading text-primary-foreground">
              <span className="text-foreground">
                Only senior industry leaders
              </span>{" "}
              <br /> As
              <span> collaborative consultants</span> <br />{" "}
              <span className="text-foreground">Working across all levels</span>
            </h4>
            <Image
              alt="Our Trrain"
              className="w-1/2 md:w-[280px] mt-6"
              src="https://zkok4chdpn.ufs.sh/f/ZowmNmBHF7rVzMSnmIFNlZ1PCvG0BIV6jrxgaOSWF5w3QdTL"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex items-start justify-start flex-col relative border-b border-b-foreground/20 pb-4">
          <h2 className="flex text-foreground text-tertiary_heading self-start items-start justify-start flex-col mb-4 leading-normal ">
            500+ years, 70% practitioners
          </h2>
          <div className="text-foreground mt-0 flex items-start justify-center flex-col">
            <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
              <span className="text-foreground">
                500+ years of experience :
              </span>{" "}
              <br />
              <span>70% client side,</span>
              <br />{" "}
              <span className="text-foreground">Practitioner experience</span>
            </h4>
            <Image
              alt="Our Trrain"
              className="w-1/2 md:w-[280px] mt-6"
              src="https://zkok4chdpn.ufs.sh/f/ZowmNmBHF7rV4W9wl258tCRcZbLox5S9hfdI037uwUEjeQWF"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex items-start justify-start flex-col relative border-b border-b-foreground/20 pb-4">
          <h2 className="flex text-foreground text-tertiary_heading self-start items-start justify-start flex-col mb-4 leading-normal ">
            Tremendous diversity
          </h2>
          <div className="text-foreground mt-0 flex items-start justify-center flex-col">
            <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground mb-7">
              Tremendous diversity of experience
            </h4>
            <ul className="text-foreground font-paragraph text-extra_paragraph_heading flex flex-col items-start gap-5 list-none">
              <li>Across 60+ b2c, b2b, b2p industries</li>
              <li>Across all inhabited continents </li>
              <li>Across diverse scales & management types</li>
              <div className="p-0 -mt-3">
                <ol className="list-disc list-inside">
                  <li className="text-foreground/30">
                    Multinational, Regional or local giants, MSME's, start ups,
                    NFPs
                  </li>
                </ol>
              </div>
              <li>Across all functions</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start justify-start flex-col relative border-b border-b-foreground/20 pb-4">
          <h2 className="flex text-foreground text-tertiary_heading self-start items-start justify-start flex-col mb-4 leading-normal ">
            Handholding till execution & success
          </h2>
          <div className="text-foreground mt-0 flex items-start justify-center flex-col">
            <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
              <span className="text-foreground">Strategy,</span>
              <br />
              <span> Plan,</span>
              <br />{" "}
              <span className="text-foreground">Execution Oversight,</span>{" "}
              <br /> On Job Capability Building
            </h4>
            <Image
              alt="Our Trrain"
              className="w-1/2 md:w-[280px] mt-6"
              src="https://zkok4chdpn.ufs.sh/f/ZowmNmBHF7rV2IioqKZO6bH9JTFpDjWtfnc42Y073CdaRmov"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="flex items-start justify-start flex-col relative border-b border-b-foreground/20 pb-4">
          <h2 className="flex text-foreground text-tertiary_heading self-start items-start justify-start flex-col mb-4 leading-normal ">
            Customised approach & remuneration
          </h2>
          <div className="text-foreground mt-0 flex items-start justify-center flex-col">
            <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
              Customised Approach & Remuneration
            </h4>
            <div className="flex flex-col items-start justify-center gap-8">
              <div className="flex flex-col items-start justify-center gap-3 w-full">
                <h4 className="font-paragraph text-extra_paragraph_heading text-secondary-foreground">
                  Engagement
                </h4>
                <ul className="grid grid-cols-2  items-start justify-center w-full gap-4">
                  <li className="font-paragraph text-foreground text-subtitle_heading">
                    3 levels
                  </li>
                  <li className="font-paragraph text-foreground text-subtitle_heading">
                    <span className="inline-flex "> : </span>
                    {"   "}Premier | Professional | Elemental
                  </li>
                  <li className="font-paragraph text-foreground text-subtitle_heading">
                    3 scopes
                  </li>
                  <li className="font-paragraph text-foreground text-subtitle_heading">
                    <span className="inline-flex "> : </span>
                    {"   "}Modular Sequential | Modular | All - in
                  </li>
                  <li className="font-paragraph text-foreground text-subtitle_heading">
                    2 approaches
                  </li>
                  <li className="font-paragraph text-foreground text-subtitle_heading">
                    <span className="inline-flex "> : </span>
                    {"   "}Collaborative | Transactive
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-center gap-3 w-full">
                <h4 className="font-paragraph text-extra_paragraph_heading text-secondary-foreground">
                  Remuneration
                </h4>
                <ul className="grid grid-cols-2 items-start justify-center w-full gap-4">
                  <li className="font-paragraph text-foreground text-subtitle_heading">
                    3 options
                  </li>
                  <li className="font-paragraph text-foreground text-subtitle_heading">
                    <span className="inline-flex "> : </span>
                    {"   "}Project Fees | Retainer | Sweat Stake
                  </li>
                  <li className="font-paragraph text-foreground text-subtitle_heading">
                    2 components
                  </li>
                  <li className="font-paragraph text-foreground text-subtitle_heading">
                    <span className="inline-flex "> : </span>
                    {"   "}Fixed Fees | Empirical Satisfaction Linked Variable
                    Fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalCarouselMobile;
