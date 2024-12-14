"use client";

import { Menu, PhoneCall, X } from "lucide-react";
import { NavMenu } from "@/components/navbar/NavMenu";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { Logo } from "@/components/Logo";
import { Button } from "../ui/button";
import { useNav } from "@/contexts/Nav";
import { useEffect } from "react";
import { OverlayNavMenu } from "./OverlayNavMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainNavMenu } from "./MainNavMenu";

export default function Navbar() {
  const pathname = usePathname();
  const { isNavOpen, toggleNav, closeNav } = useNav();

  useEffect(() => {
    //! Disable scrolling when nav is open
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Reset to default
    }

    // Cleanup when component unmounts or isNavOpen changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  useEffect(() => {
    closeNav(); // Explicitly close nav when pathname changes
  }, [pathname]);

  return (
    <>
      <header className="navbar fixed top-0 lg:py-1 z-20 w-full bg-background/90 xl:bg-transparent backdrop-blur-lg md:backdrop-blur-lg mg:bg-transparent">
        <div className="container pt-1 h-16 flex items-center w-full mx-auto">
          {/* Justify Between */}
          <div className="flex justify-between w-full">
            <Logo />
            <section className="flex items-center gap-2">
              <MainNavMenu />
              <Link href="/contact">
                <ButtonWithIcon
                  icon={<PhoneCall className="w-4 h-4 text-background" />}
                  label="Contact us"
                  className="hidden xl:flex"
                />
              </Link>
            </section>
            {/* HAMBURGER (MOBILE) */}
            <Button
              size="icon"
              variant="ghost"
              className="xl:hidden rounded-md  w-12"
              onClick={toggleNav}
            >
              <Menu className="text-foreground w-7 h-7" />
            </Button>
          </div>
        </div>
      </header>

      {/* Render OverlayMenu Component */}
      <OverlayNavMenu isNavOpen={isNavOpen} onClose={toggleNav} />
    </>
  );
}
