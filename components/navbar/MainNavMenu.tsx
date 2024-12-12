"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MapPin, Compass, ArrowDownRight } from 'lucide-react'

const routes = [
  { href: "/", label: "Home" },
  {
    href: "/destinations",
    label: "Destinations",
    children: [
      {
        href: "/destinations/nepal",
        label: "Nepal",
        activities: [
          { href: "/destinations/nepal/trekking", label: "Trekking in Nepal" },
          { href: "/destinations/nepal/rafting", label: "Rafting in Nepal" },
          { href: "/destinations/nepal/tour", label: "Tour" },
          { href: "/destinations/nepal/expeditions", label: "Expeditions" },
          { href: "/destinations/nepal/peak-climbing", label: "Peak Climbing" },
          { href: "/destinations/nepal/jungle-safari", label: "Jungle Safari" },
          { href: "/destinations/nepal/places-to-visit", label: "Place to Visit" },
          { href: "/destinations/nepal/adventure-activities", label: "Adventure Activities" },
          { href: "/destinations/nepal/cultural-tour", label: "Cultural Tour" },
          { href: "/destinations/nepal/bird-watching-tour", label: "Bird Watching Tour" },
          { href: "/destinations/nepal/mountain-flight", label: "Mountain Flight" },
          { href: "/destinations/nepal/paragliding", label: "Paragliding" },
          { href: "/destinations/nepal/rock-climbing", label: "Rock Climbing" },
          { href: "/destinations/nepal/bungy-jumping", label: "Bungy Jumping" },
          { href: "/destinations/nepal/ayurvedic-treatment", label: "Ayurvedic Treatment" },
          { href: "/destinations/nepal/domestic-flights", label: "Domestic Flight" },
        ],
      },
      {
        href: "/destinations/tibet",
        label: "Tibet",
        activities: [
          { href: "/destinations/tibet/tours", label: "Tibet Tours" },
          { href: "/destinations/tibet/kailash", label: "Kailash Tour and Treks" },
        ],
      },
      {
        href: "/destinations/bhutan",
        label: "Bhutan",
        activities: [
          { href: "/destinations/bhutan/trekking", label: "Bhutan Trekking Packages" },
        ],
      },
    ],
  },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" },
  { href: "/general-info", label: "Info" },
  { href: "/reviews", label: "Reviews" },
]
export function MainNavMenu() {
  return (
    <div className="p-1 w-fit rounded-full bg-background hidden lg:flex items-center border shadow-md justify-end">
      <NavigationMenu className="max-w-full w-full justify-start">
        <NavigationMenuList className="flex-wrap">
          {routes.map((route) => (
            <NavigationMenuItem className="rounded-full" key={route.href}>
              {route.children ? (
                <NavigationMenuTrigger className="rounded-full hover:text-primary">{route.label}</NavigationMenuTrigger>
              ) : (
                <Link href={route.href} legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "rounded-full hover:text-primary")}>
                    {route.label}
                  </NavigationMenuLink>
                </Link>
              )}
              {route.children && (
                // Content box
                <NavigationMenuContent className="">
                  <ul className="flex w-auto gap-4 p-4">
                    {/* Nepal */}
                    {route.children.slice(0, 1).map((destination) => (
                      <ListItem
                        key={destination.href}
                        title={destination.label}
                        href={destination.href}
                        // icon={<MapPin className="h-4 w-4" />}
                        className="min-w-[250px] "
                      >
                        {destination.activities && (
                          <ul className="mt-2 space-y-1">
                            {destination.activities.map((activity) => (
                              <li key={activity.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={activity.href}
                                    className="text-sm text-muted-foreground hover:text-primary flex items-center"
                                  >
                                    <ArrowDownRight className="h-4 w-4 mr-1" />
                                    <span>{activity.label}</span>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </ListItem>
                    ))}
                    {/* Bhutan and Tibet */}
                    <div className="flex flex-col gap-4">
                      {route.children.slice(1).map((destination) => (
                        <ListItem
                          key={destination.href}
                          title={destination.label}
                          href={destination.href}
                          // icon={<MapPin className="h-4 w-4" />}
                          className="min-w-[250px] "
                        >
                          {destination.activities && (
                            <ul className="mt-2 space-y-1">
                              {destination.activities.map((activity) => (
                                <li key={activity.href}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={activity.href}
                                      className="text-sm text-muted-foreground hover:text-primary flex items-center"
                                    >
                                      <ArrowDownRight className="h-4 w-4 mr-1" />
                                      <span>{activity.label}</span>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </ListItem>
                      ))}
                    </div>
                    {/* Highlighted Explore Destinations */}
                    {/* <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full min-w-[200px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/destinations"
                        >
                          <Compass className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Explore Destinations
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Discover amazing places across Nepal, Tibet, and Bhutan.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li> */}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href ?? ""}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground bg-gradient-to-b from-muted/50 to-muted",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
          </div>
          {children}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

