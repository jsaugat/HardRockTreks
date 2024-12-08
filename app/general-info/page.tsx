"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Balancer from "react-wrap-balancer";

// Main component for Nepal Info Page
export default function NepalInfoPage() {
  const [selectedCategory, setSelectedCategory] = useState("overview");

  return (
    <div className="pt-navbarOffset pb-5 sm:pb-7 lg:pb-9 min-h-screen">
      <section className="max-w-7xl mx-auto border-none shadow-none">
        {/* Header Section */}
        <HeaderSection />
        <CardContent className="px-0 sm:px-2 md:px-6">
          {/* Category Selector */}
          <CategorySelector
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          {/* Dynamic Content Section */}
          <ContentSection selectedCategory={selectedCategory} />
        </CardContent>
      </section>
    </div>
  );
}

// Header Section Component
function HeaderSection() {
  return (
    <CardHeader className="text-center p-0">
      <CardTitle className="mx-auto text-3xl sm:text-4xl font-semibold font-familjenGrotesk bg-gradient-to-br from-primary to-purple-500 w-fit bg-clip-text text-transparent">
        Nepal: A Land of Diversity
      </CardTitle>
      <CardDescription className="text-sm sm:text-lg text-gray-600 mt-2">
        <Balancer>
          Discover the rich biodiversity, culture, and geography of Nepal
        </Balancer>
      </CardDescription>
    </CardHeader>
  );
}

// Category Selector Component
function CategorySelector({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}) {
  return (
    <Select onValueChange={setSelectedCategory} defaultValue={selectedCategory}>
      <SelectTrigger className="w-full mb-6 ring-1 ring-primary text-primary font-semibold">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="overview">Overview</SelectItem>
        <SelectItem value="biodiversity">Biodiversity</SelectItem>
        <SelectItem value="geography">Geography</SelectItem>
        <SelectItem value="culture">Culture & History</SelectItem>
      </SelectContent>
    </Select>
  );
}

// Content Section Component
function ContentSection({ selectedCategory }: { selectedCategory: string }) {
  switch (selectedCategory) {
    case "overview":
      return <OverviewContent />;
    case "biodiversity":
      return <BiodiversityContent />;
    case "geography":
      return <GeographyContent />;
    case "culture":
      return <CultureContent />;
    default:
      return null;
  }
}

// Overview Content Component
function OverviewContent() {
  return (
    <div className="p-4 sm:p-4 md:p-6 rounded-2xl border shadow-md bg-background">
      <h3 className="text-2xl font-semibold text-blue-700 mb-4">
        Nepal at a Glance
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoItem title="Area" content="147,181 sq. kilometers" />
        <InfoItem title="Capital" content="Kathmandu" />
        <InfoItem title="Population" content="22 million" />
        <InfoItem
          title="Language"
          content="Nepali (national), English widely spoken in travel industry"
        />
        <InfoItem title="Currency" content="Nepali Rupee (approx. US$ 1 = Rs. 135)" />
        <InfoItem title="Political System" content="Multi-party democracy with constitutional monarchy" />
        <InfoItem title="Religion" content="Hindu Kingdom with harmonious blending of Hinduism and Buddhism" />
      </div>
      <Separator className="my-6" />
      <ClimateSection />
      <Separator className="my-6" />
      <WhatToWearSection />
    </div>
  );
}
// Biodiversity Content Component
function BiodiversityContent() {
  return (
    <div className="p-4 rounded-2xl border shadow-md bg-background">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Biodiversity Highlights
      </h3>
      <p className="text-gray-700 mb-4">
        Nepal's unique geographical position and latitudinal variation contribute to its rich biodiversity:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>2% of all the flowering plants in the world</li>
        <li>8% of the World's Population of Birds (More than 848 species)</li>
        <li>4% of mammals on earth</li>
        <li>11 of the world's 15 families of butterflies (More than 500 species)</li>
        <li>600 indigenous plant families</li>
        <li>319 species of exotic orchids</li>
      </ul>
    </div>
  );
}
// Geography Content Component
function GeographyContent() {
  return (
    <div className="p-4 rounded-2xl border shadow-md bg-background">
      <h3 className="text-2xl font-semibold text-primary mb-4">Geographical Regions</h3>
      <p className="text-gray-700 mb-4">Nepal can be divided into three main geographical regions:</p>
      <GeographicalRegions />
    </div>
  );
}
// Culture Content Component
function CultureContent() {
  return (
    <div className="p-4 rounded-2xl border shadow-md bg-background">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Cultural Diversity
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>More than 61 ethnic groups</li>
        <li>Over 70 spoken languages and dialects</li>
      </ul>
    </div>
  );
}

// Helper Components for Sections
function InfoItem({ title, content }: { title: string; content: string }) {
  return (
    <div className="mb-2">
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
function ClimateSection() {
  return (
    <>
      <h3 className="text-2xl font-semibold text-blue-700 mb-4">Climate</h3>
      <p className="text-gray-700 mb-2">Nepal has four major seasons:</p>
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        <li>Winter: December-February</li>
        <li>Spring: March-May</li>
        <li>Summer: June-August</li>
        <li>Autumn: September-November</li>
      </ul>
      <p className="text-gray-700 mt-2">Nepal can be visited year-round.</p>
    </>
  );
}
function WhatToWearSection() {
  return (
    <>
      <h3 className="text-2xl font-semibold text-primary mb-4">What to Wear</h3>
      <p className="text-gray-700">
        Lightweight clothing is recommended for May through October. Warm garments are required from October through March. An umbrella or raincoat is a must for the rainy season.
      </p>
    </>
  );
}
function GeographicalRegions() {
  return (
    <div className="space-y-6">
      <RegionItem
        title="1. Himalayan Region"
        description="Accounts for about 15% of the total land area. Includes eight of the 14 highest summits in the world exceeding 8,000m."
      />
      <RegionItem
        title="2. Mountain Region"
        description="Accounts for about 68% of the total land area. Formed by the Mahabharat range and the lower Churia range."
      />
    </div>
  );
}
function RegionItem({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
