import React from "react";
import { SideNav } from "./SideNav";
import prisma from "@/prisma";

interface ActivitiesSideNavProps {
  destination: string;
  activity: string;
  activityId: string;
}

export const SubactivitiesSideNav = async ({ destination, activity, activityId }: ActivitiesSideNavProps) => {
  const activities = await getSubactivitiesNameAndSlug(activityId);
  console.log({ activities })
  return (
    <SideNav
      title="Related Subactivities"
      items={activities}
      baseUrl={`/destinations/${destination}/${activity}`}
    />
  );
};

const getSubactivitiesNameAndSlug = async (activityId: string) => {
  return prisma.subactivity.findMany({
    where: { activityId },
    select: {
      name: true, // Retrieve only the 'name' field
      slug: true, // Retrieve only the 'slug' field
    },
  });

}