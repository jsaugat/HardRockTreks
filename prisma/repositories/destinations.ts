import prisma from '..';

// Destinations
export async function getDestinations() {
  const data = await prisma.destination.findMany({
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
  const count = data.length;
  return { data, count };
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