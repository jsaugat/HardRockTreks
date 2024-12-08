// "use cache"

import React, { Suspense } from 'react'
import { CountryTitle } from '@/components/destinations/CountryTitle'
import { DescriptionCard } from '@/components/destinations/DescriptionCard'
import { Col } from '@/components/flex-layouts'
import { ActivityBreadcrumb } from '@/components/destinations/ActivityBreadcrumb'
import {
  getActivityByDestinationAndSlug,
  getDestinationBySlug,
  getRelevantSubactivities
} from '@/prisma/repositories/destinations'
import { PackagesGrid } from '@/components/destinations/PackagesGrid'
import { SubActivitiesGrid } from '@/components/destinations/SubActivitiesGrid'
import { LoaderCircle } from 'lucide-react'
import { GridSkeleton } from '@/components/destinations/GridSkeleton'
import { ActivitiesSideNav } from '@/components/destinations/ActivitiesSideNav'

export default async function ActivityPage({
  params
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
          <CountryTitle text={activityData.name} />

          <DescriptionCard>
            {activityData.description || (
              <p className="text-muted-foreground">
                No description available for this activity.
              </p>
            )}
          </DescriptionCard>

          {/* Suspense wrapper for SubActivities/Packages */}
          <Suspense fallback={<GridSkeleton />}>
            <SubActivitiesOrPackagesGridSection
              countryId={countryData.id}
              activityId={activityData.id}
              country={country}
              activity={activity}
              initialPackagesData={activityData.packages}
            />
          </Suspense>
        </div>

        {/* Country side navigation */}
        <Suspense fallback={
          <div className="min-w-[200px] flex items-center justify-center bg-gray-100 animte-pulse p-2 rounded">
            <LoaderCircle className='animate-spin text-muted-foreground' />
          </div>
        }>
          <ActivitiesSideNav
            destination={country}
            destinationId={countryData.id}
          />
        </Suspense>
      </Col>
    </main >
  );
}

// New component for fetching and rendering SubActivities or Packages
async function SubActivitiesOrPackagesGridSection({
  countryId,
  activityId,
  country,
  activity,
  initialPackagesData
}: {
  countryId: string,
  activityId: string,
  country: string,
  activity: string,
  initialPackagesData: any[]
}) {
  const subactivityData = await getRelevantSubactivities(countryId, activityId);

  return (
    <>
      {subactivityData.length > 0 ? (
        <SubActivitiesGrid
          destination={country}
          activity={activity}
          subactivities={subactivityData}
        />
      ) : initialPackagesData.length > 0 ? (
        <PackagesGrid
          packages={initialPackagesData}
          destination={country}
          activity={activity}
          subactivity={null}
        />
      ) : (
        <p className="mt-10 p-3 border-2 rounded text-muted-foreground bg-muted w-full flex content-center">
          No packages or subactivities found.
        </p>
      )}
    </>
  );
}
// Loading component for Suspense
function SubActivitiesFallback() {
  return (
    <div className="flex justify-center items-center w-full my-10">
      <LoaderCircle className="animate-spin" size={32} />
    </div>
  );
}