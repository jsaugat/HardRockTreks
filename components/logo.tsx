import { useNav } from "@/contexts/Nav";
import useWindowDimensions from "@/hooks/useWindowDimension";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function Logo({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true); // Logo is visible by default
  const [lastScrollTop, setLastScrollTop] = useState(0); // Initial scroll position
  const { width } = useWindowDimensions();
  const { isNavOpen } = useNav();

  /**
   *? Logic to Hide/Show logo text on scroll down/up :-
   * Scroll down = Hide logo text
   * Scroll up = Show logo text
   */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = document.documentElement.scrollTop;
      setIsVisible(currentScrollTop <= lastScrollTop);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <Link href="/" className="">
      <main className="flex items-center gap-3 relative">
        {/* LOGO ICON */}
        <Image
          src="/logo.png"
          alt="Hard Rock Treks & Expeditions"
          width={width && width < 768 ? 50 : 60}
          height={width && width < 768 ? 50 : 60}
        />
        {/* LOGO TEXT */}
        <div
          className={cn(
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
            "relative flex flex-col items-start justify-start gap-0 p-0 font-semibold text-secondary uppercase text-lg lg:text-2xl leading-none drop-shadow-[0_1px_20px_rgba(59,130,246,1)]",
            className
          )}
        >
          <span
            className={cn(
              "text-primary-foreground tracking-tight",
              isNavOpen && "text-foreground"
            )}
          >
            Hard Rock Treks &<br className="md:hidden"/> Expeditions
          </span>
          <span className="hidden lg:block font-normal text-base">
            Since 1993
          </span>
        </div>
      </main>
    </Link>
  );
}
