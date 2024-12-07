import React, { Suspense } from 'react';
import { CountryTitle } from '@/components/destinations/CountryTitle';
import { DescriptionCard } from '@/components/destinations/DescriptionCard';
import { PackagesGrid } from '@/components/destinations/PackagesGrid';
import { SubActivityBreadcrumb } from '@/components/destinations/SubActivityBreadcrumb';
import { SubactivitiesSideNav } from '@/components/destinations/SubactivitiesSideNav';
import { Col } from '@/components/flex-layouts';
import { Frown, LoaderCircle } from 'lucide-react';

interface SubactivitySpecificPageProps {
  country: string;
  activity: string;
  subactivity: string | null;
  activityData: {
    id: string;
  } | null;
  subactivityData: {
    name: string;
    description?: string;
  } | null;
  packagesData: Array<any>;
}

export const SubactivitySpecificPage: React.FC<SubactivitySpecificPageProps> = ({
  country,
  activity,
  subactivity,
  activityData,
  subactivityData,
  packagesData,
}) => {
  return (
    <main className="mx-auto p-0">
      <Col
        justify="between"
        align="start"
        className="mt-2 mx-auto lg:w-[80%] min-h-screen gap-8 lg:flex-row"
      >
        <div className="w-full">
          {/* SubActivity Breadcrumb */}
          <SubActivityBreadcrumb country={country} activity={activity} subactivity={subactivity ?? ''} />
          {/* SubActivity title */}
          <CountryTitle text={subactivityData?.name ?? ''} />
          <DescriptionCard>
            {subactivityData?.description || (
              <p className="text-muted-foreground">
                No description available for this subactivity.
              </p>
            )}
          </DescriptionCard>
          {/* Render PackagesGrid */}
          <Suspense fallback={<PackagesGridFallback />}>
            <RenderPackagesGrid
              country={country}
              activity={activity}
              subactivity={subactivity}
              packagesData={packagesData}
            />
          </Suspense>
        </div>
        {/* Country side navigation */}
        <SubactivitiesSideNav
          destination={country || ''}
          activity={activity || ''}
          activityId={activityData?.id || ''}
        />
      </Col>
    </main>
  );
};

const RenderPackagesGrid = ({ country, activity, subactivity, packagesData }: {
  country: string;
  activity: string;
  subactivity: string | null;
  packagesData: Array<any>;
}) => {
  return (
    packagesData && packagesData.length > 0 ? (
      <PackagesGrid
        destination={country}
        activity={activity}
        subactivity={subactivity}
        packages={packagesData}
      />
    ) : (
      <p className="mt-10 p-3 border-2 rounded text-muted-foreground bg-gray-200 w-full flex items-center justify-center gap-2">
        <Frown className='w-5 h-5' />
        Unfortunately, there are no packages available for this activity at the moment.
      </p>
    )
  );
}

const PackagesGridFallback = () => (
  <div className="flex justify-center items-center w-full my-10">
    <LoaderCircle className="animate-spin" size={32} />
  </div>
)