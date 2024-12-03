import React from "react";
import { notFound } from 'next/navigation';
import { getDestinationBySlug } from '@/prisma/repositories/destinations';
import nepalActivitiesData from "@/data/nepalActivities.json";
import { ActivitiesGrid } from "../../../components/destinations/ActivitiesGrid";
import { CountrySideNav } from "@/components/destinations/CountrySideNav";
import { Col } from "@/components/flex-layouts";
import { DescriptionCard } from "@/components/destinations/DescriptionCard";
import { CountryTitle } from "@/components/destinations/CountryTitle";
import { DestinationBreadcrumb } from './_components/DestinationBreadcrumb';
// Import packages for fetching destination content from Markdown files
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx"

// Function to fetch destination content from Markdown files
function getDestinationContent(slug: string) {
  const folder = 'markdown-data/destinations/'
  const file = folder + `${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  console.log({ matterResult })
  return matterResult
}

// Main component for the destination page
export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug; // Extract slug from params
  const destination = await getDestinationBySlug(slug); // Fetch destination by slug

  // Filter Nepal activities with images
  const nepalActivities =
    nepalActivitiesData.allActivities?.filter((activity) => activity.image) ??
    [];

  // Handle 404 error if destination not found
  if (!destination) {
    notFound()
  }

  // Fetch destination content
  const currentDestinationContent = getDestinationContent(slug).content
  return (
    <main className="mx-auto p-0">
      <Col
        justify="between"
        align="start"
        className="mt-2 mx-auto lg:w-[80%] min-h-screen gap-8 lg:flex-row"
      >
        <div className="w-full">
          {/* Destination breadcrumb */}
          <DestinationBreadcrumb destination={slug} />
          {/* Country title */}
          <CountryTitle text={`${slug.charAt(0).toUpperCase() + slug.slice(1)}`} />
          <DescriptionCard>
            <Markdown
              options={{
                overrides: {
                  p: {
                    props: {
                      // Add spacing between paragraphs
                      style: { marginBottom: '1em' },
                    },
                  },
                },
              }}
            >
              {currentDestinationContent}
            </Markdown>
          </DescriptionCard>
          {/* Activities grid */}
          <ActivitiesGrid activities={nepalActivities} />
        </div>
        {/* Country side navigation */}
        <CountrySideNav />
      </Col>
    </main>
  )
}

