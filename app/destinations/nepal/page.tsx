import React from "react";
import { Card } from "@/components/ui/card";
import activitiesData from "@/data/nepalActivities.json";
import { ActivitiesGrid } from "../_components/ActivitiesGrid";

export default function Page() {
  const nepalActivities =
    activitiesData.activities?.filter((activity) => activity.image) ?? [];
    
  console.log({ nepalActivities });

  return (
    <div className="w-full">
      <DescriptionCard />
      <ActivitiesGrid activities={nepalActivities} />
    </div>
  );
}
export const DescriptionCard = () => (
  <Card className="p-default space-y-4 text-justify">
    <p>
      Nepal is one of the richest countries in the world in terms of
      bio-diversity due to its unique geographical position and latitudinal
      variation. The elevation of the country ranges form 70m above sea level to
      the highest point on earth, Mt. Everest at 8,848 m. all within a distance
      of 150 km with climatic condition ranging form subtropical to arctic. This
      wild variation fosters an incredible variety of ecosystems, the greatest
      mountain range on earth, thick tropical jungles teeming with a wealth of
      wildlife, thundering rivers, forested hills frozen valleys.
    </p>
    <p>
      Within this spectacular geography is also one of the richest cultural
      landscapes anywhere. The country is a potpourri of ethic groups and
      sub-groups who speak over 70 languages and dialects. Nepal offers an
      astonishing diversity of sightseeing attractions and adventure
      opportunities fond nowhere else on earth. And you can join in the numerous
      annual festivals that are celebrated throughout the year in traditional
      style highlighting enduring customs and beliefs.
    </p>
  </Card>
);
