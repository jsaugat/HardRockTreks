import Link from "next/link";
import { Package } from "@/types/destination";

type ActivitiesGridProps = {
  destination: string;
  activity: string;
  packages: Package[];
};

export const PackagesGrid: React.FC<ActivitiesGridProps> = ({
  destination,
  activity,
  packages,
}) => {
  return (
    <section className="my-default">
      <h1 className="text-2xl font-medium">Activities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        {packages.map((pkg, index) => (
          <Link key={index} href={`${destination}/${pkg.slug}`}>
            <div className="relative w-full h-full rounded-2xl aspect-square cursor-pointer overflow-hidden border">
              {/* {pkg.image ? (
                <Image
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover"
                  height={300} // Remove fixed height if you want it to take the entire height of the container
                  width={300} // Remove fixed width if you want it to take the entire width of the container
                />
              ) : null} */}
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
