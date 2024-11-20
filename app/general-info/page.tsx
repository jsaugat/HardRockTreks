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

export default function NepalInfoPage() {
  const [selectedCategory, setSelectedCategory] = useState("overview");

  return (
    <div className="pt-navbarOffset pb-5 sm:pb-7 lg:pb-9 min-h-screen">
      <Card className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl">
        <CardHeader className="text-center">
          <CardTitle className="mx-auto text-3xl sm:text-4xl font-semibold font-familjenGrotesk bg-gradient-to-br from-primary to-purple-500 w-fit bg-clip-text text-transparent">
            Nepal: A Land of Diversity
          </CardTitle>
          <CardDescription className="text-sm sm:text-lg text-gray-600 mt-2">
            Discover the rich biodiversity, culture, and geography of Nepal
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <Select onValueChange={setSelectedCategory} defaultValue="overview">
            <SelectTrigger className="w-full mb-6 ring-1 ring-primary text-primary font-semibold">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="overview">Overview</SelectItem>
              <SelectItem value="biodiversity">Biodiversity</SelectItem>
              <SelectItem value="geography">Geography</SelectItem>
              <SelectItem value="culture">Culture & History</SelectItem>
            </SelectContent>
          </Select>
          <div className="mt-6">
            {selectedCategory === "overview" && (
              <div className="rounded-md border p-4">
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
                  <InfoItem
                    title="Currency"
                    content="Nepali Rupee (approx. US$ 1 = Rs. 71.24)"
                  />
                  <InfoItem
                    title="Political System"
                    content="Multi-party democracy with constitutional monarchy"
                  />
                  <InfoItem
                    title="Religion"
                    content="Hindu Kingdom with harmonious blending of Hinduism and Buddhism"
                  />
                </div>
                <Separator className="my-6" />
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Climate
                </h3>
                <p className="text-gray-700 mb-2">
                  Nepal has four major seasons:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Winter: December-February</li>
                  <li>Spring: March-May</li>
                  <li>Summer: June-August</li>
                  <li>Autumn: September-November</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Nepal can be visited year-round.
                </p>
                <Separator className="my-6" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  What to Wear
                </h3>
                <p className="text-gray-700">
                  Lightweight clothing is recommended for May through October.
                  Warm garments are required from October through March. An
                  umbrella or raincoat is a must for the rainy season.
                </p>
              </div>
            )}
            {selectedCategory === "biodiversity" && (
              <div className="rounded-md border p-4">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Biodiversity Highlights
                </h3>
                <p className="text-gray-700 mb-4">
                  Nepal's unique geographical position and latitudinal variation
                  contribute to its rich biodiversity:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>2% of all the flowering plants in the world</li>
                  <li>
                    8% of the World's Population of Birds (More than 848
                    species)
                  </li>
                  <li>4% of mammals on earth</li>
                  <li>
                    11 of the world's 15 families of butterflies (More than 500
                    species)
                  </li>
                  <li>600 indigenous plant families</li>
                  <li>319 species of exotic orchids</li>
                </ul>
                <Separator className="my-6" />
                <p className="text-gray-700">
                  The country's elevation ranges from 70m above sea level to the
                  highest point on earth, Mt. Everest at 8,848m, all within a
                  distance of 150 km. This variation fosters an incredible
                  variety of ecosystems, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                  <li>The greatest mountain range on earth</li>
                  <li>Thick tropical jungles teeming with wildlife</li>
                  <li>Thundering rivers</li>
                  <li>Forested hills</li>
                  <li>Frozen valleys</li>
                </ul>
              </div>
            )}
            {selectedCategory === "geography" && (
              <div className="rounded-md border p-4">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Geographical Regions
                </h3>
                <p className="text-gray-700 mb-4">
                  Nepal can be divided into three main geographical regions:
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      1. Himalayan Region
                    </h4>
                    <p className="text-gray-600">
                      Accounts for about 15% of the total land area. Altitude
                      ranges between 4,877m - 8,848m. Includes eight of the 14
                      highest summits in the world exceeding 8,000m, including
                      Everest, Annapurna, and Dhaulagiri.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      2. Mountain Region
                    </h4>
                    <p className="text-gray-600">
                      Accounts for about 68% of the total land area. Formed by
                      the Mahabharat range (up to 4,877m) and the lower Churia
                      range.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      3. Terai Region
                    </h4>
                    <p className="text-gray-600">
                      The lowland Terai occupies about 17% of the total land
                      area of the country.
                    </p>
                  </div>
                </div>
                <Separator className="my-6" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Location
                </h3>
                <p className="text-gray-700">
                  Nepal is situated between China in the north and India in the
                  south. The kingdom extends 880 km east to west and its breadth
                  varies from 145-241 km north to south.
                </p>
              </div>
            )}
            {selectedCategory === "culture" && (
              <div className="rounded-md border p-4">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Cultural Diversity
                </h3>
                <p className="text-gray-700 mb-4">
                  Nepal offers one of the richest cultural landscapes anywhere:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>More than 61 ethnic groups</li>
                  <li>Over 70 spoken languages and dialects</li>
                  <li>
                    Numerous annual festivals celebrated in traditional style
                  </li>
                </ul>
                <Separator className="my-6" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Major Ethnic Groups
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Gurung and Magars: Mainly in the west</li>
                  <li>
                    Rais, Limbus, and Sunwars: Eastern mid-hills and valleys
                  </li>
                  <li>Sherpas: Himalayan region</li>
                  <li>Newars: Kathmandu Valley</li>
                  <li>
                    Tharus, Yadavas, Satars, Rajvanshis, and Dhimals: Terai
                    Region
                  </li>
                  <li>
                    Brahmins, Chhetris, and Thakuris: Spread across the kingdom
                  </li>
                </ul>
                <Separator className="my-6" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Brief History
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Nepal has always been an independent and sovereign country
                  </li>
                  <li>
                    1768 AD: Shah dynasty ascended the throne of the unified
                    Kingdom
                  </li>
                  <li>
                    November 9, 1990: New Democratic Constitution promulgated
                  </li>
                  <li>
                    Nepal is a founder member of the South Asian Association for
                    Regional Cooperation (SAARC)
                  </li>
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoItem({ title, content }: { title: string; content: string }) {
  return (
    <div className="mb-2">
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
