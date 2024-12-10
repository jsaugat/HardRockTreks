import prisma from '..';

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
    cacheStrategy: { ttl: 60 }
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
    cacheStrategy: { ttl: 60 }
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
    },
    cacheStrategy: { ttl: 60 }
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
    cacheStrategy: { ttl: 60 }
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
export async function getPackageBySlug(slug: string) {
  return prisma.package.findUnique({
    where: { slug },
    include: {
      activity: true,
      subactivity: true,
    },
    cacheStrategy: { ttl: 60 }
  });
}