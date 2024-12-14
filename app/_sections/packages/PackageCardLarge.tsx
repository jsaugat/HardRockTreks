import { Col } from "@/components/flex-layouts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ChartColumn, ChevronRight, SunDim } from "lucide-react";
import Image from "next/image";

export const LargePackageCard = ({ pkg }: { pkg: any }) => {
  const { name, subtitle, description, image, duration, difficulty, price } =
    pkg;
  return (
    <Card key={name} className="p-3 h-[400px] md:h-[480px] flex rounded-3xl">
      {/* //? IMAGE SECTION - LEFT */}
      <div className="relative h-full w-3/5 rounded-xl overflow-hidden">
        <Image src={image} alt={name || ""} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black" />
      </div>
      {/* //? TEXT SECTION - RIGHT */}
      <section className="w-2/5 p-8 flex lg:flex-col justify-between">
        <div className="space-y-4">
          <header>
            {/* TITLE */}
            <h2 className="text-3xl lg:text-4xl font-familjenGrotesk font-semibold">
              {name || "Title not loaded"}
            </h2>
            {/* SUBTITLE */}
            <h3 className="text-xl lg:text-2xl font-familjenGrotesk font-normal text-muted-foreground">
              {subtitle}
            </h3>
          </header>
          {/* DESCRIPTION */}
          <p className="text-lg leading-none">{description}</p>
          {/* TAGS */}
          <div className="flex gap-2 text-muted-foreground">
            <div className="border border-muted-foreground rounded-full px-2 p-1 text-sm flex items-center gap-1">
              <SunDim className="h-4 w-4" /> {duration}
            </div>
            <div className="border border-muted-foreground rounded-full px-2 p-1 text-sm flex items-center gap-1">
              <ChartColumn className="h-4 w-4" /> {difficulty}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {/* PRICE */}
          <p className="font-familjenGrotesk">
            <span className="text-2xl lg:text-3xl font-normal mr-3 text-muted-foreground">
              Starting from
            </span>
            <span className="text-2xl lg:text-3xl font-medium">
              USD
              ${price}
              <span className="text-muted-foreground font-normal">
                /Person
              </span>
            </span>
          </p>
          {/* Buttons */}
          <Col gap={2}>
            <Button className="pr-1 lg:w-full lg:h-12 border border-primary bg-white hover:bg-white text-lg text-primary transition-all duration-300 hover:ring flex justify-between items-center">
              <span className="w-10"></span>
              <span>More details</span>
              <div className="rounded-full h-10 w-10 flex items-center justify-center ml-2">
                <ChevronRight className="h-6 w-6 text-primary" />
              </div>
            </Button>

            <Button className="pr-1 lg:w-full lg:h-12 text-lg border border-primary bg-gradient-to-r from-primary via-primary to-blue-400 transition-all duration-300 hover:ring flex justify-between items-center">
              <span className="w-10"></span>
              <span>Book Now</span>
              <div className="rounded-full bg-background h-10 w-10 flex items-center justify-center ml-2">
                <ArrowUpRight className="h-6 w-6 text-primary" />
              </div>
            </Button>
          </Col>
        </div>
      </section>
    </Card>
  );
};
