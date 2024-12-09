import prisma from '..';

// Activities
export async function getActivitiesByDestination(destinationId: string) {
  return prisma.activity.findMany({
    where: { destinationId },
    include: {
      subactivities: {
        include: {
          _count: { select: { packages: true } },
        },
      },
      _count: { select: { packages: true } },
    },
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
  });
}