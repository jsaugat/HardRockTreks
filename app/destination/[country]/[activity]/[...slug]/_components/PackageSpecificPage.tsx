import React from 'react';
import { CountryTitle } from '@/components/destinations/CountryTitle';
import { DescriptionCard } from '@/components/destinations/DescriptionCard';
import { Col } from '@/components/flex-layouts';

interface PackageSpecificPageProps {
  currentPackageData: {
    name: string;
    description?: string;
    duration?: number;
    startingPrice?: number;
  };
}

export const PackageSpecificPage: React.FC<PackageSpecificPageProps> = ({ currentPackageData }) => {
  return (
    <main className="mx-auto p-0">
      <Col
        justify="between"
        align="start"
        className="mt-2 mx-auto lg:w-[90%] min-h-screen gap-8 lg:flex-row border"
      >
        <div className="w-full">
          {/* Package title */}
          <CountryTitle className='mt-0' text={currentPackageData.name} />
          <DescriptionCard>
            {currentPackageData.description || (
              <p className="text-muted-foreground">
                No description available for this package.
              </p>
            )}
          </DescriptionCard>
          <p className="mt-6 text-muted-foreground">
            <strong>Duration:</strong> {currentPackageData.duration || 'N/A'} days
          </p>
          <p className="text-muted-foreground">
            <strong>Price:</strong> ${currentPackageData.startingPrice || 'N/A'}
          </p>
        </div>
      </Col>
    </main>
  );
};
