import ButtonWithIcon from "@/components/ButtonWithIcon";
import { cn } from "@/lib/utils";
import { Flame, Map } from "lucide-react";

export default function TripPlanner() {
  return (
    // <section className="tripPlanner p-10 py-20 bg-background">
    <div
      className={cn(
        "mb-5 lg:mb-10 rounded-2xl flex flex-col items-center gap-5 p-4 py-6 lg:p-20 border",
        // "bg-gradient-to-br from-[#e3ffe7] to-[#d9e7ff]"
        "bg-gradient-to-br from-[#fff1e6] to-[#d4dfff]"
      )}
    >
      {/* TITLE */}
      <h1
        className={cn(
          "text-4xl leading-none lg:text-7xl lg:text-center font-medium tracking-tight font-familjenGrotesk",
          // "bg-clip-text text-transparent bg-gradient-to-br from-[#0700b8] to-[#00ff88]"
          "bg-clip-text text-transparent bg-gradient-to-br from-[#2427ff] to-[#ff7300]"
        )}
      >
        Prepare your personalized
        <br /> travel itinerary.
      </h1>
      {/* DESCRIPTION */}
      <p className="lg:w-2/3 text-lg lg:text-xl text-left lg:text-center leading-tight lg:font-medium">
        Do you require assistance in planning your trip? Feel free to share your
        holiday type, preferences, interests, and available time with us, and we
        will create a tailored travel package just for you.
      </p>
      {/* BUTTONS */}
      <div className="flex items-center gap-2 lg:gap-5">
        <ButtonWithIcon
          icon={<Map className="text-primary-foreground w-4 h-4" />}
          label="Customize Trip"
        />
        <ButtonWithIcon
          icon={<Flame className="text-primary-foreground w-4 h-4" />}
          label="Hot Deals"
        />
      </div>
    </div>
  );
}
// #0700b8 0%,
//   #00ff88
