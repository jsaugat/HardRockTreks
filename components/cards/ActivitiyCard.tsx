import { Activity } from '@prisma/client';
import React from 'react'
import { Card } from '@/components/ui/card';
import { CardContent } from '@mui/material';
import Link from 'next/link';
import LinkCard from './LinkCard';

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivitiyCard({ activity }: ActivityCardProps) {
  return (
    <LinkCard
      href='/explore'
      className='group'
    >
      <h1 className="absolute z-10 bottom-3 inset-x-0 mt-2 text-3xl text-center text-white group-hover:-translate-y-1 transition-transform ease-in-out duration-300">
        <span className="block">
          {activity?.name || "Name failed to load"}
        </span>
      </h1>
    </LinkCard >
  )
}
