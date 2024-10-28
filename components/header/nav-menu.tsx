"use client"

import { useState } from "react";
import Link from "next/link"
import { cn } from "@/lib/utils"

const routes = [
  { href: '/', label: 'Home' },
  { href: '/destination', label: 'Destinations' },
  { href: '/about', label: 'About' },
  { href: '/profile', label: 'Profile' },
  { href: '/general-info', label: 'Info' },
  {
    href: '/reviews',
    label: 'Reviews',
    submenu: [
      { href: '/reviews/read', label: 'Read Review' },
      { href: '/reviews/write', label: 'Write a Review' },
    ],
  },
  { href: '/contact', label: 'Contact' },
];

export function NavMenu() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setOpenSubmenu(label);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setOpenSubmenu(null), 1000);
  };

  return (
    <nav className="p-2 px-3 h-10 flex items-center space-x-6 text-sm font-medium bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/90 rounded-full shadow-md">
      {routes.map((route) => (
        <div
          key={route.href}
          className="relative"
          onMouseEnter={() => route.submenu && handleMouseEnter(route.label)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={route.href} passHref>
            <span className={cn('transition-colors hover:text-foreground/80')}>
              {route.label}
            </span>
          </Link>
          {route.submenu && openSubmenu === route.label && (
            <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md">
              <ul className="p-2">
                {route.submenu.map((subRoute) => (
                  <li key={subRoute.href}>
                    <Link href={subRoute.href} passHref>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {subRoute.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}