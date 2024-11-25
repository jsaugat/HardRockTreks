import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ChartColumn, SunDim } from "lucide-react";
import Image from "next/image";

export const SmallPackageCard = ({ pkg }: { pkg: any }) => {

  const handleBook = (pkg: any) => {
    const message = `
  Hello, I am interested in booking the following package:
  
  Title: ${pkg.title}
  Duration: ${pkg.duration}
  Difficulty: ${pkg.difficulty}
  Price: USD ${pkg.price}
  
  Please provide more details!
  `;

    // Copy the message to the clipboard
    navigator.clipboard
      .writeText(message)
      .then(() => {
        alert("The booking message has been copied to your clipboard. You will now be redirected to Messenger. Please paste the message there.");
        // Redirect to Messenger
        const messengerUrl = `https://m.me/6811848422203667`; // Replace with your page username
        window.open(messengerUrl, "_blank");
      })
      .catch((err) => {
        alert("Failed to copy the message. Please try again.");
        console.error("Clipboard copy failed: ", err);
      });
  };



  return (
    <Card className="relative h-[400px] overflow-hidden rounded-3xl shadow-lg border flex flex-col justify-between">
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-foreground z-10" />
      {/* Background Image */}
      <Image
        src={pkg.image} // Make sure to pass the image URL in pkg.image
        alt={pkg.title}
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0"
      />
      {/* Price and Button */}
      <div className="relative z-20 m-2 self-end">
        <div className="px-2 p-0 pt-1 font-familjenGrotesk border border-border/50 bg-foreground/30 text-primary-foreground w-fit rounded-full">
          {/* <span className="text-xl font-normal mr-3 text-foreground">
            Starting from
          </span> */}
          <p className="text-2xl font-medium">
            <span className="font-semibold ml-1">${pkg.price}</span>
            USD
          </p>
        </div>
        {/* <Button className="mt-3 pr-1 bg-gradient-to-r from-primary to-purple-500 hover:from-primary transition-all flex justify-between items-center">
          <span>Book Now</span>
          <div className="rounded-full bg-background h-10 w-10 flex items-center justify-center ml-2">
            <ArrowUpRight className="h-6 w-6 text-foreground" />
          </div>
        </Button> */}
      </div>

      {/* Content on top of the gradient and image */}
      <section className="relative z-20 p-4 px-3 text-primary-foreground flex flex-col">
        {/* Two badges */}
        <div className="flex gap-1 text-primary-foreground mt-4">
          <div className="border border-border/50 bg-foreground/30 rounded-full p-1.5 py-0.5 text-sm flex items-center gap-1">
            <SunDim className="h-3 w-3" /> {pkg.duration}
          </div>
          <div className="border border-border/50 bg-foreground/30 rounded-full p-1.5 py-0.5 text-sm flex items-center gap-1">
            <ChartColumn className="h-3 w-3" /> {pkg.difficulty}
          </div>
        </div>
        {/* Title, Subtitle, and Description */}
        <div className="my-3">
          <h2 className="text-2xl font-semibold font-familjenGrotesk leading-none">
            {pkg.title}
          </h2>
          <p className="text-lg leading-tight">{pkg.subtitle}</p>
        </div>
        <p className="text-sm leading-tight">{pkg.description}</p>
        <Button onClick={() => handleBook(pkg)} className="mt-3 pr-1 h-14 text-black bg-gradient-to-br from-white via-80% via-white to-white transition-all flex justify-between items-center">
          <span className="font-semibold text-xl uppercase" >Book Now</span>
          <div className="rounded-full bg-primary h-12 w-12 flex items-center justify-center ml-2">
            <ArrowUpRight className="h-8 w-8 text-primary-foreground" />
          </div>
        </Button>
      </section>
    </Card>
  );
};
