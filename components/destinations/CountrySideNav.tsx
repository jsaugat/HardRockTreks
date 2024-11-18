import React from "react";
import { SideNav } from "./SideNav";

export const CountrySideNav = () => {
  const countryItems = [
    { label: "Nepal", href: "nepal" },
    { label: "Tibet", href: "tibet" },
    { label: "Bhutan", href: "bhutan" },
  ];
  return (
    <SideNav
      title="Related Destinations"
      items={countryItems}
      baseUrl="/destinations"
    />
  );
};
