import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Subactivity } from "@/types/destination";

type SubActivitiesGridProps = {
  destination: string;
  activity: string;
  subactivities: Subactivity[];
};

export const SubActivitiesGrid: React.FC<SubActivitiesGridProps> = ({
  destination,
  activity,
  subactivities
}) => {
  console.log({
    "receivedSubactivities": subactivities
  })
  return (
    <section className="my-default">
      <h1 className="text-2xl font-medium">Variations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        {subactivities.map((subactivity, index) => (
          <Link key={index} href={`/destinations/${destination}/${activity}/${subactivity.slug}`} className="group">
            <div className="relative w-full h-full rounded-2xl aspect-square cursor-pointer overflow-hidden border">
              {subactivity.image ? (
                <Image
                  src={subactivity.image}
                  alt={subactivity.name}
                  className="w-full h-full object-cover"
                  height={300} // Remove fixed height if you want it to take the entire height of the container
                  width={300} // Remove fixed width if you want it to take the entire width of the container
                />
              ) : null}
              <p className="absolute z-10 bottom-3 left-0 right-0 mt-2 text-2xl text-center text-white">
                <span className="block">
                  {subactivity.name}
                </span>

              </p>
              <div className="absolute top-2 left-2 w-fit mx-auto border border-border/50 text-white bg-foreground/30 rounded-full p-2 py-0.5 text-sm flex items-center gap-1">
                {subactivity._count.packages} Packages
              </div>
              <div className="absolute top-2 right-2 p-1 backdrop-blur-sm flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-white group-hover:-rotate-45 transition-transform ease-in-out" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
