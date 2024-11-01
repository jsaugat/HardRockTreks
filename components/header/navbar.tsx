"use client";

import { Menu, PhoneCall } from "lucide-react";
// import { NavMenu } from './nav-menu';
import { NavMenu } from "@/components/header/NavMenu";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { Logo } from "@/components/Logo";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="navbar fixed lg:top-2 z-50 w-full">
      <div className="container pt-1 h-16 flex items-center bg-secondary">
        {/* Justify Between */}
        <div className="mx-0 flex justify-between w-full">
          <Logo />
          <section className="flex items-center gap-2">
            <NavMenu />
            <ButtonWithIcon
              icon={<PhoneCall className="w-4 h-4 text-background" />}
              label="Contact us"
            />
          </section>
          {/* HAMBURGER (MOBILE) */}
          <Button size="icon" variant={"ghost"} className="lg:hidden h-12 w-16">
            <Menu className="text-foreground w-8 h-8" />
          </Button>
        </div>
      </div>
    </header>
  );
}
