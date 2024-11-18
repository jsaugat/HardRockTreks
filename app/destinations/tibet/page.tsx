import { CountrySideNav } from "@/components/destinations/CountrySideNav";
import { DescriptionCard } from "@/components/destinations/DescriptionCard";
import { Col, Row } from "@/components/flex-layouts";
import React from "react";
import tibetData from "@/data/tibetActivities.json";
import { ActivitiesGrid } from "@/components/destinations/ActivitiesGrid";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CountryTitle } from "@/components/destinations/CountryTitle";

export default function Tibet() {
  return (
    <Col
      justify="between"
      align="start"
      className="mt-2 mx-auto md:w-[80%] h-fit gap-8 md:flex-row"
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
              <BreadcrumbPage>Tibet</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CountryTitle text="Tibet" />
        <DescriptionCard>
          <p className="font-semibold">
            " To bring the ember to roaring life is what I seek - shoot for the
            stars and be graced with a full moon on a plain under the clear
            Tibetan sky, I got that and more..."
          </p>
          <p>
            Tibet: For thousands of years, Tibet lay under the ancient Sea of
            Tethys. Eighty million years ago, India crashed into Asia, pushing
            up the Himalayas, lifting the ocean bottom above water, and creating
            this magical land. Mystical land, Shangrila, Forbidden Country:
            Tibet has many names and inspires an air of mystical dreams.
            However, Tibet is real and a beautiful place to travel. It possesses
            a unique culture, firmly rooted in Tibetan religion, but with strong
            influence from the geography of the Himalayas, and the neighbouring
            civilisations of India and China.
          </p>
          <p>
            Geographically, Tibet can be divided into three major parts - north,
            south and east. The eastern part is forest region, occupying
            approximately one-fourth of the land. Virgin forests run the entire
            breadth and length of this part of Tibet. The northern part is open
            grassland, where nomads and yak and sheep dwell here. This part
            occupies approximately half of Tibet. The southern and central part
            is agricultural region, occupying about one-fourth of Tibet’s land
            area. All major Tibetan cities and towns such as Lhasa, Shigatse,
            Gyantse and Tsetang are located in this area and is considered the
            cultural center of Tibet.
          </p>
        </DescriptionCard>
        <ActivitiesGrid activities={tibetData.activities} />
      </div>
      <CountrySideNav />
    </Col>
  );
}
