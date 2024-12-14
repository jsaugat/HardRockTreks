import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LinkCardProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function LinkCard({ href, className, children }: LinkCardProps) {
  return (
    <Link href={href} className='group'>
      <Card className={cn('relative aspect-video overflow-hidden rounded-2xl', className)} >
        {/* Packages count */}
        <div className="absolute top-2 left-2 w-fit mx-auto border border-border/50 text-white bg-foreground/30 rounded-full p-2 py-0.5 text-sm flex items-center gap-1">
          XX Packages
        </div>
        {/* Arrow Hover */}
        <div className="absolute top-2 right-2 p-1 backdrop-blur-sm flex items-center justify-center">
          <ArrowRight className="h-8 w-8 text-white group-hover:-rotate-45 transition-transform ease-in-out" />
        </div>
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        {/* Image */}
        <Image
          src={false || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
          alt={""}
          className="w-full h-full object-cover"
          height={300} // Remove fixed height if you want it to take the entire height of the container
          width={300} // Remove fixed width if you want it to take the entire width of the container
        />
        {children}
      </Card>
    </Link>
  )
}
