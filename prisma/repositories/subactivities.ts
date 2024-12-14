import prisma from '..';

// Subactivities
export async function getSubactivities() {
  const data = await prisma.subactivity.findMany({
    include: {
      packages: true,
      _count: { select: { packages: true } },
    },
    cacheStrategy: { ttl: 60 }
  })
  const count = data.length;
  return { data, count };
}
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