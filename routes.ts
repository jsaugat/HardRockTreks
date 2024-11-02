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
  { href: "/about", label: "About" },
  { href: "/profile", label: "Profile" },
  { href: "/general-info", label: "Info" },
  {
    href: "",
    label: "Destinations",
    menu: [
      {
        label: "Nepal",
        submenu: [
          {
            label: "Trekking",
            href: "#",
            subsubmenu: [
              { label: "Everest Base Camp", href: "#" },
              { label: "Annapurna", href: "#" },
            ],
          },
          { label: "Rafting", href: "#" },
        ],
      },
      {
        label: "India",
        submenu: [{ label: "India tours", href: "#" }],
      },
      {
        label: "Tibet",
        submenu: [
          { label: "Tibet Tours", href: "#" },
          { label: "Kailash Tour and Treks", href: "#" },
        ],
      },
      {
        label: "Bhutan",
        submenu: [{ label: "Bhutan Trekking Packages", href: "#" }],
      },
    ],
  },
  {
    href: "/reviews",
    label: "Reviews",
    menu: [
      { href: "/reviews/read", label: "Read Review" },
      { href: "/reviews/write", label: "Write a Review" },
    ],
  },
];
