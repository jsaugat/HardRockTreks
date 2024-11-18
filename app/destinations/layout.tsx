import React from "react";

export default function DestinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen md:mt-navbarOffset py-10">{children}</main>
  );
}
