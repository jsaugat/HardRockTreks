"use client";

import React, { useMemo } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { IconBrandTripadvisor } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";
import Link from "next/link";
import { Headphones, PhoneCall, Send } from "lucide-react";

// Declare the menuLinks array outside the component
const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destination" },
  { href: "/best-sellers", label: "Best Sellers" },
  { href: "/hot-deals", label: "Hot Deals" },
  { href: "/about-us", label: "About Us" },
  { href: "/company-profile", label: "Company Profile" },
  { href: "/contact", label: "Contact" },
];
const communityLinks = [
  { href: "/videos", label: "Videos" },
  { href: "/photo-gallery", label: "Photo Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
];

export default function Footer() {
  return (
    <footer className="pt-16 lg:pt-10 px-4 sm:px-6 md:px-default pb-3 bg-foreground text-primary-foreground flex flex-col gap-44 w-full">
      {/* FOOTER TOP */}
      <main className="flex flex-col gap-20 lg:gap-10 md:flex-row justify-between">
        {/*TITLE AND SOCIAL SECTION */}
        <section className="flex flex-col gap-8">
          <Title />
          <section className="flex md:block items-start justify-between md:space-y-8">
            <ContactInfo />
            <SocialIcons />
          </section>
        </section>
        {/* MENU AND LINKS SECTION */}
        <section className="flex flex-col lg:flex-row gap-4 lg:gap-32">
          {/* Contacts */}
          {/* <div className="text-blue-300 lg:flex lg:flex-col lg:items-start gap-5 lg:gap-4">
            <div>
              <h2 className="text-sm text-muted-foreground uppercase flex gap-2 lg:gap-1 items-center">
                <Send className="h-4 w-4" />
                Email
              </h2>
              <p>hardrockom@gmail.com</p>
            </div>
            <div>
              <h2 className="text-sm text-muted-foreground uppercase flex gap-2 lg:gap-1 items-center">
                <PhoneCall className="h-4 w-4" />
                Phone
              </h2>
              <p>+977 9841117524 </p>
            </div>
            <div>
              <h2 className="text-sm text-muted-foreground uppercase flex gap-2 lg:gap-1 items-center">
                <Headphones className="h-4 w-4" />
                Holland Support
              </h2>
              <p>+31-614196086</p>
            </div>
          </div> */}
          <MenuLinks />
        </section>
      </main>
      <FooterBottom />
    </footer>
  );
}

// Title: Contact Us To Get Started
const Title = () => {
  return (
    <h1 className="text-4xl md:text-6xl font-medium tracking-tight font-familjenGrotesk">
      Contact us now
      <br /> to get started.
    </h1>
  );
};
// Social Icons
const SocialIcons = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-2 md:self-auto">
      <SocialButton icon={FacebookRoundedIcon} />
      <SocialButton icon={IconBrandX} />
      <SocialButton icon={IconBrandTripadvisor} ariaHidden={true} size="icon" />
    </div>
  );
};
const SocialButton: React.FC<{
  icon: React.ElementType;
  ariaHidden?: boolean;
  size?: string;
}> = ({ icon: IconComponent, ariaHidden = false, size }) => {
  return (
    <Link
      href={"/"}
      className="rounded-full aspect-square w-10 h-10 border border-border/40 flex items-center justify-center"
    >
      <IconComponent aria-hidden={ariaHidden} className="h-5 w-5" />
    </Link>
  );
};

// Contact Info
const ContactInfo = () => {
  const contactDetails = useMemo(
    () => [
      {
        icon: Send,
        label: "Email",
        info: "hardrockom@gmail.com",
      },
      {
        icon: PhoneCall,
        label: "Phone",
        info: "+977 9841117524",
      },
      {
        icon: Headphones,
        label: "Holland Support",
        info: "+31-614196086",
      },
    ],
    []
  );

  return (
    <section className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
      {contactDetails.map(({ icon: Icon, label, info }) => (
        <div key={label} className="space-y-1 md:space-y-0">
          {/* Label */}
          <h2 className="text-sm text-muted-foreground uppercase flex gap-2 lg:gap-2 items-center">
            <Icon className="h-4 w-4" />
            {label}
          </h2>
          {/* Detail */}
          <p>{info}</p>
        </div>
      ))}
    </section>
  );
};
// Menu Links
const MenuLinks = () => {
  return (
    <menu className="flex lg:justify-start gap-20 lg:gap-16">
      {/* Menu */}
      <div>
        <h2 className="text-sm text-muted-foreground uppercase">Menu</h2>
        <ul className="mt-3 md:mt-0 space-y-3 md:space-y-0">
          {menuLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Community */}
      <div>
        <h2 className="text-sm text-muted-foreground uppercase">Community</h2>
        <ul className="mt-3 md:mt-0 space-y-3 md:space-y-0">
          {communityLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </menu>
  );
};
// Footer Bottom
const FooterBottom = () => {
  return (
    <section className="text-sm md:text-base text-muted-foreground flex flex-col md:flex-row justify-between">
      <p className="text-center">
        © 1993 - 2024 Hard Rock Treks & Expedition Pvt. Ltd. All Rights
        Reserved.
      </p>
      <p className="text-center text-muted-foreground">
        Designed and developed by{" "}
        <Link
          href={"https://www.saugatjoshi.com.np"}
          target="blank"
          className="text-secondary hover:underline"
        >
          Saugat Joshi
        </Link>
      </p>
    </section>
  );
};
