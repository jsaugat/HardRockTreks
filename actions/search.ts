'use server'

import { Activity, Destination, PrismaClient, Subactivity } from '@prisma/client'

const prisma = new PrismaClient()

export type SearchResult = {
  id: string;
  name: string;
  slug: string;
  destination?: Destination;
  activity?: Activity;
  subactivity?: Subactivity;
};

// Asynchronous function that returns a Promise resolving to an object with four keys: destinations, activities, subactivities, and packages
export async function searchItems(query: string): Promise<{
  destinations: SearchResult[];
  activities: SearchResult[];
  subactivities: SearchResult[];
  packages: SearchResult[];
}> {
  const destinations = await prisma.destination.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { slug: { contains: query, mode: 'insensitive' } },
      ],
    },
    select: { id: true, name: true, slug: true },
  })
  const activities = await prisma.activity.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { slug: { contains: query, mode: 'insensitive' } },
      ],
    },
    select: { id: true, name: true, slug: true, destination: true },
  })
  const subactivities = await prisma.subactivity.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { slug: { contains: query, mode: 'insensitive' } },
      ],
    },
    select: { id: true, name: true, slug: true, destination: true, activity: true },
  })
  const packages = await prisma.package.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { slug: { contains: query, mode: 'insensitive' } },
      ],
    },
    select: {
      id: true,
      name: true,
      slug: true,
      destination: true,
      activity: true,
      subactivity: true
    },
  })

  return {
    destinations,
    activities,
    subactivities,
    packages: packages.map(pkg => ({
      ...pkg,
      destination: pkg.destination ?? undefined,
      activity: pkg.activity ?? undefined,
      subactivity: pkg.subactivity ?? undefined
    }))
  }
}
