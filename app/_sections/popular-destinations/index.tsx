import { ContentTemplate } from "@/components/home/ContentTemplate";
import React from "react";
import { DestinationsSlider } from "./DestinationsSlider";

export function PopularDestinations() {
  return (
    <div className="py-20">
      <ContentTemplate
        title="Popular Destinations"
        subtitle="Explore the most popular destinations"
        hasButton
        buttonHref="/"
        buttonLabel="View all destinations"
      >
        <DestinationsSlider />
      </ContentTemplate>
    </div>
  );
}
