"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingBar from 'react-top-loading-bar';

const LoadingBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30); // Start loading when the route changes
    const handleRouteChangeComplete = () => setProgress(100);

    // Progress completes when the route is done loading
    handleRouteChangeComplete();

    return () => {
      setProgress(0); // Reset progress on unmount
    };
  }, [pathname]);

  return (
    <>
      <LoadingBar color="#f97316" progress={progress} onLoaderFinished={() => setProgress(0)} />
      {children}
    </>
  );
};

export default LoadingBarProvider;
