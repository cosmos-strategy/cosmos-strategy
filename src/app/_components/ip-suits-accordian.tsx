"use client";

import { FC, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { cn } from "@/lib/utils";
import { Icons } from "@/app/_components/icons";
import { IpSuitesBlz } from "@/config/marketing";

interface IpSuitsAccordianProps {}

const CustomTrigger = ({
  children,
  className,
  isOpen,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionTrigger> & {
  isOpen?: boolean;
}) => {
  return (
    <div className="relative">
      <AccordionTrigger className={cn(className, "[&>svg]:hidden")} {...props}>
        {children}
        <div className="absolute right-4 md:left-0  md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 bottom-4 md:bottom-[initial] md:right-[initial]">
          {isOpen ? (
            <Icons.Minus className=" w-6 h-6 bg-secondary-foreground/40 hover:bg-secondary-foreground/50 rounded-full text-foreground" />
          ) : (
            <Icons.Plus className=" w-6 h-6 bg-secondary-foreground/40 hover:bg-secondary-foreground/50 rounded-full text-foreground" />
          )}
        </div>
      </AccordionTrigger>
    </div>
  );
};

const IpSuitsAccordian: FC<IpSuitsAccordianProps> = () => {
  const [open, setOpen] = useState<string | undefined>(undefined);
  const val = "B3BC - Flows";
  return (
    <div className="flex w-full flex-col py-4">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center  border-b border-[#ED7D31] md:ps-8">
        <h4 className="text-pargrpah_heading text-secondary-foreground py-2 font-heading text-left">
          IP Suites
        </h4>
        <h4 className="text-pargrpah_heading text-secondary-foreground py-2 font-heading  leading-normal text-left md:max-w-[280px]">
          IP-Suites@Cosmos
        </h4>
        <h4 className="text-our_text_heading text-secondary-foreground py-2 font-heading text-left md:text-right ">
          IP Domain
        </h4>
      </div>
      <Accordion
        type="multiple"
        className="w-full"
        // value={open}
        // onValueChange={setOpen}
      >
        <AccordionItem value="item-1" className="">
          <CustomTrigger
            className="px-0 border-b border-foreground/40 "
            isOpen={open === "item-1"}
          >
            <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center md:ps-8">
              <h4 className="text-pargrpah_heading text-primary-foreground py-2 font-heading text-left">
                Blz
              </h4>
              <p className="text-pargrpah_heading text-primary-foreground py-2 font-heading  leading-normal text-left md:max-w-[280px]">
                Blz<span className="text-foreground">@Cosmos</span>
              </p>
              <span className="text-extra_paragraph_heading text-muted-foreground py-2 font-paragraph text-left md:text-right">
                Insight
              </span>
            </div>
          </CustomTrigger>

          <AccordionContent className="border-b border-foreground/40 py-8 px-4 md:px-8 overflow-x-scroll md:overflow-x-auto">
            {" "}
            {/*/*hell*/}
            <div className="w-full flex flex-col items-start gap-4">
              <p className="text-pargrpah_heading mb-1 text-foreground font-heading leading-normal">
                To Uncover Blazing Insights
              </p>
              {/* Title Bar */}
              <div className="w-full grid grid-cols-3 md:grid-cols-3 bg-secondary-foreground py-3 px-2 items-center ">
                <h4 className="text-extra_paragraph_heading text-primary-foreground py-2 font-paragraph text-left">
                  IP Brand
                </h4>
                <p className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                  Scope
                </p>
                <span className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:text-right">
                  Moniker
                </span>
              </div>
              {/* List Items */}
              <ul className="flex flex-col items-start justify-center gap-2 w-full py-4">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    B3BC-Flows
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph  leading-normal text-left md:max-w-[280px]">
                    B3BC-Flows.Blz
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    4Win.Brnd
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col items-start justify-center gap-2 w-full py-4">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    I-Spiral
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px] leading-normal">
                    I-Spiral.Mkt.360Sight.Blz
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    4Win.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    I-Spiral-Xct
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px] leading-normal">
                    I-Spiral-BD.Mkt.360Sight.Blz
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    4Win.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    D-Spiral
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px] leading-normal">
                    D-Spiral.Mkt.360Sight.Blz
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    4Win.Brnd
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col items-start justify-center gap-2 w-full py-4">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    OrgAware
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px] leading-normal">
                    OrgAware.Ntrprys.360Sight.Blz
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    4Win.Brnd
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col items-start justify-center gap-2 w-full py-4">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    PassionDiamond
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px] leading-normal">
                    PassionDiamond.Mpth.Blz
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    4Win.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Sublime
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px] leading-normal">
                    Sublime.Mpth.Blz
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    4Win.Brnd
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col items-start justify-center gap-2 w-full py-4">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    GrwthPyrmd
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px] leading-normal">
                    GrwthPyrmd.Blz
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    4Win.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Induct
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px] leading-normal">
                    Induct.Blz
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    4Win.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Insight-Matrix
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px] leading-normal">
                    Insight-Matrix.Blz
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    4Win.Brnd
                  </span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="">
          <CustomTrigger
            className="px-0 border-b border-foreground/40 "
            isOpen={open === "item-2"}
          >
            <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center md:ps-8">
              <h4 className="text-pargrpah_heading text-primary-foreground py-2 font-heading text-left">
                Brnd
              </h4>
              <p className="text-pargrpah_heading text-primary-foreground py-2 font-heading  leading-normal text-left md:max-w-[280px]">
                Brnd<span className="text-foreground">@Cosmos</span>
              </p>
              <span className="text-extra_paragraph_heading text-muted-foreground py-2 font-paragraph text-left md:text-right">
                Brand
              </span>
            </div>
          </CustomTrigger>
          <AccordionContent className="border-b border-foreground/40 py-8 px-4 md:px-8">
            <div className="w-full flex flex-col items-start gap-4">
              <p className="text-pargrpah_heading mb-1 text-foreground font-heading leading-normal">
                To define & propel most powerful & inspiring brands
              </p>
              {/* Title Bar */}

              <div className="w-full grid grid-cols-2 md:grid-cols-3 bg-secondary-foreground py-3 px-2 items-center ">
                <h4 className="text-extra_paragraph_heading text-primary-foreground py-2 font-paragraph text-left">
                  IP Brand
                </h4>
                <p className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                  Scope
                </p>
                <span className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:text-right">
                  Moniker
                </span>
              </div>
              {/* List Items */}
              <ul className="flex flex-col items-start justify-center gap-2 w-full py-4">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    4Win
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px] leading-normal">
                    Cust, Consumer, Brand, Shopper Propositions
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    4Win.Brnd
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col items-start justify-center gap-2 w-full py-4">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Bortals
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand Portfolio Strategy
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Bortals.Brnd
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col items-start justify-center gap-2 w-full py-4">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Brandricity.Ntrprys
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand Centric Organisations
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Brandricity.Ntrprys.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Brandricity.Role
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Roles of Brand in Organisations
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Brandricity.Role.Brnd
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col items-start justify-center gap-2 w-full py-4">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Brnd.Def
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand Definition
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Brnd.Def
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    BrnDeus
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand Definition Framework
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    BrnDeus.Def.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Brnd.Prtrt
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand Portrait
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Brnd.Def.Prtrt
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Brnd.Stroice
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand Strategy Definition
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Brnd.Stroice.Def
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Brnd.Ntrprys.Stroice
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand: Business Strategy Definition
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Brnd.Ntrprys.Stroice.Def
                  </span>
                </li>
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    BrndFth
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand Valuation Model
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    BrndFth.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Xtent
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand Value Quantum
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    BrndFth.Xtent.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Xtensity
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand Value Intensity
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    BrndFth.Xtensity.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    BrnDzine
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand Design & Expression
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    BrnDzine.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    SnSMprnt
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Sensorial Imprint of Brand
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    SnSMprnt.BrnDzine.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Frnchys
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Brand Franchise Management
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Frnchys.Brnd
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    ReMkt
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Restructuring markets using Brand
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    ReMkt.Brnd
                  </span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="">
          <CustomTrigger
            className="px-0 border-b border-foreground/40 "
            isOpen={open === "item-3"}
          >
            <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center md:ps-8">
              <h4 className="text-pargrpah_heading text-primary-foreground py-2 font-heading text-left">
                Stroice
              </h4>
              <p className="text-pargrpah_heading text-primary-foreground py-2 font-heading  leading-normal text-left md:max-w-[280px]">
                Stroice<span className="text-foreground">@Cosmos</span>
              </p>
              <span className="text-extra_paragraph_heading text-muted-foreground py-2 font-paragraph text-left md:text-right">
                Strategy & Strategy Choice
              </span>
            </div>
          </CustomTrigger>
          <AccordionContent className="border-b border-foreground/40 py-8 px-4 md:px-8">
            <div className="w-full flex flex-col items-start gap-4">
              <p className="text-pargrpah_heading mb-1 text-white font-heading leading-normal">
                To craft unique strategic choices and propel winning strategy
              </p>
              {/* Title Bar */}
              <div className="w-full grid grid-cols-2 md:grid-cols-3 bg-secondary-foreground py-3 px-2 items-center ">
                <h4 className="text-extra_paragraph_heading text-primary-foreground py-2 font-paragraph text-left">
                  IP Brand
                </h4>
                <p className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                  Scope
                </p>
                <span className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:text-right">
                  Moniker
                </span>
              </div>
              {/* List Items */}
              <ul className="flex flex-col items-start justify-center gap-2 w-full py-4">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Bizcope
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Operating scope of Biz
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Bizcope.Stroice
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Stroice.Def
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Strategy Definition
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Stroice.Def
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    OpCap-Diads
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Opportunity – Capability Diads
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    OpCap-Diads.Stroice
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Prps.Ntrprys
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Enterprise Purpose Statement & Charter
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Prps.Ntrprys.Stroice
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col items-start justify-center gap-2 w-full py-4">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Prps.Ntrprys.Charter
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Enterprise Purpose Statement & Charter
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Prps.Ntrprys.Charter.Stroice
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Plybk
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Enterprise Expansion Playbook
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Plybk.Prps.Ntrprys.Stroice
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Straxcellence
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Levers of Strategic Excellence
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Straxcellence.Stroice
                  </span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="">
          <CustomTrigger
            className="px-0 border-b border-foreground/40 "
            isOpen={open === "item-4"}
          >
            <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center md:ps-8">
              <h4 className="text-pargrpah_heading text-primary-foreground py-2 font-heading text-left">
                Xct
              </h4>
              <p className="text-pargrpah_heading text-primary-foreground py-2 font-heading  leading-normal text-left md:max-w-[280px]">
                Xct<span className="text-foreground">@Cosmos</span>
              </p>
              <span className="text-extra_paragraph_heading text-muted-foreground py-2 font-paragraph text-left md:text-right">
                Sales, BD & Distribution
              </span>
            </div>
          </CustomTrigger>
          <AccordionContent className="border-b border-foreground/40 py-8 px-4 md:px-8">
            <div className="w-full flex flex-col items-start gap-4">
              <p className="text-pargrpah_heading mb-1 text-foreground font-heading leading-normal">
                To design & activate best sales, distribution and business
                development solutions
              </p>
              {/* Title Bar */}
              <div className="w-full grid grid-cols-2 md:grid-cols-3 bg-secondary-foreground py-3 px-2 items-center ">
                <h4 className="text-extra_paragraph_heading text-primary-foreground py-2 font-paragraph text-left">
                  IP Brand
                </h4>
                <p className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                  Scope
                </p>
                <span className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:text-right">
                  Moniker
                </span>
              </div>
              {/* List Items */}
              <ul className="flex flex-col items-start justify-center gap-2 w-full">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    ProDact
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Professional Demand Activation
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    ProDact.Xct
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    SHoM
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Stakeholder Management
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    SHoM.ProDact.Xct
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    OYC
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Own Your Customer
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    OYC.ProDact.Xct
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    KCM
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Key Customer Management
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    KCM.ProDact.Xct
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    MaVTree
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Market Value Tree
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    MaVTree.ProDact.Xct
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    CustEF
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Customer Engagement Funnel
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    CustEF.ProDact.Xct
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Aufr
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Product, Service, Relationship Offer
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Aufr.ProDact.Xct
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Dist-Evolve
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Distributor Evolution
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Dist-Evolve.Xct
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    SalesCentricity
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Sales Centric Organisations
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    SalesCentricity.Xct
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    SalesCentricity.PeopleRoles
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Sales People Roles
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    SalesCentricity.PeopleRoles.Xct
                  </span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="">
          <CustomTrigger
            className="px-0 border-b border-foreground/40 "
            isOpen={open === "item-5"}
          >
            <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center md:ps-8">
              <h4 className="text-pargrpah_heading text-primary-foreground py-2 font-heading text-left">
                NuForm
              </h4>
              <p className="text-pargrpah_heading text-primary-foreground py-2 font-heading  leading-normal text-left md:max-w-[280px]">
                NuForm<span className="text-foreground">@Cosmos</span>
              </p>
              <span className="text-extra_paragraph_heading text-muted-foreground py-2 font-paragraph text-left md:text-right">
                Transformation
              </span>
            </div>
          </CustomTrigger>
          <AccordionContent className="border-b border-foreground/40 py-8 px-4 md:px-8">
            <div className="w-full flex flex-col items-start gap-4">
              <p className="text-pargrpah_heading mb-1 text-foreground font-heading leading-normal">
                To trigger, frame and oversee future facing transformations
              </p>
              {/* Title Bar */}
              <div className="w-full grid grid-cols-2 md:grid-cols-3 bg-secondary-foreground py-3 px-2 items-center ">
                <h4 className="text-extra_paragraph_heading text-primary-foreground py-2 font-paragraph text-left">
                  IP Brand
                </h4>
                <p className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                  Scope
                </p>
                <span className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:text-right">
                  Moniker
                </span>
              </div>
              {/* List Items */}
              <ul className="flex flex-col items-start justify-center gap-2 w-full">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    NuForm.Process
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Insights to Actions Transformation Process
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    NuForm.Process
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    NuForm.Program
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Transformation Program Mgmt
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    NuForm.Program
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    HiroZ
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Hero Actions
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    HiroZ.NuForm
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    XtarZ
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Star Shifts
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    XtarZ.NuForm
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    XtarZ.GTM
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    GTM Star Shifts
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    XtarZ.GTM.NuForm
                  </span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="">
          <CustomTrigger
            className="px-0 border-b border-foreground/40 "
            isOpen={open === "item-6"}
          >
            <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center md:ps-8">
              <h4 className="text-pargrpah_heading text-primary-foreground py-2 font-heading text-left">
                Stranovate
              </h4>
              <p className="text-pargrpah_heading text-primary-foreground py-2 font-heading  leading-normal text-left md:max-w-[280px]">
                Stranovate<span className="text-foreground">@Cosmos</span>
              </p>
              <span className="text-extra_paragraph_heading text-muted-foreground py-2 font-paragraph text-left md:text-right">
                Innovation
              </span>
            </div>
          </CustomTrigger>
          <AccordionContent className="border-b border-foreground/40 py-8 px-4 md:px-8">
            <div className="w-full flex flex-col items-start gap-4">
              <p className="text-pargrpah_heading mb-1 text-foreground font-heading leading-tight">
                To identify, frame, define, design and develop winning
                innovations while managing a strategic innovations portfolio
              </p>
              {/* Title Bar */}
              <div className="w-full grid grid-cols-2 md:grid-cols-3 bg-secondary-foreground py-3 px-2 items-center ">
                <h4 className="text-extra_paragraph_heading text-primary-foreground py-2 font-paragraph text-left">
                  IP Brand
                </h4>
                <p className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                  Scope
                </p>
                <span className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:text-right">
                  Moniker
                </span>
              </div>
              {/* List Items */}
              <ul className="flex flex-col items-start justify-center gap-2 w-full">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Stranovate.Def
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Innovation Definition
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Stranovate.Def
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Stranovate.Value
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Value Innovation Process
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Stranovate.Value
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Stranovate.Cost
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Cost Innovation Process
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Stranovate.Cost
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    I-Stroice
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Innovation Strategy
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    I-Stroice.Stranovate
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    I-Portals
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Innovation Portfolio Management
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    I-Portals.Stroice.Stranovate
                  </span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="">
          <CustomTrigger
            className="px-0 border-b border-foreground/40 "
            isOpen={open === "item-7"}
          >
            <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center md:ps-8">
              <h4 className="text-pargrpah_heading text-primary-foreground py-2 font-heading text-left">
                Stractivate
              </h4>
              <p className="text-pargrpah_heading text-primary-foreground py-2 font-heading  leading-normal text-left md:max-w-[280px]">
                Stractivate<span className="text-foreground">@Cosmos</span>
              </p>
              <span className="text-extra_paragraph_heading text-muted-foreground py-2 font-paragraph text-left md:text-right">
                Activation & Brand Properties
              </span>
            </div>
          </CustomTrigger>
          <AccordionContent className="border-b border-foreground/40 py-8 px-4 md:px-8">
            <div className="w-full flex flex-col items-start gap-4">
              <p className="text-pargrpah_heading mb-1 text-foreground font-heading leading-normal">
                To identify, frame, define, design and develop, winning
                activations and brand properties
              </p>
              {/* Title Bar */}
              <div className="w-full grid grid-cols-2 md:grid-cols-3 bg-secondary-foreground py-3 px-2 items-center ">
                <h4 className="text-extra_paragraph_heading text-primary-foreground py-2 font-paragraph text-left">
                  IP Brand
                </h4>
                <p className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                  Scope
                </p>
                <span className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:text-right">
                  Moniker
                </span>
              </div>
              {/* List Items */}
              <ul className="flex flex-col items-start justify-center gap-2 w-full">
                <li className="w-full grid grid-cols-2 md:grid-cols-3  py-3 px-2 items-center ">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Stranovate.Def
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Innovation Definition
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Stranovate.Def
                  </span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="">
          <CustomTrigger
            className="px-0 border-b border-foreground/40 "
            isOpen={open === "item-8"}
          >
            <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center md:ps-8">
              <h4 className="text-pargrpah_heading text-primary-foreground py-2 font-heading text-left">
                Flr
              </h4>
              <p className="text-pargrpah_heading text-primary-foreground py-2 font-heading  leading-normal text-left md:max-w-[280px]">
                Flr<span className="text-foreground">@Cosmos</span>
              </p>
              <span className="text-extra_paragraph_heading text-muted-foreground py-2 font-paragraph text-left md:text-right">
                Capabilities, Skills & Potential
              </span>
            </div>
          </CustomTrigger>
          <AccordionContent className="border-b border-foreground/40 py-8 px-4 md:px-8">
            <div className="w-full flex flex-col items-start gap-4">
              <p className="text-pargrpah_heading mb-1 text-foreground font-heading leading-normal">
                To Uncover Blazing Insights
              </p>
              {/* Title Bar */}
              <div className="w-full grid grid-cols-2 md:grid-cols-3 bg-secondary-foreground py-3 px-2 items-center ">
                <h4 className="text-extra_paragraph_heading text-primary-foreground py-2 font-paragraph text-left">
                  IP Brand
                </h4>
                <p className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                  Scope
                </p>
                <span className="text-extra_paragraph_heading text-foreground py-2 font-paragraph text-left md:text-right">
                  Moniker
                </span>
              </div>
              {/* List Items */}
              <ul className="flex flex-col items-start justify-center gap-2 w-full">
                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Innate
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Potential Management
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Innate.Flr
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    Manifest
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Skills Management
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    Manifest.Flr
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    I-Purpose
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Individual Coaching
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    I-Purpose.Flr
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    UnProcess
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    Intuitive Processes
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    UnProcess.Flr
                  </span>
                </li>

                <li className="w-full grid grid-cols-2 md:grid-cols-3 px-2 items-center">
                  <h4 className="text-extra_subtitle_heading text-primary-foreground py-2 font-paragraph text-left">
                    QnA
                  </h4>
                  <p className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:max-w-[280px]">
                    QnA Process
                  </p>
                  <span className="text-extra_subtitle_heading text-foreground py-2 font-paragraph text-left md:text-right">
                    QnA.UnProcess.Flr
                  </span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default IpSuitsAccordian;
