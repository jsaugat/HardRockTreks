import { ContentTemplate } from "@/components/home/ContentTemplate";
import React from "react";
import { ActivitiesCarousel } from "./Carousel";

export function Activites() {
  return (
    <div className="py-20">
      <ContentTemplate
        title="Travel Activities"
        subtitle="A unique blend of adventure, culture, and natural wonders."
        buttonHref="/activities"
        buttonLabel="View all activities"
        hasButton
      >
        <ActivitiesCarousel />
      </ContentTemplate>
    </div>
  );
}
