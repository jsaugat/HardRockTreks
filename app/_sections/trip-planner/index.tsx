import ButtonWithIcon from "@/components/ButtonWithIcon";
import { Flame, Map } from "lucide-react";

export default function TripPlanner() {
  return (
    <section className=" mb-10 rounded-2xl flex flex-col items-center gap-5 p-20 bg-gradient-to-br from-[#e3ffe7] to-[#d9e7ff] border">
      {/* TITLE */}
      <h1 className="text-7xl text-center font-semibold font-neueRegrade">
        Prepare your personalized
        <br /> travel itinerary.
      </h1>
      {/* DESCRIPTION */}
      <p className="w-2/3 text-center text-xl font-medium">
        Do you require assistance in planning your trip? Feel free to share your
        holiday type, preferences, interests, and available time with us, and we
        will create a tailored travel package just for you.
      </p>
      {/* BUTTONS */}
      <div className="flex items-center gap-5">
        <ButtonWithIcon
          icon={<Map className="text-primary-foreground w-4 h-4" />}
          label="Customize Trip"
        />
        <ButtonWithIcon
          icon={<Flame className="text-primary-foreground w-4 h-4" />}
          label="Hot Deals"
        />
      </div>
    </section>
  );
}
