'use client'

import React, { useState, useEffect, startTransition, useTransition } from "react";
import { useRouter } from 'next/navigation';
import { LocateFixed, Search, X, Clock, MapPin, Compass, Mountain, Package } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchItemsDebounced, SearchResult } from "@/actions/search";
import { LoadingIndicator } from "../LoadingIndicator";
import { NotFoundIndicator } from "../NotFoundIndicator";

// Component to render the search bar dialog
export const SearchbarDialog = () => {
  // State management for the dialog, search query, results, and recent searches
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<{
    destinations: SearchResult[];
    activities: SearchResult[];
    subactivities: SearchResult[];
    packages: SearchResult[];
  }>({
    destinations: [],
    activities: [],
    subactivities: [],
    packages: [],
  });
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // Categories for search
  const trendingPlaces = [
    "Everest Base Camp Trek",
    "Kathmandu Valley Tour",
    "Kathmandu Cultural Immersion"
  ];

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  // Handle search query change and fetch results
  // Handle search query change and fetch results
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      startTransition(() => {
        const fetchSearchResults = async () => {
          // Ensure results are not undefined by providing a default value
          const searchResults = await searchItemsDebounced(query);

          // If searchResults is undefined, use an empty structure
          setResults({
            destinations: searchResults?.destinations ?? [],
            activities: searchResults?.activities ?? [],
            subactivities: searchResults?.subactivities ?? [],
            packages: searchResults?.packages ?? [],
          });
        };
        fetchSearchResults();
      });
    } else {
      setResults({ destinations: [], activities: [], subactivities: [], packages: [] });
    }
  };

  // Handle selection of a search result
  const handleSelect = (item: SearchResult) => {
    setIsOpen(false);
    addToRecentSearches(item.name);
    console.log({ item });
    let path: string[] = [];
    if (item.destination) path.push(item.destination.slug);
    if (item.activity) path.push(item.activity.slug);
    if (item.subactivity) path.push(item.subactivity.slug);
    if (item.slug) path.push(item.slug);
    const fullPath = path.filter(Boolean).join('/');
    router.push(`/destinations/${fullPath}`);
  };

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  // Add a search to the recent searches list
  const addToRecentSearches = (search: string) => {
    // Use functional state update to ensure correct state update
    setRecentSearches(prevSearches => {
      const updatedSearches = [search, ...prevSearches.filter(s => s !== search)].slice(0, 5);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));  // Save to localStorage
      return updatedSearches;
    });
  };

  // Handle search when recent search is clicked
  const handleRecentSearch = (search: string) => {
    setSearchQuery(search);  // Update the search query with the recent search
    handleSearch(search);    // Trigger the search logic
  };


  // Render the search bar dialog
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="lg:w-1/2 p-1 mx-auto flex items-center justify-between space-x-2 border rounded-full bg-secondary w-[300px] cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="border p-2 rounded-full bg-gradient-to-br from-primary via-primary to-violet-400 flex items-center justify-center">
            <LocateFixed className="h-5 w-5 text-secondary" />
          </div>
          <p className="h-full rounded-full text-muted-foreground flex-1 text-center">
            <span className="inline-block lg:hidden">Search Trips</span>
            <span className="hidden lg:inline-block">Find Your Adventure.</span>
          </p>
        </div>
        <button className="px-4 py-2 rounded-full text-white bg-gradient-to-br to-violet-400 via-primary from-primary">
          Search
        </button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] top-0 lg:top-24 translate-y-0 rounded-t-none sm:rounded-t-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Search Trips
            </DialogTitle>
          </DialogHeader>

          {/* Search Box */}
          <div className="relative flex items-center">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Where would you like to go?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6"
            />
            <Button
              variant="outline"
              className="ml-2"
              onClick={() => handleSearch(searchQuery)}  // Manually trigger the search
            >
              Search
            </Button>
          </div>

          {isPending && <LoadingIndicator className="">Searching...</LoadingIndicator>}

          {/* Search Results */}
          {searchQuery.length > 2 && !isPending && (
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {/* Destinations Result */}
              {results.destinations.length > 0 && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Destinations</h3>
                  {results.destinations.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => handleSelect(item)}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  ))}
                </div>
              )}

              {/* Activities Result */}
              {results.activities.length > 0 && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Activities</h3>
                  {results.activities.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => handleSelect(item)}
                    >
                      <Compass className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  ))}
                </div>
              )}

              {/* Subactivities Results */}
              {results.subactivities.length > 0 && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Subactivities</h3>
                  {results.subactivities.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => handleSelect(item)}
                    >
                      <Mountain className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  ))}
                </div>
              )}

              {/* Packages Results */}
              {results.packages.length > 0 && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Packages</h3>
                  {results.packages.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => handleSelect(item)}
                    >
                      <Package className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  ))}
                </div>
              )}

              {/* Single Not Found Indicator */}
              {results.destinations.length === 0 &&
                results.activities.length === 0 &&
                results.subactivities.length === 0 &&
                results.packages.length === 0 ? (
                <NotFoundIndicator message="Sorry, no matches found" />
              ) : null}
            </div>
          )}

          {/* Recent Searches */}
          {searchQuery.length <= 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Recent Searches</h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="rounded-full"
                    onClick={() => handleRecentSearch(search)} // Use the handleRecentSearch
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Trending Searches */}
          {searchQuery.length <= 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Trending Adventures</h3>
              <div className="grid grid-cols-2 gap-3">
                {trendingPlaces.map((trendingItem, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start h-12"
                    onClick={() => handleSearch(trendingItem)}  // Use handleSearch for trending places
                  >
                    {trendingItem}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <Button
            className="absolute right-4 top-4"
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );

};

export default SearchbarDialog;