import { ContentTemplate } from "@/components/home/ContentTemplate";
import React, { useRef } from "react";
import { DestinationsCarousel } from "./Carousel";

export function PopularDestinations() {
  return (
    <div id="top-destinations" className="py-20">
      <ContentTemplate
        title="Top Destinations"
        subtitle="Explore the most popular destinations"
        hasButton
        buttonHref="destinations"
        buttonLabel="View all destinations"
      >
        <DestinationsCarousel />
      </ContentTemplate>
    </div>
  );
}
