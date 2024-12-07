import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';
import React from 'react'

interface LoadingIndicatorProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const LoadingIndicator = ({ children, icon, className }: LoadingIndicatorProps) => {
  return (
    <div className={cn("p-1 border-2 rounded text-muted-foreground bg-gray-200 w-full flex items-center justify-center gap-2", className)}>
      {icon ? icon : (
        <Loader className='w-4 h-4 animate-spin' />
      )}
      {children}
    </div>
  )
}
