type Route = {
  href: string;
  label: string;
  menu?: MenuItem[];
};

type MenuItem = {
  label: string;
  href?: string;
  submenu?: SubmenuItem[];
};

type SubmenuItem = {
  label: string;
  href: string;
  subsubmenu?: { label: string; href: string }[];
};

export const routes: Route[] = [
  { href: "/", label: "Home" },
  {
    href: "/destinations",
    label: "Destinations",
    menu: [
      {
        label: "Nepal",
        href: "/destinations/nepal",
        submenu: [
          { label: "Trekking in Nepal", href: "/destinations/nepal/trekking" },
          {
            label: "Rafting in Nepal",
            href: "/destinations/nepal/rafting",
            subsubmenu: [
              { label: "Kaligandaki River", href: "/destinations/nepal/rafting/kaligandaki-river" },
              { label: "Arun River", href: "/destinations/nepal/rafting/arun-river" },
              { label: "Sunkoshi River", href: "/destinations/nepal/rafting/sunkoshi-river" },
              { label: "Karnali River", href: "/destinations/nepal/rafting/karnali-river" },
              { label: "Seti River", href: "/destinations/nepal/rafting/seti-river" },
              { label: "Bhotekoshi River", href: "/destinations/nepal/rafting/bhotekoshi-river" },
              { label: "Trisuli River", href: "/destinations/nepal/rafting/trisuli-river" },
              { label: "Marshyandi River", href: "/destinations/nepal/rafting/marshyandi-river" },
            ],
          },
          { label: "Tour", href: "/destinations/nepal/tour" },
          { label: "Expeditions", href: "/destinations/nepal/expeditions" },
          { label: "Peak Climbing", href: "/destinations/nepal/peak-climbing" },
          { label: "Jungle Safari", href: "/destinations/nepal/jungle-safari" },
          { label: "Place to Visit", href: "/destinations/nepal/places-to-visit" },
          { label: "Adventure Activities", href: "/destinations/nepal/adventure-activities" },
          { label: "Cultural Tour", href: "/destinations/nepal/cultural-tour" },
          { label: "Bird Watching Tour", href: "/destinations/nepal/bird-watching-tour" },
          { label: "Mountain Flight", href: "/destinations/nepal/mountain-flight" },
          { label: "Paragliding", href: "/destinations/nepal/paragliding" },
          { label: "Rock Climbing", href: "/destinations/nepal/rock-climbing" },
          { label: "Bungy Jumping", href: "/destinations/nepal/bungy-jumping" },
          { label: "Ayurvedic Treatment", href: "/destinations/nepal/ayurvedic-treatment" },
          { label: "Domestic Flight", href: "/destinations/nepal/domestic-flights" },
        ],

      },
      {
        label: "Tibet",
        href: "/destinations/tibet",
        submenu: [
          { label: "Tibet Tours", href: "/destinations/tibet/tours" },
          { label: "Kailash Tour and Treks", href: "/destinations/tibet/kailash" },
        ],
      },
      {
        label: "Bhutan",
        href: "/destinations/bhutan",
        submenu: [{ label: "Bhutan Trekking Packages", href: "/destinations/bhutan/trekking" }],
      },
    ],
  },
  { href: "/about", label: "About" },
  // { href: "/profile", label: "Profile" },
  { href: "/general-info", label: "Info" },
  {
    href: "/reviews",
    label: "Reviews"
  },
];
