import Image from "next/image";
import Link from "next/link";

type Subactivity = {
  label: string;
  href: string;
  image: string;
};

type Activity = {
  label: string;
  href?: string;
  image?: string;
  packagesCount?: number;
  packages?: {
    number?: number;
  };
  subactivities?: Subactivity[];
};

type ActivitiesGridProps = {
  activities: Activity[];
};

export const ActivitiesGrid: React.FC<ActivitiesGridProps> = ({
  activities,
}) => {
  return (
    <section className="my-default">
      <h1 className="text-2xl font-medium">Activities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        {activities.map((activity, index) => (
          <Link key={index} href={activity.href ?? ""} passHref>
            <div className="relative w-full h-full rounded-2xl aspect-square cursor-pointer overflow-hidden border">
              {activity.image ? (
                <Image
                  src={activity.image}
                  alt={activity.label}
                  className="w-full h-full object-cover"
                  height={300} // Remove fixed height if you want it to take the entire height of the container
                  width={300} // Remove fixed width if you want it to take the entire width of the container
                />
              ) : null}
              <p className="absolute z-10 bottom-3 left-0 right-0 mt-2 text-2xl text-center text-white">
                {activity.label}
              </p>
              {(activity?.packages?.number || activity?.packagesCount) && (
                <div className="absolute z-10 left-0 top-0 right-0 mt-2 mx-auto px-3 bg-foreground/40 text-center text-primary-foreground rounded-full border w-fit">
                  {activity?.packages?.number ?? activity?.packagesCount ?? 0}{" "}
                  Packages
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
