"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChartColumn, ChevronRight, SunDim } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

// Main SmallPackageCard Component
export const SmallPackageCard = ({ pkg }: { pkg: any }) => {
  // Handles the booking action
  const handleBook = (pkg: any) => {
    const message = `
  Hello, I am interested in booking the following package:
  
  Title: ${pkg.name}
  Duration: ${pkg.duration}
  Difficulty: ${pkg.difficulty}
  Price: USD ${pkg.startingPrice}
  
  Please provide more details!
  `;

    navigator.clipboard
      .writeText(message)
      .then(() => {
        alert(
          "The booking message has been copied to your clipboard. You will now be redirected to Messenger. Please paste the message there."
        );
        window.open("https://m.me/6811848422203667", "_blank");
      })
      .catch((err) => {
        alert("Failed to copy the message. Please try again.");
        console.error("Clipboard copy failed: ", err);
      });
  };

  return (
    <Card className="relative h-[400px] overflow-hidden rounded-3xl shadow-lg border flex flex-col justify-between">
      {/* --- Overlay Gradient --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground z-10" />
      <Image
        src={pkg.image}
        alt={pkg.name || ""}
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0"
      />
      <PriceSection startingPrice={pkg.startingPrice} />
      <ContentSection
        title={pkg.name}
        subtitle={pkg.subtitle}
        description={pkg.description}
        duration={pkg.duration}
        difficulty={pkg.difficulty}
        onBook={() => handleBook(pkg)}
      />
    </Card>
  );
};

// --- Subcomponent: Price Section ---
const PriceSection = ({ startingPrice }: { startingPrice: number }) => (
  <div className="relative z-20 m-2 self-end">
    <div className="px-2 p-0 pt-1 border border-border/50 bg-foreground/30 text-primary-foreground w-fit rounded-full">
      <p className="text-xl">
        USD
        <span className="font-medium ml-1">${startingPrice}</span>
      </p>
    </div>
  </div>
);

// --- Subcomponent: Content Section ---
const ContentSection = ({
  title,
  subtitle,
  description,
  duration,
  difficulty,
  onBook,
}: {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  difficulty: string;
  onBook: () => void;
}) => (
  <section className="relative z-20 p-4 px-3 text-primary-foreground flex flex-col">
    {/* --- Badges --- */}
    <div className="flex gap-1 text-primary-foreground mt-4">
      <Badge icon={<SunDim className="h-3 w-3" />} text={`${duration} days`} />
      <Badge icon={<ChartColumn className="h-3 w-3" />} text={difficulty} />
    </div>

    {/* --- Title and Description --- */}
    <div className="my-3">
      <h2 className="text-2xl font-semibold font-familjenGrotesk leading-none">
        {title}
      </h2>
      <p className="text-lg leading-tight">{subtitle}</p>
    </div>
    <p
      className="text-sm leading-tight"
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 7,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
      {description}
    </p>

    {/* --- Action Buttons --- */}
    <div className="flex justify-between gap-3">
      <ActionButton
        text="View Details"
        bgClass="bg-white text-primary"
        iconBgColor="bg-white"
        icon={<ChevronRight className={`h-6 w-6 text-primary`} />}
      />
      <ActionButton
        text="Book Now"
        bgClass="bg-gradient-to-br from-primary via-80% via-primary to-primary text-white"
        iconBgColor="bg-white"
        icon={<ArrowUpRight className={`h-6 w-6 text-primary`} />}
        onClick={onBook}
      />
    </div>
  </section>
);

// --- Subcomponent: Badge ---
const Badge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="border border-border/50 bg-foreground/30 rounded-full p-2 py-0.5 text-sm flex items-center gap-1">
    {icon} {text}
  </div>
);

// --- Subcomponent: Action Button ---
const ActionButton = ({
  text,
  bgClass,
  iconBgColor,
  icon,
  onClick,
}: {
  text: string;
  bgClass: string;
  iconBgColor?: string;
  icon: ReactNode;
  onClick?: () => void;
}) => (
  <Button
    onClick={onClick}
    className={`mt-3 pr-1 w-full h-10 ${bgClass} transition-all font-familjenGrotesk font-light flex justify-between items-center`}
  >
    <span className="font-semibold text-lg">{text}</span>
    <div
      className={cn("rounded-full bg-primary h-8 w-8 flex items-center justify-center ml-2", iconBgColor)}
    >
      {icon}
    </div>
  </Button>
);
