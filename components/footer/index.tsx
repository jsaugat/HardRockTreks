"use client"

import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { IconBrandTripadvisor } from '@tabler/icons-react';
import { IconBrandX } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

// Declare the menuLinks array outside the component
const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/destination", label: "Destination" },
  { href: "/best-sellers", label: "Best Sellers" },
  { href: "/hot-deals", label: "Hot Deals" },
  { href: "/about-us", label: "About Us" },
  { href: "/company-profile", label: "Company Profile" },
  { href: "/contact", label: "Contact" },
]

const communityLinks = [
  { href: "/videos", label: "Videos" },
  { href: "/photo-gallery", label: "Photo Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" }
]

export default function Footer() {
  return (
    <footer className='pt-8 container pb-3 bg-foreground text-primary-foreground flex flex-col gap-40'>
      <div className="flex justify-between">
        <section className="flex flex-col gap-6">
          <Title />
          <SocialIcons />
        </section>
        <section className="grid grid-cols-3 gap-8">
          <div>
            <h2 className='text-sm text-muted-foreground uppercase'>Email</h2>
            <p>hardrockom@gmail.com</p>
          </div>
          <div>
            <h2 className='text-sm text-muted-foreground uppercase'>Phone</h2>
            <p>+977 9841117524  </p>
          </div>
          <div>
            <h2 className='text-sm text-muted-foreground uppercase'>Holland Support</h2>
            <p>+31-614196086</p>
          </div>
          <div>
            <h2 className='text-sm text-muted-foreground uppercase'>Menu</h2>
            <ul>
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-sm text-muted-foreground uppercase'>Community</h2>
            <ul>
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <FooterBottom />
    </footer>
  )
}

// Title: Contact Us To Get Started
const Title = () => {
  return (
    <h1 className='text-6xl font-medium tracking-tight font-neueRegrade'>Contact us now<br /> to get started</h1>
  )
}

// Social Icons
const SocialIcons = () => {
  return (
    <div className='flex items-center gap-2'>
      <SocialButton icon={FacebookRoundedIcon} />
      <SocialButton icon={IconBrandX} />
      <SocialButton icon={IconBrandTripadvisor} ariaHidden={true} size="icon" />
    </div>
  )
}
const SocialButton: React.FC<{ icon: React.ElementType; ariaHidden?: boolean; size?: string }> = ({ icon: IconComponent, ariaHidden = false, size }) => {
  return (
    <Link href={"/"} className="rounded-full aspect-square w-10 h-10 border border-border/40 flex items-center justify-center">
      <IconComponent aria-hidden={ariaHidden} className="h-5 w-5" />
    </Link>
  );
}

// Footer Bottom
const FooterBottom = () => {
  return (
    <section className="flex justify-between">
      <p>© 1993 - 2024 Hard Rock Treks & Expedition Pvt. Ltd. All Rights Reserved.</p>
      <p>Designed and developed by <Link href={"https://www.saugatjoshi.com.np"} target='blank' className='text-primary'>Saugat Joshi</Link></p>
    </section>
  )
}