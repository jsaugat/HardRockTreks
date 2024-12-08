'use server'

import prisma from '@/prisma';
import { Activity, Destination, PrismaClient, Subactivity } from '@prisma/client'
import { debounce } from 'lodash';

export type SearchResult = {
  id: string;
  name: string;
  slug: string;
  destination?: Destination;
  activity?: Activity;
  subactivity?: Subactivity;
};

// Refactor searchItems with debouncing applied
export const searchItemsDebounced = debounce(async (query: string) => {
  // Fetch data for all models simultaneously
  const destinationsPromise = prisma.destination.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { slug: { contains: query, mode: 'insensitive' } },
      ],
    },
    select: { id: true, name: true, slug: true },
    cacheStrategy: { ttl: 60 },
  });

  const activitiesPromise = prisma.activity.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { slug: { contains: query, mode: 'insensitive' } },
      ],
    },
    select: { id: true, name: true, slug: true, destination: true },
    cacheStrategy: { ttl: 60 },
  });

  const subactivitiesPromise = prisma.subactivity.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { slug: { contains: query, mode: 'insensitive' } },
      ],
    },
    select: { id: true, name: true, slug: true, destination: true, activity: true },
    cacheStrategy: { ttl: 60 },
  });

  const packagesPromise = prisma.package.findMany({
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
      subactivity: true,
    },
    cacheStrategy: { ttl: 60 },
  });

  // Execute all promises simultaneously
  const [destinations, activities, subactivities, packages] = await Promise.all([
    destinationsPromise,
    activitiesPromise,
    subactivitiesPromise,
    packagesPromise,
  ]);

  return {
    destinations,
    activities,
    subactivities,
    packages: packages.map(pkg => ({
      ...pkg,
      destination: pkg.destination ?? "undefined",
      activity: pkg.activity ?? undefined,
      subactivity: pkg.subactivity ?? undefined,
    })),
  };
}, 100); // Debounced for 300ms

