import React from 'react';
import { CountryTitle } from '@/components/destinations/CountryTitle';
import { DescriptionCard } from '@/components/destinations/DescriptionCard';
import { PackagesGrid } from '@/components/destinations/PackagesGrid';
import { SubActivityBreadcrumb } from '@/components/destinations/SubActivityBreadcrumb';
import { CountrySideNav } from '@/components/destinations/CountrySideNav';
import { Col } from '@/components/flex-layouts';

interface SubactivitySpecificPageProps {
  country: string;
  activity: string;
  subactivity: string | null;
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
          {packagesData && packagesData.length > 0 ? (
            <PackagesGrid
              destination={country}
              activity={activity}
              subactivity={subactivity}
              packages={packagesData}
            />
          ) : (
            <p className="mt-10 p-3 border-2 rounded text-muted-foreground bg-muted w-full flex content-center">
              No packages found.
            </p>
          )}
        </div>
        {/* Country side navigation */}
        <CountrySideNav />
      </Col>
    </main>
  );
};
