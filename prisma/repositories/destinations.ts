import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Destinations
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
// Subactivities
export async function getRelevantSubactivities(destinationId: string, activityId: string) {
  const subactivities = await prisma.subactivity.findMany({
    where: {
      activityId,
      destinationId,
    },
    include: {
      packages: true,
      activity: true,
      destination: {
        include: {
          activities: true, // Include activities if needed
        },
      },
      _count: {
        select: {
          packages: true,
        },
      },
    }
  });

  return subactivities;
}
export async function getSubactivity(destinationId: string, activityId: string, slug: string) {
  return prisma.subactivity.findUnique({
    where: {
      slug,
      destinationId,
      activityId,
    },
    include: {
      packages: true,
      activity: true,
      _count: { select: { packages: true } },
    },
  });
}
// Packages
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
export async function getPackageBySlug(slug: string) {
  return prisma.package.findUnique({
    where: { slug },
    include: {
      activity: true,
      subactivity: true,
    },
  });
}