import { useNav } from "@/contexts/Nav";
import useWindowDimensions from "@/hooks/useWindowDimension";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export function Logo({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true); // Logo is visible by default
  const [lastScrollTop, setLastScrollTop] = useState(0); // Initial scroll position
  const { width } = useWindowDimensions();
  const { isNavOpen } = useNav();
  const pathname = usePathname();

  /**
   *? Logic to Hide/Show logo text on scroll down/up :-
   * Scroll down = Hide logo text
   * Scroll up = Show logo text
   */
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollTop = document.documentElement.scrollTop;
  //     setIsVisible(currentScrollTop <= lastScrollTop);
  //     setLastScrollTop(currentScrollTop);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollTop]);

  return (
    <Link href="/" className="">
      <main className={cn("flex items-center gap-3 relative", className)}>
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
            isVisible ? "opacity-100" : "md:opacity-0 pointer-events-none",
            "relative flex flex-col items-start justify-start gap-0 p-0 font-familjenGrotesk font-bold md:font-semibold text-secondary uppercase text-xl lg:text-2xl leading-none",
            // "md:drop-shadow-[0_1px_20px_rgba(59,130,246,1)] ",
            pathname !== "/" && "text-foreground drop-shadow-none",
            className
          )}
        >
          <p
            className={cn(
              // "bg-clip-text text-transparent bg-gradient-to-br from-[#2427ff] to-[#ff7300] md:text-primary-foreground tracking-tight",
              "text-foreground md:text-primary-foreground md:mix-blend-difference",
              pathname !== "/" && "md:text-foreground"
            )}
          >
            Hard Rock Treks &<br className="md:hidden" /> Expeditions
          </p>
          <span className="hidden xl:block font-normal text-base">
            Since 1993
          </span>
        </div>
      </main>
    </Link>
  );
}
