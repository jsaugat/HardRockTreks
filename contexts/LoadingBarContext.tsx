// LoadingBarContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import LoadingBar from 'react-top-loading-bar';

type LoadingBarContextType = {
  triggerLoading: () => void;
};

const LoadingBarContext = createContext<LoadingBarContextType | undefined>(undefined);

export const LoadingBarProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState(0);

  const triggerLoading = () => {
    setProgress(30);
    setTimeout(() => setProgress(100), 1000);
  };

  return (
    <LoadingBarContext.Provider value={{ triggerLoading }}>
      <LoadingBar color="#f97316" progress={progress} onLoaderFinished={() => setProgress(0)} />
      {children}
    </LoadingBarContext.Provider>
  );
};

// Custom hook to use the loading context
export const useLoadingBar = () => {
  const context = useContext(LoadingBarContext);
  if (!context) {
    throw new Error("useLoadingBar must be used within a LoadingBarProvider");
  }
  return context;
};
