"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';

type TopLoadingBarContextType = {
  triggerLoading: () => void;
};

const TopLoadingBarContext = createContext<TopLoadingBarContextType | undefined>(undefined);

export const TopLoadingBarProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const randomProgress = Math.floor(Math.random() * 60); // Generate a random value below 60

  const triggerLoading = () => {
    setProgress(randomProgress);
    setTimeout(() => setProgress(100), 1000);
  };

  useEffect(() => {
    // Trigger loading bar on route change
    setProgress(randomProgress);
    const handleRouteChangeComplete = () => setProgress(100);

    handleRouteChangeComplete();
    return () => setProgress(0);
  }, [pathname]);

  return (
    <TopLoadingBarContext.Provider value={{ triggerLoading }}>
      <LoadingBar color="#f97316" progress={progress} onLoaderFinished={() => setProgress(0)} />
      {children}
    </TopLoadingBarContext.Provider>
  );
};

// Custom hook to use the loading bar context
export const useLoadingBar = () => {
  const context = useContext(TopLoadingBarContext);
  if (!context) {
    throw new Error("useLoadingBar must be used within a TopLoadingBarProvider");
  }
  return context;
};
