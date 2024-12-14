import { getActivities } from '@/prisma/repositories/activities'
import { getPackages } from '@/prisma/repositories/packages';
import { getSubactivities } from '@/prisma/repositories/subactivities';
import React from 'react'
import { getDestinations } from '@/prisma/repositories/destinations';
import { ExploreContent } from './_components/Content';

export default async function Explore() {
  const [
    destinations,
    activities,
    subactivities,
    packages
  ] = await Promise.all([
    getDestinations(),
    getActivities(),
    getSubactivities(),
    getPackages(),
  ]);

  return (
    <main className='py-10 pt-navbarOffset md:pb-navbarOffset min-h-screen mx-auto px-0 sm:px-2 md:px-4'>
      <ExploreContent
        destinations={destinations}
        activities={activities}
        subactivities={subactivities}
        packages={packages}
      />
    </main>
  )
}