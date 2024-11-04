import { ContentTemplate } from "@/components/home/ContentTemplate";
import React from "react";
import { PackagesCarousel } from "./Carousel";

export function Packages() {
  return (
    <main className="py-10">
      <ContentTemplate
        title="Packages"
        subtitle="Choose our range of fixed departure packages for 2024."
        hasButton
        buttonHref="/"
        buttonLabel="View all packages"
      >
        <PackagesCarousel />
      </ContentTemplate>
    </main>
  );
}
