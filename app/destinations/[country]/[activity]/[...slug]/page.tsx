import React from 'react';
import { notFound } from 'next/navigation';
import { PackageSpecificPage } from './pages/PackageSpecificPage';
import { SubactivitySpecificPage } from './pages/SubactivitySpecificPage';
// import prisma repos
import { getDestinationBySlug } from '@/prisma/repositories/destinations';
import { getActivityByDestinationAndSlug } from '@/prisma/repositories/activities';
import { getSubactivity } from "@/prisma/repositories/subactivities";
import { getPackageBySlug, getPackagesBySubactivity } from '@/prisma/repositories/packages';

// Exporting a default async function for the PackagePage
export default async function PackagePage({
  params,
}: {
  params: Promise<{ country: string; activity: string; slug?: string[] }>;
}) {
  // Destructuring the parameters
  const { country, activity, slug = [] } = await params;

  // Initializing subactivity and package variables
  let subactivity: string | null = null;
  let pkg: string | null = null;

  // Checking the length of the slug
  if (slug.length === 1) {
    const [firstSegment] = slug;
    // If the first segment includes '-package', set the package
    if (firstSegment.includes('-package')) {
      pkg = firstSegment;
    } else {
      // Otherwise, set the subactivity
      subactivity = firstSegment;
    }
  } else if (slug.length === 2) {
    // If the slug length is 2, set both the subactivity and package
    const [firstSegment, secondSegment] = slug;
    subactivity = firstSegment;
    pkg = secondSegment;
  }

  // Fetching the country data
  const countryData = await getDestinationBySlug(country);
  let activityData, subactivityData;
  if (countryData) {
    // Fetching the activity data
    activityData = await getActivityByDestinationAndSlug(countryData.id, activity);
    if (activityData && subactivity) {
      // Fetching the subactivity data
      subactivityData = await getSubactivity(countryData.id, activityData.id, subactivity);
    }
  }

  // Handling 404 error if subactivity data is not found
  if (subactivity && (!subactivityData || !countryData || !activityData)) {
    notFound();
  }

  // Fetching the current package data
  const currentPackageData = await getPackageBySlug(pkg?.replace('-package', '') || '');

  // If the current package data is found, return the PackageSpecificPage
  if (currentPackageData) {
    return <PackageSpecificPage currentPackageData={currentPackageData} />;
  }

  // If the subactivity data is found, fetch the packages data
  const packagesData = subactivityData ? await getPackagesBySubactivity(subactivityData.id) : [];

  return (
    <SubactivitySpecificPage
      country={country}
      activity={activity}
      subactivity={subactivity}
      activityData={activityData || null}
      subactivityData={subactivityData || null}
      packagesData={packagesData}
    />
  );
}
