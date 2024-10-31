import { Searchbar } from "@/components/home/Searchbar";
import Image from "next/image";
import { Headline } from "./Headline";

export default function Hero() {
  return (
    <div className="hero relative h-screen flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Image"
        fill={true}
        className="-z-10"
      />
      <div className="absolute top-0 left-0 -z-[10] w-full h-full bg-black bg-opacity-40"></div>
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
