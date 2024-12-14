"use client";

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SearchBar } from './SearchBar';
import { PageTitle } from '@/components/PageTitle';
import ActivitiyCard from '@/components/cards/ActivitiyCard';
import { SmallPackageCard } from '@/components/cards/SmallPackageCard';

// Define the interface for ExploreContentProps
interface ExploreContentProps {
  destinations: { count: number; data: any[] };
  activities: { count: number; data: any[] };
  subactivities: { count: number; data: any[] };
  packages: { count: number; data: any[] };
}

// Configuration for tabs
const TAB_CONFIG = [
  { key: 'all', label: 'All', filterKey: null },
  { key: 'destinations', label: 'Destinations', filterKey: 'destinations' },
  { key: 'activities', label: 'Activities', filterKey: 'activities' },
  { key: 'subactivities', label: 'Subactivities', filterKey: 'subactivities' },
  { key: 'packages', label: 'Packages', filterKey: 'packages' },
];

// ExploreContent component
export function ExploreContent({ destinations, activities, subactivities, packages }: ExploreContentProps) {
  const [query, setQuery] = useState("");
  // Function to filter data based on query
  const filterData = (data: any[], query: string) =>
    data.filter((item) => item.name?.toLowerCase().includes(query.toLowerCase()));

  // Function to render tab content
  const renderTabContent = (key: string) => {
    // Content for 'all' tab
    if (key === 'all') {
      return (
        <div className="space-y-8">
          {[
            { key: 'destinations', data: destinations },
            { key: 'activities', data: activities },
            { key: 'subactivities', data: subactivities },
            { key: 'packages', data: packages }
          ]
            .map(({ key, data }) => (
              <div key={key}>
                {/* Count */}
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  {key.charAt(0).toUpperCase() + key.slice(1)} ({data.count})
                </h3>
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filterData(data.data, query).map((item, idx) => (
                    <div key={item.name || idx} className="bg-muted rounded-md p-2">
                      {key === 'activities' ? <ActivitiyCard activity={item} /> : item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      );
    }

    // Content for specific tabs
    let data = [];
    let count = 0;

    switch (key) {
      case 'destinations':
        data = destinations.data;
        count = destinations.count;
        break;
      case 'activities':
        data = activities.data;
        count = activities.count;
        break;
      case 'subactivities':
        data = subactivities.data;
        count = subactivities.count;
        break;
      case 'packages':
        data = packages.data;
        count = packages.count;
        break;
    }
    const filteredData = filterData(data, query);

    return (
      <div>
        <h3 className="text-lg font-semibold mt-2 md:mt-4 mb-2">
          {key.charAt(0).toUpperCase() + key.slice(1)} ({count})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredData.map((item, idx) => (
            <div key={item.name || idx} className="bg-muted rounded-md">
              {key === "packages" && <SmallPackageCard pkg={item} />}
              {key === 'activities' && <ActivitiyCard activity={item} />}
              {key !== 'packages' && item.name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Main component return
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <PageTitle
        title="Explore Page"
        description="Find the destinations, activities, subactivities, and packages available on the platform."
      />
      <SearchBar query={query} setQuery={setQuery} />
      <Tabs defaultValue="packages" className="w-full">
        <TabsList className="mx-auto w-full sm:rounded-full flex gap-2">
          {TAB_CONFIG.map(({ key, label }) => (
            <TabsTrigger key={key} className="rounded-full" value={key}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TAB_CONFIG.map(({ key }) => (
          <TabsContent key={key} value={key} className=''>
            {renderTabContent(key)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
