"use client";

import type React from "react";

import { type FC, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";
import {
  BlzData,
  BrndData,
  StroiceData,
  XctData,
  NuFormData,
  StranovateData,
  StractivateData,
  FlrData,
} from "@/config/marketing";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/app/_components/ui/table";

type IpSuitsAccordianProps = {};

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
            <Minus className=" w-6 h-6 bg-secondary-foreground/40 hover:bg-secondary-foreground/50 rounded-full text-foreground" />
          ) : (
            <Plus className=" w-6 h-6 bg-secondary-foreground/40 hover:bg-secondary-foreground/50 rounded-full text-foreground" />
          )}
        </div>
      </AccordionTrigger>
    </div>
  );
};

const IpSuitsAccordian: FC<IpSuitsAccordianProps> = () => {
  const [open, setOpen] = useState<string | undefined>(undefined);

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
      <Accordion type="multiple" className="w-full">
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
            <div className="w-full flex flex-col items-start gap-4">
              <p className="text-pargrpah_heading mb-1 text-foreground font-heading leading-normal">
                To Uncover Blazing Insights
              </p>
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary-foreground py-3 hover:bg-secondary-foreground border-none">
                    <TableHead className="!text-extra_paragraph_heading text-primary-foreground py-5 font-paragraph text-left">
                      IP Brand
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:max-w-[280px]">
                      Scope
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:text-right">
                      Moniker
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {BlzData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="bg-transparent hover:bg-transparent !text-foreground my-3 border-none text-subtitle_heading"
                    >
                      <TableCell className="py-4 text-primary-foreground">
                        {item.ipBrand}
                      </TableCell>
                      <TableCell className="py-4">{item.scope}</TableCell>
                      <TableCell className="text-left md:text-right py-4">
                        {item.moniker}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary-foreground py-3 hover:bg-secondary-foreground border-none">
                    <TableHead className="!text-extra_paragraph_heading text-primary-foreground py-5 font-paragraph text-left">
                      IP Brand
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:max-w-[280px]">
                      Scope
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:text-right">
                      Moniker
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {BrndData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="bg-transparent hover:bg-transparent !text-foreground my-3 border-none text-subtitle_heading"
                    >
                      <TableCell className="py-4 text-primary-foreground">
                        {item.ipBrand}
                      </TableCell>
                      <TableCell className="py-4">{item.scope}</TableCell>
                      <TableCell className="text-left md:text-right py-4">
                        {item.moniker}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary-foreground py-3 hover:bg-secondary-foreground border-none">
                    <TableHead className="!text-extra_paragraph_heading text-primary-foreground py-5 font-paragraph text-left">
                      IP Brand
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:max-w-[280px]">
                      Scope
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:text-right">
                      Moniker
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {StroiceData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="bg-transparent hover:bg-transparent !text-foreground my-3 border-none text-subtitle_heading"
                    >
                      <TableCell className="py-4 text-primary-foreground">
                        {item.ipBrand}
                      </TableCell>
                      <TableCell className="py-4">{item.scope}</TableCell>
                      <TableCell className="text-left md:text-right py-4">
                        {item.moniker}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary-foreground py-3 hover:bg-secondary-foreground border-none">
                    <TableHead className="!text-extra_paragraph_heading text-primary-foreground py-5 font-paragraph text-left">
                      IP Brand
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:max-w-[280px]">
                      Scope
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:text-right">
                      Moniker
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {XctData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="bg-transparent hover:bg-transparent !text-foreground my-3 border-none text-subtitle_heading"
                    >
                      <TableCell className="py-4 text-primary-foreground">
                        {item.ipBrand}
                      </TableCell>
                      <TableCell className="py-4">{item.scope}</TableCell>
                      <TableCell className="text-left md:text-right py-4">
                        {item.moniker}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary-foreground py-3 hover:bg-secondary-foreground border-none">
                    <TableHead className="!text-extra_paragraph_heading text-primary-foreground py-5 font-paragraph text-left">
                      IP Brand
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:max-w-[280px]">
                      Scope
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:text-right">
                      Moniker
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {NuFormData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="bg-transparent hover:bg-transparent !text-foreground my-3 border-none text-subtitle_heading"
                    >
                      <TableCell className="py-4 text-primary-foreground">
                        {item.ipBrand}
                      </TableCell>
                      <TableCell className="py-4">{item.scope}</TableCell>
                      <TableCell className="text-left md:text-right py-4">
                        {item.moniker}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary-foreground py-3 hover:bg-secondary-foreground border-none">
                    <TableHead className="!text-extra_paragraph_heading text-primary-foreground py-5 font-paragraph text-left">
                      IP Brand
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:max-w-[280px]">
                      Scope
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:text-right">
                      Moniker
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {StranovateData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="bg-transparent hover:bg-transparent !text-foreground my-3 border-none text-subtitle_heading"
                    >
                      <TableCell className="py-4 text-primary-foreground">
                        {item.ipBrand}
                      </TableCell>
                      <TableCell className="py-4">{item.scope}</TableCell>
                      <TableCell className="text-left md:text-right py-4">
                        {item.moniker}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary-foreground py-3 hover:bg-secondary-foreground border-none">
                    <TableHead className="!text-extra_paragraph_heading text-primary-foreground py-5 font-paragraph text-left">
                      IP Brand
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:max-w-[280px]">
                      Scope
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:text-right">
                      Moniker
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {StractivateData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="bg-transparent hover:bg-transparent !text-foreground my-3 border-none text-subtitle_heading"
                    >
                      <TableCell className="py-4 text-primary-foreground">
                        {item.ipBrand}
                      </TableCell>
                      <TableCell className="py-4">{item.scope}</TableCell>
                      <TableCell className="text-left md:text-right py-4">
                        {item.moniker}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary-foreground py-3 hover:bg-secondary-foreground border-none">
                    <TableHead className="!text-extra_paragraph_heading text-primary-foreground py-5 font-paragraph text-left">
                      IP Brand
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:max-w-[280px]">
                      Scope
                    </TableHead>
                    <TableHead className="!text-extra_paragraph_heading text-foreground py-5 font-paragraph text-left md:text-right">
                      Moniker
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {FlrData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="bg-transparent hover:bg-transparent !text-foreground my-3 border-none text-subtitle_heading"
                    >
                      <TableCell className="py-4 text-primary-foreground">
                        {item.ipBrand}
                      </TableCell>
                      <TableCell className="py-4">{item.scope}</TableCell>
                      <TableCell className="text-left md:text-right py-4">
                        {item.moniker}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default IpSuitsAccordian;
