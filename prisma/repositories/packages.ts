import prisma from '..';

// Packages
export async function getPackages() {
  const data = await prisma.package.findMany({
    include: {
      destination: true,
      activity: true,
      subactivity: true,
    },
    cacheStrategy: { ttl: 60 }
  });
  const count = data.length;
  return { data, count };
}
export async function getPackageBySlug(slug: string) {
  return prisma.package.findUnique({
    where: { slug },
    include: {
      destination: true,
      activity: true,
      subactivity: true,
    },
    cacheStrategy: { ttl: 60 }
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
    cacheStrategy: { ttl: 60 }
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
    cacheStrategy: { ttl: 60 }
  });
}
export async function getPackagesBySubactivity(subactivityId: string) {
  return prisma.package.findMany({
    where: { subactivityId },
    cacheStrategy: { ttl: 60 }
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
    cacheStrategy: { ttl: 60 }
  });

  return result._count;
}