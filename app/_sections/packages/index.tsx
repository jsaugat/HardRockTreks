import { ContentTemplate } from "@/components/home/ContentTemplate";
import React from "react";
import { PackagesSlider } from "./PackagesSlider";

export function Packages() {
  return (
    <main className="min-h-screen py-10">
      <ContentTemplate
        title="Packages"
        subtitle="Choose our range of fixed departure packages for 2024."
        hasButton
        buttonHref="/"
        buttonLabel="View all packages"
      >
        <PackagesSlider />
      </ContentTemplate>
    </main>
  );
}
