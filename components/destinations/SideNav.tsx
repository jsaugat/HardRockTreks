"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItem {
  label?: string;
  href?: string;
  name?: string;
  slug?: string;
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
  const currentSegment = pathname.split("/").filter(Boolean).pop();

  const getLabel = (item: NavItem) => item.label || item.name || "Unnamed";
  const getHref = (item: NavItem) => item.href || item.slug || "#";

  const defaultRenderItem = (item: NavItem, isActive: boolean) => (
    <Link className="block" href={`${baseUrl}/${getHref(item)}`}>
      <span
        className={`${isActive ? activeClassName : inactiveClassName} capitalize`}
      >
        {getLabel(item)}
      </span>
    </Link>
  );

  return (
    <nav className={className}>
      {title && <div className="font-semibold block">{title}</div>}
      <ul>
        {items.map((item) => {
          const href = getHref(item);
          const isActive = href === currentSegment;
          return (
            <li key={href}>
              {renderItem ? renderItem(item, isActive) : defaultRenderItem(item, isActive)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
