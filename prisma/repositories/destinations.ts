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