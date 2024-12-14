"use client";

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { useRef, useEffect } from 'react';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

export function SearchBar({ query, setQuery }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <div className="relative md:w-2/3 mx-auto rounded-full shadow-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        ref={inputRef}
        type="search"
        placeholder="Search destinations, activities, or packages."
        className="pl-10 rounded-full"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}