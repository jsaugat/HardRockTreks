import React from 'react';
import { CountryTitle } from '@/components/destinations/CountryTitle';
import { DescriptionCard } from '@/components/destinations/DescriptionCard';
import { Col } from '@/components/flex-layouts';
import { PackageDetails } from '../_components/PackageDetails';
import { PackageImage } from '../_components/PackageImage';
import { BookingCard, PackageWithDestination } from '../_components/BookingCard';
import { Separator } from '@/components/ui/separator';
import { getPackageMetadata } from '@/lib/getPackageMetadata';
import { Package } from '@prisma/client';

interface PackageSpecificPageProps {
  currentPackageData: PackageWithDestination;
}

export const PackageSpecificPage: React.FC<PackageSpecificPageProps> = ({ currentPackageData }) => {
  const packageMetadata = getPackageMetadata("markdown-data/packages", "test");
  const theMdData = packageMetadata.data;
  console.log({ theMdData })

  return (
    <main className="max-w-7xl mx-auto p-0 pt-navbarOffset md:pt-0">
      <Col
        justify="between"
        align="start"
        className="mt-2 mx-auto max-w-7xl min-h-screen lg:gap-6 lg:flex-row"
      >
        <div className="w-full lg:w-2/3 space-y-5">
          <CountryTitle className="mt-0 lg:text-5xl" text={currentPackageData.name} />
          <PackageImage name={currentPackageData.name} image={currentPackageData.image || ""} />
          <DescriptionCard className="mt-2 md:p-5">
            {currentPackageData.description || (
              <p className="text-muted-foreground">
                No description available for this package.
              </p>
            )}
          </DescriptionCard>
          <Separator className="my-5" />
          <PackageDetails
            duration={currentPackageData.duration}
            price={currentPackageData.startingPrice}
          />
        </div>
        <div className="w-full lg:w-1/3">
          <BookingCard
            packageInfo={currentPackageData}
            price={currentPackageData.startingPrice}
          />
        </div>
      </Col>
    </main>
  );
};

