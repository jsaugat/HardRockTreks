import React from "react";
import bhutanData from "@/data/bhutanActivities.json";
import { Col } from "@/components/flex-layouts";
import { ActivitiesGrid } from "../../../components/destinations/ActivitiesGrid";
import { CountrySideNav } from "@/components/destinations/CountrySideNav";
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

export default function Bhutan() {
  const bhutanActivities =
    bhutanData.activities?.filter((activity) => activity.image) ?? [];

  console.log({ bhutanActivities });

  return (
    <Col
      justify="between"
      align="start"
      className="mt-2 mx-auto md:w-[80%] min-h-screen gap-8 md:flex-row"
    >
      <div className="w-full">
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
              <BreadcrumbPage>Bhutan</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CountryTitle text="Bhutan" />
        <DescriptionCard>
          <p>
            Bhutan, best known to the world as the last Shangril-la has a rare
            combination of harmony and accord amidst a landscape of incredible
            beauty. Protected by mighty Himalayas from the rest of the world and
            enriched by the essence of Drukpa Kagyu School of Buddhism, Bhutan
            has managed to remain shrouded deeply in a jealously guarded
            isolation. A basic understanding of Bhutan’s Buddhism is essential
            to understanding the Bhutanese.
          </p>
          <p>
            Her rich Himalayan flora and fauna, dazzling white peaks and lush
            valleys provide Bhutan’s stunning beauty and aesthetic grandeur.
            Bhutan has gently opened its doors to the visitors who respect the
            delicate sensitivities of this pristine land and shares the sacred
            values of its people. Bhutanese architectures in Dzongs, buildings
            and houses are very strikingBhutan is not an ordinary place and has
            many surprises; a visit to the country is a splendid adventure.
          </p>
        </DescriptionCard>
        <ActivitiesGrid activities={bhutanActivities} />
      </div>
      <CountrySideNav />
    </Col>
  );
}
