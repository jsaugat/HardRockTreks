import React, { useState } from "react";
import { LocateFixed, Search, X, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SearchbarDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Popular Destinations",
    "Beach Getaways",
    "Mountain Retreats",
    "City Breaks",
    "Cultural Tours",
    "Adventure Travel",
  ];

  const recentSearches = [
    "Paris, France",
    "Bali, Indonesia",
    "New York City, USA",
    "Tokyo, Japan",
  ];

  return (
    <>
      {/* Trigger Button (Searchbar) */}
      <div
        onClick={() => setIsOpen(true)}
        className="lg:w-1/2 p-1 mx-auto flex items-center justify-between space-x-2 border rounded-full bg-secondary w-[300px] cursor-pointer"
      >
        <div className="flex items-center gap-3">
          {/* ICON */}
          <div className="border p-2 rounded-full bg-gradient-to-br from-primary via-primary to-violet-400 flex items-center justify-center">
            <LocateFixed className="h-5 w-5 text-secondary" />
          </div>
          {/* TEXT */}
          <p className="h-full rounded-full text-muted-foreground flex-1 text-center">
            <span className="inline-block lg:hidden">Search Trips</span>
            <span className="hidden lg:inline-block">Find Your Adventure.</span>
          </p>
        </div>
        {/* BUTTON */}
        <button className="px-4 py-2 rounded-full text-white bg-gradient-to-br to-violet-400 via-primary from-primary">
          Get Started
        </button>
        {/* <button className="px-4 py-2 lg:hidden rounded-full text-white bg-gradient-to-br to-violet-400 via-primary from-primary">
          Get Started
        </button> */}
      </div>

      {/* Dialog (Modal) */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] top-0 lg:top-24 translate-y-0 rounded-t-none sm:rounded-t-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Search Trips
            </DialogTitle>
          </DialogHeader>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Where would you like to go?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6"
            />
          </div>

          {/* Recent Searches */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Recent Searches</h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="rounded-full"
                  onClick={() => setSearchQuery(search)}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  {search}
                </Button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Browse Categories</h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-12"
                  onClick={() => setSearchQuery(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Close Button */}
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
