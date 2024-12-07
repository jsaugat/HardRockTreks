import { cn } from '@/lib/utils';
import { CircleX } from 'lucide-react';
import React from 'react'

interface LoadingIndicatorProps {
  icon?: React.ReactNode;
  message: React.ReactNode;
  className?: string;
}

export const NotFoundIndicator = ({ message, icon, className }: LoadingIndicatorProps) => {
  return (
    <div className={cn("p-3 rounded border text-muted-foreground bg-gray-200 w-full flex flex-col items-center justify-center gap-2", className)}>
      {icon ? icon : <CircleX className='w-8 h-8' />}
      {message}
    </div>
  )
}
