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
    <div className="space-y-6">
      {/* Header Section */}
      <section className="flex items-end justify-between w-full">
        <header>
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold uppercase font-neueRegrade tracking-tight bg-gradient-to-br from-primary via-primary to-purple-400 bg-clip-text text-transparent">
            {title}
          </h1>
          {/* Subtitle */}
          {subtitle && <p className="text-lg">{subtitle}</p>}
        </header>
        {/* 'View all' button */}
        {hasButton && (
          <Button variant={"outline"} className="shadow-md" asChild>
            <Link href={`/${buttonHref}`}>{buttonLabel}</Link>
          </Button>
        )}
      </section>
      {/* Content */}
      <section>{children}</section>
    </div>
  );
}
