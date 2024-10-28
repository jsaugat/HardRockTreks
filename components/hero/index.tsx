import { Searchbar } from '@/components/home/search-bar';
import Image from 'next/image';
import { Headline } from './headline';

export default function Hero() {
  return (
    <div className="hero relative h-screen flex items-center justify-center">
      <Image
        src="https://cdn.pixabay.com/photo/2015/05/26/12/42/everest-784617_1280.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-10"
      />
      <div className="absolute top-0 left-0 -z-[10] w-full h-full bg-black bg-opacity-50"></div>
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