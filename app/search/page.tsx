import { getActivities } from '@/prisma/repositories/activities'
import { getPackages } from '@/prisma/repositories/packages';
import { getSubactivities } from '@/prisma/repositories/subactivities';
import React from 'react'

export default async function Search() {
  const [activitiesData, subactivitiesData, packagesData] = await Promise.all([
    getActivities(),
    getSubactivities(),
    getPackages(),
  ]);

  const { activities, count: activitiesCount } = activitiesData;
  const { subactivities, count: subactivitiesCount } = subactivitiesData;
  const { packages, count: packagesCount } = packagesData;

  return (
    <main className='pt-navbarOffset min-h-screen space-y-8'>
      <ul>
        <li className="text-xl font-semibold">Activities</li>
        {activities.map((activity, idx) => (
          <li key={idx}>
            {activity.name} {activitiesCount}
          </li>
        ))}
      </ul>
      <ul>
        <li className="text-xl font-semibold">Subactivities</li>
        {subactivities.map((subactivity, idx) => (
          <li key={idx}>
            {subactivity.name} {subactivitiesCount}
          </li>
        ))}
      </ul>
      <ul>
        <li className="text-xl font-semibold">Packages</li>
        {packages.map((pkg, idx) => (
          <li key={idx}>
            {pkg.name} {packagesCount}
          </li>
        ))}
      </ul>
    </main>
  )
}
