import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { cache } from "react"; // Import React's cache utility
import { getActivitiesByDestination as fetchActivitiesByDestination, getDestinationBySlug as fetchDestinationBySlug } from "@/prisma/repositories/destinations";
import { ActivitiesGrid } from "../../../components/destinations/ActivitiesGrid";
import { CountrySideNav } from "@/components/destinations/CountrySideNav";
import { Col } from "@/components/flex-layouts";
import { DescriptionCard } from "@/components/destinations/DescriptionCard";
import { CountryTitle } from "@/components/destinations/CountryTitle";
import { DestinationBreadcrumb } from "../../../components/destinations/DestinationBreadcrumb";
// Import packages for fetching destination content from Markdown files
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { GridSkeleton } from "@/components/destinations/GridSkeleton";

// Caching destination data
const getDestinationBySlug = cache(async (slug: string) => {
  return await fetchDestinationBySlug(slug);
});

// Caching activities data
const getActivitiesByDestination = cache(async (destinationId: string) => {
  return await fetchActivitiesByDestination(destinationId);
});

// Function to fetch destination content from Markdown files
function getDestinationContent(slug: string) {
  const folder = "markdown-data/destinations/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  // console.log({ matterResult });
  return matterResult;
}

//? Main component for the destination page
export default async function DestinationPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const country = (await params).country; // Extract slug from params
  const currentDestination = await getDestinationBySlug(country); // Fetch destination by slug with caching
  const currentDestinationId = currentDestination?.id; // Extract destination ID
  let activities;
  if (currentDestinationId) {
    // Fetch activities by destination ID with caching
    activities = await getActivitiesByDestination(currentDestinationId);
    console.log({ activities });
  }
  const transformedActivities = activities?.map((activity) => ({
    id: activity.id,
    name: activity.name,
    slug: activity.slug,
    image: activity.image,
  }));
  console.log({ transformedActivities });

  //! Handle 404 error if destination not found
  if (!currentDestination) {
    notFound();
  }

  // Fetch destination content
  const currentDestinationContent = getDestinationContent(country).content;
  return (
    <main className="mx-auto p-0">
      <Col
        justify="between"
        align="start"
        className="mt-2 mx-auto lg:w-[80%] min-h-screen gap-8 lg:flex-row"
      >
        <div className="w-full">
          {/* Destination breadcrumb */}
          <DestinationBreadcrumb destination={country} />
          {/* Country title */}
          <CountryTitle
            text={`${country.charAt(0).toUpperCase() + country.slice(1)}`}
          />
          <DescriptionCard>
            <Markdown
              options={{
                overrides: {
                  p: {
                    props: {
                      // Add spacing between paragraphs
                      style: { marginBottom: "1em" },
                    },
                  },
                },
              }}
            >
              {currentDestinationContent}
            </Markdown>
          </DescriptionCard>
          {/* Activities grid */}
          <Suspense fallback={<GridSkeleton />}>
            {transformedActivities ? (
              <ActivitiesGrid
                destination={country}
                activities={transformedActivities}
              />
            ) : (
              <p>No activities found for this destination.</p>
            )}
          </Suspense>
        </div>
        {/* Country side navigation */}
        <CountrySideNav />
      </Col>
    </main>
  );
}
