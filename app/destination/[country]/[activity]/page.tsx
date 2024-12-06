import { CountryTitle } from '@/components/destinations/CountryTitle'
import { DescriptionCard } from '@/components/destinations/DescriptionCard'
import React from 'react'
import { Col } from '@/components/flex-layouts'
import { CountrySideNav } from '@/components/destinations/CountrySideNav'
import { ActivityBreadcrumb } from '@/components/destinations/ActivityBreadcrumb'
import {
  getActivityByDestinationAndSlug,
  getDestinationBySlug,
  getRelevantPackages,
  getRelevantSubactivities
} from '@/prisma/repositories/destinations'
import { PackagesGrid } from '@/components/destinations/PackagesGrid'
import { SubActivitiesGrid } from '@/components/destinations/SubActivitiesGrid'

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ activity: string, country: string }>
}) {
  const { country, activity } = await params;

  const countryData = await getDestinationBySlug(country);
  if (!countryData) {
    return <p>Country not found</p>;
  }
  const activityData = await getActivityByDestinationAndSlug(countryData.id, activity);
  if (!activityData) {
    return <p>Activity not found</p>;
  }

  const subactivityData = await getRelevantSubactivities(countryData.id, activityData.id);

  // Fetch packages only if there are no subactivities.
  const packagesData = activityData.packages;

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
            {activityData.description || (
              <p className="text-muted-foreground">
                No description available for this activity.
              </p>
            )}
          </DescriptionCard>
          {/* Render SubActivitiesGrid or PackagesGrid */}
          {subactivityData.length > 0 ? (
            <SubActivitiesGrid
              destination={country}
              activity={activity}
              subactivities={subactivityData}
            />
          ) : packagesData.length > 0 ? (
            <PackagesGrid
              packages={packagesData}
              destination={country}
              activity={activity}
              subactivity={null} // Pass null for subactivity since it's activity-based packages (subactivityData is absent)
            />
          ) : (
            <p className="mt-10 p-3 border-2 rounded text-muted-foreground bg-muted w-full flex content-center">
              No packages or subactivities found.
            </p>
          )}
        </div>
        {/* Country side navigation */}
        <CountrySideNav />
      </Col>
    </main>
  );
}
