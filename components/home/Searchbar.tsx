import React from "react";
import { Button } from "../ui/button";
import { LocateFixed } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Searchbar() {
  return (
    <main className="flex items-center justify-between space-x-2 border rounded-full bg-secondary w-[300px] lg:w-1/2 p-1.5 mx-auto">
      <div className="border p-2 rounded-full bg-gradient-to-br from-primary via-primary to-violet-400 flex items-center justify-center">
        <LocateFixed className="h-5 w-5 text-secondary" />
      </div>
      {/* <Input
        type="text"
        placeholder="Find a destination..."
        className="bg-neutral-200 text-muted-foreground rounded-full px-4 py-2 mx-auto"
      /> */}
      <p>Find a trip.</p>
      <Button
        variant="default"
        size="sm"
        className="bg-gradient-to-br to-violet-400 via-primary from-primary"
      >
        Search
      </Button>
    </main>
  );
}
