import { Searchbar } from "@/components/home/Searchbar";
import Image from "next/image";
import { Headline } from "./Headline";

export default function Hero() {
  return (
    <div className="hero relative h-screen flex items-center justify-center">
      <Image
        src="https://images.pexels.com/photos/4360449/pexels-photo-4360449.jpeg"
        alt="Hero Image"
        fill
        className="-z-10"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-0 left-0 -z-[10] w-full h-full bg-gradient-to-b from-foreground/10 via-foreground/30 to-black"></div>
      <section className="text-center space-y-4">
        <Headline />
        {/* <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          Discover amazing destinations and plan your next adventure with us.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className='rounded-full bg-gradient-to-br from-indigo-500 via-primary to-secondary'>
            <Link href="/destination">Explore Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div> */}
        <Searchbar />
      </section>
    </div>
  );
}
