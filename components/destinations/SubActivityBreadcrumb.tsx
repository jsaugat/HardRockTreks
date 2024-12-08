import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { beautifySlug } from '@/lib/utils';
import React from 'react'

interface BreadCrumbProps {
  country: string;
  activity: string;
  subactivity: string;
}

export const SubActivityBreadcrumb = ({ country, activity, subactivity }: BreadCrumbProps) => {
  return (
    <Breadcrumb className="">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/destinations">Destinations</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/destinations/${country}/`}>
            {country.charAt(0).toUpperCase() + country.slice(1)}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbLink href={`/destinations/${country}/${activity}/`}>
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
