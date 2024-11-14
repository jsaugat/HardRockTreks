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
    <nav className="min-w-[200px] rounded-xl">
      <ul>
        {/* Header */}
        <div className="font-semibold block">Related Destinations</div>
        {/* Countries Nav Items */}
        {list.map((country) => (
          <li
            key={country}
            className={`${
              country === segment
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
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
