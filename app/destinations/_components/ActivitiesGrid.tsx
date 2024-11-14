import Image from "next/image";
import Link from "next/link";

type Subactivity = {
  label: string;
  href: string;
  image: string;
};

type Activity = {
  label: string;
  href: string;
  image?: string;
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
      <h1 className="text-4xl">Activities</h1>
      <div className="grid grid-cols-3 gap-4 py-4">
        {activities.map((activity, index) => (
          <Link key={index} href={activity.href} passHref>
            <div className="relative w-full h-full rounded-lg aspect-square cursor-pointer overflow-hidden border">
              {activity.image ? (
                <Image
                  src={activity.image}
                  alt={activity.label}
                  className="w-full h-full object-cover"
                  height={300} // Remove fixed height if you want it to take the entire height of the container
                  width={300} // Remove fixed width if you want it to take the entire width of the container
                />
              ) : null}
              <p className="absolute z-10 bottom-5 left-0 right-0 mt-2 text-2xl text-center text-white">
                {activity.label}
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
