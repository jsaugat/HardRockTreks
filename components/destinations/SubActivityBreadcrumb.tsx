import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import React from 'react'

interface BreadCrumbProps {
  country: string;
  activity: string;
  subactivity: string;
}

export const SubActivityBreadcrumb = ({ country, activity, subactivity }: BreadCrumbProps) => {
  // Function to turn 'everest-base-camp' into 'Everest Base Camp'
  function beautifySlug(slug: string) {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <Breadcrumb className="">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/destination">Destinations</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/destination/${country}/`}>
            {country.charAt(0).toUpperCase() + country.slice(1)}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbLink href={`/destination/${country}/${activity}/`}>
          {activity.charAt(0).toUpperCase() + activity.slice(1)}
        </BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{beautifySlug(subactivity)}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
