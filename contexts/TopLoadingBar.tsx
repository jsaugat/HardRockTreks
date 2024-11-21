"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';

//? Define the type of the context
type TopLoadingBarContextType = {
  triggerLoading: () => void;
};

//? Create the context
const TopLoadingBarContext = createContext<TopLoadingBarContextType | undefined>(undefined);

//? Provider component for the context
export const TopLoadingBarProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const randomProgress = Math.floor(Math.random() * 60); // Generate a random value below 60

  // Function to trigger the loading bar
  const triggerLoading = () => {
    setProgress(randomProgress);
    setTimeout(() => setProgress(100), 1000);
  };

  // Effect to trigger the loading bar on route change
  useEffect(() => {
    setProgress(randomProgress);
    const handleRouteChangeComplete = () => setProgress(100);

    handleRouteChangeComplete();
    return () => setProgress(0);
  }, [pathname]);

  // Render the loading bar and the children
  return (
    <TopLoadingBarContext.Provider value={{ triggerLoading }}>
      <LoadingBar color="#3B82F6" progress={progress} onLoaderFinished={() => setProgress(0)} />
      {children}
    </TopLoadingBarContext.Provider>
  );
};

//? Custom hook to use the loading bar context
export const useLoadingBar = () => {
  const context = useContext(TopLoadingBarContext);
  if (!context) {
    throw new Error("useLoadingBar must be used within a TopLoadingBarProvider");
  }
  return context;
};
