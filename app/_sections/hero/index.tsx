import { SearchbarDialog } from "@/components/home/Searchbar";
import Image from "next/image";
import { Headline } from "./Headline";
import { ArrowDown, LocateFixed, Phone } from "lucide-react";
import Link from "next/link";
import ButtonWithIcon from "@/components/ButtonWithIcon";

export default function Hero() {
  return (
    <div className="hero relative h-[100svh] md:h-screen flex items-center justify-center">
      {/* HERO IMAGE */}
      <Image
        src="https://images.pexels.com/photos/4360449/pexels-photo-4360449.jpeg"
        alt="Hero Image"
        fill
        className="z-[8]"
        style={{ objectFit: "cover" }}
      />
      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 z-[9] w-full h-full bg-gradient-to-b from-foreground/20 via-foreground/40 to-foreground" />
      <section className="relative z-10 -top-20 md:static text-center space-y-4">
        <Headline />
        <div className="flex flex-col items-center justify-center gap-3">
          {/* <SearchbarDialog /> */}
          <Explore />
        </div>
      </section>
      {/* EXPLORE MORE */}
      <div
        onClick={() => {
          const topDestinationSection =
            document.getElementById("top-destinations");

          topDestinationSection?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="absolute z-10 bottom-6 right-6 cursor-pointer text-primary-foreground flex justify-center items-start gap-2"
      >
        Explore more
        <div className="p-1 rounded-full text-secondary-foreground animate-bounce bg-secondary flex items-center">
          <ArrowDown className="w-5 h-5 md:h-4 md:w-4" />
        </div>
      </div>
      {/* <ArrowDown className="md:hidden w-20 h-20 animate-bounce absolute bottom-5 text-primary-foreground" /> */}
    </div>
  );
}

function Explore() {
  return (
    <Link href="/explore" className="w-full">
      <div
        className="lg:w-1/2 p-1 mx-auto flex items-center justify-between space-x-2 border rounded-full bg-secondary w-[300px] cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="border p-2 rounded-full bg-gradient-to-br from-primary via-primary to-violet-400 flex items-center justify-center">
            <LocateFixed className="h-5 w-5 text-secondary" />
          </div>
          <p className="h-full rounded-full text-muted-foreground flex-1 text-center">
            <span className="inline-block lg:hidden">Search Trips</span>
            <span className="hidden lg:inline-block">Find Your Adventure.</span>
          </p>
        </div>
        <button className="px-4 py-2 rounded-full text-white bg-gradient-to-br to-violet-400 via-primary from-primary">
          Search
        </button>
      </div>
    </Link>
  );
}