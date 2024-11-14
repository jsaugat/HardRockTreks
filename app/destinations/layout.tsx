import { Row } from "@/components/flex-layouts";
import React from "react";
import { CountryNav } from "@/app/destinations/_components/CountryNav";

export default function DestinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen mt-navbarOffset pt-10">
      <Title />
      <Row
        justify="between"
        align="start"
        className="mt-2 mx-auto w-[80%] min-h-screen gap-8"
      >
        {children}
        <CountryNav />
      </Row>
    </main>
  );
}

const Title = () => (
  <div className="text-[2.8rem] sm:text-4xl lg:text-6xl text-primary">
    <h1 className="w-[80%] mx-auto">Nepal</h1>
  </div>
);
