import Link from "next/link";
import { Package } from "@/types/destination";

type PackagesGridProps = {
  destination: string;
  activity: string;
  subactivity?: string | null; // Allow subactivity to be null
  packages: Package[];
};

export const PackagesGrid: React.FC<PackagesGridProps> = ({
  destination,
  activity,
  subactivity,
  packages,
}) => {
  return (
    <section className="my-default">
      <h1 className="text-2xl font-medium">Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        {packages.map((pkg, index) => (
          <Link
            key={index}
            href={
              subactivity
                ? `/destinations/${destination}/${activity}/${subactivity}/${pkg.slug}-package`
                : `/destinations/${destination}/${activity}/${pkg.slug}-package`
            }
          >
            <div className="relative w-full h-full rounded-2xl aspect-square cursor-pointer overflow-hidden border">
              <p className="absolute z-10 bottom-3 left-0 right-0 mt-2 text-2xl text-center text-white">
                {pkg.name}
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
