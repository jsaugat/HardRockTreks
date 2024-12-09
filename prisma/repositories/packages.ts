import prisma from '..';

// Packages
export async function getPackageBySlug(slug: string) {
  return prisma.package.findUnique({
    where: { slug },
    include: {
      activity: true,
      subactivity: true,
    },
  });
}
export async function getRelevantPackages(destinationId: string, activityId: string) {
  return prisma.package.findMany({
    where: {
      destinationId, // Ensures the packages belong to the specified destination
      OR: [
        { activityId }, // Directly related to the activity
        { subactivity: { activityId } }, // Related to a subactivity of the activity
      ],
    },
  });
}
export async function getPackagesByDestination(destinationId: string) {
  return prisma.package.findMany({
    where: {
      OR: [
        { activity: { destinationId } },
        { subactivity: { activity: { destinationId } } },
      ],
    },
  });
}
export async function getPackagesBySubactivity(subactivityId: string) {
  return prisma.package.findMany({
    where: { subactivityId },
  });
}
export async function getTotalPackageCountByDestination(destinationId: string) {
  const result = await prisma.package.aggregate({
    where: {
      OR: [
        { activity: { destinationId } },
        { subactivity: { activity: { destinationId } } },
      ],
    },
    _count: true,
  });

  return result._count;
}