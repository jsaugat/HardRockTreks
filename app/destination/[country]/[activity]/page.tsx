import { CountryTitle } from '@/components/destinations/CountryTitle'
import { DescriptionCard } from '@/components/destinations/DescriptionCard'
import React from 'react'
import { Col } from '@/components/flex-layouts'
import { CountrySideNav } from '@/components/destinations/CountrySideNav'
import { ActivityBreadcrumb } from '@/components/destinations/ActivityBreadcrumb'
import { getActivityByDestinationAndSlug, getDestinationBySlug, getPackagesByActivity } from '@/prisma/repositories/destinations'
import { PackagesGrid } from '@/components/destinations/PackagesGrid'

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ activity: string, country: string }>
}) {
  const country = (await params).country;
  const activity = (await params).activity;

  const countryData = await getDestinationBySlug(country);
  if (!countryData) {
    return <p>Country not found</p>;
  }

  const activityData = await getActivityByDestinationAndSlug(countryData.id, activity);
  if (!activityData) {
    return <p>Activity not found</p>;
  }

  const packagesData = await getPackagesByActivity(activityData.id);

  return (
    <main className="mx-auto p-0">
      <Col
        justify="between"
        align="start"
        className="mt-2 mx-auto lg:w-[80%] min-h-screen gap-8 lg:flex-row"
      >
        <div className="w-full">
          {/* Activity Breadcrumb */}
          <ActivityBreadcrumb country={country} activity={activity} />
          {/* Country title */}
          <CountryTitle text={`${activityData.name}`} />
          <DescriptionCard>
            {activityData.description}
          </DescriptionCard>
          {/* Packages grid */}
          {packagesData && packagesData.length > 0 ? (
            <PackagesGrid packages={packagesData} destination={country} activity={activity} />
          ) : (
            <p>No packages found.</p>
          )}
        </div>
        {/* Country side navigation */}
        <CountrySideNav />
      </Col>
    </main>
  );
}
