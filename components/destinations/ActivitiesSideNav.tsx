import React from "react";
import { SideNav } from "./SideNav";
import prisma from "@/prisma";

interface ActivitiesSideNavProps {
  destination: string;
  destinationId: string;
}

export const ActivitiesSideNav = async ({ destination, destinationId }: ActivitiesSideNavProps) => {
  const activities = await getActivitiesNameAndSlug(destinationId);
  console.log({ activities })
  return (
    <SideNav
      title="Related Actvities"
      items={activities}
      baseUrl={`/destinations/${destination}`}
    />
  );
};

const getActivitiesNameAndSlug = async (destinationId: string) => {
  return prisma.activity.findMany({
    where: { destinationId },
    select: {
      name: true, // Retrieve only the 'name' field
      slug: true, // Retrieve only the 'slug' field
    },
  });

}