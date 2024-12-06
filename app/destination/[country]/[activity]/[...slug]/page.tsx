import React from 'react';
import { getActivityByDestinationAndSlug, getDestinationBySlug, getPackageBySlug, getPackagesBySubactivity, getSubactivity } from '@/prisma/repositories/destinations';
import { notFound } from 'next/navigation';
import { PackageSpecificPage } from './_components/PackageSpecificPage';
import { SubactivitySpecificPage } from './_components/SubactivitySpecificPage';

export default async function PackagePage({
  params,
}: {
  params: Promise<{ country: string; activity: string; slug?: string[] }>;
}) {
  const { country, activity, slug = [] } = await params;

  let subactivity: string | null = null;
  let pkg: string | null = null;

  if (slug.length === 1) {
    const [firstSegment] = slug;
    if (firstSegment.includes('-package')) {
      pkg = firstSegment;
    } else {
      subactivity = firstSegment;
    }
  } else if (slug.length === 2) {
    const [firstSegment, secondSegment] = slug;
    subactivity = firstSegment;
    pkg = secondSegment;
  }

  const countryData = await getDestinationBySlug(country);
  let activityData, subactivityData;
  if (countryData) {
    activityData = await getActivityByDestinationAndSlug(countryData.id, activity);
    if (activityData && subactivity) {
      subactivityData = await getSubactivity(countryData.id, activityData.id, subactivity);
    }
  }

  if (subactivity && (!subactivityData || !countryData || !activityData)) {
    notFound();
  }

  const currentPackageData = await getPackageBySlug(pkg?.replace('-package', '') || '');

  if (currentPackageData) {
    return <PackageSpecificPage currentPackageData={currentPackageData} />;
  }

  const packagesData = subactivityData ? await getPackagesBySubactivity(subactivityData.id) : [];

  return (
    <SubactivitySpecificPage
      country={country}
      activity={activity}
      subactivity={subactivity}
      subactivityData={subactivityData || null}
      packagesData={packagesData}
    />
  );
}
