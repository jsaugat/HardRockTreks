"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Route = {
  href: string;
  label: string;
  menu?: {
    label: string;
    href?: string;
    submenu?: { label: string; href: string }[];
  }[];
};

const routes: Route[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/profile', label: 'Profile' },
  { href: '/general-info', label: 'Info' },
  {
    href: "/destination",
    label: "destination",
    menu: [
      {
        label: "nepal",
        submenu: [
          { label: "Trekking", href: "#" },
          { label: "Rafting", href: "#" },
        ]
      },
      {
        label: "india",
        submenu: [
          { label: "India tours", href: "#" },
        ]
      },
      {
        label: "tibet",
        submenu: [
          { label: "Tibet Tours", href: "#" },
          { label: "Kailash Tour and Treks", href: "#" },
        ]
      },
      {
        label: "bhutan",
        submenu: [
          { label: "Bhutan Trekking Packages", href: "#" },
        ]
      },
    ]
  },
  {
    href: '/reviews',
    label: 'Reviews',
    menu: [
      { href: '/reviews/read', label: 'Read Review' },
      { href: '/reviews/write', label: 'Write a Review' },
    ],
  },
];

export const NavMenu = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const handleMenuEnter = (label: string) => setOpenMenu(label);
  const handleMenuLeave = () => setOpenMenu(null);
  const handleSubMenuEnter = (label: string) => setOpenSubMenu(label);
  const handleSubMenuLeave = () => setOpenSubMenu(null);

  return (
    <nav className="p-1 mx-auto w-fit bg-background rounded-full border flex items-center shadow-md">
      {routes.map(({ href, label, menu }, idx) => {
        const isActive = pathname === href;
        return (
          //? NAVIGATION ITEM Button
          <Button
            variant={"ghost"}
            size={"sm"}
            key={idx}
            className={cn(
              "relative hover:bg-primary/10 hover:text-primary text-secondary-foreground font-semibold",
              isActive ? "text-primary" : ""
            )}
            onMouseEnter={() => handleMenuEnter(label)}
            onMouseLeave={handleMenuLeave}
          >
            <Link href={href} className="group rounded capitalize flex items-center justify-between gap-1">
              {label}
              {menu && <ChevronDown className='h-4 w-4 group-hover:rotate-180' />}
            </Link>

            {menu && openMenu === label && (
              <Card className="absolute top-[85%] mt-1 flex flex-col border p-2">
                {menu.map(({ label: menuLabel, submenu }, idx) => (
                  //? MENU ITEM Button
                  <div
                    key={idx}
                    className="relative rounded cursor-pointer hover:bg-primary/10 hover:text-primary p-1.5 px-3"
                    onMouseEnter={() => handleSubMenuEnter(menuLabel)}
                    onMouseLeave={handleSubMenuLeave}
                  >
                    <Link href="#" className="group capitalize text-left flex items-center justify-between gap-4">
                      {menuLabel}
                      {submenu && <ChevronDown className='group-hover:-rotate-180 h-4 w-4' />}
                    </Link>

                    {openSubMenu === menuLabel && submenu && (
                      <Card className="absolute top-0 left-[100%] flex flex-col p-2">
                        {submenu.map(({ label: subMenuLabel, href }, idx) => (
                          //? SUBMENU ITEM Button
                          <Link href={href} key={idx} className="block p-1.5 px-3 rounded hover:bg-primary/10 hover:text-primary text-left">
                            {subMenuLabel}
                          </Link>
                        ))}
                      </Card>
                    )}
                  </div>
                ))}
              </Card>
            )}
          </Button>
        )
      })}
    </nav>
  );
};
