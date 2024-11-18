"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItem {
  label: string;
  href: string;
}

interface SideNavProps {
  title?: string;
  items: NavItem[];
  baseUrl?: string;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  renderItem?: (item: NavItem, isActive: boolean) => React.ReactNode;
}

export function SideNav({
  title = "Related Items",
  items,
  baseUrl = "/destinations",
  className = "min-w-[200px] rounded-xl",
  activeClassName = "text-primary font-medium",
  inactiveClassName = "text-muted-foreground hover:text-foreground",
  renderItem,
}: SideNavProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentSegment = pathSegments[pathSegments.length - 1];

  const defaultRenderItem = (item: NavItem, isActive: boolean) => (
    <Link className="block" href={`${baseUrl}/${item.href}`}>
      <span
        className={`${
          isActive ? activeClassName : inactiveClassName
        } capitalize`}
      >
        {item.label}
      </span>
    </Link>
  );

  return (
    <nav className={className}>
      <ul>
        {title && <div className="font-semibold block">{title}</div>}
        {items.map((item) => (
          <li key={item.href}>
            {renderItem
              ? renderItem(item, item.href === currentSegment)
              : defaultRenderItem(item, item.href === currentSegment)}
          </li>
        ))}
      </ul>
    </nav>
  );
}
