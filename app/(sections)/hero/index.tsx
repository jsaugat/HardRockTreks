import { SearchbarDialog } from "@/components/home/Searchbar";
import Image from "next/image";
import { Headline } from "./Headline";
import { ArrowDown, Phone } from "lucide-react";
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
        {/* <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          Discover amazing destinations and plan your next adventure with us.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className='rounded-full bg-gradient-to-br from-indigo-500 via-primary to-secondary'>
            <Link href="/destinations">Explore Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div> */}
        <div className="flex flex-col items-center justify-center gap-3">
          <SearchbarDialog />
          {/* <ButtonWithIcon
            icon={<Phone className="w-4 h-4 text-primary-foreground" />}
            label="Contact Us"
          /> */}
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
