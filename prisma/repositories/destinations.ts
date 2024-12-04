import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Get all destinations
export async function getDestinations() {
  return prisma.destination.findMany({
    include: {
      activities: {
        include: {
          subactivities: {
            include: {
              _count: {
                select: { packages: true },
              },
            },
          },
          _count: {
            select: { packages: true },
          },
        },
      },
    },
  });
}

export async function getDestinationBySlug(slug: string) {
  const destination = prisma.destination.findUnique({
    where: { slug },
    include: {
      activities: {
        include: {
          subactivities: {
            include: {
              _count: { select: { packages: true } },
            },
          },
          _count: { select: { packages: true } },
        },
      },
    },
  });
  return destination;
}

/**
 * Fetch activities for a specific destination with subactivities and package counts.
 */
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


/**
 * Fetch subactivities for a specific activity with package counts.
 */
export async function getSubactivitiesByActivity(activityId: string) {
  return prisma.subactivity.findMany({
    where: { activityId },
    include: {
      _count: { select: { packages: true } },
    },
  });
}

/**
 * Fetch packages associated with a destination, whether directly through activities or subactivities.
 */
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

/**
 * Fetch packages directly or indirectly associated with an activity.
 */
export async function getPackagesByActivity(activityId: string) {
  return prisma.package.findMany({
    where: {
      OR: [
        { activityId },
        { subactivity: { activityId } },
      ],
    },
  });
}

/**
 * Fetch packages associated with a specific subactivity.
 */
export async function getPackagesBySubactivity(subactivityId: string) {
  return prisma.package.findMany({
    where: { subactivityId },
  });
}

/**
 * Fetch total package count for a destination.
 */
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
