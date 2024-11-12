"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const list = ["nepal", "tibet", "bhutan"];

export function CountryNav() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const segment = pathSegments[pathSegments.length - 1];

  return (
    <nav className="w-fit p-6 bg-card rounded-xl">
      <ul>
        {/* Header */}
        <p className="font-bold">Related Destinations</p>
        {/* Countries Nav Items */}
        {list.map((country) => (
          <li
            key={country}
            className={`${
              country === segment
                ? "text-primary font-medium"
                : "text-muted-foreground"
            } capitalize`}
          >
            <Link className="block" href={`/destinations/${country}`}>
              {country}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
