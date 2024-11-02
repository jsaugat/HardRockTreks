import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface ContentTemplateProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  hasButton: boolean;
  buttonLabel?: string;
  buttonHref?: string;
}

export function ContentTemplate({
  children,
  title,
  subtitle,
  hasButton,
  buttonLabel,
  buttonHref,
}: ContentTemplateProps) {
  return (
    <div>
      {/* Header Section */}
      <section className="flex items-end justify-between w-full">
        <header>
          {/* Title */}
          <h1 className="text-[2.8rem] sm:text-4xl lg:text-6xl font-semibold font-neueRegrade  bg-gradient-to-r from-[#0030bd] via-purple-400 to-primary bg-clip-text text-transparent">
            {title}
          </h1>
          {/* Subtitle */}
          {subtitle && <p className="text-lg leading-tight">{subtitle}</p>}
        </header>
        {/* 'View all' button */}
        {hasButton && (
          <Button
            variant={"outline"}
            className="hidden lg:block border-muted-foreground/50"
            asChild
          >
            <Link href={`/${buttonHref}`}>{buttonLabel}</Link>
          </Button>
        )}
      </section>
      {/* Content */}
      <section className="mt-5">{children}</section>
      {/* "View all packages" button for small screen */}
      {hasButton && (
        <Button
          variant={"outline"}
          className="lg:hidden border-muted-foreground/50 w-full"
          asChild
        >
          <Link href={`/${buttonHref}`}>{buttonLabel}</Link>
        </Button>
      )}
    </div>
  );
}
