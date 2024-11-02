import { ContentTemplate } from "@/components/home/ContentTemplate";
import React, { useRef } from "react";
import { DestinationsSlider } from "./DestinationsSlider";

export function PopularDestinations() {
  return (
    <div id="top-destinations" className="py-20">
      <ContentTemplate
        title="Top Destinations"
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
