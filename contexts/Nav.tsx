// NavContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define context type
interface NavContextType {
  isNavOpen: boolean;
  toggleNav: () => void;
  closeNav: () => void;
}

// Create context with an undefined initial state
const NavContext = createContext<NavContextType | undefined>(undefined);

// Define provider props
interface NavProviderProps {
  children: ReactNode;
}

// Create a provider component
export const NavProvider = ({ children }: NavProviderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Allow toggleNav to explicitly set the value
  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  return (
    <NavContext.Provider value={{ isNavOpen, toggleNav, closeNav }}>
      {children}
    </NavContext.Provider>
  );
};

// Custom hook for consuming the context with error handling
export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
