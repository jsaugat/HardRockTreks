import prisma from '..';

// Activities
export async function getActivities() {
  const activities = await prisma.activity.findMany({
    include: {
      subactivities: true,
      _count: { select: { packages: true } }
    },
    cacheStrategy: { ttl: 60 }
  });
  const count = activities.length;
  return { activities, count };
}
export async function getActivitiesByDestination(destinationId: string) {
  return prisma.activity.findMany({
    where: { destinationId },
    include: {
      subactivities: {
        include: {
          _count: { select: { packages: true } },
        },
      },
      _count: { select: { packages: true } }
    },
    cacheStrategy: { ttl: 60 }
  });
}
export async function getActivityByDestinationAndSlug(destinationId: string, slug: string) {
  return prisma.activity.findUnique({
    where: {
      slug,
      destinationId // Using destinationId to filter by country
    },
    include: {
      subactivities: {
        include: {
          _count: { select: { packages: true } }, // Counting packages in subactivities
          packages: true, // Include actual packages in subactivities
        },
      },
      _count: { select: { packages: true } }, // Count packages directly in activity
      packages: true, // Include actual packages in activity
    },
    cacheStrategy: { ttl: 60 }
  });
}