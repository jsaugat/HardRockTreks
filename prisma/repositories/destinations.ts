import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get 
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
