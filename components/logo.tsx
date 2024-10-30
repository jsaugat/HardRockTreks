import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export function Logo({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true); // Logo is visible by default
  const [lastScrollTop, setLastScrollTop] = useState(0); // Initial scroll position

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
    <Link href="/" className=''>
      <main className='flex items-center gap-3 relative'>
        {/* LOGO ICON */}
        <Image
          src='/logo.png'
          alt='Hard Rock Treks & Expeditions'
          width={60}
          height={60}
        />
        {/* LOGO TEXT */}
        <div className={cn("relative flex flex-col items-start justify-start gap-0 p-0 font-semibold text-secondary uppercase text-2xl leading-none", className, isVisible ? "opacity-100" : "opacity-0 pointer-events-none")}>
          <span className=''>
            Hard Rock Treks & Expeditions
          </span>
          <span className='font-normal text-base'>
            Since 1993
          </span>
        </div>
      </main>
    </Link>
  )
}

