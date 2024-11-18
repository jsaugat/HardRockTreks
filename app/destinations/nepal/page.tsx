import React from "react";
import nepalActivitiesData from "@/data/nepalActivities.json";
import { ActivitiesGrid } from "../../../components/destinations/ActivitiesGrid";
import { CountrySideNav } from "@/components/destinations/CountrySideNav";
import { Col, Row } from "@/components/flex-layouts";
import { DescriptionCard } from "@/components/destinations/DescriptionCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CountryTitle } from "@/components/destinations/CountryTitle";

export default function Nepal() {
  const nepalActivities =
    nepalActivitiesData.allActivities?.filter((activity) => activity.image) ??
    [];

  console.log({ nepalActivities });

  return (
    <Col
      justify="between"
      align="start"
      className="mt-2 mx-auto md:w-[80%] min-h-screen gap-8 md:flex-row"
    >
      <div className="w-full">
        <Breadcrumb className="hidden md:block">
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
              <BreadcrumbPage>Nepal</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CountryTitle text="Nepal" />
        <DescriptionCard>
          <p>
            Nepal is one of the richest countries in the world in terms of
            bio-diversity due to its unique geographical position and
            latitudinal variation. The elevation of the country ranges from 70m
            above sea level to the highest point on earth, Mt. Everest at 8,848
            m, all within a distance of 150 km with climatic conditions ranging
            from subtropical to arctic. This wild variation fosters an
            incredible variety of ecosystems, the greatest mountain range on
            earth, thick tropical jungles teeming with a wealth of wildlife,
            thundering rivers, forested hills, and frozen valleys.
          </p>
          <p>
            Within this spectacular geography is also one of the richest
            cultural landscapes anywhere. The country is a potpourri of ethnic
            groups and sub-groups who speak over 70 languages and dialects.
            Nepal offers an astonishing diversity of sightseeing attractions and
            adventure opportunities found nowhere else on earth. And you can
            join in the numerous annual festivals that are celebrated throughout
            the year in traditional style highlighting enduring customs and
            beliefs.
          </p>
        </DescriptionCard>
        <ActivitiesGrid activities={nepalActivities} />
      </div>
      <CountrySideNav />
    </Col>
  );
}
