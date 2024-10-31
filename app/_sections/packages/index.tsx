import { ContentTemplate } from "@/components/home/ContentTemplate";
import React from "react";
import packagesData from "@/data-access/packages.json";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, SunDim } from "lucide-react";

export function Packages() {
  return (
    <main className="min-h-screen py-10">
      <ContentTemplate
        title="Packages"
        subtitle="Choose our range of fixed departure packages for 2024."
        hasButton
        buttonHref="/"
        buttonLabel="View all packages"
      >
        {packagesData.map((pkg) => (
          <PackageCard pkg={pkg} key={pkg.name} />
        ))}
      </ContentTemplate>
    </main>
  );
}

// New functional component for rendering each package card
const PackageCard: React.FC<{ pkg: any }> = ({ pkg }) => {
  return (
    <Card
      key={pkg.name}
      className="flex p-3 lg:h-[470px] rounded-3xl shadow-md"
    >
      {/* IMAGE SECTION - LEFT */}
      <div className="h-full w-3/5 rounded-xl bg-foreground/10" />
      {/* TEXT SECTION - RIGHT */}
      <section className="w-2/5 p-8 flex lg:flex-col justify-between">
        <div className="space-y-4">
          {/* NAME */}
          <h2 className="text-3xl lg:text-4xl font-neueRegrade font-semibold">
            {pkg.name}
          </h2>
          {/* DESCRIPTION */}
          <p className="text-lg leading-none">{pkg.description}</p>
          {/* TAGS */}
          <div className="flex gap-3 text-muted-foreground">
            <div className="border border-foreground/50 rounded-full px-2 p-1 text-sm flex items-center gap-1">
              <SunDim className="h-4 w-4" /> {pkg.duration}
            </div>
            <div className="border border-foreground/50 rounded-full px-2 p-1 text-sm flex items-center gap-2">
              {pkg.difficulty}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {/* PRICE */}
          <p className="font-neueRegrade">
            <span className="text-2xl lg:text-3xl font-normal mr-3 text-muted-foreground">
              Starting from
            </span>
            <span className="text-2xl lg:text-3xl font-medium">
              USD {pkg.price}
            </span>
          </p>
          <Button className="pr-1 lg:w-full lg:h-12 bg-gradient-to-r from-primary to-purple-500 hover:from-primary transition-all flex justify-between items-center">
            <span className="w-10"></span>
            <span>Book Now</span>
            <div className="rounded-full bg-background h-10 w-10 flex items-center justify-center ml-2">
              <ArrowUpRight className="h-6 w-6 text-foreground" />
            </div>
          </Button>
        </div>
      </section>
    </Card>
  );
};
